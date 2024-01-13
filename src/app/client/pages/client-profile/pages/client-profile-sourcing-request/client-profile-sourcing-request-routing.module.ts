import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientProfileSourcingRequestComponent } from './layout/client-profile-sourcing-request.component';

const routes: Routes = [
	{
		path: '',
		component: ClientProfileSourcingRequestComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'my-rfq',
			},
			{
				path: 'my-rfq',
				loadChildren: () =>
					import(
						'./client-profile-sourcing-request-rfq/client-profile-sourcing-request-rfq.module'
					).then((m) => m.ClientProfileSourcingRequestRfqModule),
			},
			{
				path: 'my-quotation',
				loadChildren: () =>
					import(
						'./client-profile-sourcing-request-quotation/client-profile-sourcing-request-quotation.module'
					).then((m) => m.ClientProfileSourcingRequestQuotationModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ClientProfileSourcingRequestRoutingModule {}
