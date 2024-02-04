import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { RouterModule } from '@angular/router';
import { ClientFooterComponent } from './components/client-footer/client-footer.component';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { B2bNgxLinkModule } from '@b2b/ngx-link';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { B2bNgxSelectModule } from '@b2b/ngx-select';
import { ClientCookiesModalComponent } from './components/client-cookies-modal/client-cookies-modal.component';
import { ClientComponent } from './layout/client.component';
import { TranslateModule } from '@ngx-translate/core';
import { ClientDropdownModule } from './components/client-dropdown/client-dropdown.module';
import { SvgIconComponent } from 'angular-svg-icon';

@NgModule({
	declarations: [
		ClientComponent,
		ClientFooterComponent,
		ClientCookiesModalComponent,
	],
	imports: [
		CommonModule,
		ClientRoutingModule,
		RouterModule,
		B2bNgxImageModule,
		B2bNgxLinkModule,
		B2bNgxIconModule,
		B2bNgxButtonModule,
		FormsModule,
		ReactiveFormsModule,
		B2bNgxInputModule,
		B2bNgxButtonModule,
		B2bNgxSelectModule,
		TranslateModule,
		ClientDropdownModule,
		SvgIconComponent,
	],
})
export class ClientModule {}
