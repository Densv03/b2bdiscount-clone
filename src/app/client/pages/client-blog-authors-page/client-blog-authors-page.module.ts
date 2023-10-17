import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ClientBlogAuthorsPageRoutingModule } from './client-blog-authors-page-routing.module';
import { ClientBlogAuthorsPageComponent } from './layout/client-blog-authors-page.component';
import { B2bNgxLinkModule } from '@b2b/ngx-link';
import { PaginationModule } from '../../shared/components/pagination/pagination.module';
import { SharedModule } from '../../shared/components/shared.module';

@NgModule({
	declarations: [ClientBlogAuthorsPageComponent],
	imports: [
		CommonModule,
		ClientBlogAuthorsPageRoutingModule,
		NgOptimizedImage,
		B2bNgxLinkModule,
		PaginationModule,
		SharedModule,
	],
})
export class ClientBlogAuthorsPageModule {}
