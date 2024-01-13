import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientCookiePolicyRoutingModule } from './client-cookie-policy-routing.module';
import { ClientCookiePolicyComponent } from './layout/client-cookie-policy.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@siemens/ngx-datatable';

@NgModule({
	declarations: [ClientCookiePolicyComponent],
	imports: [
		CommonModule,
		ClientCookiePolicyRoutingModule,
		NgxDatatableModule,
		TranslateModule,
	],
})
export class ClientCookiePolicyModule {}
