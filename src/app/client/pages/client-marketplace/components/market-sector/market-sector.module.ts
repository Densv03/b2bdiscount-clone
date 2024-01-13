import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketSectorRoutingModule } from './market-sector-routing.module';
import { MarketSectorComponent } from './market-sector.component';
import { B2bBreadcrumbsModule } from '@b2b/breadcrumbs';
import { CategoriesCarouselComponent } from './components/categories-carousel/categories-carousel.component';
import { MatIconModule } from '@angular/material/icon';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { MatButtonModule } from '@angular/material/button';
import { MarketProductItemComponent } from './components/market-product-item/market-product-item.component';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxButtonModule } from '@b2b/ngx-button';

@NgModule({
	declarations: [
		MarketSectorComponent,
		CategoriesCarouselComponent,
		MarketProductItemComponent,
	],
	imports: [
		CommonModule,
		MarketSectorRoutingModule,
		B2bBreadcrumbsModule,
		MatIconModule,
		B2bNgxImageModule,
		B2bNgxIconModule,
		MatButtonModule,
		B2bNgxInputModule,
		ReactiveFormsModule,
		B2bNgxButtonModule,
	],
})
export class MarketSectorModule {}
