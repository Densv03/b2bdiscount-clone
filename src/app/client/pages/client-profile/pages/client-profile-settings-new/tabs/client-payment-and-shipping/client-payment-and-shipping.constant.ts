import {PaymentAndShipping} from "../../../../../../../core/models/public-company-info.model";

export interface CheckboxOption<T = string> {
	value: T;
	label: string;
	active?: boolean;
	property?: keyof PaymentAndShipping;
}

export const paymentMethods: CheckboxOption[] = [
	{
		value: 'Swift transfer',
		label: 'Swift transfer',
	},
	{
		value: 'L/C',
		label: 'L/C',
	},
	{
		value: 'Paypal',
		label: 'Paypal',
	},
	{
		value: 'CAD',
		label: 'CAD',
	},
];

export const tradingAreas: CheckboxOption[] = [
	{
		value: 'Domestic market',
		label: 'Domestic market',
	},
	{
		value: 'International market',
		label: 'International market',
	},
];

export const deliveryTerms: CheckboxOption[] = [
	{
		value: 'EXW',
		label: 'EXW',
	},
	{
		value: 'FCA',
		label: 'FCA',
	},
	{
		value: 'FAS',
		label: 'FAS',
	},
	{
		value: 'FOB',
		label: 'FOB',
	},
	{
		value: 'CFR/CIF',
		label: 'CFR/CIF',
	},
	{
		value: 'DPU',
		label: 'DPU',
	},
	{
		value: 'DAP',
		label: 'DAP',
	},
	{
		value: 'DDP',
		label: 'DDP',
	},
];

export const checkBoxes: CheckboxOption<CheckboxOption[]>[] = [
	{
		label: 'Payment method',
		property: 'paymentMethods',
		value: paymentMethods,
	},
	{
		label: 'Trading areas',
		property: 'tradingAreas',
		value: tradingAreas,
	},
	{
		label: 'Delivery terms',
		property: 'deliveryTerms',
		value: deliveryTerms,
	},
];

export const  basePaymentAndShipping: PaymentAndShipping = {
	paymentMethods: [],
	deliveryTerms: [],
	tradingAreas: [],
	countries: []
};
