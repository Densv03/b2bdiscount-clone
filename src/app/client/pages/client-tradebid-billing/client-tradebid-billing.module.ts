import { NgModule } from '@angular/core';
import { ClientTradebidBillingComponent } from './layout/client-tradebid-billing.component';
import { CommonModule } from '@angular/common';
import { ClientAnnualPaymentRoutingModule } from '../client-annual-payment/client-annual-payment-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { ErrorTailorModule } from "@ngneat/error-tailor";
// import { B2bNgxTabsModule } from "@b2b/ngx-tabs";
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { B2bNgxListModule } from '@b2b/ngx-list';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { B2bNgxTelModule } from '@b2b/ngx-tel';
import { B2bNgxCountrySelectModule } from '@b2b/ngx-country-select';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { B2bNgxLinkModule } from '@b2b/ngx-link';
import { ClientTradebidBillingRoutingModule } from './client-tradebid-billing-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [ClientTradebidBillingComponent],
	imports: [
		CommonModule,
		ClientTradebidBillingRoutingModule,
		ReactiveFormsModule,
		// ErrorTailorModule,
		// B2bNgxTabsModule,
		B2bNgxIconModule,
		B2bNgxButtonModule,
		B2bNgxListModule,
		B2bNgxInputModule,
		B2bNgxTelModule,
		B2bNgxCountrySelectModule,
		B2bNgxImageModule,
		B2bNgxLinkModule,
		TranslateModule,
	],
})
export class ClientTradebidBillingModule {}
