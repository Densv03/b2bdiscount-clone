import { NgModule } from '@angular/core';
import { ClientMarketplaceListingGridComponent } from './client-marketplace-listing-grid.component';
import { CommonModule } from '@angular/common';
import { ClientMarketplaceProductItemModule } from '../client-marketplace-product-item/client-marketplace-product-item.module';
import { B2bNgxSkeletonModule } from '@b2b/ngx-skeleton';
import { ClientMarketplaceBannerComponent } from 'src/app/client/pages/client-marketplace/components/client-marketplace-banner/client-marketplace-banner.component';

@NgModule({
	declarations: [ClientMarketplaceListingGridComponent],
	exports: [ClientMarketplaceListingGridComponent],
	imports: [
		CommonModule,
		ClientMarketplaceProductItemModule,
		B2bNgxSkeletonModule,
		ClientMarketplaceBannerComponent,
	],
})
export class ClientMarketplaceListingGridModule {}
