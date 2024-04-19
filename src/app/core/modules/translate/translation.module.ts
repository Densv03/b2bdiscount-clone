import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevTools, FormatSimple, NgxTolgeeModule, Tolgee, TOLGEE_INSTANCE, TolgeeOptions} from '@tolgee/ngx';
import {environment} from "../../../../environments/environment";

const tolgeeOptions: TolgeeOptions = {
	language: 'en',
	apiUrl: environment.tolgeeApiUrl,
	apiKey: environment.tolgeeApiKey,
}

@NgModule({
	imports: [
		CommonModule,
		NgxTolgeeModule
	],
	providers: [

	]
})
export class TranslationModule {
}
