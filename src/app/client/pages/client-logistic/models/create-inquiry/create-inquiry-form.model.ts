import { Phone } from 'src/app/core/models/user/phone.model';

export interface CreateInquiryForm {
	productNameWithCode: string;
	weight: string;
	fullName: string;
	country: string;
	phone: Phone;
	email: string;
	description?: string;
}
