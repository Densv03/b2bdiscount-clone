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
import {
	BaseLogisticState,
	ClientLogisticService,
	LogisticAirState,
	LogisticSeaState,
} from 'src/app/client/pages/client-logistic/services/client-logistic.service';
import { CreateInquiryForm } from 'src/app/client/pages/client-logistic/models/create-inquiry/create-inquiry-form.model';
import { Phone } from 'src/app/core/models/user/phone.model';
import { LogisticSearch } from 'src/app/client/pages/client-logistic/models/logistic-search/logistic-search.model';
import { CreateInquiryRequest } from 'src/app/client/pages/client-logistic/models/create-inquiry/create-inquiry-request.model';
import { HotToastService } from '@ngneat/hot-toast';
import { onlyLatinAndNumberAndSymbols } from 'src/app/core/helpers/validator/only -latin-numbers-symbols';
import { onlyLatin } from 'src/app/core/helpers/validator/only-latin';
import { UserService } from '../../../client-profile/services/user/user.service';
import { MixpanelService } from '../../../../../core/services/mixpanel/mixpanel.service';
import _ from 'lodash';
import { deliveryType } from '../../models/delivery-type.model';

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
		private userService: UserService,
		private mixpanelService: MixpanelService
	) {}

	ngOnInit(): void {
		this.patchForm();
	}

	public sendForm(): void {
		if (this.createInquiryForm.invalid) {
			this.createInquiryForm.markAllAsTouched();
			return;
		}
		let state = this.handleDeliveryState();
		this.createInquiry(state);
		this.trackRequestEvent(state);
	}

	private createInquiry(pick: Partial<BaseLogisticState>) {
		this.clientLogisticService
			.createInquiry({
				...this.logisticSearch,
				...this.createInquiryForm.value,
				transportType: this.clientLogisticService.getActiveDeliveryType(),
				countryFrom: pick.countryFrom,
				countryTo: pick.countryTo,
				readyToLoad: pick.readyToLoad,
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

	private trackRequestEvent(state: Partial<BaseLogisticState>) {
		this.mixpanelService.track('Logistic request sent', {
			'ORIGIN OF SHIPMENT': state.countryFromName,
			'DESTINATION OF SHIPMENT': state.countryToName,
			'Type of form': 'Negative scenario',
		});
	}

	private handleDeliveryState(): Partial<BaseLogisticState> {
		const isAirType =
			this.clientLogisticService.getActiveDeliveryType() === 'air';
		const state = isAirType
			? this.clientLogisticService.getAirState()
			: this.clientLogisticService.getSeaState();
		const date = new Date(state.date);
		return {
			countryTo: state.countryTo,
			countryFrom: state.countryFrom,
			countryFromName: state.countryFromName,
			countryToName: state.countryToName,
			readyToLoad: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
			date,
		} as Partial<BaseLogisticState>;
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
