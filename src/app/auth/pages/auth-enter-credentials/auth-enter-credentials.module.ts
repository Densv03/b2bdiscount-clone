import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthEnterCredentialsComponent } from './auth-enter-credentials.component';
import { RouterModule, Routes } from '@angular/router';
import { B2bNgxLinkModule } from '@b2b/ngx-link';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { TranslateModule } from '@ngx-translate/core';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
// import {ErrorTailorModule} from "@ngneat/error-tailor";
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { B2bNgxCheckboxModule } from '@b2b/ngx-checkbox';
import { NgxPasswordModule } from '@b2b/ngx-password';
import { B2bNgxDividerModule } from '@b2b/ngx-divider';

const routes: Routes = [{ path: '', component: AuthEnterCredentialsComponent }];

@NgModule({
	declarations: [AuthEnterCredentialsComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		B2bNgxLinkModule,
		// B2bNgxDividerModule,
		B2bNgxButtonModule,
		B2bNgxImageModule,
		TranslateModule,
		B2bNgxIconModule,
		// ErrorTailorModule,
		ReactiveFormsModule,
		B2bNgxInputModule,
		B2bNgxCheckboxModule,
		NgxPasswordModule,
		B2bNgxDividerModule,
		// NgxPasswordModule
	],
})
export class AuthEnterCredentialsModule {}
