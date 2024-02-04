import { Component, Inject, OnInit } from '@angular/core';
import {
	MAT_DIALOG_DATA,
	MatDialogModule,
	MatDialogRef,
} from '@angular/material/dialog';
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
import { FadeInOutAnimation } from 'src/app/client/shared/animations/fade-in-out.animation';
import { TariffsResponse } from 'src/app/client/pages/client-logistic/models/tariffs/tariffs-response.model';
import { onlyLatinAndNumberAndSymbols } from 'src/app/core/helpers/validator/only -latin-numbers-symbols';
import { onlyLatin } from 'src/app/core/helpers/validator/only-latin';
import { UserService } from '../../../client-profile/services/user/user.service';
import { MixpanelService } from '../../../../../core/services/mixpanel/mixpanel.service';

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
		productNameWithCode: new FormControl(null, [
			Validators.required,
			onlyLatinAndNumberAndSymbols(),
		]),
		weight: new FormControl(null, [
			Validators.required,
			onlyLatinAndNumberAndSymbols(),
		]),
		fullName: new FormControl(null, [Validators.required, onlyLatin()]),
		country: new FormControl(null, [Validators.required]),
		phone: new FormControl(null, [Validators.required]),
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
		@Inject(MAT_DIALOG_DATA) public data: TariffsResponse | any,
		private userService: UserService,
		private mixpanelService: MixpanelService
	) {}

	ngOnInit(): void {
		this.patchForm();
	}

	public submitForm(): void {
		if (this.submitInquiryForm.invalid) {
			this.submitInquiryForm.markAllAsTouched();
			return;
		}
		const {
			countryFrom,
			countryTo,
			portFrom,
			portTo,
			airportFrom,
			airportTo,
			readyToLoad,
			seaLine,
			tariffSeaId,
			tariffAirId,
		} = this.data;

		this.dialogRef.close({
			...this.submitInquiryForm.value,
			transportType: portFrom ? 'sea' : 'air',
			countryFrom: countryFrom._id,
			countryTo: countryTo?._id,
			portFrom: portFrom?._id,
			portTo: portTo?._id,
			airportFrom: airportFrom?._id,
			airportTo: airportTo?._id,
			tariffSeaId,
			tariffAirId,
			readyToLoad: this.convertCustomDateStringToDate(readyToLoad),
			seaLine,
		});
		this.mixpanelService.track('Logistic request sent', {
			'ORIGIN OF SHIPMENT': countryFrom.name,
			'DESTINATION OF SHIPMENT': countryTo.name,
			'Type of form': 'Positive scenario',
		});
	}

	private convertCustomDateStringToDate(customDateString: string): string {
		const dateComponents = customDateString.split('.');

		const year = parseInt(dateComponents[0]);
		const month = parseInt(dateComponents[1]);
		const day = parseInt(dateComponents[2]);

		const dateObject = new Date(year, month - 1, day); // Note: months are zero-based in JavaScript Date objects

		return dateObject.toISOString().split('T')[0];
	}

	private patchForm(): void {
		if (!this.userService.isAuth()) {
			return;
		}

		const user = this.userService.getUser();
		this.submitInquiryForm.patchValue({
			fullName: user.fullName,
			email: user.email,
			phone: user.phone,
			country: user.country,
		});
	}
}
