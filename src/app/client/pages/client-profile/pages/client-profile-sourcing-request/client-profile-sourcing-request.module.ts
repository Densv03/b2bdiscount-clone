import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientProfileSourcingRequestRoutingModule } from './client-profile-sourcing-request-routing.module';
import { ClientProfileSourcingRequestComponent } from './layout/client-profile-sourcing-request.component';
import { ClientProfileSourcingRequestRfqComponent } from './client-profile-sourcing-request-rfq/layout/client-profile-sourcing-request-rfq.component';
import { ClientProfileSourcingRequestRfqModule } from './client-profile-sourcing-request-rfq/client-profile-sourcing-request-rfq.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ClientProfileSourcingRequestQuotationModule } from './client-profile-sourcing-request-quotation/client-profile-sourcing-request-quotation.module';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { B2bNgxPaginationModule } from '@b2b/ngx-pagination';

@NgModule({
	declarations: [
		ClientProfileSourcingRequestComponent,
		ClientProfileSourcingRequestRfqComponent,
	],
	exports: [],
	imports: [
		CommonModule,
		ClientProfileSourcingRequestRoutingModule,
		ClientProfileSourcingRequestRfqModule,
		ClientProfileSourcingRequestQuotationModule,
		MatTabsModule,
		B2bNgxButtonModule,
		B2bNgxPaginationModule,
	],
})
export class ClientProfileSourcingRequestModule {}
