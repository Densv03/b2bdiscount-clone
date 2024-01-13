import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSourcingRequestComponent } from './layout/admin-sourcing-request.component';
import { ClientSourcingRequestRfqDetailsComponent } from '../../../../../src/app/client/pages/client-sourcing-request/components/client-sourcing-request-listing/client-sourcing-request-rfq-details/client-sourcing-request-rfq-details.component';

const routes: Routes = [
	{
		path: '',
		component: AdminSourcingRequestComponent,
	},
	{
		path: ':id',
		component: ClientSourcingRequestRfqDetailsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminSourcingRequestRoutingModule {}
