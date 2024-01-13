import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientProfileSourcingRequestRfqComponent } from './layout/client-profile-sourcing-request-rfq.component';
import { ChangeRfqFormComponent } from './components/change-rfq-form/change-rfq-form.component';

const routes: Routes = [
	{
		path: '',
		component: ClientProfileSourcingRequestRfqComponent,
	},
	{
		path: 'chat/:id',
		loadChildren: () =>
			import('./components/client-chat/client-chat.module').then(
				(m) => m.ClientChatModule
			),
	},
	{
		path: 'change-rfq/:id',
		component: ChangeRfqFormComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ClientProfileSourcingRequestRfqRoutingModule {}
