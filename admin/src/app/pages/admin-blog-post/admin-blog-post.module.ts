import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxButtonModule } from 'projects/ngx-button/src/public-api';
import { B2bNgxChipsModule } from 'projects/ngx-chips/src/public-api';
import { B2bNgxCountrySelectModule } from 'projects/ngx-country-select/src/public-api';
import { B2bNgxFileModule } from 'projects/ngx-file/src/public-api';
import { B2bNgxInputModule } from 'projects/ngx-input/src/public-api';
import { B2bNgxSelectModule } from 'projects/ngx-select/src/public-api';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AdminBlogPostRoutingModule } from './admin-blog-post-routing.module';
import { AdminBlogPostComponent } from './layout/admin-blog-post.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [AdminBlogPostComponent],
	imports: [
		CommonModule,
		AdminBlogPostRoutingModule,
		B2bNgxInputModule,
		B2bNgxFileModule,
		B2bNgxSelectModule,
		B2bNgxButtonModule,
		B2bNgxCountrySelectModule,
		AngularEditorModule,
		ReactiveFormsModule,
		B2bNgxChipsModule,
		TranslateModule,
	],
})
export class AdminBlogPostModule {}
