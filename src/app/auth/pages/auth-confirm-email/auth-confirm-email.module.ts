import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthConfirmEmailRoutingModule } from './auth-confirm-email-routing.module';
import { AuthConfirmEmailComponent } from './layout/auth-confirm-email.component';
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [AuthConfirmEmailComponent],
	imports: [
		CommonModule,
		AuthConfirmEmailRoutingModule,
		ReactiveFormsModule,
		B2bNgxButtonModule,
		TranslateModule,
	],
})
export class AuthConfirmEmailModule {}
