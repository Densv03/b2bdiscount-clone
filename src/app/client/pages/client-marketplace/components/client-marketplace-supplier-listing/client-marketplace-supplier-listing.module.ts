import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientMarketplaceSupplierListingComponent } from './client-marketplace-supplier-listing.component';
import { RouterModule, Routes } from '@angular/router';
import { B2bBreadcrumbsModule } from '@b2b/breadcrumbs';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientMarketplaceModule } from '../../client-marketplace.module';
import { ClientMarketplaceListingGridModule } from '../client-marketplace-listing-grid/client-marketplace-listing-grid.module';
import { B2bNgxPaginationModule } from '@b2b/ngx-pagination';

const routes: Routes = [
	{ path: '', component: ClientMarketplaceSupplierListingComponent },
];

@NgModule({
	declarations: [ClientMarketplaceSupplierListingComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		B2bBreadcrumbsModule,
		ReactiveFormsModule,
		ClientMarketplaceModule,
		ClientMarketplaceListingGridModule,
		B2bNgxPaginationModule,
	],
})
export class ClientMarketplaceSupplierListingModule {}
