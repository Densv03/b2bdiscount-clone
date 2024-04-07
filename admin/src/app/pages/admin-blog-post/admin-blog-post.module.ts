import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxButtonModule } from 'projects/ngx-button/src/public-api';
import { B2bNgxChipsModule } from 'projects/ngx-chips/src/public-api';
import { B2bNgxCountrySelectModule } from 'projects/ngx-country-select/src/public-api';
import { B2bNgxFileModule } from 'projects/ngx-file/src/public-api';
import { B2bNgxInputModule } from 'projects/ngx-input/src/public-api';
import { B2bNgxSelectModule } from 'projects/ngx-select/src/public-api';
import { AdminBlogPostRoutingModule } from './admin-blog-post-routing.module';
import { AdminBlogPostComponent } from './layout/admin-blog-post.component';
import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { B2bDatepickerModule } from "@b2b/datepicker";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";

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
        ReactiveFormsModule,
        B2bNgxChipsModule,
        TranslateModule,
        CKEditorModule,
        B2bDatepickerModule,
        MatFormField,
        MatInput,
        MatLabel,
        MatIcon,
        MatIconButton,
        MatButton,
        MatCheckbox,
			MatDialogModule,
			MatIconModule
    ],
})
export class AdminBlogPostModule {}
