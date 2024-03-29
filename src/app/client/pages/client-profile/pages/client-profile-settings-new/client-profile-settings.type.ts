export enum TabLabel {
	COMPANY_INFORMATION = 'Company information',
	VERIFICATION = 'Verification',
	PAYMENT_AND_SHIPPING = 'Payment and Shipping',
	OUR_ADVANTAGES = 'Our Advantages',
	DOCUMENTS = 'Documents',
	TRADE_SHOWS = 'Trade shows',
	MEDIA = 'Media',
}

export interface PageTab {
	label: TabLabel;
	path: string;
	active: boolean;
}
