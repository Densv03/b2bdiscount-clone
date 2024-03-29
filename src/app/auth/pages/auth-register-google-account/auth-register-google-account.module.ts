import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRegisterGoogleAccountRoutingModule } from './auth-register-google-account-routing.module';
import { AuthRegisterGoogleAccountComponent } from './layout/auth-register-google-account.component';

@NgModule({
	declarations: [AuthRegisterGoogleAccountComponent],
	imports: [CommonModule, AuthRegisterGoogleAccountRoutingModule],
})
export class AuthRegisterGoogleAccountModule {}
