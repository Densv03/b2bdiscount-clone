import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ClientBlogAuthorsPageRoutingModule } from './client-blog-authors-page-routing.module';
import { ClientBlogAuthorsPageComponent } from './layout/client-blog-authors-page.component';
import { B2bNgxLinkModule } from '@b2b/ngx-link';
import { PaginationModule } from '../../shared/components/pagination/pagination.module';
import { SharedModule } from '../../shared/components/shared.module';
import {PluralizePipe} from "../../../core/pipes/pluralize.pipe";
import {PageLoaderModule} from "../../../core/components/page-loader/page-loader.module";
import {B2bSvgIconComponent} from "../../shared/components/svg-icon/b2b-svg-icon.component";

@NgModule({
	declarations: [ClientBlogAuthorsPageComponent],
	imports: [
		CommonModule,
		ClientBlogAuthorsPageRoutingModule,
		NgOptimizedImage,
		B2bNgxLinkModule,
		PaginationModule,
		SharedModule,
		PluralizePipe,
		PageLoaderModule,
		B2bSvgIconComponent,
	],
})
export class ClientBlogAuthorsPageModule {}
