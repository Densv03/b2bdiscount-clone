import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { B2bNgxInputModule } from '@b2b/ngx-input';
// import { ErrorTailorModule } from "@ngneat/error-tailor";
import { ClientEmailVerifyRoutingModule } from './client-email-verify-routing.module';
import { ClientEmailVerifyComponent } from './layout/client-email-verify.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [ClientEmailVerifyComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ClientEmailVerifyRoutingModule,
		B2bNgxImageModule,
		B2bNgxButtonModule,
		B2bNgxInputModule,
		TranslateModule,
		// ErrorTailorModule,
	],
})
export class ClientEmailVerifyModule {}
