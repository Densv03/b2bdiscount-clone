import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientSourcingRequestComponent } from './client-sourcing-request.component';
import { ClientSourcingRequestAddRfqComponent } from './components/client-sourcing-request-add-rfq/client-sourcing-request-add-rfq.component';
import { ClientSourcingRequestListingComponent } from './components/client-sourcing-request-listing/client-sourcing-request-listing.component';
import { AuthGuard } from 'src/app/auth/guards/auth/auth.guard';
import { ClientSourcingRequestRfqDetailsComponent } from './components/client-sourcing-request-listing/client-sourcing-request-rfq-details/client-sourcing-request-rfq-details.component';
import { ClientSourcingRequestQuotationFormComponent } from './components/client-sourcing-request-listing/client-sourcing-request-quotation-form/layout/client-sourcing-request-quotation-form.component';
import { CompanyInformationGuard } from 'src/app/auth/guards/companyInformation/company-information.guard';
import { CompanyInformationComponent } from './components/company-information/company-information.component';

const routes: Routes = [
	{
		path: '',
		component: ClientSourcingRequestComponent,
	},
	{
		path: 'add-rfq',
		component: ClientSourcingRequestAddRfqComponent,
		canActivate: [AuthGuard, CompanyInformationGuard],
	},
	{
		path: 'listing',
		component: ClientSourcingRequestListingComponent,
	},
	{
		path: 'listing/:id',
		component: ClientSourcingRequestRfqDetailsComponent,
	},
	{
		path: 'quotation/:id',
		component: ClientSourcingRequestQuotationFormComponent,
		canActivate: [CompanyInformationGuard],
	},
	{
		path: 'company-information',
		component: CompanyInformationComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [],
	declarations: [],
})
export class ClientSourcingRequestRoutingModule {}
