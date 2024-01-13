import { Component, Input, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FadeInOutAnimation } from 'src/app/client/shared/animations/fade-in-out.animation';
import { ClientLogisticService } from 'src/app/client/pages/client-logistic/services/client-logistic.service';
import { CreateInquiryForm } from 'src/app/client/pages/client-logistic/models/create-inquiry/create-inquiry-form.model';
import { Phone } from 'src/app/core/models/user/phone.model';
import { LogisticSearch } from 'src/app/client/pages/client-logistic/models/logistic-search/logistic-search.model';
import { CreateInquiryRequest } from 'src/app/client/pages/client-logistic/models/create-inquiry/create-inquiry-request.model';
import { HotToastService } from '@ngneat/hot-toast';
import { onlyLatinAndNumberAndSymbols } from 'src/app/core/helpers/validator/only -latin-numbers-symbols';
import { onlyLatin } from 'src/app/core/helpers/validator/only-latin';
import { fullName } from 'src/app/core/helpers/validator/full-name';
import { UserService } from '../../../client-profile/services/user/user.service';

@Component({
	selector: 'b2b-create-inquiry',
	templateUrl: './create-inquiry.component.html',
	styleUrls: ['./create-inquiry.component.scss'],
	animations: [FadeInOutAnimation],
})
export class CreateInquiryComponent implements OnInit {
	@Input() logisticSearch: Partial<LogisticSearch>;

	public createInquiryForm = new FormGroup({
		productNameWithCode: new FormControl<null | string>(null, [
			Validators.required,
			onlyLatinAndNumberAndSymbols(),
		]),
		weight: new FormControl<null | string>(null, [
			Validators.required,
			onlyLatinAndNumberAndSymbols(),
		]),
		fullName: new FormControl<null | string>(null, [
			Validators.required,
			onlyLatin(),
		]),
		country: new FormControl<null | string>(null, [Validators.required]),
		phone: new FormControl<null | Phone>(null, [Validators.required]),
		email: new FormControl<null | string>(null, [
			Validators.required,
			Validators.email,
		]),
		description: new FormControl<null | string>(null, [onlyLatin()]),
	});

	public b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;

	public formState: { [key in keyof CreateInquiryForm]: AbstractControl } =
		this.createInquiryForm.controls;
	public isFormValid$: Observable<boolean> =
		this.createInquiryForm.statusChanges.pipe(
			map((status) => status === 'VALID')
		);

	constructor(
		private clientLogisticService: ClientLogisticService,
		private hotToastService: HotToastService,
		private userService: UserService
	) {}

	ngOnInit(): void {
		this.patchForm();
	}

	public sendForm(): void {
		if (this.createInquiryForm.invalid) {
			this.createInquiryForm.markAllAsTouched();
			return;
		}

		let countryFrom, countryTo, readyToLoad;

		if (this.clientLogisticService.getActiveDeliveryType() === 'sea') {
			countryFrom = this.clientLogisticService.getSeaState().countryFrom;
			countryTo = this.clientLogisticService.getSeaState().countryTo;
			const date = new Date(this.clientLogisticService.getSeaState().date);
			readyToLoad = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
		} else if (this.clientLogisticService.getActiveDeliveryType() === 'air') {
			countryFrom = this.clientLogisticService.getAirState().countryFrom;
			countryTo = this.clientLogisticService.getAirState().countryTo;
			const date = new Date(this.clientLogisticService.getAirState().date);
			readyToLoad = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
		}

		this.clientLogisticService
			.createInquiry({
				...this.logisticSearch,
				...this.createInquiryForm.value,
				transportType: this.clientLogisticService.getActiveDeliveryType(),
				readyToLoad,
				countryFrom,
				countryTo,
			} as CreateInquiryRequest)
			.pipe(
				this.hotToastService.observe({
					loading: 'Creating inquiry...',
					success: 'Inquiry created successfully',
					error: 'Error while creating inquiry',
				})
			)
			.subscribe(() => {
				this.createInquiryForm.reset();
			});
	}

	private patchForm(): void {
		if (!this.userService.isAuth()) {
			return;
		}

		const user = this.userService.getUser();
		this.createInquiryForm.patchValue({
			fullName: user.fullName,
			email: user.email,
			phone: user.phone,
			country: user.country,
		});
	}
}
