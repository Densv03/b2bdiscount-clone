import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientUnclaimedCargoRoutingModule } from './client-unclaimed-cargo-routing.module';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { B2bNgxSelectModule } from '@b2b/ngx-select';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
// import { B2bNgxSkeletonModule } from "@b2b/ngx-skeleton";
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxCountrySelectModule } from '@b2b/ngx-country-select';
// import { B2bNgxPaginationModule } from "@b2b/ngx-pagination";
import { ClientUnclaimedCargoGrid } from './components/client-unclaimed-cargo-grid/client-unclaimed-cargo-grid.component';
import { ClientLatestOffersListComponent } from './components/client-unclaimed-cargo-list/client-latest-offers-list.component';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { B2bNgxLinkModule } from '@b2b/ngx-link';

import { ClientUnclaimedCargoComponent } from './layout/client-unclaimed-cargo.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TreeviewModule } from '@b2b/ngx-treeview';
import { TranslateModule } from '@ngx-translate/core';
import { ClientMarketplaceBannerComponent } from 'src/app/client/pages/client-marketplace/components/client-marketplace-banner/client-marketplace-banner.component';
import { ClientMarketplaceProductItemModule } from 'src/app/client/pages/client-marketplace/components/client-marketplace-product-item/client-marketplace-product-item.module';
import { ExplanationBannerModule } from 'src/app/client/shared/components/rfq-explanation-banner/explanation-banner.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ClientLatestOffersGridBannerModule } from './components/client-unclaimed-cargo-grid-banner/client-latest-offers-grid-banner.module';
import { SharedModule } from '../../shared/components/shared.module';
import { ClientLatestOffersGridItemModule } from './components/client-unclaimed-cargo-grid-item/client-latest-offers-grid-item.module';
import { CargoExplanationModalModule } from './components/cargo-explanation-modal/cargo-explanation-modal.module';
@NgModule({
	declarations: [
		ClientUnclaimedCargoComponent,
		ClientUnclaimedCargoGrid,
		ClientLatestOffersListComponent,
	],
	imports: [
		CommonModule,
		ClientUnclaimedCargoRoutingModule,
		ReactiveFormsModule,
		B2bNgxInputModule,
		B2bNgxSelectModule,
		B2bNgxButtonModule,
		B2bNgxIconModule,
		// B2bNgxSkeletonModule,
		B2bNgxCountrySelectModule,
		// B2bNgxPaginationModule,
		B2bNgxImageModule,
		B2bNgxLinkModule,
		// NgxTippyModule,
		PaginationModule,
		TreeviewModule,
		TranslateModule,
		ClientMarketplaceBannerComponent,
		ClientMarketplaceProductItemModule,
		ExplanationBannerModule,
		MatDialogModule,
		SharedModule,
		ClientLatestOffersGridBannerModule,
		SharedModule,
		ClientLatestOffersGridItemModule,
		CargoExplanationModalModule,
	],
})
export class ClientUnclaimedCargoModule {}
