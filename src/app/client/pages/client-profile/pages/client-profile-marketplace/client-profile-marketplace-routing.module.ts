import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientProfileMarketplaceComponent } from './layout/client-profile-marketplace.component';
import { AuthGuard } from '../../../../../auth/guards/auth/auth.guard';
import { CompanyInformationGuard } from '../../../../../auth/guards/companyInformation/company-information.guard';

const routes: Routes = [
	{
		path: '',
		component: ClientProfileMarketplaceComponent,
	},
	{
		path: 'edit/:id',
		loadChildren: () =>
			import(
				'./components/client-profile-marketplace-edit-product/client-profile-marketplace-edit-product.module'
			).then((m) => m.ClientProfileMarketplaceEditProductModule),
		canActivate: [CompanyInformationGuard],
	},
	{
		path: 'chat/:id',
		canActivate: [AuthGuard],
		loadChildren: () =>
			import('./components/client-chat/client-chat.module').then(
				(m) => m.ClientChatModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ClientProfileMarketplaceRoutingModule {}
