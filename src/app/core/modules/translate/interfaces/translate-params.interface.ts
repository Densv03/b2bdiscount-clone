import {TranslationProvidersEnum} from "../enum/translation-providers.enum";

export interface TranslateParam {
	/**
	 * Text to translate
	 */
	text: string,
	/**
	 * String key to identify translation
	 */
	key: string;
	/**
	 * Lang code. 2 symbols
	 */
	langFrom?: string,
	/**
	 * Lang code. 2 symbols
	 */
	langTo?: string,
	/**
	 * Provider
	 */
	provider?: TranslationProvidersEnum;
}

export interface TranslateResponse extends TranslateParam {}

export type DynamicKey = 'product' | 'company';
