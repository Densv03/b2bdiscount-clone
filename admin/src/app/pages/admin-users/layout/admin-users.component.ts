import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import {
	BehaviorSubject,
	combineLatest,
	mergeMap,
	Observable,
	Subject,
} from 'rxjs';
import { filter, first, map, startWith, switchMap } from 'rxjs/operators';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HotToastService } from '@ngneat/hot-toast';
import { B2bNgxButtonThemeEnum } from 'projects/ngx-button/src/public-api';

import { UserService } from '../../../../../../src/app/client/pages/client-profile/services/user/user.service';
import { ApiService } from '../../../../../../src/app/core/services/api/api.service';
import { CategoriesService } from '../../../../../../src/app/client/services/categories/categories.service';
import { ChangeQuotesAmountDialogComponent } from '../components/change-quotes-amount-dialog/change-quotes-amount-dialog.component';
import { ConfirmationDialogComponent } from '../../../../../../src/app/client/shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { PlatformService } from '../../../../../../src/app/client/services/platform/platform.service';
import { TableColumn } from '@siemens/ngx-datatable';
import {animate, state, style, transition, trigger} from "@angular/animations";

@UntilDestroy()
@Component({
	selector: 'b2b-admin-users',
	templateUrl: './admin-users.component.html',
	styleUrls: ['./admin-users.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('detailExpand', [
			state('collapsed,void', style({height: '0px', minHeight: '0'})),
			state('expanded', style({height: '*'})),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	],
})
export class AdminUsersComponent implements OnInit {
	public readonly b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;

	public users$: Observable<any>;
	public readonly menuOptions: any;

	public readonly pageSubject = new BehaviorSubject(null);
	public readonly forceSubject = new Subject();
	public readonly filtersSubject = new BehaviorSubject(null);

	public categories: any[];
	public parsedCategories: any;

	public totalCount: number;
	public page: number;
	public filtersControl: FormControl;
	public emailSubmissionForm: FormGroup;

	public columns: TableColumn[] = [];
	columnsToDisplay = ['userRole', 'rfqQuotes', 'createdAt', 'fullName', 'company', 'email', 'e164Number', 'country', 'phoneCountryCode', 'site', 'emailConfirmed', 'socialAuthType', 'lastActivity', 'actions'];
	displayNames = ['Type of User', 'Quotes', 'Registration Date/Time', 'Full Name', 'Company (optional)', 'Email', 'Phone Number', 'Country', 'Country (by phone number)', 'Website', 'Email Confirmed', 'Social Auth Type', 'Last activity', '']
	columnsToDisplayWithExpand = ['expand', ...this.columnsToDisplay];
	expandedElement: any | null;
	private readonly MILLISECOND_IN_ONE_DAY = 86400000;

	constructor(
		private readonly _userService: UserService,
		private readonly _hotToastrService: HotToastService,
		private readonly _apiService: ApiService,
		private readonly _categoriesService: CategoriesService,
		private readonly _router: Router,
		private readonly _formBuilder: FormBuilder,
		private readonly dialog: MatDialog,
		private readonly changeDetectionRef: ChangeDetectorRef,
		private readonly platformService: PlatformService
	) {
		this.users$ = this.getUsers$();
		this.emailSubmissionForm = _formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
		});
		// this.menuOptions = this._getMenuOptions();
		this.totalCount = 0;
		this.page = 0;
	}

	ngOnInit() {
		// this.columns = this.getColumns();
		this.filtersControl = this._formBuilder.control({});

		this.filtersControl.valueChanges
			.pipe(untilDestroyed(this))
			.subscribe((filters) => {
				const {
					preferences = [],
					...otherFilters
				} = filters;

				const sameRangeForRegistration =
					new Date(otherFilters.registrationDate.startDate).getTime() ===
					new Date(otherFilters.registrationDate.endDate).getTime();

				const sameRangeForLastActivity =
					new Date(otherFilters.lastActivity.startDate).getTime() ===
					new Date(otherFilters.lastActivity.endDate).getTime();

				const sameRangeForOfferTime =
					new Date(otherFilters.offerTime.startDate).getTime() ===
					new Date(otherFilters.offerTime.endDate).getTime();

				const parsedFilters = {
					...otherFilters,
					phone: otherFilters?.phone?.e164Number
						? otherFilters.phone.e164Number.replace('+', '')
						: null,
					registrationDate: otherFilters.registrationDate.startDate
						? `${
								new Date(
									new Date(otherFilters.registrationDate.startDate).getTime() +
										this.MILLISECOND_IN_ONE_DAY
								)
									.toISOString()
									.split('T')[0]
							},${
								new Date(
									new Date(otherFilters.registrationDate.endDate).getTime() +
										(sameRangeForRegistration ? this.MILLISECOND_IN_ONE_DAY : 0)
								)
									.toISOString()
									.split('T')[0]
							}`
						: null,
					lastActivity: otherFilters.lastActivity.startDate
						? `${
								new Date(
									new Date(otherFilters.lastActivity.startDate).getTime() +
										this.MILLISECOND_IN_ONE_DAY
								)
									.toISOString()
									.split('T')[0]
							},${
								new Date(
									new Date(otherFilters.lastActivity.endDate).getTime() +
										(sameRangeForLastActivity ? this.MILLISECOND_IN_ONE_DAY : 0)
								)
									.toISOString()
									.split('T')[0]
							}`
						: null,
					offerTime: otherFilters.offerTime.startDate
						? `${
								new Date(
									new Date(otherFilters.offerTime.startDate).getTime() +
										this.MILLISECOND_IN_ONE_DAY
								)
									.toISOString()
									.split('T')[0]
							},${
								new Date(
									new Date(otherFilters.offerTime.endDate).getTime() +
										(sameRangeForOfferTime ? this.MILLISECOND_IN_ONE_DAY : 0)
								)
									.toISOString()
									.split('T')[0]
							}`
						: null,
					categories:
						!!preferences &&
						preferences
							.filter(
								(id: string | number) => this.parsedCategories[id].level === 1
							)
							.map((el: string | number) => this.parsedCategories[el].name),
					categoryPosts:
						!!preferences &&
						preferences
							.filter(
								(id: string | number) => this.parsedCategories[id].level === 2
							)
							.map((el: string | number) => this.parsedCategories[el].name),
					preferredCargo:
						!!preferences &&
						preferences
							.filter(
								(id: string | number) => this.parsedCategories[id].level === 3
							)
							.map((el: string | number) => this.parsedCategories[el].name)
				};

				this.pageSubject.next(0);
				this.filtersSubject.next(parsedFilters);
			});
	}

	public export(): void {
		const page = this.pageSubject.getValue();
		const filters = this.filtersSubject.getValue();

		this._userService
			.getUsersCsv(page, 10, filters)
			.pipe(untilDestroyed(this))
			.subscribe((response) => {
				if (this.platformService.isServer) {
					return;
				}
				const downloadURL = window.URL.createObjectURL(response as Blob);
				const link = document.createElement('a');
				link.href = downloadURL;
				link.download = 'users.csv';
				link.click();
			});
	}

	private getUsers$(): Observable<any> {
		const categories$ = this.getCategories();
		const page$ = this.pageSubject.asObservable().pipe(startWith(0));
		const force$ = this.forceSubject.asObservable().pipe(startWith(true));
		const filters$ = this.filtersSubject.asObservable();
		return combineLatest([categories$, page$, force$, filters$]).pipe(
			switchMap(([categories, page, _, filters]: any) => {
				return this._userService
					.getUsers(page, _, filters)
					.pipe(map((res) => ({ categories, res })));
			}),
			map((data: any) => {
				this.categories = data.categories.categories;
				const parsedUsersPreferences = this.formatUsersPreferences(
					data.categories,
					data.res.users
				);
				const parsedUsersDate = parsedUsersPreferences.map((user) => {
					return {
						...user,
						country:
							user.country ||
							(user.phone?.countryCode ? user.phone.countryCode : null),
						...(user.lastActivity
							? {
									lastActivity: new Date(new Date(user.lastActivity).getTime())
										.toISOString()
										.split('T')[0],
								}
							: {}),
						e164Number: user?.phone?.e164Number,
						userRole: user?.role?.displayName,
						phoneCountryCode: user?.phone?.countryCode
					};
				});
				this.totalCount = data.res.totalCount;
				return parsedUsersDate;
			})
		);
	}

	public formatUsersPreferences(
		categories: { categories: string | any[] },
		users: any[]
	): any[] {
		if (!categories.categories.length || !users || !users.length) {
			return [];
		}

		this.parsedCategories = this.parseCategories(categories.categories);
		return users.map((user) => {
			const userCategories = user.preferences.map(
				(id: string | number) => this.parsedCategories[id]
			);
			return {
				...user,
				visible: false,
				category__1: userCategories.filter(
					(el: { level: number }) => el?.level === 1
				),
				category__2: userCategories.filter(
					(el: { level: number }) => el?.level === 2
				),
				category__3: userCategories.filter(
					(el: { level: number }) => el?.level === 3
				),
			};
		});
	}

	public showMore(
		event: { stopImmediatePropagation: () => void },
		row: { _id: any }
	): void {
		event.stopImmediatePropagation();

		this.users$ = this.users$.pipe(
			untilDestroyed(this),
			map((users: any[]) => {
				const currUserIdx = users.findIndex((el: any) => el._id === row._id);
				if (currUserIdx >= 0) {
					users[currUserIdx].visible = !users[currUserIdx].visible || false;
				}
				return users;
			})
		);
	}

	public parseCategories(categories: string | any[], level = 1): any[] {
		return typeof categories !== 'string'
			? categories?.reduce(
					(
						pre: any,
						curr: {
							_id: any;
							children: string | any[];
						}
					) => {
						return {
							...pre,
							[curr._id]: { ...curr, level },
							...(curr.children && curr.children.length
								? this.parseCategories([...curr.children], level + 1)
								: []),
						};
					},
					{}
				)
			: null;
	}

	onClick(column: string, element: any): void {
		if (column === 'rfqQuotes') {
			this.dialog
				.open(ChangeQuotesAmountDialogComponent, {
					data: {
						currentValue: element.rfqQuotes ?? 0,
					},
				})
				.afterClosed()
				.pipe(
					filter((res) => !!res),
					map((quotesNumber: number) =>
						this._userService
							.updateUserQuotes(element._id, quotesNumber)
							.subscribe(() => {
								this.changeDetectionRef.detectChanges();
							})
					)
				)
				.subscribe();
		}
	}

	private getCategories(): Observable<any> {
		return this._categoriesService.getCategories$();
	}

	public setPage(event: number): void {
		this.page = event;
		this.pageSubject.next(event);
	}

	public deleteUser(id: string, isPermanent: boolean): void {
		const title = isPermanent ?
				'Permanent delete user'
				: 'Delete user';
			const	message = isPermanent ?
			'Are you sure you want to delete permanently user?' :
			'Are you sure you want to delete user?';

			this.dialog
			.open(ConfirmationDialogComponent, {
				data: {
					title,
					message,
					confirmButtonText: 'Delete',
					confirmButtonTheme: B2bNgxButtonThemeEnum.BACKGROUND_RED,
					cancelButtonText: 'Cancel',
					cancelButtonTheme: B2bNgxButtonThemeEnum.OUTLINE_BLACK,
				},
			})
			.afterClosed()
			.pipe(
				filter((res) => !!res),
				mergeMap(() => {
					const request$ = isPermanent ?
						this._userService.permanentDeleteUserById(id)
						: this._userService.deleteUserById(id);
					return request$.pipe(
						untilDestroyed(this),
						this._hotToastrService.observe({
							loading: 'User deleting',
							success: 'User deleted',
							error: 'User deleting failed',
						})
					);
				})
			)
			.subscribe(() => {
				this.forceSubject.next(true);
			});
	}

	public sendList(): void {
		this._userService
			.sendVerificationLink(this.emailSubmissionForm.value.email)
			.pipe(first())
			.subscribe(({ message }) => {
				this.emailSubmissionForm.reset();
				this._hotToastrService.success(message);
			});
	}
}
