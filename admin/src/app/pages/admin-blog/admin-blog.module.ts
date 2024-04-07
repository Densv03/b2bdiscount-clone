import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { B2bNgxButtonModule } from 'projects/ngx-button/src/public-api';
import { B2bNgxDropdownModule } from 'projects/ngx-dropdown/src/public-api';
import { B2bNgxIconModule } from 'projects/ngx-icon/src/public-api';
import { B2bNgxImageModule } from 'projects/ngx-image/src/public-api';
import { B2bNgxLinkModule } from 'projects/ngx-link/src/public-api';
import { B2bNgxPaginationModule } from 'projects/ngx-pagination/src/public-api';
import { AdminBlogRoutingModule } from './admin-blog-routing.module';
import { AdminBlogListComponent } from './components/admin-articles-list/admin-blog-list.component';
import { AdminBlogComponent } from './layout/admin-blog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SvgIconComponent } from "angular-svg-icon";
import { MatIcon } from "@angular/material/icon";
import { MatTooltip } from "@angular/material/tooltip";

@NgModule({
	declarations: [AdminBlogComponent, AdminBlogListComponent],
	imports: [
		CommonModule,
		AdminBlogRoutingModule,
		B2bNgxLinkModule,
		B2bNgxImageModule,
		B2bNgxPaginationModule,
		B2bNgxDropdownModule,
		B2bNgxIconModule,
		B2bNgxButtonModule,
		MatDialogModule,
		SvgIconComponent,
		MatIcon,
		MatTooltip,
	],
})
export class AdminBlogModule {}
