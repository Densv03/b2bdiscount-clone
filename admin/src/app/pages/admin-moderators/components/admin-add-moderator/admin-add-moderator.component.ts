import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
import { MatDialogRef } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { B2bNgxSelectModule, B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { ModeratorRoleModel } from '../../models/moderator-role.model';
import { onlyEmail } from '../../../../../../../src/app/core/helpers/validator/only-email';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
	selector: 'admin-add-moderator',
	templateUrl: './admin-add-moderator.component.html',
	styleUrls: ['./admin-add-moderator.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		B2bNgxInputModule,
		B2bNgxSelectModule,
		B2bNgxButtonModule,
	],
})
export class AdminAddModeratorComponent {
	public form: FormGroup;
	public roles$: Observable<ModeratorRoleModel[]> =
		this.moderatorsService.roles$;
	public b2bNgxButtonTheme = B2bNgxButtonThemeEnum;
	public b2bNgxInputTheme = B2bNgxInputThemeEnum;
	public b2bNgxSelectTheme = B2bNgxSelectThemeEnum;

	constructor(
		private readonly fb: FormBuilder,
		private readonly hotToastService: HotToastService,
		private readonly matDialogRef: MatDialogRef<AdminAddModeratorComponent>,
		private readonly moderatorsService: AdminModeratorsService
	) {
		this.form = this.getFormGroup();
	}

	public addModerator(): void {
		if (this.form.invalid) {
			this.hotToastService.error('Please fill all fields');
			return;
		}
		this.moderatorsService
			.createModerator(this.form.value)
			.pipe(
				catchError((err) => {
					this.hotToastService.error(err.error.message);
					return of(err);
				})
			)
			.subscribe(({ message }) => {
				if (message) {
					this.hotToastService.success(message);
					this.moderatorsService.getModeratorsList();
					this.matDialogRef.close();
				}
			});
	}

	private getFormGroup(): FormGroup {
		return this.fb.group({
			email: ['', [Validators.required, onlyEmail()]],
			moderatorName: [null, Validators.required],
		});
	}
}
