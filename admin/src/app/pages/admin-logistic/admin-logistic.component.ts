import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddLogisticProfileDialogComponent } from './components/add-logistic-profile-dialog/add-logistic-profile-dialog.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PaginationParamsModel } from '../../../../../src/app/core/models/pagination-params.model';
import { Router } from '@angular/router';
import { AdminLogisticService } from './admin-logistic.service';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { CompanyProfileInterface } from './interface/company-profile-interface';
import { getCode, getName } from 'country-list';
import { HotToastService } from '@ngneat/hot-toast';
import { filter } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateDirectionDialogComponent } from './components/create-direction-dialog/create-direction-dialog.component';
import { B2bNgxSelectThemeEnum } from 'projects/ngx-select/src/public-api';

@UntilDestroy()
@Component({
	selector: 'b2b-admin-logistic',
	templateUrl: './admin-logistic.component.html',
	styleUrls: ['./admin-logistic.component.scss'],
})
export class AdminLogisticComponent implements OnInit {
	public displayedColumns = [
		'name',
		'country',
		'email',
		'phone',
		'transportType',
		'actions',
	];

	public transportTypes = ['Sea', 'Air'].map((el) => ({
		_id: el.toLowerCase(),
		name: el,
	}));
	public b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	public productsLimit = 20;
	public totalCount: number;
	public dataSource: CompanyProfileInterface[];
	public searchGroup: FormGroup;
	public pointsGroup: FormGroup;
	public itemOptions: any[];
	public countryOptions: BehaviorSubject<{ label: string; code: string }[]> =
		new BehaviorSubject<{ label: string; code: string }[]>(null);
	public cityOptions: BehaviorSubject<{ label: string; code: string }[]> =
		new BehaviorSubject<{ label: string; code: string }[]>(null);

	private filteredQueryObj: PaginationParamsModel = {
		limit: this.productsLimit,
		offset: 0,
	};
	private directions: any[];

	constructor(
		private readonly dialog: MatDialog,
		private readonly router: Router,
		private readonly adminLogisticService: AdminLogisticService,
		private readonly hotToastService: HotToastService,
		private readonly changeDetectorRef: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.getDirectionOptions();
		this.fetchData();
		this.setFormGroup();
	}

	public addLogisticProfile(company?: CompanyProfileInterface): void {
		const dialog = this.dialog.open(AddLogisticProfileDialogComponent, {
			width: '500px',
			data: company,
		});

		dialog
			.afterClosed()
			.pipe(
				filter((form) => !!form),
				switchMap((form) => {
					const model = {
						...form,
						contactPhoneNumber: form.phone.number,
						contactPhoneInternationalNumber: form.phone.internationalNumber,
						contactPhoneNationalNumber: form.phone.nationalNumber,
						contactPhoneE164Number: form.phone.e164Number,
						contactPhoneCountryCode: form.phone.countryCode,
						contactPhoneDialCode: form.phone.dialCode,
					};

					if (company) {
						return this.adminLogisticService.updateCompanyProfile(
							model,
							company._id
						);
					} else {
						return this.adminLogisticService.createCompanyProfile(model);
					}
				}),
				untilDestroyed(this)
			)
			.subscribe(() => {
				this.fetchData();
				if (company) {
					this.hotToastService.success('Profile was successfully updated');
				} else {
					this.hotToastService.success('New profile was successfully created');
				}
			});
	}

	public createDirection(): void {
		const directionDialog = this.dialog.open(CreateDirectionDialogComponent, {
			width: '500px',
			minHeight: '400px',
		});

		directionDialog.componentInstance.directionCountryOptions =
			this.countryOptions;
		directionDialog.componentInstance.cityOptions = this.cityOptions;
		directionDialog.componentInstance.directions = this.directions;

		directionDialog
			.afterClosed()
			.pipe(
				filter((data) => !!data),
				switchMap((data) => this.adminLogisticService.createDirection(data)),
				untilDestroyed(this)
			)
			.subscribe(() => {
				this.countryOptions.next(null);
				this.getDirectionOptions();
				this.hotToastService.success('Direction was successfully created');
			});
	}

	public deleteLogisticProfile(company: CompanyProfileInterface): void {
		this.adminLogisticService
			.deleteCompanyProfile(company._id)
			.pipe(untilDestroyed(this))
			.subscribe(() => {
				this.hotToastService.success('Profile was successfully deleted');
				this.fetchData();
			});
	}

	public togglePage(page: number): void {
		this.filteredQueryObj = {
			...this.filteredQueryObj,
			offset: (page - 1) * this.productsLimit,
		};
	}

	public openProfileDetails(id: string): void {
		this.router.navigate(['/logistic', id]);
	}

	public setNullableValue(formGroupName: string, controlName?: string): void {
		if (formGroupName === 'searchGroup') {
			if (controlName && controlName === 'type') {
				this.searchGroup.patchValue({ type: null }, { emitEvent: false });
			} else {
				this.searchGroup.patchValue({ country: null }, { emitEvent: false });
			}
		} else {
			this.pointsGroup.patchValue({ countryId: null }, { emitEvent: false });
		}
	}

	public radioDisable(event: Event): void {
		if (
			(event.target as HTMLInputElement).id.slice(0, -1) ===
			this.pointsGroup.controls['type'].value
		) {
			this.pointsGroup.controls['type'].reset();
		}
	}

	private fetchData(search?: { [key: string]: any }): void {
		this.adminLogisticService
			.getCompanies(
				this.filteredQueryObj.limit,
				this.filteredQueryObj.offset,
				search
			)
			.pipe(untilDestroyed(this))
			.subscribe(
				(data) => {
					this.totalCount = data.totalCount;
					this.dataSource = data.companies;
					this.changeDetectorRef.detectChanges();
				},
				(error) => this.hotToastService.error(error.error.message)
			);
	}

	private setFormGroup(): void {
		this.searchGroup = new FormGroup({
			name: new FormControl(null),
			country: new FormControl(null),
			type: new FormControl(null),
			q: new FormControl(null),
		});

		this.pointsGroup = new FormGroup({
			countryId: new FormControl(null),
			items: new FormControl(null),
			type: new FormControl(null),
		});

		this.searchGroup.valueChanges
			.pipe(untilDestroyed(this))
			.subscribe((search) => {
				const filteredObject: { [key: string]: any } = {};
				for (const key in search) {
					if (search[key] !== null && search[key] !== undefined) {
						filteredObject[key] = search[key];
					}
				}
				this.fetchData(filteredObject);
				this.changeDetectorRef.detectChanges();
			});

		this.pointsGroup.valueChanges
			.pipe(
				filter((el) => !!el.countryId),
				switchMap((el) => this.adminLogisticService.getDirection(el.countryId)),
				untilDestroyed(this)
			)
			.subscribe((data) => {
				const items =
					this.pointsGroup.controls['type'].value === 'Port'
						? data.data.map((data: { cities: any[] }) =>
								data.cities
									.filter(
										(city: { ports?: any[] }) =>
											!!city.ports && city.ports.length > 0
									)
									.map((el: { ports: any }) => el.ports)
							)
						: data.data.map((data: { cities: any[] }) =>
								data.cities
									.filter(
										(city: { airports?: any[] }) =>
											!!city.airports && city.airports.length > 0
									)
									.map((el: { airports: any }) => el.airports)
							);
				this.itemOptions = items.flatMap((subArray: any[]) => subArray.flat());
			});
	}

	private getDirectionOptions(): void {
		this.adminLogisticService
			.getDirection()
			.pipe(untilDestroyed(this))
			.subscribe((data) => {
				this.countryOptions.next(
					data.data.map((country: any) => ({
						label: country.name,
						icon: getCode(country.name),
						code: country._id,
					}))
				);

				this.directions = data.data;

				this.cityOptions.next(
					data.data
						.map((country: { cities: any[]; name: string }) =>
							country.cities.map((city) => ({
								label: city.name,
								code: city._id,
								icon: getCode(country.name),
							}))
						)
						.flatMap((subArray: any[]) => subArray.flat())
				);
			});
	}

	protected readonly getName = getName;
}
