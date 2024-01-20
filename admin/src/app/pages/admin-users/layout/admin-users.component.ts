// import {
// 	HostListener,
// 	ChangeDetectionStrategy,
// 	ChangeDetectorRef,
// 	// Component,
// 	OnInit,
// 	TemplateRef,
// 	// ViewChild,
// } from '@angular/core';
// import { Router } from '@angular/router';
// // import { DatePipe } from '@angular/common';
//
// import {
// 	BehaviorSubject,
// 	combineLatest,
// 	mergeMap,
// 	// Observable,
// 	Subject,
// 	tap,
// } from 'rxjs';
// import {
// 	filter,
// 	// map,
// 	// startWith,
// 	// switchMap
// } from 'rxjs/operators';
//
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
// import { HotToastService } from '@ngneat/hot-toast';
// import { B2bNgxButtonThemeEnum } from 'projects/ngx-button/src/public-api';
//
// import { UserService } from '../../../../../../src/app/client/pages/client-profile/services/user/user.service';
// import { ApiService } from '../../../../../../src/app/core/services/api/api.service';
// import { CategoriesService } from '../../../../../../src/app/client/services/categories/categories.service';
// import { ChangeQuotesAmountDialogComponent } from '../components/change-quotes-amount-dialog/change-quotes-amount-dialog.component';
// import { ConfirmationDialogComponent } from '../../../../../../src/app/client/shared/components/confirmation-dialog/confirmation-dialog.component';
// import { MatDialog } from '@angular/material/dialog';
// import { FormBuilder, FormControl } from '@angular/forms';
// import { PlatformService } from '../../../../../../src/app/client/services/platform/platform.service';
// import { ColumnMode, TableColumn } from '@siemens/ngx-datatable';
//
// @UntilDestroy()
// @Component({
// 	selector: 'b2b-admin-users',
// 	templateUrl: './admin-users.component.html',
// 	styleUrls: ['./admin-users.component.scss'],
// 	changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class AdminUsersComponent implements OnInit {
// 	@ViewChild('headerCategoryOne', { static: true })
// 	headerCategoryOne: TemplateRef<any>;
// 	@ViewChild('editCategoryOne', { static: true })
// 	editCategoryOne: TemplateRef<any>;
//
// 	@ViewChild('headerCategoryTwo', { static: true })
// 	headerCategoryTwo: TemplateRef<any>;
// 	@ViewChild('editCategoryTwo', { static: true })
// 	editCategoryTwo: TemplateRef<any>;
//
// 	@ViewChild('headerPreferences', { static: true })
// 	headerPreferences: TemplateRef<any>;
// 	@ViewChild('editPreferences', { static: true })
// 	editPreferences: TemplateRef<any>;
//
// 	@ViewChild('headerOffers', { static: true }) headerOffers: TemplateRef<any>;
// 	@ViewChild('editOffers', { static: true }) editOffers: TemplateRef<any>;
//
// 	@ViewChild('headerOffersDate', { static: true })
// 	headerOffersDate: TemplateRef<any>;
// 	@ViewChild('editOffersDate', { static: true })
// 	editOffersDate: TemplateRef<any>;
//
// 	@ViewChild('headerActions', { static: true }) headerActions: TemplateRef<any>;
// 	@ViewChild('editActions', { static: true }) editActions: TemplateRef<any>;
//
// 	@ViewChild('headerSoldCargo', { static: true })
// 	headerSoldCargo: TemplateRef<any>;
// 	@ViewChild('editSoldCargo', { static: true }) editSoldCargo: TemplateRef<any>;
//
// 	public readonly b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
//
// 	public users$: Observable<any>;
// 	public readonly menuOptions: any;
//
// 	public readonly pageSubject = new BehaviorSubject(null);
// 	public readonly forceSubject = new Subject();
// 	public readonly filtersSubject = new BehaviorSubject(null);
//
// 	public categories: any[];
// 	public parsedCategories: any;
//
// 	readonly columnMode = ColumnMode;
//
// 	public totalCount: number;
// 	public page: number;
// 	public filtersControl: FormControl;
//
// 	public columns: TableColumn[] = [];
//
// 	private readonly MILLISECOND_IN_ONE_DAY = 86400000;
//
// 	constructor(
// 		private readonly _userService: UserService,
// 		private readonly _hotToastrService: HotToastService,
// 		private readonly _apiService: ApiService,
// 		private readonly _categoriesService: CategoriesService,
// 		private readonly _router: Router,
// 		private readonly _formBuilder: FormBuilder,
// 		private readonly dialog: MatDialog,
// 		private readonly changeDetectionRef: ChangeDetectorRef,
// 		private readonly platformService: PlatformService
// 	) {
// 		this.users$ = this.getUsers$();
// 		// this.menuOptions = this._getMenuOptions();
// 		this.totalCount = 0;
// 		this.page = 0;
// 	}
//
// 	ngOnInit() {
// 		this.columns = this.getColumns();
// 		this.filtersControl = this._formBuilder.control({});
//
// 		this.filtersControl.valueChanges
// 			.pipe(untilDestroyed(this))
// 			.subscribe((filters) => {
// 				const {
// 					preferences = [],
// 					categoryOneOrFilterType,
// 					categoryTwoOrFilterType,
// 					categoryThreeOrFilterType,
// 					...otherFilters
// 				} = filters;
//
// 				const sameRangeForRegistration =
// 					new Date(otherFilters.registrationDate.startDate).getTime() ===
// 					new Date(otherFilters.registrationDate.endDate).getTime();
//
// 				const sameRangeForLastActivity =
// 					new Date(otherFilters.lastActivity.startDate).getTime() ===
// 					new Date(otherFilters.lastActivity.endDate).getTime();
//
// 				const sameRangeForOfferTime =
// 					new Date(otherFilters.offerTime.startDate).getTime() ===
// 					new Date(otherFilters.offerTime.endDate).getTime();
//
// 				const parsedFilters = {
// 					...otherFilters,
// 					phone: otherFilters?.phone?.e164Number
// 						? otherFilters.phone.e164Number.replace('+', '')
// 						: null,
// 					registrationDate: otherFilters.registrationDate.startDate
// 						? `${
// 								new Date(
// 									new Date(otherFilters.registrationDate.startDate).getTime() +
// 										this.MILLISECOND_IN_ONE_DAY
// 								)
// 									.toISOString()
// 									.split('T')[0]
// 						  },${
// 								new Date(
// 									new Date(otherFilters.registrationDate.endDate).getTime() +
// 										(sameRangeForRegistration ? this.MILLISECOND_IN_ONE_DAY : 0)
// 								)
// 									.toISOString()
// 									.split('T')[0]
// 						  }`
// 						: null,
// 					lastActivity: otherFilters.lastActivity.startDate
// 						? `${
// 								new Date(
// 									new Date(otherFilters.lastActivity.startDate).getTime() +
// 										this.MILLISECOND_IN_ONE_DAY
// 								)
// 									.toISOString()
// 									.split('T')[0]
// 						  },${
// 								new Date(
// 									new Date(otherFilters.lastActivity.endDate).getTime() +
// 										(sameRangeForLastActivity ? this.MILLISECOND_IN_ONE_DAY : 0)
// 								)
// 									.toISOString()
// 									.split('T')[0]
// 						  }`
// 						: null,
// 					offerTime: otherFilters.offerTime.startDate
// 						? `${
// 								new Date(
// 									new Date(otherFilters.offerTime.startDate).getTime() +
// 										this.MILLISECOND_IN_ONE_DAY
// 								)
// 									.toISOString()
// 									.split('T')[0]
// 						  },${
// 								new Date(
// 									new Date(otherFilters.offerTime.endDate).getTime() +
// 										(sameRangeForOfferTime ? this.MILLISECOND_IN_ONE_DAY : 0)
// 								)
// 									.toISOString()
// 									.split('T')[0]
// 						  }`
// 						: null,
// 					categories:
// 						!!preferences &&
// 						preferences
// 							.filter(
// 								(id: string | number) => this.parsedCategories[id].level === 1
// 							)
// 							.map((el: string | number) => this.parsedCategories[el].name)
// 							.join(categoryOneOrFilterType ? 'OR' : 'AND'),
// 					categoryPosts:
// 						!!preferences &&
// 						preferences
// 							.filter(
// 								(id: string | number) => this.parsedCategories[id].level === 2
// 							)
// 							.map((el: string | number) => this.parsedCategories[el].name)
// 							.join(categoryTwoOrFilterType ? 'OR' : 'AND'),
// 					preferredCargo:
// 						!!preferences &&
// 						preferences
// 							.filter(
// 								(id: string | number) => this.parsedCategories[id].level === 3
// 							)
// 							.map((el: string | number) => this.parsedCategories[el].name)
// 							.join(categoryThreeOrFilterType ? 'OR' : 'AND'),
// 				};
//
// 				this.pageSubject.next(0);
// 				this.filtersSubject.next(parsedFilters);
// 			});
// 	}
//
// 	public export(): void {
// 		const page = this.pageSubject.getValue();
// 		const filters = this.filtersSubject.getValue();
//
// 		this._userService
// 			.getUsersCsv(page, 10, filters)
// 			.pipe(untilDestroyed(this))
// 			.subscribe((response) => {
// 				if (this.platformService.isServer) {
// 					return;
// 				}
// 				const downloadURL = window.URL.createObjectURL(response as Blob);
// 				const link = document.createElement('a');
// 				link.href = downloadURL;
// 				link.download = 'users.csv';
// 				link.click();
// 			});
// 	}
//
// 	private getUsers$(): Observable<any> {
// 		const categories$ = this.getCategories();
// 		const page$ = this.pageSubject.asObservable().pipe(startWith(0));
// 		const force$ = this.forceSubject.asObservable().pipe(startWith(true));
// 		const filters$ = this.filtersSubject.asObservable();
// 		return combineLatest([categories$, page$, force$, filters$]).pipe(
// 			switchMap(([categories, page, _, filters]: any) => {
// 				return this._userService
// 					.getUsers(page, _, filters)
// 					.pipe(map((res) => ({ categories, res })));
// 			}),
// 			map((data: any) => {
// 				this.categories = data.categories.categories;
// 				const parsedUsersPreferences = this.formatUsersPreferences(
// 					data.categories,
// 					data.res.users
// 				);
// 				const parsedUsersDate = parsedUsersPreferences.map((user) => {
// 					return {
// 						...user,
// 						country:
// 							user.country ||
// 							(user.phone?.countryCode ? user.phone.countryCode : null),
// 						...(user.lastActivity
// 							? {
// 									lastActivity: new Date(new Date(user.lastActivity).getTime())
// 										.toISOString()
// 										.split('T')[0],
// 							  }
// 							: {}),
// 					};
// 				});
// 				this.totalCount = data.res.totalCount;
// 				return parsedUsersDate;
// 			})
// 		);
// 	}
//
// 	public formatUsersPreferences(
// 		categories: { categories: string | any[] },
// 		users: any[]
// 	): any[] {
// 		if (!categories.categories.length || !users || !users.length) {
// 			return [];
// 		}
//
// 		this.parsedCategories = this.parseCategories(categories.categories);
// 		return users.map((user) => {
// 			const userCategories = user.preferences.map(
// 				(id: string | number) => this.parsedCategories[id]
// 			);
// 			return {
// 				...user,
// 				visible: false,
// 				category__1: userCategories.filter(
// 					(el: { level: number }) => el?.level === 1
// 				),
// 				category__2: userCategories.filter(
// 					(el: { level: number }) => el?.level === 2
// 				),
// 				category__3: userCategories.filter(
// 					(el: { level: number }) => el?.level === 3
// 				),
// 			};
// 		});
// 	}
//
// 	public showMore(
// 		event: { stopImmediatePropagation: () => void },
// 		row: { _id: any }
// 	): void {
// 		event.stopImmediatePropagation();
//
// 		this.users$ = this.users$.pipe(
// 			untilDestroyed(this),
// 			map((users: any[]) => {
// 				const currUserIdx = users.findIndex((el: any) => el._id === row._id);
// 				if (currUserIdx >= 0) {
// 					users[currUserIdx].visible = !users[currUserIdx].visible || false;
// 				}
// 				return users;
// 			})
// 		);
// 	}
//
// 	public parseCategories(categories: string | any[], level = 1): any[] {
// 		return typeof categories !== 'string'
// 			? categories?.reduce(
// 					(
// 						pre: any,
// 						curr: {
// 							_id: any;
// 							children: string | any[];
// 						}
// 					) => {
// 						return {
// 							...pre,
// 							[curr._id]: { ...curr, level },
// 							...(curr.children && curr.children.length
// 								? this.parseCategories([...curr.children], level + 1)
// 								: []),
// 						};
// 					},
// 					{}
// 			  )
// 			: null;
// 	}
//
// 	onClick(event: {
// 		type: string;
// 		column: { name: string };
// 		row: { rfqQuotes: any; _id: string };
// 	}) {
// 		if (event.type === 'click' && event.column.name === 'Quotes') {
// 			this.dialog
// 				.open(ChangeQuotesAmountDialogComponent, {
// 					data: {
// 						currentValue: event.row.rfqQuotes ?? 0,
// 					},
// 				})
// 				.afterClosed()
// 				.pipe(
// 					filter((res) => !!res),
// 					map((quotesNumber: number) =>
// 						this._userService
// 							.updateUserQuotes(event.row._id, quotesNumber)
// 							.subscribe(() => {
// 								this.changeDetectionRef.detectChanges();
// 							})
// 					)
// 				)
// 				.subscribe();
//
// 			return;
// 		}
// 		if (event.type === 'click') {
// 			this._router.navigate([this._router.url, event.row._id]);
// 		}
// 	}
//
// 	private getCategories(): Observable<any> {
// 		return this._categoriesService.getCategories$();
// 	}
//
// 	public setPage(event: { offset: number }): void {
// 		this.page = event.offset;
// 		this.pageSubject.next(event.offset);
// 	}
//
// 	public deleteUser(event: Event, id: string): void {
// 		event.stopImmediatePropagation();
// 		this.dialog
// 			.open(ConfirmationDialogComponent, {
// 				data: {
// 					title: 'Delete User',
// 					message: 'Are you sure you want to delete user?',
// 					confirmButtonText: 'Delete',
// 					confirmButtonTheme: B2bNgxButtonThemeEnum.BACKGROUND_RED,
// 					cancelButtonText: 'Cancel',
// 					cancelButtonTheme: B2bNgxButtonThemeEnum.OUTLINE_BLACK,
// 				},
// 			})
// 			.afterClosed()
// 			.pipe(
// 				filter((res) => !!res),
// 				mergeMap(() => {
// 					return this._userService.deleteUserById(id).pipe(
// 						untilDestroyed(this),
// 						this._hotToastrService.observe({
// 							loading: 'User deleting',
// 							success: 'User deleted',
// 							error: 'User deleting failed',
// 						})
// 					);
// 				})
// 			)
// 			.subscribe(() => {
// 				this.forceSubject.next(true);
// 			});
// 	}
//
// 	// private _getMenuOptions() {
// 	// 	return [
// 	// 		{
// 	// 			label: "Delete",
// 	// 			icon: "delete-red",
// 	// 			onClick: (user) => {
// 	// 				this._userService
// 	// 					.deleteUserById(user._id)
// 	// 					.pipe(
// 	// 						untilDestroyed(this),
// 	// 						this._hotToastrService.observe({
// 	// 							loading: "User deleting",
// 	// 							success: "User deleted",
// 	// 							error: "User deleting failed",
// 	// 						})
// 	// 					)
// 	// 					.subscribe(() => {
// 	// 						this.forceSubject.next(true);
// 	// 					});
// 	// 			},
// 	// 		},
// 	// 	];
// 	// }
//
// 	stopImmediatePropagation(event: Event) {
// 		//
// 	}
//
// 	public getColumns(): TableColumn[] {
// 		return [
// 			{
// 				name: 'Type of User',
// 				prop: 'role.displayName',
// 			},
// 			{
// 				name: 'Quotes',
// 				prop: 'rfqQuotes',
// 			},
// 			{
// 				name: 'Registration date/time',
// 				prop: 'createdAt',
// 				pipe: {
// 					transform(date: Date): string {
// 						return new DatePipe('en-US').transform(date, 'yyyy-MM-dd');
// 					},
// 				},
// 			},
// 			{
// 				name: 'Full name',
// 				prop: 'fullName',
// 			},
// 			{
// 				name: 'Company(optional)',
// 				prop: 'company',
// 			},
// 			{
// 				name: 'Email',
// 				prop: 'email',
// 			},
// 			{
// 				name: 'Phone number',
// 				prop: 'phone.e164Number',
// 			},
// 			{
// 				name: 'Country',
// 				prop: 'country',
// 			},
// 			{
// 				name: 'Country(by phone number)',
// 				prop: 'phone.countryCode',
// 			},
// 			{
// 				name: 'Website',
// 				prop: 'site',
// 			},
// 			{
// 				name: 'Email confirmed',
// 				prop: 'emailConfirmed',
// 			},
// 			{
// 				name: 'Social auth type',
// 				prop: 'socialAuthType',
// 			},
// 			{
// 				cellTemplate: this.editCategoryOne,
// 				headerTemplate: this.headerCategoryOne,
// 				prop: 'category__1',
// 			},
// 			// {
// 			// 	cellTemplate: this.editCategoryTwo,
// 			// 	headerTemplate: this.headerCategoryTwo,
// 			// 	prop: "category__2",
// 			// },
// 			{
// 				cellTemplate: this.editPreferences,
// 				headerTemplate: this.headerPreferences,
// 				prop: 'category__3',
// 			},
// 			{
// 				name: 'Last activity',
// 				prop: 'lastActivity',
// 			},
// 			{
// 				cellTemplate: this.editOffers,
// 				headerTemplate: this.headerOffers,
// 				prop: 'offers',
// 			},
// 			{
// 				cellTemplate: this.editOffersDate,
// 				headerTemplate: this.headerOffersDate,
// 				prop: 'offers',
// 			},
// 			{
// 				cellTemplate: this.editSoldCargo,
// 				headerTemplate: this.headerSoldCargo,
// 				prop: 'offers',
// 			},
// 			{
// 				cellTemplate: this.editActions,
// 				headerTemplate: this.headerActions,
// 				prop: '_id',
// 			},
// 		];
// 	}
// }
//
//
// import {HttpClient} from '@angular/common/http';
// import {Component, ViewChild, AfterViewInit} from '@angular/core';
// import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
// import {MatSort, MatSortModule, SortDirection} from '@angular/material/sort';
// import {merge, Observable, of as observableOf} from 'rxjs';
// import {catchError, map, startWith, switchMap} from 'rxjs/operators';
// import {MatTableModule} from '@angular/material/table';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import {NgIf, DatePipe} from '@angular/common';
//
// /**
//  * @title Table retrieving data through HTTP
//  */
// @Component({
// 	selector: 'table-http-example',
// 	styleUrls: ['table-http-example.css'],
// 	templateUrl: 'table-http-example.html',
// 	standalone: true,
// 	imports: [
// 		NgIf,
// 		MatProgressSpinnerModule,
// 		MatTableModule,
// 		MatSortModule,
// 		MatPaginatorModule,
// 		DatePipe,
// 	],
// })
// export class TableHttpExample implements AfterViewInit {
// 	displayedColumns: string[] = ['created', 'state', 'number', 'title'];
// 	exampleDatabase: ExampleHttpDatabase | null;
// 	data: GithubIssue[] = [];
//
// 	resultsLength = 0;
// 	isLoadingResults = true;
// 	isRateLimitReached = false;
//
// 	@ViewChild(MatPaginator) paginator: MatPaginator;
// 	@ViewChild(MatSort) sort: MatSort;
//
// 	constructor(private _httpClient: HttpClient) {}
//
// 	ngAfterViewInit() {
// 		this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);
//
// 		// If the user changes the sort order, reset back to the first page.
// 		this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
//
// 		merge(this.sort.sortChange, this.paginator.page)
// 			.pipe(
// 				startWith({}),
// 				switchMap(() => {
// 					this.isLoadingResults = true;
// 					return this.exampleDatabase!.getRepoIssues(
// 						this.sort.active,
// 						this.sort.direction,
// 						this.paginator.pageIndex,
// 					).pipe(catchError(() => observableOf(null)));
// 				}),
// 				map(data => {
// 					// Flip flag to show that loading has finished.
// 					this.isLoadingResults = false;
// 					this.isRateLimitReached = data === null;
//
// 					if (data === null) {
// 						return [];
// 					}
//
// 					// Only refresh the result length if there is new data. In case of rate
// 					// limit errors, we do not want to reset the paginator to zero, as that
// 					// would prevent users from re-triggering requests.
// 					this.resultsLength = data.total_count;
// 					return data.items;
// 				}),
// 			)
// 			.subscribe(data => (this.data = data));
// 	}
// }
//
// export interface GithubApi {
// 	items: GithubIssue[];
// 	total_count: number;
// }
//
// export interface GithubIssue {
// 	created_at: string;
// 	number: string;
// 	state: string;
// 	title: string;
// }

/** An example database that the data source uses to retrieve data for the table. */
// export class ExampleHttpDatabase {
// 	constructor(private _httpClient: HttpClient) {}
//
// 	getRepoIssues(sort: string, order: SortDirection, page: number): Observable<GithubApi> {
// 		const href = 'https://api.github.com/search/issues';
// 		const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${
// 			page + 1
// 		}`;
//
// 		return this._httpClient.get<GithubApi>(requestUrl);
// 	}
// }

import {Component, ViewChild, AfterViewInit, ChangeDetectionStrategy, inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {UserService} from "../../../../../../src/app/client/pages/client-profile/services/user/user.service";
import {BehaviorSubject, Observable} from "rxjs";
import {AdminUser} from "../../../shared/models/AdminUser.model";


@Component({
	selector: 'b2b-admin-users',
	templateUrl: './admin-users.component.html',
	styleUrls: ['./admin-users.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUsersComponent implements AfterViewInit {
	displayedColumns: string[] = [
		'typeOfUser',
		'quotes',
		'registrationDate',
		'fullName',
		'company',
		'email',
		'phoneNumber',
		'country',
		'countryByNumber',
		'isEmailConfirmed',
		'socialAuthType',
		'lastActivity',
		'placedOffers',
		'placedOffersDate',
		'soldCargo',
		'actions'
	];
	private tableDataSource: BehaviorSubject<AdminUser[]> = new BehaviorSubject<AdminUser[]>([]);
	public tableData$: Observable<AdminUser[]> = this.tableDataSource.asObservable();

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private userService: UserService) {
	}



	ngAfterViewInit() {
		this.userService.getUsers(0, 0, {}).subscribe(response => {
			this.tableDataSource.next(response.users);
			console.log(response)
		});
	}

	deleteUser() {

	}
}

