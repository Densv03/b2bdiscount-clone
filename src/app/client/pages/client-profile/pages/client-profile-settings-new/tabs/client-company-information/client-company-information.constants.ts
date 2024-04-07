import {SelectItem} from "./client-company-information.interface";

export const ANNUAL_REVENUE_LIST: string[] = [
	'1-5M',
	'5-10M',
	'10-50M',
	'50-100M',
];

export const EMPLOYEES_NUMBER_LIST: string[] = [
	'1-5',
	'5-10',
	'10-50',
	'50-100',
	'> 100',
];

export function transformToSelect(array: string[]): SelectItem[] {
	return array.map((x) => {
		return {
			id: x,
			value: x,
		};
	});
}

export const toastMessages = {
	loading: 'Updating company information...',
	success: 'Company information successfully updated.',
	error: 'Company information updating failed',
};
