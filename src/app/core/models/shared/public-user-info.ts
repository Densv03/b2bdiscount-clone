export interface PublicUserInfo {
	companyName: string;
	address: string;
	fullName: string;
	companyLogo: {
		name: string;
		_id: string;
		path: string;
	};
	countryCode: string;
	country: string;
	number: string;
	_id: string;
	companyId: string;
	dialCode: string;
	suppliersType: string;
	website?: string;
}
