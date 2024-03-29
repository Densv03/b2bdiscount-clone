import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { AuthService } from '../../../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, map, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import {
	SelectItem
} from "../../../../../client/pages/client-profile/pages/client-profile-settings-new/tabs/client-company-information/client-company-information.interface";

@UntilDestroy()
@Component({
	selector: 'b2b-auth-register-supplier-company-info',
	templateUrl: './auth-register-supplier-company-info.component.html',
	styleUrls: ['./auth-register-supplier-company-info.component.scss'],
})
export class AuthRegisterSupplierCompanyInfoComponent {
	@Output() public supplierCompanyInfo = new EventEmitter<any>();
	@Input() public rootRole: string = '';
	@Input() public set setSubmitting(value: boolean) {
		this.isSubmitting = value;
	}

	public isSubmitting: boolean = false;
	public readonly b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	public readonly b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public readonly roles$: Observable<any>;
	public foundationYear$: Observable<SelectItem[]>;
	public employeesNumber$: Observable<SelectItem[]>;
	public form: FormGroup<any> = this.getFormGroup();

	private employeesNumberArr: string[] = [
		'1-5',
		'5-10',
		'10-50',
		'50-100',
		'> 100',
	];
	private selectedCategoriesNames: string[] = [];

	constructor(
		private readonly fb: FormBuilder,
		private readonly authService: AuthService,
		private readonly translateService: TranslateService
	) {
		this.roles$ = this.getRoles();
		this.employeesNumber$ = this.getObservableForSelect(
			this.employeesNumberArr
		);
		this.foundationYear$ = this.getFoundationYear();
	}

	public setSelectedCategoriesNames(event: string[]): void {
		this.selectedCategoriesNames = event;
	}

	public send(): void {
		if (this.isSubmitting) {
			this.isSubmitting = false;
			return;
		}

		this.authService
			.getRootRoles()
			.pipe(untilDestroyed(this))
			.subscribe((rootRoles) => {
				const model = {
					...this.form.value,
					rootRoleId: rootRoles.find((el) => el.name === this.rootRole)!._id,
					rootRoleName: rootRoles.find((el) => el.name === this.rootRole)!.name,
					categoriesNames: this.selectedCategoriesNames,
				};
				this.supplierCompanyInfo.emit(model);
			});
	}

	private getFormGroup(): FormGroup {
		return this.fb.group({
			roleId: [null, Validators.required],
			categories: [null, Validators.required],
			yearOfFoundation: ['', Validators.required],
			employeesNumber: ['', Validators.required],
		});
	}

	private getObservableForSelect(arr: string[]): Observable<SelectItem[]> {
		return of(
			arr.map((el) => {
				return {
					id: el,
					value: el,
				};
			})
		);
	}

	private getFoundationYear(): Observable<SelectItem[]> {
		const yearsArr: string[] = [];
		const currentYear: number = new Date(Date.now()).getFullYear();
		for (let i = currentYear; i > currentYear - 150; i--)
			yearsArr.push(i.toString());
		return this.getObservableForSelect(yearsArr);
	}

	private getRoles() {
		return this.authService.getRootRoles().pipe(
			untilDestroyed(this),
			filter((data) => !!data),
			filter((data) => !!Object.keys(data).length),
			map((roles) => {
				const buyerRolesIndex = roles.findIndex(
					(item) => item.displayName === 'Supplier'
				);
				return roles[buyerRolesIndex].subRoles.map((role) => {
					const roleName = this.translateService.instant(
						`ROLES.${role.name.toUpperCase()}_NAME`
					);

					return {
						...role,
						description: this.translateService.instant(
							`ROLES.${role.name.toUpperCase()}`
						),
						displayName: roleName.charAt(0).toUpperCase() + roleName.slice(1),
					};
				});
			})
		);
	}
}
