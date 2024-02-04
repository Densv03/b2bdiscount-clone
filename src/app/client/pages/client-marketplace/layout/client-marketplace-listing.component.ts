import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import { ClientMarketplaceService } from '../client-marketplace.service';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../auth/services/auth/auth.service';
import { ActivatedRoute, QueryParamsHandling, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, tap } from 'rxjs';
import { debounceTime, first, map } from 'rxjs/operators';
import { CategoriesService } from '../../../services/categories/categories.service';
import { InitialCategoryState } from '../shared/models/initial-category-state.model';
import { SlideInOutAnimation } from '../shared/animations/slide-in-out.animation';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SortType } from '../../../../core/models/sort-type.model';
import { User } from '../../../../core/models/user/user.model';
import { getName } from 'country-list';
import { ChipsService } from '../components/filter-chips/chips.service';
import { WindowScrollingService } from '../../../../core/services/window-scrolling/window-scrolling.service';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../../../core/services/seo/seo.service';
import { HeaderService } from '../../../components/header/header.service';

function generateQueryString(obj: any, initialValue: string = '?') {
	const filteredState = obj;
	for (const filteredStateKey in filteredState) {
		if (!filteredState[filteredStateKey]) {
			filteredState[filteredStateKey] = undefined;
		}
	}
	return Object.entries(filteredState)
		.filter(([, value]: any) => !!value)
		.reduce((queryString: string, [key, value]: any) => {
			return Array.isArray(value)
				? `${queryString}${value.reduce(
						(str, arrayItem) => `${str}${key}=${arrayItem}&`,
						''
					)}`
				: `${queryString}${key}=${value}&`;
		}, initialValue);
}

export interface NavigationOption {
	routerLink: string[];
	queryParams?: {
		[key: string]: string;
	};
	queryParamsHandling?: QueryParamsHandling;
	relativeTo?: ActivatedRoute;
}

@UntilDestroy()
@Component({
	selector: 'b2b-client-marketplace-listing',
	templateUrl: './client-marketplace-listing.component.html',
	styleUrls: ['./client-marketplace-listing.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [SlideInOutAnimation],
})
export class ClientMarketplaceListingComponent
	implements OnInit, AfterViewInit, OnDestroy
{
	public queryParams: any = this.route.snapshot.queryParams;

	public marketplaceProducts$: Observable<any> =
		this.clientMarketplaceService.marketplaceProducts$;
	public filtersArr$: Observable<any> =
		this.clientMarketplaceService.marketFilters$.asObservable();
	public totalMarketplaceProductsLength$: Observable<number> =
		this.clientMarketplaceService.marketplaceProductsLength$;
	public marketplaceProductView$ =
		this.clientMarketplaceService.marketplaceProductView$;

	public PRODUCTS_LIMIT: number = this.clientMarketplaceService.PRODUCTS_LIMIT;
	public readonly user$: Observable<User>;

	public readonly formGroup: FormGroup = this.getFormGroup();

	public readonly mobileFilters: FormGroup = new FormGroup<{
		filters: FormControl;
	}>({
		filters: new FormControl(null),
	});

	public categoriesInitialState$: Observable<InitialCategoryState> =
		this.getObservableForCategories();

	public readonly b2bNgxInputThemeEnum: typeof B2bNgxInputThemeEnum;
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
	public readonly b2bNgxSelectThemeEnum: typeof B2bNgxSelectThemeEnum;
	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum;

	public animationState: 'in' | 'out' = 'out';
	public listingIsLoaded = false;

	@ViewChild('backdrop', { static: true }) backdrop?: ElementRef;

	private state: BehaviorSubject<any> = new BehaviorSubject<any>({
		'categories[]': [],
	});
	private animationStateSource: BehaviorSubject<'in' | 'out'> =
		new BehaviorSubject<'in' | 'out'>('out');
	private currentPageSource: BehaviorSubject<number> =
		new BehaviorSubject<number>(1);
	private childrenCategories: string[] = [];

	constructor(
		public chipsService: ChipsService,
		private clientMarketplaceService: ClientMarketplaceService,
		private authService: AuthService,
		private route: ActivatedRoute,
		private categoriesService: CategoriesService,
		private changeDetectorRef: ChangeDetectorRef,
		private router: Router,
		private windowScrollingService: WindowScrollingService,
		private readonly title: Title,
		private readonly seoService: SeoService,
		private readonly headerService: HeaderService
	) {
		this.b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
		this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;

		this.user$ = this.authService.getUser();
	}

	public ngOnInit(): void {
		this.initPagination();
		this.initQueryParams();
		this.state.pipe().subscribe((data) => {
			this.clientMarketplaceService.updateMarketplaceProducts(
				generateQueryString(data),
				(Number(this.currentPageSource.getValue()) - 1) * this.PRODUCTS_LIMIT
			);
		});
		this.initSeoParams();
		this.seoService.marketListingMetaTags$.subscribe((data) => {
			data ? this.addSeoTags(data) : this.removeSeoTags();
		});
		this.marketplaceProducts$.pipe(first()).subscribe(() => {
			setTimeout(() => {
				this.listingIsLoaded = true;
			}, 200);
		});
	}

	public getTitleByCategoryPath(): string {
		const { childCategory, category } = this.route.snapshot.params;
		if (childCategory) {
			return this.getCategoryNameByPath(childCategory);
		} else if (category) {
			return this.getCategoryNameByPath(category);
		}
		return '';
	}

	public getCountryName(countryCode: string): string {
		if (!countryCode) {
			return '';
		}
		return getName(countryCode);
	}

	public ngAfterViewInit(): void {
		if (this.backdrop) {
			this.backdrop.nativeElement.addEventListener('click', (e: MouseEvent) => {
				if (e.target == this.backdrop.nativeElement) {
					this.toggleShowPopUp();
					this.changeDetectorRef.markForCheck();
				}
			});
		}
	}

	public get currentPage$(): Observable<number> {
		return this.currentPageSource.asObservable();
	}

	public get animationState$(): Observable<'in' | 'out'> {
		return this.animationStateSource.asObservable();
	}

	public toggleShowPopUp(): void {
		this.animationState = this.animationState === 'in' ? 'out' : 'in';
	}

	public changeListingView(theme: 'list' | 'grid') {
		this.clientMarketplaceService.updateMarketplaceProductView(theme);
	}

	public setSearch(searchValue: string): void {
		this.formGroup.controls['q'].setValue(searchValue);
	}

	public searchProducts(): void {
		this.clientMarketplaceService.updateMarketplaceProducts({
			q: this.formGroup.value.q,
		});
	}

	public togglePage(page: number, state?: { [key: string]: string }): void {
		this.currentPageSource.next(page);
		if (page === 1) {
			this.router.navigate([], {
				queryParams: {
					page: undefined,
				},
			});
			return;
		}
		this.router.navigate([], {
			queryParams: {
				page,
			},
		});

		this.currentPageSource.next(page);
	}

	public closePopUp(): void {
		this.animationStateSource.next('out');
		this.windowScrollingService.enable();
	}

	public openPopUp(): void {
		this.animationStateSource.next('in');
		this.windowScrollingService.disable();
	}

	public extractFilterOptions(options: any): void {
		const { option, filterIndex, hiddenLabel, deleteMode } = options;
		this.chooseFilter(option, filterIndex, hiddenLabel, deleteMode);
	}

	private addSeoTags(category: any): void {
		const { name, rootCategoryId } = category;
		if (rootCategoryId) {
			this.seoService.setTitle(`Search ${name} to Buy Wholesale Goods Online`);
		} else {
			// this.seoService.setTitle(`Explore ${name} to Buy Products Wholesale`);
		}
		this.seoService.setDescription(
			`Navigate to ${name} for wholesale purchases. Ensure the best prices by sourcing from direct suppliers on our trade portal`
		);
	}

	private removeSeoTags(): void {
		this.seoService.setTitle(
			'B2B Platform For Suppliers and Buyers Worldwide, Wholesale Marketplace | Globy'
		);
		this.seoService.setDescription(
			'B2B Marketplace for sourcing and connecting with trusted manufacturers and wholesalers. Unclaimed cargo directory. News and the industry’s insights.'
		);
	}

	public chooseFilter(
		option: any,
		filterIndex: number,
		hiddenLabel: string,
		deleteMode: boolean
	): void {
		const queryParams = { ...this.route.snapshot.queryParams };
		if (!deleteMode) {
			switch (hiddenLabel) {
				case 'rootCategory':
					this.chipsService.updateFilterChips({
						value: option.path,
						label: option.name,
						filterName: 'categories[]',
						rootCategoryId: null,
					});
					this.seoService.updateMarketListingMeta(option);
					this.chipsService.updateSelectedMarketCategorySource(option.id);
					this.router.navigate(['/b2bmarket/listing', option.path], {
						skipLocationChange: true,
						queryParams: {
							q: this.headerService.formControlValue
								? this.headerService.formControlValue
								: undefined,
						},
					});
					break;
				case 'categories':
					this.chipsService.updateFilterChips({
						value: option.path,
						label: option.name,
						filterName: 'categories[]',
						rootCategoryId: option.rootCategoryId,
						rootCategoryPath: option.rootCategoryPath,
					});
					this.childrenCategories = [option.id];
					this.seoService.updateMarketListingMeta(option);
					this.chipsService.updateSelectedMarketCategorySource(option.id);
					this.routerNavigate([option.path], 'merge', {}, this.route);
					break;
				case 'country[]':
					this.chipsService.updateFilterChips({
						value: option.name,
						label: this.getCountryName(option.name),
						filterName: 'country[]',
					});
					break;
				case 'type':
					this.chipsService.updateFilterChips({
						value: option.name,
						label: option.name,
						filterName: 'type',
					});
					break;
			}
		} else {
			switch (hiddenLabel) {
				case 'rootCategory':
					this.seoService.updateMarketListingMeta(null);
					this.chipsService.updateSelectedMarketCategorySource(null);
					this.clearFilterStore();
					break;
				case 'categories':
					this.seoService.updateMarketListingMeta({
						name: option.rootCategoryName,
					});
					this.chipsService.removeChip(option);
					this.chipsService.updateSelectedMarketCategorySource(
						option.rootCategoryId
					);
					this.childrenCategories = this.childrenCategories.filter(
						(childCategory) => childCategory !== option.id
					);
					delete queryParams['categories[]'];
					if (!this.childrenCategories.length) {
						this.childrenCategories.push(option.rootCategoryId);
						this.routerNavigate(
							['/b2bmarket/listing', option.rootCategoryPath],
							null,
							queryParams,
							this.route
						);
						return;
					}

					this.routerNavigate([], 'merge', queryParams, this.route);
					break;
				case 'country[]':
					this.chipsService.removeChipsByHiddenLabel(hiddenLabel);
					delete queryParams['country[]'];
					this.routerNavigate([], null, queryParams, this.route);
					break;
				case 'type':
					this.chipsService.removeChipsByHiddenLabel(hiddenLabel);
					delete queryParams['type'];
					this.routerNavigate([], null, queryParams, this.route);
					break;
			}
		}
	}

	public getNavigationByOption(
		option: any,
		hiddenLabel: string
	): NavigationOption {
		switch (hiddenLabel) {
			case 'rootCategory':
				return {
					routerLink: ['/b2bmarket/listing', option.path],
				};
			case 'categories':
				return {
					routerLink: [option.path],
					queryParamsHandling: 'merge',
					relativeTo: this.route,
				};
			case 'country[]':
				return {
					routerLink: [],
					queryParams: { 'country[]': option.name },
					queryParamsHandling: 'merge',
					relativeTo: this.route,
				};
			case 'type':
				return {
					routerLink: [],
					queryParams: { type: option.name },
					queryParamsHandling: 'merge',
					relativeTo: this.route,
				};
			default:
				return {
					routerLink: [],
					queryParams: {},
					queryParamsHandling: null,
					relativeTo: null,
				};
		}
	}

	public isOptionSelected(
		option: any,
		filterIndex: number,
		filtersArr: any[]
	): boolean {
		if (!filtersArr[filterIndex].selectedOption.getValue()) return false;
		return (
			option.name === filtersArr[filterIndex].selectedOption.getValue().name
		);
	}

	public restrictOpen(option: any, filtersArr: any[]): boolean {
		const rootCategoriesIndex = filtersArr.findIndex(
			(item) => item.name === 'Sectors'
		);
		return (
			option.name !== 'Sectors' &&
			!filtersArr[rootCategoriesIndex].selectedOption.getValue()
		);
	}

	public clearFilterStore(clearSearch?: boolean): void {
		this.router.navigate(['/b2bmarket/listing'], {
			queryParams: {
				q: this.headerService.formControlValue
					? this.headerService.formControlValue
					: undefined,
			},
		});
		this.chipsService.resetChips();
		if (clearSearch) {
			this.headerService.formControlValue = '';
			this.state.next({ ...this.state.getValue(), q: '' });
		}
	}

	public removeFilter($event: any): void {
		let { filter, chipsState } = $event;
		if (filter.filterName === 'categories[]' && !filter?.rootCategoryId) {
			this.clearFilterStore();
			return;
		}
		const temp: any = {};

		chipsState.forEach((item: any) => {
			if (item.filterName !== 'categories[]') {
				temp[item.filterName] = item.value || item.name;
			}
		});

		if (filter.rootCategoryPath) {
			this.routerNavigate(
				['/b2bmarket/listing', filter.rootCategoryPath],
				'merge',
				temp,
				this.route
			);
		} else {
			this.routerNavigate([], null, temp, this.route);
		}
	}

	private getFormGroup(): FormGroup {
		return new FormGroup<any>({
			transportType: new FormControl(null),
			'categories[]': new FormControl(null),
			sort: new FormControl(null),
			offset: new FormControl(0),
			limit: new FormControl(12),
		});
	}

	private getObservableForCategories(): Observable<InitialCategoryState> {
		return this.categoriesService.getCategories$().pipe(
			map((categories) => categories.categories),
			map((categories) => {
				const ans = { name: '', _id: '' };
				categories.forEach((parentCategory: any) => {
					if (parentCategory._id === this.queryParams.categories) {
						ans._id = parentCategory._id;
						ans.name = parentCategory.name;
					} else {
						parentCategory.children.forEach((childCategories: any) => {
							if (childCategories._id === this.queryParams.categories) {
								ans._id = childCategories._id;
								ans.name = childCategories.name;
							}
						});
					}
				});
				return ans;
			})
		);
	}

	private initPagination(): void {
		const page = this.route.snapshot.queryParams['page'];

		if (page) {
			this.currentPageSource.next(page);
		}

		combineLatest([this.route.params, this.route.queryParams])
			.pipe(untilDestroyed(this))
			.subscribe(([params, queryParams]) => {
				const temp: { [key: string]: string } = {};
				if (params) {
					temp['categories[]'] = params['childCategory'] ?? params['category'];
				}
				if (queryParams) {
					for (const key in queryParams) {
						if (key !== 'page' && queryParams[key] !== '1')
							temp[key] = queryParams[key];
					}
				}
				this.clientMarketplaceService.marketFilters$.subscribe((data) => {
					const chips: any[] = [];
					data.forEach((item: any) => {
						const fieldToHiddenLabelObj: any = {
							Sectors: 'categories[]',
							Categories: 'categories[]',
							'Company type': 'type',
							Country: 'country[]',
						};
						const temp = item.options
							.filter((option: any) => option.checked)
							.map((option: any) => ({
								...option,
								filterName: fieldToHiddenLabelObj[item.name],
								label: option.name,
								value: option.path,
							}));
						chips.push(...temp);

						this.chipsService.updateChips(chips);
						const lastCategoryChips: any =
							this.chipsService.getLastChipsCategory();
						if (lastCategoryChips) {
							this.chipsService.updateSelectedMarketCategory(
								lastCategoryChips.description ? lastCategoryChips : null
							);
							this.seoService.updateMarketListingMeta(lastCategoryChips);
						}
					});
				});

				const q = this.headerService.formControlValue || '';

				this.state.next({ ...temp, q });
			});
	}

	private initQueryParams(): void {
		if (this.headerService.formControlValue) {
			this.router.navigate([], {
				queryParams: {
					q: this.headerService.formControlValue,
				},
				relativeTo: this.route,
			});
		}
	}

	private routerNavigate(
		url: string[] = [],
		queryParamsHandling: QueryParamsHandling = null,
		queryParams: {
			[key: string]: any;
		} | null = null,
		relativeTo: ActivatedRoute | null = null
	): void {
		this.router.navigate(url, {
			queryParams,
			queryParamsHandling,
			relativeTo,
		});
	}

	ngOnDestroy() {
		this.title.setTitle('Globy');
	}

	private initSeoParams() {
		if (this.route.snapshot.params['childCategory']) {
			this.seoService.setTitle(
				`Search ${this.route.snapshot.params['childCategory']} to Buy Wholesale Goods Online`
			);
			this.seoService.setDescription(
				`Navigate to ${this.route.snapshot.params['childCategory']} for wholesale purchases. Ensure the best prices by sourcing from direct suppliers on our trade portal`
			);
		} else if (this.route.snapshot.params['category']) {
			this.seoService.setTitle(
				`Search ${this.route.snapshot.params['category']} to Buy Wholesale`
			);
			this.seoService.setDescription(
				`Navigate to ${this.route.snapshot.params['category']} for wholesale purchases. Ensure the best prices by sourcing from direct suppliers on our trade portal`
			);
		}
	}

	private getCategoryNameByPath(input: string): string {
		let words = input.split('-');
		let capitalizedWords = words
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
		return `${capitalizedWords} Wholesale`;
	}
}
