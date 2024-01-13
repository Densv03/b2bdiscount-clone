import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientProfileSourcingRequestQuotationComponent } from './layout/client-profile-sourcing-request-quotation.component';

const routes: Routes = [
	{
		path: '',
		component: ClientProfileSourcingRequestQuotationComponent,
	},
	{
		path: 'chat/:id',
		loadChildren: () =>
			import(
				'../client-profile-sourcing-request-rfq/components/client-chat/client-chat.module'
			).then((m) => m.ClientChatModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ClientProfileSourcingRequestQuotationRoutingModule {}
