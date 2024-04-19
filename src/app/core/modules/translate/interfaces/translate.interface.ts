import {TranslateParam, TranslateResponse} from "./translate-params.interface";

export interface TranslateI {
	/**
	 * Gets list of cods supported languages
	 */
	languagesList?(): Promise<string[]>;

	/**
	 * Translates text
	 * @param param
	 */
	translateText(param: TranslateParam): Promise<TranslateResponse>;
}
