import { NgModule } from '@angular/core';
import { AdminMarketplaceComponent } from './admin-marketplace.component';
import { AdminMarketplaceRoutingModule } from './admin-marketplace-routing.module';
import { B2bNgxPaginationModule } from 'projects/ngx-pagination/src/public-api';
import { CommonModule } from '@angular/common';
import { B2bNgxImageModule } from 'projects/ngx-image/src/public-api';
import { B2bNgxDropdownModule } from 'projects/ngx-dropdown/src/public-api';
import { B2bNgxButtonModule } from 'projects/ngx-button/src/public-api';
import { B2bNgxIconModule } from 'projects/ngx-icon/src/public-api';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxInputModule } from 'projects/ngx-input/src/public-api';
import { AdminSupplierProductListComponent } from './components/admin-supplier-product-list/admin-supplier-product-list.component';
import { B2bNgxSelectModule } from 'projects/ngx-select/src/public-api';
import { AdminProductListComponent } from './components/admin-product-list/admin-product-list.component';
import { AdminCompaniesListComponent } from './components/admin-companies-list/admin-companies-list.component';
import { SharedModule } from 'projects/shared/src/public-api';
import { CategoriesDialogModule } from 'projects/categories-modal/src/public-api';
import { PaginationModule } from '../../../../../src/app/client/shared/components/pagination/pagination.module';
import { AdminProductDetailsComponent } from './components/admin-product-details/admin-product-details.component';
import { B2bNgxCheckboxModule } from '@b2b/ngx-checkbox';
import { B2bNgxCountrySelectModule } from '@b2b/ngx-country-select';
import { B2bNgxTextareaModule } from '@b2b/ngx-textarea';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { ClientProfileAddOfferModule } from '../../../../../src/app/client/pages/client-profile/pages/client-profile-add-offer/client-profile-add-offer.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [
		AdminMarketplaceComponent,
		AdminSupplierProductListComponent,
		AdminProductListComponent,
		AdminCompaniesListComponent,
		AdminProductDetailsComponent,
	],
	imports: [
		AdminMarketplaceRoutingModule,
		B2bNgxPaginationModule,
		CommonModule,
		B2bNgxImageModule,
		B2bNgxDropdownModule,
		B2bNgxButtonModule,
		B2bNgxIconModule,
		MatDialogModule,
		SharedModule,
		ReactiveFormsModule,
		B2bNgxInputModule,
		B2bNgxSelectModule,
		CategoriesDialogModule,
		PaginationModule,
		B2bNgxCheckboxModule,
		B2bNgxCountrySelectModule,
		B2bNgxTextareaModule,
		CdkDrag,
		CdkDropList,
		ClientProfileAddOfferModule,
		TranslateModule,
	],
})
export class AdminMarketplaceModule {}
