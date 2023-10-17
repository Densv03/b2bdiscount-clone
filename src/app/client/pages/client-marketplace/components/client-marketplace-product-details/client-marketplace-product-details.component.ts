import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnDestroy,
	OnInit,
} from '@angular/core';
import { ClientMarketplaceService } from '../../client-marketplace.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
	BehaviorSubject,
	exhaustMap,
	mergeMap,
	Observable,
	Subject,
} from 'rxjs';
import { getName } from 'country-list';
import { ClientOfferReportComponent } from '../../../client-offer/components/client-offer-report/client-offer-report.component';
import { ClientOfferImagesComponent } from '../../../client-offer/components/client-offer-images/client-offer-images.component';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { B2bNgxLinkService, B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { UserService } from '../../../client-profile/services/user/user.service';
import { io } from 'socket.io-client';
import { environment } from '../../../../../../environments/environment';
import { User } from '../../../../../core/models/user/user.model';
import { filter, first, map, skip, takeUntil } from 'rxjs/operators';
import { AuthService } from '../../../../../auth/services/auth/auth.service';
import { MarketProductModel } from '../../models/market-product.model';
import { Meta, Title } from '@angular/platform-browser';
import { PublicCompanyInfoModel } from '../../../../../core/models/public-company-info.model';
import { ContactSupplierFormDialogComponent } from 'src/app/client/pages/client-marketplace/components/contact-supplier-form-dialog/contact-supplier-form-dialog.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatDialog } from '@angular/material/dialog';
import { Photo } from '../../../../../core/models/photo.model';
import { ProductDetailsModel } from '../../models/product-details.model';
import { ClientMarketCompanyPagePhoneDialogComponent } from '../../pages/client-market-company-page/components/client-market-company-page-phone-dialog/client-market-company-page-phone-dialog.component';

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
	@Input() public product: MarketProductModel;
	@Input() public companyInfo: PublicCompanyInfoModel;

	public productSource: BehaviorSubject<MarketProductModel> =
		new BehaviorSubject<MarketProductModel>(null);
	public user: User;
	public token: string;
	public otherProducts: MarketProductModel[];
	public otherSuppliersProducts: MarketProductModel[];
	public companyName: string;
	public isAuth: boolean = false;
	public b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
	public b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum;
	public companyId: string;
	public isSpecificationList: boolean = true;
	public apiAddress = environment.apiUrl;
	public isAuth$: Observable<boolean>;
	public isAmount: boolean = false;
	public readonly getName = getName;

	private socket: any;
	private componentIsDestroyed: Subject<void> = new Subject();
	private isPhoneNumberVisible = false;

	constructor(
		private readonly marketService: ClientMarketplaceService,
		private readonly userService: UserService,
		private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute,
		public readonly b2bNgxLinkService: B2bNgxLinkService,
		private readonly authService: AuthService,
		private readonly title: Title,
		private readonly meta: Meta,
		private readonly dialog: MatDialog
	) {
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;

		this.user = this.userService.getUser();
		this.isAuth$ = this.authService.user$.pipe(map((user) => !!user));
	}

	ngOnInit(): void {
		if (!this.product) {
			this.activatedRoute.params
				.pipe(
					skip(1),
					takeUntil(this.componentIsDestroyed),
					exhaustMap(({ productId }) => {
						return this.marketService.getProductById(productId);
					})
				)
				.subscribe(
					({ product, otherProducts, otherSuppliersProducts, company }) => {
						const productModel: MarketProductModel = {
							...product,
							photosUrl: product.photos.map((el) => this.apiAddress + el.lg),
							ports:
								product.ports.length > 0 && product.ports[0] !== null
									? this.getPorts(product)
									: [],
						};
						this.isAmount =
							!!productModel.amount?.count ||
							typeof productModel.amount === 'number';
						this.isSpecificationList = productModel.specificationList.some(
							({ specification, item }) => !!specification || !!item
						);
						this.productSource.next(productModel);
						this.otherProducts = otherProducts;
						this.companyId = company.path || company._id;
						this.addSeoTags(product);
						this.companyInfo = company;
						this.otherSuppliersProducts = otherSuppliersProducts;
					}
				);

			this.marketService
				.getProductById(this.activatedRoute.snapshot.params['productId'])
				.pipe(
					first(),
					mergeMap(
						({
							product,
							otherProducts,
							otherSuppliersProducts,
							company,
						}: any) => {
							const productModel: MarketProductModel = {
								...product,
								photosUrl: product.photos.map(
									(el: Photo) => this.apiAddress + el.lg
								),
								ports:
									product.ports.length > 0 && product.ports[0] !== null
										? this.getPorts(product)
										: [],
							};

							this.isSpecificationList = productModel.specificationList.some(
								({ specification, item }) => !!specification || !!item
							);
							this.isAmount =
								!!productModel.amount?.count ||
								typeof productModel.amount === 'number';

							this.productSource.next(productModel);
							this.otherProducts = otherProducts;
							this.companyId = company.path || company._id;
							this.addSeoTags(product);
							this.companyInfo = company;
							this.otherSuppliersProducts = otherSuppliersProducts;
							if (
								product.deleted &&
								this.userService.getUser()?._id !== product.user &&
								this.userService.getUser()?.role?.name !== 'admin'
							) {
								this.router.navigate(['/not-found']);
							}
							return this.userService.getPublicUserInfo(product.user);
						}
					)
				)
				.subscribe(({ companyName }) => {
					this.companyName = companyName;
				});
		} else {
			const product = {
				...this.product,
				ports:
					this.product.ports.length > 0 && this.product.ports[0] !== null
						? this.getPorts(this.product)
						: [],
			};
			this.isAmount = !!product.amount;
			this.productSource.next(product);

			this.isSpecificationList = this.product?.specificationList.some(
				({ specification, item }) => !!specification || !!item
			);
		}
		this.userService.getToken$().subscribe((token) => {
			this.token = token;
		});
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

	public navigateOnProductDetail(productId: string): void {
		this.router.navigate([`b2bmarket/listing/products`, productId]);
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

	public openImages() {
		this.dialog.open(ClientOfferImagesComponent, {
			data: {
				...this.productSource,
			},
			width: '80vw',
			height: '80vh',
		});
	}

	public goTo(link: string) {
		this.router.navigate([link]);
	}

	public openChat(event: MouseEvent): void {
		event.stopPropagation();
		if (!this.userService.getUser()) {
			this.router.navigate(['/auth/log-in']);
			return;
		}
		if (
			this.productSource
				.getValue()
				.chatStarted.includes(this.userService.getUser()?._id)
		) {
			this.startChat();
		} else {
			const dialog = this.dialog.open(ContactSupplierFormDialogComponent, {
				data: {
					product: this.productSource.getValue(),
				},
				width: '729px',
				maxWidth: '729px',
				maxHeight: '85vh',
				panelClass: 'contact-supplier-form-dialog',
			});

			dialog
				.afterClosed()
				.pipe(
					filter((result) => !!result),
					untilDestroyed(this)
				)
				.subscribe((result: any) => {
					this.startChat();
					this.socket.emit('message', {
						type: 'text',
						body: result.moreInformation,
						userId: this.productSource.getValue().user,
						productId: this.productSource.getValue()._id,
						typeRoom: 'product',
					});
				});
		}
	}

	private openConnection(token: string): void {
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
		this.title.setTitle(`Buy ${product.title.trim()} with B2B Discount`);
		this.meta.updateTag({
			name: 'description',
			content: `${product.title.trim()} Wholesale with B2B Discount at the best prices! Discover more great deals on the B2B Discount website`,
		});
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
		const { user, _id } = this.productSource.getValue();

		if (user === this.userService.getUser()?._id) {
			this.goTo('/b2bmarket/listing/products/' + _id);
			return;
		}

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

	ngOnDestroy(): void {
		this.componentIsDestroyed.next();
		this.title.setTitle('B2B Discount');
	}

	protected readonly Number = Number;
}
