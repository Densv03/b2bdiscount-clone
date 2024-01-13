import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientMarketplaceListingComponent } from './client-marketplace-listing.component';
import { ClientMarketplaceProductDetailsComponent } from '../components/client-marketplace-product-details/client-marketplace-product-details.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: ClientMarketplaceListingComponent,
	},
	{
		path: 'products/:productId',
		component: ClientMarketplaceProductDetailsComponent,
		data: {
			breadcrumbs: [
				{ label: 'Home', url: '/' },
				{ label: 'B2BMARKET', url: '/b2bmarket' },
				{ label: 'OFFERS', url: '/b2bmarket/listing' },
			],
		},
	},
	{
		path: ':category',
		component: ClientMarketplaceListingComponent,
	},
	{
		path: ':category/:childCategory',
		component: ClientMarketplaceListingComponent,
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ClientMarketplaceListingRoutingModule {}
