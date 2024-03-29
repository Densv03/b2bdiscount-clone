import {B2bNgxButtonThemeEnum} from "@b2b/ngx-button";

export interface DefaultModalButton<T> {
	label: string;
	theme?: B2bNgxButtonThemeEnum;
	result?: T;
}

export interface DefaultModalData<T> {
	description: string;
	title: string;
	label: string;
	buttons: DefaultModalButton<T>[];
}
