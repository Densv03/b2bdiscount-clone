import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { B2bNgxInputThemeEnum } from 'projects/ngx-input/src/public-api';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CompanyProfileInterface } from '../../interface/company-profile-interface';

@Component({
	selector: 'b2b-add-logistic-profile-dialog',
	templateUrl: './add-logistic-profile-dialog.component.html',
	styleUrls: ['./add-logistic-profile-dialog.component.scss'],
})
export class AddLogisticProfileDialogComponent implements OnInit {
	public profileForm: FormGroup;
	public transportTypes = ['Sea', 'Air'].map((el) => ({
		value: el,
		label: el,
		checked: false,
	}));
	public selectedTransportTypes: any[] = [];
	public emailsList: string[] = [];
	constructor(
		@Inject(MAT_DIALOG_DATA)
		public readonly dialogData: CompanyProfileInterface,
		private readonly dialogRef: MatDialogRef<AddLogisticProfileDialogComponent>
	) {}

	ngOnInit(): void {
		this.setFormGroup();
		this.emailsList = this.dialogData.email instanceof Array ? this.dialogData.email : [this.dialogData.email]
	}

	public addEmail(): void {
		if (this.profileForm.get('email').valid && this.profileForm.get('email').value.trim()) {
			this.emailsList.push(this.profileForm.value.email);
			this.profileForm.get('email').reset();
		}
	}

	public removeEmail(email: string): void {
		this.emailsList = this.emailsList.filter(item => item !== email);
	}

	public save(): void {
		// if (this.profileForm.invalid) {
		// 	this.profileForm.markAsTouched();
		// 	return;
		// }

		this.dialogRef.close({...this.profileForm.value, email: this.emailsList});
	}

	public setTransportType(event: Event, value: string): void {
		if ((event.target as HTMLInputElement).checked) {
			this.selectedTransportTypes.push(value);
		} else {
			const index = this.selectedTransportTypes.indexOf(value);
			this.selectedTransportTypes.splice(index, 1);
		}
		this.profileForm.patchValue(
			{ transportType: this.selectedTransportTypes },
			{ emitEvent: false }
		);
	}

	private setFormGroup(): void {
		this.profileForm = new FormGroup({
			name: new FormControl(this.dialogData?.name || null, Validators.required),
			country: new FormControl(
				this.dialogData?.country?.toLowerCase() || null,
				Validators.required
			),
			email: new FormControl(null, [
				Validators.required,
				Validators.email,
			]),
			phone: new FormControl(
				this.dialogData?.phone || null,
				Validators.required
			),
			transportType: new FormControl(
				this.dialogData?.transportType || null,
				Validators.required
			),
		});

		if (this.dialogData?.transportType) {
			this.transportTypes.map(
				(type) =>
					(type.checked = this.dialogData.transportType.includes(type.value))
			);
			this.selectedTransportTypes = [...this.dialogData.transportType];
		}
	}
}
