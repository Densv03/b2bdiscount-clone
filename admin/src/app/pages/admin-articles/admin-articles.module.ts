import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminArticlesRoutingModule } from './admin-articles-routing.module';
import { AdminArticlesComponent } from './layout/admin-articles.component';
import { AdminArticlesListComponent } from './components/admin-articles-list/admin-articles-list.component';
import { B2bNgxLinkModule } from 'projects/ngx-link/src/public-api';
import { B2bNgxImageModule } from 'projects/ngx-image/src/public-api';
import { B2bNgxPaginationModule } from 'projects/ngx-pagination/src/public-api';
import { B2bNgxDropdownModule } from 'projects/ngx-dropdown/src/public-api';
import { B2bNgxIconModule } from 'projects/ngx-icon/src/public-api';
import { B2bNgxButtonModule } from 'projects/ngx-button/src/public-api';

@NgModule({
	declarations: [AdminArticlesComponent, AdminArticlesListComponent],
	imports: [
		CommonModule,
		AdminArticlesRoutingModule,
		B2bNgxLinkModule,
		B2bNgxImageModule,
		B2bNgxPaginationModule,
		B2bNgxDropdownModule,
		B2bNgxIconModule,
		B2bNgxButtonModule,
	],
})
export class AdminArticlesModule {}
