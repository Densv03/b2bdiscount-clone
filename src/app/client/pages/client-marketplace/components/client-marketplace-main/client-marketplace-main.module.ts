import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClientMarketplaceMainComponent } from './client-marketplace-main.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryItemModule } from '../../pages/category-listing/category-item/category-item.module';
// import {SwiperModule} from "swiper/angular";
import { CompaniesCounterComponent } from './components/companies-counter/companies-counter.component';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { MatTabsModule } from '@angular/material/tabs';
import { B2bNgxSelectModule } from '@b2b/ngx-select';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { ReactiveFormsModule } from '@angular/forms';
import { B2bBreadcrumbsModule } from '@b2b/breadcrumbs';
import { SharedModule } from '../../../../shared/components/shared.module';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { B2bNgxLinkModule } from '@b2b/ngx-link';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { MarketAdvertisingMaterialsComponent } from './components/market-advertising-materials/market-advertising-materials.component';
import { B2bNgxLogoModule } from '@b2b/ngx-logo';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
	{ path: '', component: ClientMarketplaceMainComponent },
];
@NgModule({
	declarations: [
		ClientMarketplaceMainComponent,
		CompaniesCounterComponent,
		MarketAdvertisingMaterialsComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		CategoryItemModule,
		// SwiperModule,
		B2bNgxButtonModule,
		MatTabsModule,
		B2bNgxSelectModule,
		B2bNgxInputModule,
		ReactiveFormsModule,
		B2bBreadcrumbsModule,
		SharedModule,
		B2bNgxIconModule,
		B2bNgxLinkModule,
		MatDialogModule,
		MatIconModule,
		B2bNgxImageModule,
		B2bNgxLogoModule,
		MatRippleModule,
		MatInputModule,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [CompaniesCounterComponent],
})
export class ClientMarketplaceMainModule {}
