import {
	AfterViewChecked,
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	HostListener,
	OnInit,
	Renderer2,
	ViewChild,
} from '@angular/core';
import {SourcingRequestService} from '../../../client-sourcing-request/sourcing-request.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject, combineLatest, Observable, of, tap} from 'rxjs';
import {getName} from 'country-list';
import {PublicCompanyInfoModel} from '../../../../../core/models/public-company-info.model';
import {B2bNgxButtonThemeEnum} from '@b2b/ngx-button';
import {UserService} from '../../../client-profile/services/user/user.service';
import {User} from '../../../../../core/models/user/user.model';
import {io} from 'socket.io-client';
import {environment} from '../../../../../../environments/environment';
import {
	ClientMarketCompanyPagePhoneDialogComponent
} from './components/client-market-company-page-phone-dialog/client-market-company-page-phone-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {websiteProtocolRegex} from '../../../../../core/helpers/validator/site-link';
import {AuthService} from '../../../../../auth/services/auth/auth.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {NgxSkeletonLoaderConfig} from 'ngx-skeleton-loader/lib/ngx-skeleton-loader-config.types';
import {SeoService} from '../../../../../core/services/seo/seo.service';
import {PlatformService} from '../../../../services/platform/platform.service';
import {B2bNgxLinkThemeEnum} from '@b2b/ngx-link';
import {Clipboard} from "@angular/cdk/clipboard";
import {HotToastService} from "@ngneat/hot-toast";
import {ClientMarketplaceService} from "../../client-marketplace.service";
import {first, map} from "rxjs/operators";
import {
	ClientTradeShowsComponent
} from "../../../client-profile/pages/client-profile-settings-new/tabs/client-trade-shows/client-trade-shows.component";
import {TradeShowService} from "../../../../services/trade-show/trade-show.service";
import {TradeShow} from "../../../../../core/models/trade-show.interface";
import {Folder} from "../../../../../core/models/folder.model";
import {FolderService} from "../../../../services/folder/folder.service";

@UntilDestroy()
@Component({
	selector: 'b2b-client-market-company-page',
	templateUrl: './client-market-company-page.component.html',
	styleUrls: ['./client-market-company-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientMarketCompanyPageComponent
	implements OnInit, AfterViewInit, AfterViewChecked {
	public companyInfo$: BehaviorSubject<PublicCompanyInfoModel> = new BehaviorSubject<PublicCompanyInfoModel>(null);
	public companyTradeShows$: BehaviorSubject<TradeShow[]> = new BehaviorSubject([]);
	public folders$: BehaviorSubject<Folder[]> = new BehaviorSubject<Folder[]>([]);
	public companyInfo: PublicCompanyInfoModel;
	public user: User;
	public userIsAuth: boolean = false;
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum =
		B2bNgxButtonThemeEnum;

	private socket: any;
	private token: string;

	private isPhoneNumberVisible = false;
	private businessTypeSource: BehaviorSubject<string> =
		new BehaviorSubject<string>('');
	public businessType$: Observable<string> =
		this.businessTypeSource.asObservable();
	companyDescriptionIsLong: boolean;
	@ViewChild('description', {static: false})
	companyDescriptionElement: ElementRef;
	public showDescriptionViewButton$: Observable<'more' | 'less'>;
	public navigationOptions: Array<any> = this.getNavigationOptions();

	public activeNavigationIndex: number = null;

	public sections: any[] = [];
	public supplierProductsAmount$: Observable<number>;
	private showDescriptionViewButtonSource: BehaviorSubject<'more' | 'less'> =
		new BehaviorSubject<'more' | 'less'>(null);

	constructor(
		public readonly platformService: PlatformService,
		private readonly sourcingRequestService: SourcingRequestService,
		private readonly userService: UserService,
		private readonly route: ActivatedRoute,
		private readonly dialog: MatDialog,
		private readonly router: Router,
		private readonly authService: AuthService,
		private readonly seoService: SeoService,
		private readonly clipboard: Clipboard,
		private readonly hotToastService: HotToastService,
		private readonly clientMarketService: ClientMarketplaceService,
		private readonly tradeShowsService: TradeShowService,
		private readonly folderService: FolderService
	) {
		this.showDescriptionViewButton$ =
			this.showDescriptionViewButtonSource.asObservable();
	}

	public ngOnInit() {
		this.initUserSubscription();
	}

	ngAfterViewInit() {
		this.initDefault();
	}

	ngAfterViewChecked() {
		setTimeout(() => {
			if (
				this.companyDescriptionElement &&
				!this.showDescriptionViewButtonSource.getValue()
			) {
				this.checkDescriptionHeight();
			}
		});
	}

	public copyLink(): void {
		const link = (environment.apiUrl.includes('dev') ? environment.devUrl : environment.prodUrl) + this.router.url
		this.clipboard.copy(link);
		this.hotToastService.show('Link copied to clipboard', {
			dismissible: true,
			style: {
				border: '1px solid #3D48E6',
			},
			autoClose: true,
		});
	}

	public getMediaSrc(url: string): string {
		return environment.apiUrl + url;
	}

	initDefault() {
		this.getUser();
		this.setSeo();
	}

	@HostListener('window:scroll', ['$event'])
	onScroll(event: Event) {
		const scrollPosition =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop ||
			0;

		for (let i = 0; i < this.sections.length; i++) {
			const section = this.sections[i];
			if (scrollPosition >= section.topOffset ) {
				this.activeNavigationIndex = i;
			}
		}
		if (window.innerWidth < 576 && this.activeNavigationIndex) {
			const container: HTMLElement = document.querySelector('.company__navigation');
			const navigationItems = document.querySelectorAll('.company__navigation-item')[this.activeNavigationIndex];
			container.scrollLeft = (navigationItems as HTMLElement).offsetLeft - (container.clientWidth / 2)
		}

	}

	calculateSectionOffsets() {
		this.sections = this.navigationOptions
			.filter(item => item.existInCompanyInfo(this.companyInfo))
			.map((item) => {
				const element = document.getElementById(item.id);
				if (element) {
					return {
						id: item.id,
						topOffset: element.offsetTop,
					};
				}
				return null;
			})
			.filter((section) => section !== null);
	}

	scrollToSection(index: number) {
		const sectionId = this.navigationOptions[index].id;
		const element = document.getElementById(sectionId);
		if (element) {
			const offset = 0;
			const elementRect = element.getBoundingClientRect();
			const viewportHeight =
				window.innerHeight || document.documentElement.clientHeight;
			const scrollTop =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop ||
				0;

			const scrollPosition =
				elementRect.top +
				scrollTop -
				viewportHeight / 2 +
				elementRect.height / 2 -
				offset;

			window.scrollTo({top: scrollPosition, behavior: 'smooth'});
		}
	}

	changeShowDescriptionState(currentState: 'more' | 'less'): void {
		this.showDescriptionViewButtonSource.next(
			currentState === 'more' ? 'less' : 'more'
		);
	}

	checkDescriptionHeight(): void {
		if (
			this.companyDescriptionElement &&
			this.companyDescriptionElement.nativeElement.scrollHeight >
			6 * this.getLineHeight()
		) {
			this.companyDescriptionIsLong = true;
			this.showDescriptionViewButtonSource.next('more');
		} else {
			this.companyDescriptionIsLong = false;
		}
	}

	getLineHeight(): number {
		const lineHeight = window.getComputedStyle(
			this.companyDescriptionElement.nativeElement
		).lineHeight;
		return parseFloat(lineHeight);
	}

	private findSupplierProductsAmount(supplierId: string): void {
		this.supplierProductsAmount$ =
			this.clientMarketService.getSupplierProducts(supplierId, {limit: 10, offset: 0})
				.pipe(map(data => data.result.totalCount))
	}

	private getNavigationOptions(): Array<any> {
		return [
			{
				label: 'Company information',
				id: 'section1',
				existInCompanyInfo: (companyInfo: PublicCompanyInfoModel) => {
					return true;
				}
			},
			{
				label: 'Products',
				id: 'section2',
				existInCompanyInfo: (companyInfo: PublicCompanyInfoModel) => {
					return true;
				}
			},
			{
				label: 'Payment & Shipping',
				id: 'section3',
				existInCompanyInfo: (companyInfo: PublicCompanyInfoModel) => {
					if (!companyInfo.paymentAndShipping) return false;
					return Object.values(companyInfo.paymentAndShipping).some(item => item.length > 0);
				}
			},
			{
				label: 'Documents',
				id: 'section4',
				existInCompanyInfo: (companyInfo: PublicCompanyInfoModel) => {
					return companyInfo.documents.length > 0;
				}
			},
			// {
			// 	label: 'Certifications',
			// 	id: 'section5',
			// },
			{
				label: 'Our Advantages',
				id: 'section6',
				existInCompanyInfo: (companyInfo: PublicCompanyInfoModel) => {
					return companyInfo.advantages.length > 0;
				}
			},
			{
				label: 'Exhibitions',
				id: 'section7',
				existInCompanyInfo: (companyInfo: PublicCompanyInfoModel) => {
					// if (!this.companyTradeShows$.getValue().length) {
					// 	return  true;
					// }
					return this.companyTradeShows$.getValue().length > 0;
				}
			},
			{
				label: 'Videos',
				id: 'section9',
				existInCompanyInfo: (folders: Folder[]) => {
					return this.folders$.getValue().filter(item => item.videos.length > 0).length > 0;
				}
			},
			{
				label: 'Photos',
				id: 'section10',
				existInCompanyInfo: (folders: Folder[]) => {
					return this.folders$.getValue().filter(item => item.images.length > 0).length > 0;
				}
			},
		];
	}

	//NEW PAGE

	private getUser() {
		if (this.platformService.isServer) {
			return;
		}
		this.user = this.userService.getUser();
		this.userIsAuth = this.userService.isAuth();
	}

	private getCompanyFolders(id: string): void {
		if (!this.folders$.getValue().length) {
			this.folderService.getListByCompanyId(id)
				.pipe(first())
				.subscribe(folders => {
					this.folders$.next(folders);
					this.calculateSectionOffsets();
				})
		}
	}

	private getCompanyTradeShows(id: string): void {
		if (!this.companyTradeShows$.getValue().length) {
			this.tradeShowsService.getListByCompanyId(id)
				.pipe(first())
				.subscribe(tradeShows => {
					this.companyTradeShows$.next(tradeShows);
					this.calculateSectionOffsets();
				})
		}
	}

	private setSeo() {
		this.sourcingRequestService
			.getCompanyInfoById(this.route.snapshot.params['companyId'])
			.pipe(
				first(),
				tap(companyInfo => {
					this.companyInfo = companyInfo;
				}),
				tap(({companyName, _id, user}) => {
					this.getCompanyTradeShows(_id);
					this.getCompanyFolders(_id);
					this.findSupplierProductsAmount(user);
					this.seoService.setTitle(
						`Buy Products from ${companyName} Wholesale`
					);
					this.seoService.setDescription(
						`Get an exclusive wholesale deal from ${companyName}. Reach out to the supplier to buy the original products.`
					);
				})
			).subscribe(companyInfo => {
			this.companyInfo$.next(companyInfo);
			setTimeout(() => {
				this.calculateSectionOffsets();
			},)
		});
	}

	initUserSubscription() {
		if (this.platformService.isServer) {
			return;
		}
		this.userService
			.getToken$()
			.pipe(untilDestroyed(this))
			.subscribe((token) => {
				if (!token) {
					return;
				}
				this.token = token;
				this.openConnection(this.token);
			});
	}

	public getSkeletonOptions(): Partial<NgxSkeletonLoaderConfig> {
		return {
			count: 10,
			animation: 'progress',
			theme: {
				height: this.platformService.isServer ? 500 : window.innerHeight / 3,
			},
		};
	}

	public goTo(link: string): void {
		this.router.navigate([link]);
	}

	public openChat(event: MouseEvent, userId: string): void {
		if (this.platformService.isServer) {
			return;
		}
		event.stopPropagation();

		if (!this.userIsAuth) {
			this.router.navigate(['profile/your-workspace/b2bmarket']);
		} else {
			this.openConnection(this.token);
			this.socket.emit('start_users_chat', {
				userId,
				typeRoom: 'users',
			});

			this.socket.on('users_chat_info', (data: any) => {
				this.goTo('profile/your-workspace/b2bmarket/chat/' + data._id);
			});
		}
	}

	private openConnection(token: string): void {
		if (this.platformService.isServer) {
			return;
		}
		if (this.socket) {
			this.socket.disconnect();
		}

		this.socket = io(environment.apiUrl, {
			path: '/chat',
			auth: {
				token,
			},
		});
	}

	protected readonly environment = environment;
}
