import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyProductsComponent } from './company-products.component';
import { ClientMarketplaceListingGridModule } from '../../../../components/client-marketplace-listing-grid/client-marketplace-listing-grid.module';
import { B2bNgxPaginationModule } from '@b2b/ngx-pagination';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { B2bNgxButtonModule } from '@b2b/ngx-button';

@NgModule({
	declarations: [CompanyProductsComponent],
	exports: [CompanyProductsComponent],
	imports: [
		CommonModule,
		ClientMarketplaceListingGridModule,
		B2bNgxPaginationModule,
		B2bNgxImageModule,
		B2bNgxButtonModule
	],
})
export class MarketCompanyProductsModule {}
