import {Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {supportedLanguages} from "../config/translation.config";
import {HttpClient} from "@angular/common/http";
import {TranslateParam, TranslateResponse} from "../interfaces/translate-params.interface";
import {environment} from "../../../../../environments/environment";

/**
 * This service is implements Facade pattern.
 * Because we can change our translation provider
 */
@Injectable({
	providedIn: 'root'
})
export class TranslationFacadeService {
	supportedLangs = supportedLanguages;

	constructor(private translateProvider: TranslateService,
							private httpService: HttpClient) {
	}

	get supportedLang() {
		return this.supportedLangs.filter(x => x === this.currentLang);
	}

	get defaultLang() {
		return this.translateProvider.defaultLang;
	}

	get currentLang() {
		return this.translateProvider.currentLang;
	}

	get langs() {
		return this.translateProvider.langs;
	}

	set(key: string, value: string, lang?: string) {
		return this.translateProvider.set(key, value, lang);
	}

	get(key: string) {
		return this.translateProvider.get(key);
	}

	getLang() {
		return this.translateProvider.currentLang;
	}

	setLang(lang: string) {
		this.translateProvider.use(lang);
	}

	getLangs() {
		return this.translateProvider.getLangs();
	}

	getTranslation(lang: string) {
		return this.translateProvider.getTranslation(lang);
	}

	async translate(param: TranslateParam): Promise<TranslateResponse> {
		return this.httpService.post<TranslateResponse>(environment.apiUrl + 'translate', param).toPromise()
	}
}
