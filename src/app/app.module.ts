import { NgModule } from '@angular/core';
import { BrowserModule, TransferState } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { B2bNgxCheckboxModule } from '@b2b/ngx-checkbox';
import { B2bNgxTextareaModule } from '@b2b/ngx-textarea';
import { NgxPasswordModule } from '@b2b/ngx-password';
import { CoreModule } from './core/core.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { translateBrowserLoaderFactory } from './core/loaders/translate-browser.loader';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';

@NgModule({
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
		environment.production ? [] : AkitaNgDevtools.forRoot(),
	],
	exports: [TranslateModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
