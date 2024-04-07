import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	OnDestroy,
	OnInit,
} from '@angular/core';
import { ClientMarketplaceService } from '../../client-marketplace.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
	BehaviorSubject,
	fromEvent,
	Observable,
	of,
	Subject,
	switchMap,
} from 'rxjs';
import { getName } from 'country-list';
import { ClientOfferReportComponent } from '../../../client-offer/components/client-offer-report/client-offer-report.component';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { B2bNgxLinkService, B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { UserService } from '../../../client-profile/services/user/user.service';
import { io } from 'socket.io-client';
import { environment } from '../../../../../../environments/environment';
import { User } from '../../../../../core/models/user/user.model';
import { filter, first, map, startWith, tap } from 'rxjs/operators';
import { AuthService } from '../../../../../auth/services/auth/auth.service';
import { MarketProductModel } from '../../models/market-product.model';
import { Meta, Title } from '@angular/platform-browser';
import { PublicCompanyInfoModel } from '../../../../../core/models/public-company-info.model';
import { ContactSupplierFormDialogComponent } from 'src/app/client/pages/client-marketplace/components/contact-supplier-form-dialog/contact-supplier-form-dialog.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatDialog } from '@angular/material/dialog';
import { Photo } from '../../../../../core/models/photo.model';
import { ClientMarketCompanyPagePhoneDialogComponent } from '../../pages/client-market-company-page/components/client-market-company-page-phone-dialog/client-market-company-page-phone-dialog.component';
import { checkSerialNumber } from '../../../../../core/helpers/function/check-serial-number';
import { SeoService } from '../../../../../core/services/seo/seo.service';
import { DialogService } from '../../../../../core/services/dialog-service/dialog.service';
import { PlatformService } from '../../../../services/platform/platform.service';
import { CategoriesService } from '../../../../services/categories/categories.service';
import { PublicUserInfo } from '../../../../../core/models/shared/public-user-info';
import { PriceTypeEnum } from '../../../../shared/enums/price-type.enum';
import { ViewportScroller } from '@angular/common';

@UntilDestroy()
@Component({
	selector: 'b2b-client-marketplace-product-details',
	templateUrl: './client-marketplace-product-details.component.html',
	styleUrls: ['./client-marketplace-product-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientMarketplaceProductDetailsComponent
	implements OnInit, OnDestroy
{
	@Input() public productView: MarketProductModel;
	@Input() public companyInfo: PublicCompanyInfoModel;

	public productSource: BehaviorSubject<MarketProductModel> =
		new BehaviorSubject<MarketProductModel>(null);
	public user: User;
	public companyContactPersonLogo$: Observable<string> = of(null);
	public token: string;
	public otherProducts: MarketProductModel[];
	public otherSuppliersProducts: MarketProductModel[];
	public companyName: string;
	public isAuth: boolean = false;
	public b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
	public b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum;
	public companyId: string;
	public isSpecificationList: boolean = true;
	public apiAddress = environment.apiUrl.includes('staging')
		? 'https://api.globy.com/'
		: environment.apiUrl;
	public isAuth$: Observable<boolean>;
	public isAmount: boolean = false;
	public isCurrentUser: boolean = false;
	public similarProductsClass: string;
	public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
		false
	);
	public readonly getName = getName;
	public companySectors: string;
	public scrolling: BehaviorSubject<boolean> = new BehaviorSubject(true);
	public certificateCurrentIndex = 0;

	private socket: any;
	private componentIsDestroyed: Subject<void> = new Subject();
	private isPhoneNumberVisible = false;

	constructor(
		public readonly platformService: PlatformService,
		public readonly b2bNgxLinkService: B2bNgxLinkService,
		private readonly marketService: ClientMarketplaceService,
		private readonly userService: UserService,
		private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute,
		private readonly authService: AuthService,
		private readonly title: Title,
		private readonly meta: Meta,
		private readonly dialog: MatDialog,
		private readonly seoService: SeoService,
		private readonly dialogService: DialogService,
		private readonly categoriesService: CategoriesService,
		private readonly cdr: ChangeDetectorRef,
		private readonly viewportScroller: ViewportScroller
	) {
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;

		this.isAuth$ = this.authService.user$.pipe(map((user) => !!user));
	}

	ngOnInit(): void {
		if (this.platformService.isBrowser) {
			this.handleSizeWidth();
		}
		this.getUser();
		if (!this.productView) {
			this.activatedRoute.params
				.pipe(
					switchMap(({ productId }) => {
						this.productSource.next(null);
						this.isLoading$.next(true);

						return this.marketService.getProductById(productId);
					}),
					untilDestroyed(this)
				)
				.subscribe(
					({ product, otherProducts, otherSuppliersProducts, company }) => {
						this.isLoading$.next(false);
						const productModel: MarketProductModel = {
							...product,
							photosUrl:
								product.photos.every((photo: any) => 'serialNumber' in photo) &&
								checkSerialNumber(product.photos)
									? product.photos.reduce((acc: any[], val: any) => {
											acc[val?.serialNumber] = this.apiAddress + val.lg;
											return acc.filter((el) => !!el);
										}, [])
									: product.photos
											.filter((el) => el.lg)
											.map((el: Photo) => this.apiAddress + el.lg),
							ports:
								product.ports.length > 0 && product.ports[0] !== null
									? this.getPorts(product)
									: [],
							price:
								!product.priceRange?.minimum && !product.price?.unit
									? { old: PriceTypeEnum.PriceUponRequest }
									: product.price,
							paymentMethods:
								product.paymentMethods?.length === 0 ||
								product.paymentMethods?.every((el) => el === null)
									? []
									: product.paymentMethods,
							shipping:
								product.shipping?.length === 0 ||
								product.shipping?.every((el) => el === null)
									? []
									: product.shipping,
						};

						this.isSpecificationList = productModel.specificationList.some(
							({ specification, item }) => !!specification || !!item
						);
						this.isAmount =
							!!productModel.amount?.count ||
							typeof productModel.amount === 'number';

						this.productSource.next(productModel);
						this.isCurrentUser = productModel.user !== this.user?._id;

						this.otherProducts = otherProducts;
						this.companyId = company.path || company._id;
						this.addSeoTags(product);
						this.companyInfo = company;

						this.getPublicUserInfo(company.user).subscribe((data) => {
							this.companyContactPersonLogo$ = of(data?.logo);
							this.cdr.detectChanges();
						});
						this.companySectors = this.getCompanyCategories(company.categories);
						this.companyName = company.companyName;
						this.otherSuppliersProducts = otherSuppliersProducts;
						if (
							product.deleted &&
							this.userService.getUser()?._id !== product.user &&
							this.userService.getUser()?.role?.name !== 'admin'
						) {
							this.router.navigate(['/not-found']);
						}
					}
				);
		} else {
			const product = {
				...this.productView,
				ports:
					this.productView.ports.length > 0 &&
					this.productView.ports[0] !== null
						? this.getPorts(this.productView)
						: [],
			};
			this.companySectors = this.getCompanyCategories(
				this.companyInfo.categories
			);
			this.isAmount = !!product.amount;
			this.productSource.next(product);
			this.isCurrentUser = product.user !== this.user?._id;

			this.isSpecificationList = this.productView?.specificationList.some(
				({ specification, item }) => !!specification || !!item
			);

			if (this.user.logo) {
				this.companyContactPersonLogo$ = of(this.user.logo.lg);
			} else {
				this.companyContactPersonLogo$ = of(null);
			}
			this.cdr.detectChanges();
		}

		this.userService.getToken$().subscribe((token) => {
			this.token = token;
		});
		if (this.platformService.isBrowser) {
			setTimeout(() => this.viewportScroller.scrollToPosition([0, 0]), 0);
		}
	}



	private getPublicUserInfo(id: string): Observable<PublicUserInfo> {
		return this.userService.getPublicUserInfo(id).pipe(first());
	}

	public getCountryName(countryCode: string): string {
		if (!countryCode) {
			return '';
		}
		return getName(countryCode);
	}

	public openPhoneModal(): void {
		const { number, dialCode } = this.companyInfo.phone;
		this.dialog
			.open(ClientMarketCompanyPagePhoneDialogComponent, {
				data: {
					dialCode: dialCode,
					phoneNumber: number,
					isPhoneVisible: this.isPhoneNumberVisible,
				},
			})
			.afterClosed()
			.subscribe((data) => {
				this.isPhoneNumberVisible = data;
			});
	}

	public setCertificateItemIndex(event: number): void {
		this.certificateCurrentIndex = event;
	}

	public openReportPopover() {
		this.dialog.open(ClientOfferReportComponent, {
			data: {
				...this.productSource,
			},
			width: '40vw',
			height: 'auto',
			minHeight: '0',
			panelClass: 'report-dialog',
		});
	}

	public goTo(link: string) {
		this.router.navigate([link]);
	}

	public openChat(event: MouseEvent): void {
		event.stopPropagation();

		if (this.productSource.value.user === this.user?._id) {
			return;
		}

		if (
			this.productSource
				.getValue()
				.chatStarted.includes(this.userService.getUser()?._id)
		) {
			this.startChat();
		} else {
			this.scrolling.next(false);
			const dialog = this.dialogService.openDialog(
				ContactSupplierFormDialogComponent,
				{
					data: {
						product: this.productSource.getValue(),
					},
					panelClass: 'contact-supplier-form-dialog',
				}
			);
			if (dialog) {
				dialog
					.afterClosed()
					.pipe(
						tap(() => this.scrolling.next(true)),
						filter((result) => !!result),
						untilDestroyed(this)
					)
					.subscribe((result) => {
						if (this.platformService.isServer) {
							return;
						}

						this.startChat();
						this.socket.emit('message', {
							type: 'text',
							body: result ? result?.['moreInformation'] : null,
							userId: this.productSource.getValue().user,
							productId: this.productSource.getValue()._id,
							typeRoom: 'product',
						});
					});
			}
		}
	}

	public getFullUrl(url: string): string {
		if (!url.startsWith('http://') && !url.startsWith('https://')) {
			return `http://${url}`;
		}
		return url;
	}

	public containsDot(str: string): boolean {
		const pattern = /.*\..*/;
		return pattern.test(str);
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

	private addSeoTags(product: any): void {
		const { title } = product;
		this.seoService.setTitle(
			`Buy ${title.trim()} Online Wholesale from Direct Suppliers`
		);
		this.seoService.setDescription(
			`Buy ${title.trim()} wholesale online directly from suppliers for competitive pricing and reliable quality`
		);
	}

	private getPorts(
		product: MarketProductModel
	): { country: string; countryCode: string; portName: string[] }[] {
		return product.ports?.reduce((acc: any[], selectedPorts) => {
			const existingCountry = acc?.find(
				(port) => port.country === selectedPorts.country
			);

			if (existingCountry) {
				existingCountry.portName.push(selectedPorts.portName);
			} else {
				acc.push({
					country: selectedPorts?.country,
					countryCode: selectedPorts?.countryCode,
					portName: [selectedPorts?.portName],
				});
			}

			return acc;
		}, []);
	}

	private startChat(): void {
		if (this.platformService.isServer) {
			return;
		}

		const { user, _id } = this.productSource.getValue();

		this.openConnection(this.token);
		this.socket.emit('start_chat', {
			userId: user,
			productId: _id,
			typeRoom: 'product',
		});

		this.socket.on('chat_info', (data: any) => {
			this.goTo('profile/your-workspace/b2bmarket/chat/' + data._id);
		});
	}

	private getUser(): void {
		this.userService
			.getUser$()
			.pipe(untilDestroyed(this))
			.subscribe((user) => (this.user = user));
	}

	private getCompanyCategories(categoriesIds: string[]): string {
		const allCategories =
			this.categoriesService.getCategories()?.categories || [];
		let selectedCategories: string;

		if (allCategories?.length > 0) {
			selectedCategories = allCategories
				.filter((parent: { children: any[] }) => {
					return parent.children.some((child: { _id: string }) =>
						categoriesIds?.includes(child._id)
					);
				})
				.map((parent: { name: string }) => parent?.name)
				.join(', ');
		}

		return selectedCategories;
	}

	private handleSizeWidth(): void {
		fromEvent(window, 'resize')
			.pipe(
				startWith(600 > window.innerWidth),
				map(() => 600 > window.innerWidth),
				untilDestroyed(this)
			)
			.subscribe(
				(isMobileSize) =>
					(this.similarProductsClass = isMobileSize
						? ' product-details-page'
						: 'flex-start')
			);
	}

	ngOnDestroy(): void {
		this.componentIsDestroyed.next();
		this.title.setTitle('Globy');
	}

	protected readonly Number = Number;
	protected readonly PriceTypeEnum = PriceTypeEnum;

	public getPrice(oldPrice: number | string) {
		if (typeof oldPrice === 'string' && !isNaN(+oldPrice)) {
			if (parseInt(oldPrice) === +oldPrice) {
				return oldPrice;
			} else {
				return (+oldPrice).toFixed(2)
			}
		} else if (typeof oldPrice === 'number') {
			if (parseInt(oldPrice.toString()) === oldPrice) {
				return oldPrice;
			}
			return oldPrice.toFixed(2)
		} else {
			return oldPrice;
		}
	}
}
