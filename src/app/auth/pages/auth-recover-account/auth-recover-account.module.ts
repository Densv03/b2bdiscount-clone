import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { AuthRecoverAccountComponent } from './auth-recover-account.component';

@NgModule({
	declarations: [AuthRecoverAccountComponent],
	imports: [CommonModule, B2bNgxImageModule],
	exports: [AuthRecoverAccountComponent],
})
export class AuthRecoverAccountModule {}
