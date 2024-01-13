import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSidenavComponent } from './components/admin-sidenav/admin-sidenav.component';
import { CoreModule } from '../../../src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { B2bNgxCheckboxModule } from '@b2b/ngx-checkbox';
import { B2bNgxTextareaModule } from '@b2b/ngx-textarea';
import { NgxPasswordModule } from '@b2b/ngx-password';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from './layout/layout.module';
import { translateBrowserLoaderFactory } from '../../../src/app/core/loaders/translate-browser.loader';
import { TransferState } from '@angular/platform-browser';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './auth/components/login/login.component';
import { LogoutComponent } from './auth/components/logout/logout.component';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { B2bNgxDividerModule } from '@b2b/ngx-divider';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { B2bNgxLinkModule } from '@b2b/ngx-link';

@NgModule({
	declarations: [
		AdminComponent,
		AdminSidenavComponent,
		LoginComponent,
		LogoutComponent,
	],
	imports: [
		CommonModule,
		AdminRoutingModule,
		CoreModule,
		FormsModule,
		ReactiveFormsModule,
		MatTreeModule,
		MatIconModule,
		B2bNgxCheckboxModule,
		FormsModule,
		B2bNgxTextareaModule,
		NgxPasswordModule,
		HttpClientModule,
		BrowserAnimationsModule,
		TranslateModule.forRoot({
			defaultLanguage: 'en',
			loader: {
				provide: TranslateLoader,
				useFactory: translateBrowserLoaderFactory,
				deps: [HttpClient, TransferState],
			},
		}),
		B2bNgxButtonModule,
		B2bNgxDividerModule,
		B2bNgxImageModule,
		B2bNgxInputModule,
		B2bNgxLinkModule,
	],
	bootstrap: [AdminComponent],
	exports: [AdminSidenavComponent, LoginComponent],
})
export class AdminModule {}
