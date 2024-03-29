import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { CategoriesService } from 'src/app/client/services/categories/categories.service';
import { SourcingRequestService } from '../../sourcing-request.service';
import { UserService } from 'src/app/client/pages/client-profile/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RfqExplanationModalComponent } from '../../rfq-explanation-modal/rfq-explanation-modal.component';
import { COUNTRIES } from '../../../../../../../projects/ngx-country-select/src/lib/data';
import { getName } from 'country-list';
import { ChipsService } from '../../../client-marketplace/components/filter-chips/chips.service';
import { WindowScrollingService } from '../../../../../core/services/window-scrolling/window-scrolling.service';
import { SeoService } from '../../../../../core/services/seo/seo.service';

let defaultState: any[] = null;

function generateQueryString(
	obj: ArrayLike<unknown> | { [s: string]: unknown }
) {
	return Object.entries(obj)
		.filter(([, value]: any) => !!value)
		.reduce((queryString: string, [key, value]: any) => {
			return Array.isArray(value)
				? `${queryString}${value.reduce(
						(str, arrayItem) => `${str}${key}=${arrayItem}&`,
						''
					)}`
				: `${queryString}${key}=${value}&`;
		}, '?');
}

@Component({
	selector: 'b2b-client-sourcing-request-listing',
	templateUrl: './client-sourcing-request-listing.component.html',
	styleUrls: ['./client-sourcing-request-listing.component.scss'],
})
export class ClientSourcingRequestListingComponent
	implements OnInit, AfterViewInit
{
	public explanationModal = RfqExplanationModalComponent;
	public b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;

	public formGroup: FormGroup = this.createFromGroup();
	public readonly rfqQuotesCounter: number;

	public categories$: Observable<any> = this.getCategories();
	public savedSearches$: Observable<any> = this.getSavedSearches();

	public totalLength$: Observable<number> =
		this.sourcingRequestService.rfqListLength$;
	public filtersSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

	private filteredQueryObj: any = { limit: 10, offset: 0 };
	private currentPageSource: BehaviorSubject<number> =
		new BehaviorSubject<number>(1);
	private listingState: BehaviorSubject<any> = new BehaviorSubject<any>({});
	private animationStateSource: BehaviorSubject<'in' | 'out'> =
		new BehaviorSubject<'in' | 'out'>('out');

	constructor(
		private formBuilder: FormBuilder,
		private categoriesService: CategoriesService,
		private sourcingRequestService: SourcingRequestService,
		private userService: UserService,
		private router: Router,
		private route: ActivatedRoute,
		public chipsService: ChipsService,
		private windowScrollingService: WindowScrollingService,
		private seoService: SeoService
	) {
		this.rfqQuotesCounter = this.userService.getUser()?.rfqQuotes;
	}

	public get animationState$(): Observable<'in' | 'out'> {
		return this.animationStateSource.asObservable();
	}

	ngOnInit(): void {
		this.updateRfqListSource(this.filteredQueryObj);
		this.sourcingRequestPageInit();

		this.listingState.subscribe((state) => {
			this.updateRfqListSource({ ...state, limit: 10, offset: 0 });
		});

		this.seoService.setTitle('Source Wholesale Online | Globy B2B Marketplace');
		this.seoService.setDescription(
			'Request quotation for wholesale goods online or quote as a supplier. Join Globy B2B Marketplace for effortless sourcing, procurement and sales boost.'
		);
	}

	ngAfterViewInit() {
		this.categoriesService
			.getCategories$()
			.pipe()
			.subscribe(({ categories }) => {
				defaultState = [
					{
						hiddenLabel: 'rootCategory',
						isOpen: true,
						name: 'Sectors',
						options: categories,
						selectedOption: new BehaviorSubject<any>(null),
					},
					{
						hiddenLabel: 'country[]',
						isOpen: false,
						name: 'Country',
						options: this.getCountryOptions(),
						selectedOption: new BehaviorSubject<any>(null),
					},
				];
				this.filtersSource.next(defaultState);
			});
	}

	public chooseFilter(
		option: any,
		filterIndex: number,
		hiddenLabel: string,
		deleteMode: boolean
	) {
		// const queryParams = {...this.route.snapshot.queryParams};
		const filtersArr = this.filtersSource.getValue();
		if (!deleteMode) {
			switch (hiddenLabel) {
				case 'rootCategory':
					this.chipsService.updateFilterChips({
						value: option.path,
						label: option.name,
						filterName: 'categories[]',
						rootCategoryId: null,
					});

					filtersArr[filterIndex].selectedOption.next([option]);
					filtersArr.forEach((item) => (item.isOpen = true));
					this.listingState.next({ 'categories[]': option._id });

					this.filtersSource.next(filtersArr);
					// this.router.navigate([], {queryParams: {page: 1}})
					// this.state.next({...this.state.getValue(), "categories[]": [option.path]});
					// "categories[]": [option.id]
					// this.router.navigate(['/b2bmarket/listing', option.path], {skipLocationChange: true})
					// this.routerNavigate(['/b2bmarket/listing', option.path], null, {}, null);
					break;
				case 'country[]':
					this.chipsService.updateFilterChips({
						value: option.name,
						label: option.label,
						filterName: 'country[]',
					});
					filtersArr[filterIndex].selectedOption.next([option]);
					this.filtersSource.next(filtersArr);
					this.listingState.next({
						...this.listingState.getValue(),
						destinationTo: option.code,
					});
					// this.routerNavigate([], 'merge', {"country[]": option.name}, this.route);
					break;
			}
		} else {
			switch (hiddenLabel) {
				case 'rootCategory':
					this.clearFilterStore();
					break;
				case 'country[]':
					this.chipsService.removeChipsByHiddenLabel(hiddenLabel);
					filtersArr[filterIndex].selectedOption.next(null);
					this.filtersSource.next(filtersArr);
					this.listingState.next({
						...this.listingState.getValue(),
						destinationTo: undefined,
					});
					// delete queryParams["country[]"];
					// this.routerNavigate([], null, queryParams, this.route);
					break;
			}
		}
	}

	private getCountryOptions() {
		return COUNTRIES.map((country) => ({
			label: getName(country),
			icon: country,
			code: country.toLowerCase(),
		})).sort((a, b): number => a.label.localeCompare(b.label));
	}

	public get currentPage$(): Observable<number> {
		return this.currentPageSource.asObservable();
	}

	public onSubmit(form: FormGroup): void {
		const requestParams = this.getParamsToRequest(form);
		if (requestParams && Object.values(requestParams).length) {
			this.filteredQueryObj = { ...requestParams, limit: 10, offset: 0 };
			this.updateRfqListSource(this.filteredQueryObj);
			form.reset();
		} else if (!Object.values(requestParams).length) {
			this.filteredQueryObj = { limit: 10, offset: 0 };
			this.updateRfqListSource(this.filteredQueryObj);
		}
	}

	public togglePageNumber(page: number): void {
		this.filteredQueryObj = {
			...this.filteredQueryObj,
			offset: (page - 1) * 10,
		};
		this.updateRfqListSource(this.filteredQueryObj);

		this.router.navigate([], {
			relativeTo: this.route,
			queryParams: {
				page,
			},
			queryParamsHandling: 'merge',
		});

		this.currentPageSource.next(page);
	}

	public setSearch(searchValue: string): void {
		this.formGroup.controls['searchText'].setValue(searchValue);
		this.onSubmit(this.formGroup);
	}

	private updateRfqListSource(queryObject: any): void {
		this.sourcingRequestService.updateRfqList(generateQueryString(queryObject));
	}

	private getParamsToRequest(form: FormGroup) {
		const params: any = {};
		let emptyObject: boolean = true;
		const formValue = form.value;
		Object.entries(formValue).forEach(([key, value]) => {
			if (value) {
				if (key === 'searchText') {
					params['q'] = value;
					emptyObject = false;
				} else if (key === 'categories[]') {
					if (value instanceof Object) {
						params['categories[]'] = value;
						emptyObject = false;
					}
				} else if (key === 'country') {
					params['destinationTo'] = value;
					emptyObject = false;
				}
			}
		});

		return emptyObject ? {} : params;
	}

	private createFromGroup(): FormGroup {
		return this.formBuilder.group({
			searchText: [null],
			'categories[]': [null],
			country: [null],
		});
	}

	private getSavedSearches(): Observable<any> {
		return of(['Saved search 1', 'Saved search 2']);
	}

	private getCategories(): Observable<any> {
		return this.categoriesService.getCategories$().pipe(
			map(({ categories }) =>
				categories.map((category: { _id: any; name: any }) => ({
					id: category._id,
					value: category.name,
				}))
			)
		);
	}

	private sourcingRequestPageInit(): void {
		let page = this.route.snapshot.queryParams['page'];
		if (!page) {
			this.router.navigate([], {
				relativeTo: this.route,
				queryParams: {
					page: 1,
				},
				queryParamsHandling: 'merge',
			});
			page = 1;
		}

		this.togglePageNumber(+page);
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

	public clearFilterStore(): void {
		const temp = this.filtersSource.getValue();
		temp.forEach((item) => item.selectedOption.next(null));
		temp[1].isOpen = false;
		// this.filtersSource.next(defaultState);
		// this.router.navigate(['/b2bmarket/listing']);
		this.updateRfqListSource({});
		this.chipsService.resetChips();
	}

	openPopUp() {
		this.animationStateSource.next('in');
		this.windowScrollingService.disable();
	}

	extractFilterOptions(options: any) {
		const { option, filterIndex, hiddenLabel, deleteMode } = options;
		this.chooseFilter(option, filterIndex, hiddenLabel, deleteMode);
	}

	closePopUp() {
		this.animationStateSource.next('out');
		this.windowScrollingService.enable();
	}

	removeFilter($event: any) {
		let { filter, chipsState } = $event;
		if (filter.filterName === 'categories[]' && !filter?.rootCategoryId) {
			this.clearFilterStore();
			return;
		} else {
			this.listingState.next({
				...this.listingState.getValue(),
				destinationTo: undefined,
			});
			const filters = this.filtersSource.getValue();
			filters[1].selectedOption.next(null);
		}
		// const temp: any = {};
		//
		// chipsState.forEach((item: any) => {
		// 	if (item.filterName !== 'categories[]') {
		// 		temp[item.filterName] = item.value || item.name
		// 	}
		// });
		//
		// if (filter.rootCategoryPath) {
		// 	// this.routerNavigate(['/b2bmarket/listing', filter.rootCategoryPath], 'merge', temp, this.route);
		// } else {
		// 	// this.routerNavigate([], null, temp, this.route);
		// }	}
	}
}
