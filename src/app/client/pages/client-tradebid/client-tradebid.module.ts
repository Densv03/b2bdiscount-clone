import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { B2bNgxSelectModule } from '@b2b/ngx-select';

import { B2bNgxCountrySelectModule } from '@b2b/ngx-country-select';
import { B2bNgxCheckboxModule } from '@b2b/ngx-checkbox';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { B2bNgxImageModule } from '@b2b/ngx-image';

import { ClientTradebidComponent } from './client-tradebid.component';
import { ClientTradebidRoutingModule } from './client-tradebid-routing.module';
import { ClientTradeBidAddRfqComponent } from 'src/app/client/pages/client-tradebid/components/client-tradebid-add-rfq/client-trade-bid-add-rfq.component';
import { ClientTradebidListingComponent } from 'src/app/client/pages/client-tradebid/components/client-tradebid-listing/client-tradebid-listing.component';
import { RfqListComponent } from 'src/app/client/pages/client-tradebid/components/client-tradebid-listing/rfq-list/rfq-list.component';
import { RfqItemComponent } from 'src/app/client/pages/client-tradebid/components/client-tradebid-listing/rfq-list/rfq-item/rfq-item.component';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { ClientTradebidRfqDetailsComponent } from 'src/app/client/pages/client-tradebid/components/client-tradebid-listing/client-tradebid-rfq-details/client-tradebid-rfq-details.component';
import { MakeQuoteDialogComponent } from 'src/app/client/pages/client-tradebid/components/client-tradebid-listing/dialogs/make-quote-dialog/make-quote-dialog.component';
import { QuotePurchasingDialogComponent } from 'src/app/client/pages/client-tradebid/components/client-tradebid-listing/dialogs/quote-purchasing-dialog/quote-purchasing-dialog.component';
import { ProductInformationComponent } from 'src/app/client/pages/client-tradebid/components/client-tradebid-listing/client-tradebid-rfq-details/product-information/product-information.component';
import { BuyerInformationComponent } from 'src/app/client/pages/client-tradebid/components/client-tradebid-listing/client-tradebid-rfq-details/buyer-information/buyer-information.component';
import { ClientTradebidQuotationFormModule } from 'src/app/client/pages/client-tradebid/components/client-tradebid-listing/client-tradebid-quotation-form/client-tradebid-quotation-form.module';
import { CompanyInformationComponent } from 'src/app/client/pages/client-tradebid/components/company-information/company-information.component';
import { PaginationModule } from '../../shared/components/pagination/pagination.module';
import { B2bNgxTextareaModule } from '@b2b/ngx-textarea';
import { TranslateModule } from '@ngx-translate/core';
import { B2bNgxSkeletonModule } from '@b2b/ngx-skeleton';
import { RfqExplanationBannerModule } from 'src/app/client/pages/client-tradebid/components/client-tradebid-listing/rfq-explanation-banner/rfq-explanation-banner.module';
import { ExplanationBannerModule } from '../../shared/components/rfq-explanation-banner/explanation-banner.module';
import { RfqExplanationModalComponent } from './rfq-explanation-modal/rfq-explanation-modal.component';
import { SharedModule } from '../../shared/components/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateRfqDialogComponent } from './components/create-rfq-dialog/create-rfq-dialog.component';
import { FiltersDropdownModule } from '../client-marketplace/components/filters-dropdown/filters-dropdown.module';
import { ClientMarketplaceModule } from '../client-marketplace/client-marketplace.module';
import { FilterChipsModule } from '../client-marketplace/components/filter-chips/filter-chips.module';
import { ClientMarketplaceBannerComponent } from '../client-marketplace/components/client-marketplace-banner/client-marketplace-banner.component';

@NgModule({
	imports: [
		ExplanationBannerModule,
		ClientTradebidRoutingModule,
		B2bNgxButtonModule,
		B2bNgxImageModule,
		RouterModule,
		CommonModule,
		B2bNgxInputModule,
		ReactiveFormsModule,
		B2bNgxSelectModule,
		// B2bNgxTextareaModule,
		// B2bNgxFileModule,
		B2bNgxCountrySelectModule,
		B2bNgxCheckboxModule,
		// B2bNgxPaginationModule,
		B2bNgxIconModule,
		// B2bNgxTelModule,
		ClientTradebidQuotationFormModule,
		PaginationModule,
		B2bNgxTextareaModule,
		TranslateModule,
		B2bNgxSkeletonModule,
		RfqExplanationBannerModule,
		SharedModule,
		MatDialogModule,
		CreateRfqDialogComponent,
		FiltersDropdownModule,
		ClientMarketplaceModule,
		FilterChipsModule,
		ClientMarketplaceBannerComponent,
		// PaginationModule,
	],
	exports: [],
	declarations: [
		ClientTradebidComponent,
		ClientTradeBidAddRfqComponent,
		ClientTradebidListingComponent,
		RfqListComponent,
		RfqItemComponent,
		ClientTradebidRfqDetailsComponent,
		MakeQuoteDialogComponent,
		QuotePurchasingDialogComponent,
		ProductInformationComponent,
		BuyerInformationComponent,
		CompanyInformationComponent,
		RfqExplanationModalComponent,
	],
	providers: [],
})
export class ClientTradebidModule {}
