import { Component, EventEmitter, Input, Output } from '@angular/core';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
// import { FormBuilder, FormGroup } from "@ngneat/reactive-forms";
import { B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

import { AuthService } from '../../../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';

@UntilDestroy()
@Component({
	selector: 'b2b-auth-register-buyer-company-info',
	templateUrl: './auth-register-buyer-company-info.component.html',
	styleUrls: ['./auth-register-buyer-company-info.component.scss'],
})
export class AuthRegisterBuyerCompanyInfoComponent {
	@Output() public buyerCompanyInfo = new EventEmitter<any>();

	@Input() public rootRole: string = '';

	@Input()
	public set setSubmitting(value: boolean) {
		this.isSubmitting = value;
	}

	public isSubmitting: boolean = false;
	public readonly roles$: Observable<any>;
	public readonly b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	public readonly b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public form: FormGroup<any> = this.getFormGroup();

	private selectedCategoriesNames: string[] = [];

	constructor(
		private readonly fb: FormBuilder,
		private readonly authService: AuthService,
		private readonly translateService: TranslateService
	) {
		this.roles$ = this.getRoles();
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
					roleId: this.form.value.companyType,
					rootRoleId: rootRoles.find((el) => el.name === this.rootRole)!._id,
					rootRoleName: rootRoles.find((el) => el.name === this.rootRole)!.name,
					categories: this.form.value.categories,
					categoriesNames: this.selectedCategoriesNames,
				};
				this.buyerCompanyInfo.emit(model);
			});
	}

	public setSelectedCategoriesNames(event: string[]): void {
		this.selectedCategoriesNames = event;
	}

	private getFormGroup(): FormGroup {
		return this.fb.group({
			companyType: [null, Validators.required],
			categories: [null, Validators.required],
		});
	}

	private getRoles() {
		return this.authService.getRootRoles().pipe(
			untilDestroyed(this),
			filter((data) => !!Object.keys(data).length),
			map((roles) => {
				const buyerRolesIndex = roles.findIndex(
					(item) => item.displayName === 'Buyer'
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
