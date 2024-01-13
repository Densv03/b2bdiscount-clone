import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOfferCategoriesRoutingModule } from './admin-offer-categories-routing.module';
import { AdminOfferCategoriesComponent } from './layout/admin-offer-categories.component';
import { B2bNgxInputModule } from 'projects/ngx-input/src/public-api';
import { B2bNgxSelectModule } from 'projects/ngx-select/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxButtonModule } from 'projects/ngx-button/src/public-api';
import { B2bNgxToggleModule } from 'projects/ngx-toggle/src/public-api';

@NgModule({
	declarations: [AdminOfferCategoriesComponent],
	imports: [
		CommonModule,
		AdminOfferCategoriesRoutingModule,
		B2bNgxInputModule,
		B2bNgxButtonModule,
		B2bNgxSelectModule,
		B2bNgxToggleModule,
		ReactiveFormsModule,
	],
})
export class AdminOfferCategoriesModule {}
