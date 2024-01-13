import { Phone } from '../../../../../../src/app/core/models/user/phone.model';

export interface CompanyProfileInterface {
	company: string;
	country: string;
	createdAt: Date;
	destinationsList: string[];
	email: string;
	name: string;
	phone: Phone;
	transportType: string[];
	updatedAt: Date;
	user: string;
	_id: string;
}
