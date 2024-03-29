import {NgModule} from '@angular/core';
import {ClientProfileYourAccountComponent} from './layout/client-profile-your-account.component';
import {CommonModule} from '@angular/common';
import {ClientProfileYourAccountRoutingModule} from './client-profile-your-account-routing.module';
import {B2bNgxButtonModule} from '@b2b/ngx-button';
import {MatButton} from '@angular/material/button';
import {MatIcon} from "@angular/material/icon";
import {B2bNgxIconModule} from "@b2b/ngx-icon";
import {MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material/dialog";

@NgModule({
	declarations: [ClientProfileYourAccountComponent],
	imports: [
		CommonModule,
		B2bNgxButtonModule,
		ClientProfileYourAccountRoutingModule,
		MatButton,
		MatIcon,
		B2bNgxIconModule,
	],
	providers: [
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {overlayPanelClass: 'w-full md:max-w-[80vw]'}
		}
	],
})
export class ClientProfileYourAccountModule {
}
