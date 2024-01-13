import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminMarketplaceComponent } from './admin-marketplace.component';
import { AdminSupplierProductListComponent } from './components/admin-supplier-product-list/admin-supplier-product-list.component';
import { AdminProductDetailsComponent } from './components/admin-product-details/admin-product-details.component';

const routes: Routes = [
	{
		path: '',
		component: AdminMarketplaceComponent,
	},
	{
		path: ':id',
		component: AdminProductDetailsComponent,
	},
	{
		path: 'supplier/:id',
		component: AdminSupplierProductListComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminMarketplaceRoutingModule {}
