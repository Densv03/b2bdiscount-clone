import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	OnInit,
	ViewChild
} from "@angular/core";
import {ClientMarketplaceService} from "../client-marketplace.service";
import {B2bNgxInputThemeEnum} from "@b2b/ngx-input";
import {B2bNgxButtonThemeEnum} from "@b2b/ngx-button";
import {B2bNgxSelectThemeEnum} from "@b2b/ngx-select";
import {B2bNgxLinkThemeEnum} from "@b2b/ngx-link";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../../auth/services/auth/auth.service";
import {ActivatedRoute, QueryParamsHandling, Router} from "@angular/router";
import {BehaviorSubject, combineLatest, Observable, of, tap} from "rxjs";
import {PaginationParamsModel} from "../../../../core/models/pagination-params.model";
import {map, switchMap, filter, first, debounceTime} from "rxjs/operators";
import {CategoriesService} from "../../../services/categories/categories.service";
import {InitialCategoryState} from "../shared/models/initial-category-state.model";
import {SlideInOutAnimation} from "../shared/animations/slide-in-out.animation";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {SortType} from "../../../../core/models/sort-type.model";
import {User} from "../../../../core/models/user/user.model";
import {getName, overwrite} from "country-list";
import {ChipsService} from "../components/filter-chips/chips.service";
import {WindowScrollingService} from "../../../../core/services/window-scrolling/window-scrolling.service";

function generateQueryString(obj: any, initialValue: string = "?") {
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
				? `${queryString}${value.reduce((str, arrayItem) => `${str}${key}=${arrayItem}&`, "")}`
				: `${queryString}${key}=${value}&`;
		}, initialValue);
}

@UntilDestroy()
@Component({
	selector: "b2b-client-marketplace",
	templateUrl: "./client-marketplace-listing.component.html",
	styleUrls: ["./client-marketplace-listing.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [SlideInOutAnimation],
})
export class ClientMarketplaceListingComponent implements OnInit, AfterViewInit {
	public queryParams: any = this.route.snapshot.queryParams;


	public marketplaceProducts$: Observable<any> = this.clientMarketplaceService.marketplaceProducts$;
	public filtersArr$: Observable<any> = this.clientMarketplaceService.marketFilters$.asObservable();
	public totalMarketplaceProductsLength$: Observable<number> = this.clientMarketplaceService.marketplaceProductsLength$;
	public offersListTheme: "list" | "grid" = "grid";
	public sortTypes: SortType[] = this.getSortTypes();
	public marketplaceProductView$ = this.clientMarketplaceService.marketplaceProductView$;

	public PRODUCTS_LIMIT: number = this.clientMarketplaceService.PRODUCTS_LIMIT;
	public readonly user$: Observable<User>;

	public readonly formGroup: FormGroup = this.getFormGroup();
	public readonly desktopFilters: FormGroup = new FormGroup<{ filters: FormControl }>({
		filters: new FormControl(null),
	});

	public readonly mobileFilters: FormGroup = new FormGroup<{ filters: FormControl }>({
		filters: new FormControl(null),
	});

	public categoriesInitialState$: Observable<InitialCategoryState> = this.getObservableForCategories();

	public readonly b2bNgxInputThemeEnum: typeof B2bNgxInputThemeEnum;
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
	public readonly b2bNgxSelectThemeEnum: typeof B2bNgxSelectThemeEnum;
	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum;

	public animationState: "in" | "out" = "out";

	@ViewChild("backdrop", {static: true}) backdrop?: ElementRef;

	private listingState: { [key: string]: any };
	private state: BehaviorSubject<any> = new BehaviorSubject<any>({
		"categories[]": [],
	});
	private animationStateSource: BehaviorSubject<"in" | "out"> = new BehaviorSubject<"in" | "out">("out");
	private currentPageSource: BehaviorSubject<number> = new BehaviorSubject<number>(1);
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
	) {
		this.b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
		this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;

		this.user$ = this.authService.getUser();
		this.listingState = {
			"q": "",
			"categories[]": undefined,
			"country": null,
			"type": null,
			"relevance": false,
		};
	}

	public ngOnInit(): void {
		this.renameCountries();
		this.initQueryParams();
		this.initPagination();
		this.state.pipe().subscribe(data => {
			this.clientMarketplaceService.updateMarketplaceProducts(generateQueryString(data),
				(Number(this.currentPageSource.getValue()) - 1) * this.PRODUCTS_LIMIT);
		});
	}

	public getCountryName(countryCode: string): string {
		if (!countryCode) {
			return "";
		}
		return getName(countryCode);
	}

	public ngAfterViewInit(): void {
		if (this.backdrop) {
			this.backdrop.nativeElement.addEventListener("click", (e: MouseEvent) => {
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

	public get animationState$(): Observable<"in" | "out"> {
		return this.animationStateSource.asObservable();
	}

	public toggleShowPopUp(): void {
		this.animationState = this.animationState === "in" ? "out" : "in";
	}

	public changeListingView(theme: "list" | "grid") {
		this.clientMarketplaceService.updateMarketplaceProductView(theme)
	}

	public updateSortType(e: { label: string; value: string }) {
		if (e) {
			const type: string = e?.label;
			this.listingState = {
				...this.listingState,
				relevance: type === "Relevance",
			};
			this.clientMarketplaceService.updateMarketplaceProducts(generateQueryString(this.state.getValue()));
		}
	}

	public setSearch(searchValue: string): void {
		this.formGroup.controls['q'].setValue(searchValue);
	}

	public searchProducts(): void {
		this.clientMarketplaceService.updateMarketplaceProducts({q: this.formGroup.value.q});
	}

	public togglePage(page: number, state?: { [key: string]: string }): void {
		this.currentPageSource.next(page);
		if (page === 1) {
			this.router.navigate([], {
				queryParams: {
					page: undefined
				}
			})
			return;
		}
		this.router.navigate([], {
			queryParams: {
				page
			},
		});

		this.currentPageSource.next(page);
	}

	public closePopUp(): void {
		this.animationStateSource.next("out");
		this.windowScrollingService.enable();
	}

	public openPopUp(): void {
		this.animationStateSource.next("in");
		this.windowScrollingService.disable();
	}

	public extractFilterOptions(options: any): void {
		const {option, filterIndex, hiddenLabel, deleteMode} = options;
		this.chooseFilter(option, filterIndex, hiddenLabel, deleteMode);
	}

	public chooseFilter(option: any, filterIndex: number, hiddenLabel: string, deleteMode: boolean) {
		const queryParams = {...this.route.snapshot.queryParams};
		if (!deleteMode) {
			switch (hiddenLabel) {
				case 'rootCategory':
					this.chipsService.updateFilterChips({
						value: option.path,
						label: option.name,
						filterName: "categories[]",
						rootCategoryId: null
					});
					// this.state.next({...this.state.getValue(), "categories[]": [option.path]});
					// "categories[]": [option.id]
					this.router.navigate(['/b2bmarket/listing', option.path], {skipLocationChange: true})
					this.routerNavigate(['/b2bmarket/listing', option.path], null, {}, null);
					break;
				case 'categories':
					this.chipsService.updateFilterChips({
						value: option.path,
						label: option.name,
						filterName: "categories[]",
						rootCategoryId: option.rootCategoryId,
						rootCategoryPath: option.rootCategoryPath
					});
					this.childrenCategories = [option.id];
					this.routerNavigate([option.path], 'merge', {}, this.route);
					break;
				case 'country[]':
					this.chipsService.updateFilterChips({
						value: option.name,
						label: this.getCountryName(option.name),
						filterName: "country[]"
					});
					this.routerNavigate([], 'merge', {"country[]": option.name}, this.route);
					break;
				case 'type':
					this.chipsService.updateFilterChips({value: option.name, label: option.name, filterName: "type"});
					this.routerNavigate([], 'merge', {"type": option.name}, this.route);
					break;
			}
		} else {
			switch (hiddenLabel) {
				case 'rootCategory':
					this.clearFilterStore();
					break;
				case 'categories':
					this.chipsService.removeChip(option);
					this.childrenCategories = this.childrenCategories.filter(childCategory => childCategory !== option.id);
					delete queryParams['categories[]'];
					if (!this.childrenCategories.length) {
						this.childrenCategories.push(option.rootCategoryId);
						this.routerNavigate(['/b2bmarket/listing', option.rootCategoryPath], null, queryParams, this.route);
						return;
					}

					this.routerNavigate([], 'merge', queryParams, this.route);
					break;
				case 'country[]':
					this.chipsService.removeChipsByHiddenLabel(hiddenLabel);
					delete queryParams["country[]"];
					this.routerNavigate([], null, queryParams, this.route);
					break;
				case 'type':
					this.chipsService.removeChipsByHiddenLabel(hiddenLabel);
					delete queryParams["type"];
					this.routerNavigate([], null, queryParams, this.route);
					break;
			}
		}
	}

	public isOptionSelected(option: any, filterIndex: number, filtersArr: any[]): boolean {
		if (!filtersArr[filterIndex].selectedOption.getValue()) return false;
		return option.name === filtersArr[filterIndex].selectedOption.getValue().name;
	}

	public restrictOpen(option: any, filtersArr: any[]): boolean {
		const rootCategoriesIndex = filtersArr.findIndex((item) => item.name === 'Sectors');
		return option.name !== 'Sectors' && !filtersArr[rootCategoriesIndex].selectedOption.getValue();
	}

	public clearFilterStore(): void {
		this.router.navigate(['/b2bmarket/listing']);
		this.chipsService.resetChips();
	}

	public removeFilter($event: any): void {
		let {filter, chipsState} = $event;
		if (filter.filterName === 'categories[]' && !filter?.rootCategoryId) {
			this.clearFilterStore();
			return;
		}
		const temp: any = {};

		chipsState.forEach((item: any) => {
			if (item.filterName !== 'categories[]') {
				temp[item.filterName] = item.value || item.name
			}
		});

		if (filter.rootCategoryPath) {
			this.routerNavigate(['/b2bmarket/listing', filter.rootCategoryPath], 'merge', temp, this.route);
		} else {
			this.routerNavigate([], null, temp, this.route);
		}
	}

	private renameCountries(): void {
		overwrite([
			{code: "GB", name: "United Kingdom"},
			{code: "MD", name: "Moldova"},
			{code: "TZ", name: "Tanzania"},
			{code: "VE", name: "Venezuela"},
			{code: "US", name: "United States"}
		])
	}

	private getSortTypes(): SortType[] {
		return [
			{
				value: "createdAt",
				label: "Recent",
			},
			{
				value: "DESC",
				label: "Relevance",
			},
		];
	}

	private getFormGroup(): FormGroup {
		return new FormGroup<any>({
			"transportType": new FormControl(null),
			"categories[]": new FormControl(null),
			"sort": new FormControl(null),
			"q": new FormControl(null),
			"offset": new FormControl(0),
			"limit": new FormControl(12),
		});
	}

	private initQueryParams(): void {
		if (this.queryParams.q) {
			this.listingState['q'] = this.queryParams.q;
			this.formGroup.patchValue({q: this.queryParams.q});
		}

		this.formGroup
			.get("q")
			.valueChanges.pipe(
			untilDestroyed(this),
			debounceTime(300),
			tap((res) => (this.listingState['q'] = res)),
		).subscribe((res) => {
			if (res.trim()) {
				this.router.navigate([], {queryParams: {q: res}, queryParamsHandling: 'merge'})
			} else {
				const queryParams = {...this.route.snapshot.queryParams};
				delete queryParams['q'];
				this.router.navigate([], {queryParams})
			}
		});
	}

	private getObservableForCategories(): Observable<InitialCategoryState> {
		return this.categoriesService.getCategories$().pipe(
			map((categories) => categories.categories),
			map((categories) => {
				const ans = {name: "", _id: ""};
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
		const state = this.state.getValue();

		if (page) {
			this.currentPageSource.next(page);
			// this.togglePage(page, state);
		}

		combineLatest([this.route.params, this.route.queryParams])
			.pipe(untilDestroyed(this))
			.subscribe(([params, queryParams]) => {
				const temp: { [key: string]: string } = {};
				if (params) {
					temp['categories[]'] = params['childCategory'] ?? params['id'];
				}
				if (queryParams) {
					for (const key in queryParams) {
						if (key !== 'page' && queryParams[key] !== '1')
							temp[key] = queryParams[key];
					}
				}
				this.clientMarketplaceService.marketFilters$.subscribe(data => {
					const chips: any[] = [];
					data.forEach((item: any) => {
						const fieldToHiddenLabelObj: any = {
							'Sectors': 'categories[]',
							'Categories': 'categories[]',
							'Company type': 'type',
							'Country': 'country[]'
						}
						const temp = item.options.filter((option: any) => option.checked)
							.map((option: any) => ({
								...option,
								filterName: fieldToHiddenLabelObj[item.name],
								label: option.name,
								value: option.path
							}))
						chips.push(...temp);
						this.chipsService.updateChips(chips);
					});
				});

				this.state.next(temp);
			});
	}

	private routerNavigate(url: string[] = [], queryParamsHandling: QueryParamsHandling = null,
												 queryParams: {
													 [key: string]: any
												 } | null = null, relativeTo: ActivatedRoute | null = null): void {
		this.router.navigate(url, {
			queryParams,
			queryParamsHandling,
			relativeTo,

		});
	}
}
