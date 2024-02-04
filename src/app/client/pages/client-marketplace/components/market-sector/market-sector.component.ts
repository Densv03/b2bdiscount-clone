import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ClientMarketplaceService } from '../../client-marketplace.service';
import { BehaviorSubject, delay, fromEvent, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../../../services/categories/categories.service';
import { debounceTime, filter, map, startWith, take } from 'rxjs/operators';
import { Category } from '../../shared/models/category.model';
import { environment } from '../../../../../../environments/environment';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CategoriesMobileListComponent } from '../../../../shared/components/categories-mobile-list/categories-mobile-list.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../../client-profile/services/user/user.service';
import { io } from 'socket.io-client';
import { FormControl } from '@angular/forms';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { ClientContactUsModalComponent } from '../../../../components/client-contact-us-modal/client-contact-us-modal.component';
import { PlatformService } from '../../../../services/platform/platform.service';
import { SourcingRequestService } from '../../../client-sourcing-request/sourcing-request.service';
import { MarketProductModel } from '../../../../../core/models/client-marketplace/market-product.model';
import { HeaderService } from '../../../../components/header/header.service';
import { SeoService } from '../../../../../core/services/seo/seo.service';

@UntilDestroy()
@Component({
	selector: 'b2b-market-sector',
	templateUrl: './market-sector.component.html',
	styleUrls: ['./market-sector.component.scss'],
})
export class MarketSectorComponent implements OnInit, AfterViewInit {
	public newProducts$: Observable<any>;
	public popularProducts$: Observable<any>;
	public category$: Observable<Category>;
	public apiAddress = environment.apiUrl;
	public suppliersSource$: Observable<any[]>;
	public sectorsAreLoaded: boolean = false;
	private marketplaceProductsSource: BehaviorSubject<MarketProductModel[]> =
		new BehaviorSubject<MarketProductModel[]>([]);
	public marketplaceProducts$ = this.marketplaceProductsSource.asObservable();
	public search = new FormControl('');
	public b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public categoryImage: string;
	public categoriesCount: number;
	private limit: number;
	private offset = 0;
	private socket: any;
	private token: string;
	private categoryId = new BehaviorSubject<string>(null);

	constructor(
		private readonly clientMarketplaceService: ClientMarketplaceService,
		private readonly categoriesService: CategoriesService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly dialog: MatDialog,
		private readonly userService: UserService,
		private readonly router: Router,
		private readonly sourcingRequestService: SourcingRequestService,
		public readonly platformService: PlatformService,
		private readonly headerService: HeaderService,
		private readonly seoService: SeoService
	) {}

	ngOnInit(): void {
		this.eventHandlers();
		this.getProducts();
		this.getToken();
		this.handleSearchChange();
		this.getCompanies();
		this.setSeoTags();
	}

	ngAfterViewInit(): void {
		this.getRoutingParams();
	}

	public cutString(title: string, maxSymbolsAmount: number): string {
		return title?.length > maxSymbolsAmount
			? `${title.slice(0, maxSymbolsAmount)}...`
			: title;
	}

	public openCategoriesPopUp(category: Category): void {
		const dialog = this.dialog.open(CategoriesMobileListComponent, {
			width: '100%',
			height: '100%',
			maxWidth: '100%',
			panelClass: 'categories-list-mobile',
		});
		dialog.componentInstance.category = category;
	}

	public openContactUsModal(): void {
		this.dialog.open(ClientContactUsModalComponent);
	}

	public openChat(supplier: any): void {
		if (!this.userService.getUser()) {
			this.router.navigate(['/profile/your-workspace/b2bmarket']);
			return;
		}
		if (supplier.user._id === this.userService.getUser()?._id) {
			this.router.navigate([
				'/b2bmarket/listing/products/' + supplier.user?.path ||
					supplier.user?._id,
			]);
			return;
		}

		this.openConnection(this.token);
		this.socket.emit('start_users_chat', {
			userId: supplier.user._id,
			typeRoom: 'users',
		});

		this.socket.on('users_chat_info', (data: any) => {
			this.router.navigate([
				'profile/your-workspace/b2bmarket/chat/' + data._id,
			]);
		});
	}

	public getCategoryImage(category: Category): string {
		const categoryImage = category.image;
		return categoryImage[0] === '/'
			? `url('${this.apiAddress}${categoryImage.slice(1)}')`
			: `url('${this.apiAddress}${categoryImage}')`;
	}

	private getProducts(): void {
		this.clientMarketplaceService.marketplaceProducts$
			.pipe(untilDestroyed(this))
			.subscribe((products) => {
				let updatedProducts = [];
				updatedProducts = [
					...this.marketplaceProductsSource.value,
					...products,
				];
				this.marketplaceProductsSource.next(new Set(updatedProducts) as any);
			});
	}

	private updateProductList(category: string): void {
		const path = `?categories[]=${category}`;
		this.clientMarketplaceService.updateMarketplaceProducts(
			path,
			this.offset * this.limit,
			this.limit
		);
	}

	private getRoutingParams(): void {
		this.activatedRoute.params
			.pipe(
				filter((param) => !!param['category']),
				untilDestroyed(this)
			)
			.subscribe((param) => {
				this.offset = 0;
				this.marketplaceProductsSource.next([]);
				this.sectorsAreLoaded = false;
				this.categoryId.next(param['category']);
				this.getCategoryData(param['category']);
				this.updateProductList(param['category']);

				let queryString = `?categories[]=${param['category']}`;
				if (this.headerService.formControlValue) {
					queryString += `&q=${this.headerService.formControlValue}`;
				}

				this.newProducts$ = this.clientMarketplaceService
					.getMarketplaceProducts(queryString, 0, this.limit)
					.pipe(
						take(1),
						map((products) => products.result.products)
					);

				this.popularProducts$ = this.clientMarketplaceService
					.getMarketplaceProducts(
						`${queryString}&relevance=true`,
						0,
						this.limit
					)
					.pipe(
						take(1),
						map((products) => products.result.products)
					);
			});
	}

	private getCategoryData(categoryName: string): void {
		this.category$ = this.categoriesService.getCategories$().pipe(
			filter((categories) => categories.categories?.length > 0),
			take(1),
			delay(300),
			map((categories) => {
				const selectedCategory = categories.categories.find(
					(category: Category) => category.path === categoryName
				);
				this.categoryImage = `url('${this.apiAddress}${selectedCategory?.image}')`;

				this.sectorsAreLoaded = true;

				return selectedCategory;
			})
		);
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

	private eventHandlers(): void {
		fromEvent(window, 'resize')
			.pipe(
				startWith(window.innerWidth < 600),
				map(() => window.innerWidth < 600),
				untilDestroyed(this)
			)
			.subscribe((isMobile) => {
				this.limit = isMobile ? 6 : 10;
				this.categoriesCount = isMobile ? 19 : 27;
			});

		fromEvent(window, 'scroll')
			.pipe(
				debounceTime(100),
				filter(
					() =>
						window.innerHeight + window.scrollY >=
						window.document.scrollingElement.scrollHeight - 100
				),
				untilDestroyed(this)
			)
			.subscribe(() => {
				this.offset++;
				this.updateProductList(this.categoryId.getValue());
			});
	}

	private getToken(): void {
		this.userService.getToken$().subscribe((token) => {
			this.token = token;
		});
	}

	private getCompanies(): void {
		this.suppliersSource$ = this.sourcingRequestService.getNewCompanies().pipe(
			map((result) => {
				return result[0].companies.map((company) => {
					return {
						...company,
						country: company?.country ? company.country.toUpperCase() : null,
						categories:
							company.categories.length > 0
								? company.categories.map((category) => category.name).join(', ')
								: null,
					};
				});
			})
		);
	}

	private handleSearchChange(): void {
		this.search.valueChanges
			.pipe(filter((value) => !!value && value.length > 2))
			.subscribe((value) => {
				this.router.navigate(
					['/b2bmarket/listing', this.categoryId.getValue()],
					{
						relativeTo: this.activatedRoute,
						queryParams: { q: value },
					}
				);
			});
	}

	private setSeoTags(): void {
		const categoryPath = this.activatedRoute.snapshot.params['category'];
		const name = this.getCategoryNameByPath(categoryPath);
		this.seoService.setTitle(`Explore ${name} to Buy Products Wholesale`);
		this.seoService.setDescription(
			`Navigate to ${name} for wholesale purchases. Ensure the best prices by sourcing from direct suppliers on our trade portal`
		);
	}

	private getCategoryNameByPath(input: string): string {
		let words = input.split('-');
		let capitalizedWords = words
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
		return `${capitalizedWords}`;
	}
}
