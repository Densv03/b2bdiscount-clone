import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { ClientRegistrationCompleteRoutingModule } from './client-registration-complete-routing.module';
import { ClientRegistrationCompleteComponent } from './layout/client-registration-complete.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [ClientRegistrationCompleteComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ClientRegistrationCompleteRoutingModule,
		B2bNgxImageModule,
		B2bNgxInputModule,
		B2bNgxButtonModule,
		TranslateModule,
		// ErrorTailorModule,
	],
})
export class ClientRegistrationCompleteModule {}
