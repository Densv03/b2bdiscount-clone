import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminArticleCategoriesRoutingModule } from './admin-article-categories-routing.module';
import { AdminArticleCategoriesComponent } from './layout/admin-article-categories.component';
import { B2bNgxInputModule } from 'projects/ngx-input/src/public-api';
import { B2bNgxButtonModule } from 'projects/ngx-button/src/public-api';
import { B2bNgxSelectModule } from 'projects/ngx-select/src/public-api';
import { B2bNgxToggleModule } from 'projects/ngx-toggle/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [AdminArticleCategoriesComponent],
	imports: [
		CommonModule,
		B2bNgxInputModule,
		B2bNgxButtonModule,
		B2bNgxSelectModule,
		B2bNgxToggleModule,
		ReactiveFormsModule,
		AdminArticleCategoriesRoutingModule,
	],
})
export class AdminArticleCategoriesModule {}
