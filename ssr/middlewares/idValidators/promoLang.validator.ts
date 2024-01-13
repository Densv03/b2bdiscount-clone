export function isValidPromoLang(value: string): Promise<boolean> {
	return Promise.resolve(['en', 'es', 'fr', 'hi', 'pt', 'tr', 'ar'].includes(value));
}
