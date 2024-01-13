import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientProfileSourcingRequestQuotationRoutingModule } from './client-profile-sourcing-request-quotation-routing.module';
import { ClientProfileSourcingRequestQuotationComponent } from './layout/client-profile-sourcing-request-quotation.component';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { ChatsItemModule } from '../shared/chats-item/chats-item.module';
import { MatTabsModule } from '@angular/material/tabs';
import { B2bNgxPaginationModule } from '@b2b/ngx-pagination';

@NgModule({
	declarations: [ClientProfileSourcingRequestQuotationComponent],
	exports: [],
	imports: [
		CommonModule,
		ClientProfileSourcingRequestQuotationRoutingModule,
		ChatsItemModule,
		B2bNgxImageModule,
		B2bNgxButtonModule,
		MatTabsModule,
		B2bNgxPaginationModule,
	],
})
export class ClientProfileSourcingRequestQuotationModule {}
