import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientProfileMarketplaceEditProductComponent } from './client-profile-marketplace-edit-product.component';

const routes: Routes = [
	{
		path: '',
		component: ClientProfileMarketplaceEditProductComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ClientProfileMarketplaceEditProductRoutingModule {}
