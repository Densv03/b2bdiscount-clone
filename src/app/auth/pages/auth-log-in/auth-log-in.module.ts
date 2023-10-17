import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLogInRoutingModule } from './auth-log-in-routing.module';
import { AuthLogInComponent } from './layout/auth-log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { B2bNgxDividerModule } from "lib/ngx-divider/src";
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { B2bNgxLinkModule } from '@b2b/ngx-link';
// import { ErrorTailorModule } from "@ngneat/error-tailor";
import { AuthResetPasswordModalComponent } from './components/auth-reset-password-modal/auth-reset-password-modal.component';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { AuthRecoverAccountModule } from '../auth-recover-account/auth-recover-account.module';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { NgxPasswordModule } from '@b2b/ngx-password';
import { MatDialogModule } from '@angular/material/dialog';
import { B2bNgxDividerModule } from '@b2b/ngx-divider';
import { TranslateModule } from '@ngx-translate/core';
// import {NgxPasswordModule} from "@b2b/ngx-password";

@NgModule({
	declarations: [AuthLogInComponent, AuthResetPasswordModalComponent],
	imports: [
		CommonModule,
		AuthLogInRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		// ErrorTailorModule,
		B2bNgxInputModule,
		B2bNgxButtonModule,
		// B2bNgxDividerModule,
		B2bNgxLinkModule,
		B2bNgxImageModule,
		TranslateModule,
		AuthRecoverAccountModule,
		B2bNgxIconModule,
		NgxPasswordModule,
		// NgxPasswordModule,
		MatDialogModule,
		B2bNgxDividerModule,
	],
})
export class AuthLogInModule {}
