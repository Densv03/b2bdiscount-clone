import {Injectable} from '@angular/core';
import {DynamicKey, TranslateParam, TranslateResponse} from "../interfaces/translate-params.interface";
import {TranslationFacadeService} from "../translation-facade/translation-facade.service";

@Injectable({
	providedIn: 'root'
})
export class TranslationService {

	constructor(private translationFacade: TranslationFacadeService) {
	}

	get supportedLangs() {
		return this.translationFacade.supportedLangs;
	}

	get currentLang() {
		return this.translationFacade.currentLang;
	}

	get langs() {
		return this.translationFacade.langs;
	}

	get(key: string) {
		return this.translationFacade.get(key);
	}

	setLang(lang: string) {
		this.translationFacade.setLang(lang);
	}

	generateKey<T>(dynamicKey: DynamicKey, id: string, keys: [keyof T]) {
		return `${dynamicKey}.${id}.${keys.join('.').toLowerCase()}`
	}

	async translateMany(params: TranslateParam[]) {
		return await Promise.all(params.map(x => this.translateAndSaveOne(x)));
	}

	async translateOne(params: TranslateParam): Promise<TranslateResponse[]> {
		return await Promise.all(this.supportedLangs.map(x => this.translateAndSaveOne({
			...params,
			langTo: x,
			langFrom: this.currentLang
		})));
	}

	private async translateAndSaveOne(params: TranslateParam): Promise<TranslateResponse> {
		try {
			const translation = await this.translate(params)
			this.translationFacade.set(translation.key, translation.text, translation.langTo);
			return translation;
		} catch (e) {
			console.error(e);
			return null;
		}
	}

	private translate(param: TranslateParam) {
		return this.translationFacade.translate(param);
	}
}
