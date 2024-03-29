import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	inject,
	Input,
	OnInit,
	Output
} from '@angular/core';
import {B2bNgxCheckboxModule} from '@b2b/ngx-checkbox';
import {basePaymentAndShipping, checkBoxes,} from './client-payment-and-shipment.constant';
import {NgxInputVersionEnum} from '../../../../../../../../../projects/ngx-input/src/lib/enum/ngx-input-version.enum';
import {MatDialog} from "@angular/material/dialog";
import {
	ClientProfileCountriesModalComponent
} from "../../component/client-profile-countries-modal/client-profile-countries-modal.component";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {B2bNgxButtonModule, B2bNgxButtonThemeEnum} from "@b2b/ngx-button";
import {MatIcon} from "@angular/material/icon";
import {getName} from "country-list";
import {PaymentAndShipping} from "../../../../../../../core/models/public-company-info.model";
import {AuthService} from "../../../../../../../auth/services/auth/auth.service";
import {first} from "rxjs/operators";
import {toastMessages} from "../client-company-information/client-company-information.constants";
import {SourcingRequestService} from "../../../../../client-sourcing-request/sourcing-request.service";
import {HotToastService} from "@ngneat/hot-toast";
import {TabOutputData} from "../../component/client-profile-settings-tabs/client-profile-settings-tabs.interface";
import {Observable} from "rxjs";
import _ from "lodash";
import {NgClass} from "@angular/common";
import {
	ClientProfileMobileToolbarComponent
} from "../../component/client-profile-mobile-toolbar/client-profile-mobile-toolbar.component";
import {
	ClientProfileSettingsTabsService
} from "../../component/client-profile-settings-tabs/client-profile-settings-tabs.service";
import {TabLabel} from "../../client-profile-settings.type";

@UntilDestroy()
@Component({
	selector: 'b2b-client-payment-and-shipping',
	standalone: true,
	imports: [B2bNgxCheckboxModule, B2bNgxButtonModule, MatIcon, NgClass, ClientProfileMobileToolbarComponent],
	templateUrl: './client-payment-and-shipping.component.html',
	styleUrl: './client-payment-and-shipping.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientPaymentAndShippingComponent implements OnInit {

	@Input() initSave$: Observable<Boolean> = new Observable<Boolean>();
	@Output() data: EventEmitter<TabOutputData<PaymentAndShipping>> = new EventEmitter<TabOutputData<PaymentAndShipping>>();

	authService = inject(AuthService);
	readonly checkBoxes = checkBoxes;
	paymentAndShipping: PaymentAndShipping = _.cloneDeep(this.authService.company?.paymentAndShipping) ?? basePaymentAndShipping
	protected readonly NgxInputVersionEnum = NgxInputVersionEnum;
	protected readonly B2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;

	constructor(private matDialog: MatDialog,
							private cdr: ChangeDetectorRef,
							private sourcingRequestService: SourcingRequestService,
							private hotToastService: HotToastService,
							private clientProfileSettingsTabsService: ClientProfileSettingsTabsService<PaymentAndShipping>) {
	}

	get company() {
		return this.authService.company;
	}

	get disabled() {
		const data = _.omitBy(this.paymentAndShipping, (v) => v?.length === 0 || !v.length);
		return !(data?.paymentMethods && data?.deliveryTerms && data?.tradingAreas);
	}

	ngOnInit() {
		this.saveListener();
	}

	changeCheckbox(property: keyof PaymentAndShipping, value: string) {
		if (this.check(property, value)) {
			this.remove(property, value);
		} else {
			this.add(property, value)
		}
		this.updateTabsData();
		this.cdr.detectChanges();
	}

	check(property: keyof PaymentAndShipping, value: string) {
		return this.paymentAndShipping[property].includes(value);
	}

	openCountrySelect() {
		this.matDialog.open(ClientProfileCountriesModalComponent, {
			data: {
				countries: this.paymentAndShipping.countries
			},
			panelClass: 'max-h-[90%]',
			backdropClass: 'modal__backdrop'
		}).afterClosed().pipe(untilDestroyed(this)).subscribe(res => {
			this.paymentAndShipping.countries = res;
			this.cdr.detectChanges();
		})
	}

	getCountryName(code: string) {
		return getName(code)
	}

	onSubmit() {
		if (this.disabled) {
			return;
		}
		try {
			this.sourcingRequestService
				.updateCompanyInfo({
					companyName: this.company.companyName,
					paymentAndShipping: this.paymentAndShipping,
				})
				.pipe(
					first(),
					this.hotToastService.observe(toastMessages),
				)
				.subscribe((company) => {
					this.authService.updateCompany(company)
					this.paymentAndShipping = _.cloneDeep(company.paymentAndShipping);
					this.updateTabsData();
				});
		} catch (e) {
			console.log(e);
		}
		this.updateTabsData();
	}

	updateTabsData() {
		this.clientProfileSettingsTabsService.data$.next({
			first: this.paymentAndShipping,
			second: this.company.paymentAndShipping
		});
	}

	private add(property: keyof PaymentAndShipping, value: string) {
		this.paymentAndShipping[property].push(value);
	}

	private remove(property: keyof PaymentAndShipping, value: string) {
		this.paymentAndShipping[property] = this.paymentAndShipping[property].filter(x => x !== value)
	}

	private saveListener() {
		this.clientProfileSettingsTabsService
			.initSubmit$
			.pipe(untilDestroyed(this))
			.subscribe(res => {
				if (res === null) {
					this.paymentAndShipping = _.cloneDeep(this.authService.company?.paymentAndShipping);
				} else if (res?.label === TabLabel?.PAYMENT_AND_SHIPPING) {
					this.onSubmit();
				}
				this.cdr.detectChanges();
			});
	}
}
