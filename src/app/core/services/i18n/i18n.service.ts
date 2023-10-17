import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
	providedIn: 'root',
})
export class I18nService {
	// public readonly formControl;

	constructor(private readonly translateService: TranslateService) {}

	setActiveLang(lang: string) {
		this.translateService.use('en' || lang);
	}
}
