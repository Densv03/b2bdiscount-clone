import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientPricingRoutingModule } from './client-pricing-routing.module';
import { B2bNgxListModule } from '@b2b/ngx-list';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { B2bNgxLinkModule } from '@b2b/ngx-link';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { ClientPricingComponent } from './layout/client-pricing.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [ClientPricingComponent],
	imports: [
		CommonModule,
		ClientPricingRoutingModule,
		B2bNgxListModule,
		B2bNgxIconModule,
		B2bNgxLinkModule,
		B2bNgxButtonModule,
		TranslateModule,
	],
})
export class ClientPricingModule {}
