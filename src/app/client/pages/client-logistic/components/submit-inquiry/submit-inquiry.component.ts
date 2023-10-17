import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { B2bNgxInputModule, B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxCountrySelectModule } from '@b2b/ngx-country-select';
import { B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { B2bNgxTelModule } from '@b2b/ngx-tel';
import { B2bNgxTextareaModule } from '@b2b/ngx-textarea';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { B2bNgxButtonModule, B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { CommonModule } from '@angular/common';
import { productNameWithHS } from 'src/app/core/helpers/validator/product-name-with-HS';
import { FadeInOutAnimation } from 'src/app/client/shared/animations/fade-in-out.animation';

@Component({
	selector: 'b2b-submit-inquiry',
	templateUrl: './submit-inquiry.component.html',
	styleUrls: ['./submit-inquiry.component.scss'],
	imports: [
		CommonModule,
		B2bNgxIconModule,
		FormsModule,
		B2bNgxInputModule,
		ReactiveFormsModule,
		B2bNgxCountrySelectModule,
		B2bNgxTelModule,
		B2bNgxTextareaModule,
		B2bNgxButtonModule,
		MatDialogModule,
	],
	standalone: true,
	animations: [FadeInOutAnimation],
})
export class SubmitInquiryComponent implements OnInit {
	public submitInquiryForm: FormGroup = new FormGroup<any>({
		productName: new FormControl(null, [
			Validators.required,
			productNameWithHS(),
		]),
		weight: new FormControl(null, [Validators.required]),
		fullName: new FormControl(null, [Validators.required]),
		country: new FormControl(null, [Validators.required]),
		phoneNumber: new FormControl(null, [Validators.required]),
		email: new FormControl(null, [Validators.required, Validators.email]),
		description: new FormControl(null),
	});
	public isFormValid$: Observable<boolean> =
		this.submitInquiryForm.statusChanges.pipe(
			map((status) => status === 'VALID')
		);

	public b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;

	public formState: { [key: string]: AbstractControl } =
		this.submitInquiryForm.controls;

	constructor(
		public dialogRef: MatDialogRef<SubmitInquiryComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit(): void {
		console.log(this.data);
	}

	public submitForm(): void {
		console.log(this.submitInquiryForm.value);
		if (this.submitInquiryForm.invalid) {
			this.submitInquiryForm.markAllAsTouched();
			return;
		}
		// request to BE
	}
}
