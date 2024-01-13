import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientProfileSourcingRequestRfqRoutingModule } from './client-profile-sourcing-request-rfq-routing.module';
import { ClientProfileSourcingRequestChatsComponent } from './components/client-profile-sourcing-request-chats/client-profile-sourcing-request-chats.component';
import { ClientProfileSourcingRequestManageRfqComponent } from './components/client-profile-sourcing-request-manage-rfq/client-profile-sourcing-request-manage-rfq.component';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { RfqButtonsComponent } from './shared/components/rfq-buttons/rfq-buttons.component';
import { ClientProfileSourcingRequestArchivedComponent } from './components/client-profile-sourcing-request-archived/client-profile-sourcing-request-archived.component';
import { ProductDescriptionItemComponent } from './shared/components/product-description-item/product-description-item.component';
import { ChatsItemModule } from '../shared/chats-item/chats-item.module';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { B2bNgxSelectModule } from '@b2b/ngx-select';
import { B2bNgxTextareaModule } from '@b2b/ngx-textarea';
import { B2bNgxFileModule } from '@b2b/ngx-file';
import { ChangeRfqFormComponent } from './components/change-rfq-form/change-rfq-form.component';
import { B2bNgxCountrySelectModule } from '@b2b/ngx-country-select';
import { B2bNgxCheckboxModule } from '@b2b/ngx-checkbox';

@NgModule({
	declarations: [
		ClientProfileSourcingRequestChatsComponent,
		ClientProfileSourcingRequestManageRfqComponent,
		ClientProfileSourcingRequestArchivedComponent,
		ProductDescriptionItemComponent,
		RfqButtonsComponent,
		ChangeRfqFormComponent,
	],
	exports: [
		ClientProfileSourcingRequestChatsComponent,
		ClientProfileSourcingRequestManageRfqComponent,
		ClientProfileSourcingRequestArchivedComponent,
		ProductDescriptionItemComponent,
		RfqButtonsComponent,
		ChangeRfqFormComponent,
	],
	imports: [
		CommonModule,
		ClientProfileSourcingRequestRfqRoutingModule,
		ChatsItemModule,
		B2bNgxButtonModule,
		B2bNgxImageModule,
		ReactiveFormsModule,
		B2bNgxInputModule,
		B2bNgxSelectModule,
		B2bNgxTextareaModule,
		B2bNgxFileModule,
		B2bNgxCountrySelectModule,
		B2bNgxCheckboxModule,
	],
})
export class ClientProfileSourcingRequestRfqModule {}
