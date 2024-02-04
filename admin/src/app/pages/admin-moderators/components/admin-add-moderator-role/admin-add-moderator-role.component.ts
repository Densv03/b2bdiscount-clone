import {
	ChangeDetectionStrategy,
	Component,
	Inject,
	OnInit,
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { B2bNgxInputModule, B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { AdminModeratorsService } from '../../admin-moderators.service';
import { first } from 'rxjs/operators';
import { B2bNgxMultiselectModule } from '@b2b/ngx-multiselect';
import { B2bNgxButtonModule, B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { HotToastService } from '@ngneat/hot-toast';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { catchError, of } from 'rxjs';
import { AddPaymentPlanResponse } from '../../../../../../../src/app/core/models/admin-billing/responses/add-payment-plan-response.model';
import { ModeratorRoleModel } from '../../models/moderator-role.model';
import { ModeratorRoleResponseModel } from '../../models/moderator-role-response.model';

@Component({
	selector: 'admin-add-moderator-role',
	templateUrl: './admin-add-moderator-role.component.html',
	styleUrls: ['./admin-add-moderator-role.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		ReactiveFormsModule,
		B2bNgxInputModule,
		B2bNgxMultiselectModule,
		B2bNgxButtonModule,
	],
})
export class AdminAddModeratorRoleComponent implements OnInit {
	public form: FormGroup;
	public apiList: any[];
	public b2bNgxButtonTheme = B2bNgxButtonThemeEnum;
	public b2bNgxInputTheme = B2bNgxInputThemeEnum;

	constructor(
		private readonly fb: FormBuilder,
		private readonly hotToastService: HotToastService,
		private readonly matDialogRef: MatDialogRef<AdminAddModeratorRoleComponent>,
		private readonly moderatorsService: AdminModeratorsService,
		@Inject(MAT_DIALOG_DATA)
		public data: ModeratorRoleModel
	) {
		this.form = this.getFormGroup();
	}
	ngOnInit() {
		this.moderatorsService.getApiList();
		this.moderatorsService.apiList$.subscribe((api) => {
			this.apiList = this.getArrayOfAdminApi(api);
			if (this.data) {
				this.patchValueToForm(this.data);
			}
		});
	}

	public addModeratorRole(): void {
		if (this.form.invalid) {
			this.hotToastService.error('Please fill all fields');
			return;
		}
		const roleActionMethod: Function = this.data
			? this.moderatorsService.changeModeratorRole.bind(this.moderatorsService)
			: this.moderatorsService.createModeratorRole.bind(this.moderatorsService);
		roleActionMethod(this.form.value)
			.pipe(
				catchError((err) => {
					this.hotToastService.error(err.error.message);
					return of(err);
				})
			)
			.subscribe(({ message, success }: ModeratorRoleResponseModel) => {
				if (success) {
					this.hotToastService.success(message);
					this.moderatorsService.getModeratorRoles();
					this.matDialogRef.close();
				}
			});
	}

	private patchValueToForm(role: ModeratorRoleModel): void {
		this.form.patchValue({
			name: role.name,
			apiTypes: role.apiTypes.map((item) => item._id),
		});
	}

	private getArrayOfAdminApi(apiArr: any[]): any[] {
		if (apiArr) {
			return apiArr.map(({ _id, name }) => ({ value: _id, label: name }));
		}
		return [];
	}
	private getFormGroup(): FormGroup {
		return this.fb.group({
			name: ['', Validators.required],
			apiTypes: ['', Validators.required],
		});
	}
}
