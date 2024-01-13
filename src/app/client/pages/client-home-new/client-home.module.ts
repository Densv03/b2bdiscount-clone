import { NgModule } from '@angular/core';
import { ClientHomeComponent } from './layout/client-home.component';
import { CommonModule } from '@angular/common';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { ClientHomeRoutingModule } from './client-home-routing.module';
import { B2bNgxLinkModule } from '@b2b/ngx-link';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeLatestProductsModule } from './components/home-latest-products/home-latest-products.module';
import { B2bNgxCheckboxModule } from '@b2b/ngx-checkbox';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { RouterModule } from '@angular/router';
import { B2bNgxTelModule } from '@b2b/ngx-tel';
import { TreeviewModule } from '@b2b/ngx-treeview';
import { TranslateModule } from '@ngx-translate/core';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
	declarations: [ClientHomeComponent],
	imports: [
		RouterModule,
		CommonModule,
		B2bNgxButtonModule,
		ClientHomeRoutingModule,
		B2bNgxLinkModule,
		B2bNgxImageModule,
		B2bNgxIconModule,
		ReactiveFormsModule,
		B2bNgxImageModule,
		HomeLatestProductsModule,
		B2bNgxCheckboxModule,
		B2bNgxInputModule,
		FormsModule,
		B2bNgxTelModule,
		TreeviewModule,
		TranslateModule,
		TabsModule,
	],
})
export class ClientHomeModule {}
