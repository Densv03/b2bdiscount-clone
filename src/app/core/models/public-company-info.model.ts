import {Phone} from './user/phone.model';
import {Photo} from './photo.model';
import {DocumentModel} from './document.model';
import {B2bAuthRoleInterface} from '../../../../projects/shared/src/interfaces/b2b-auth-role.interface';
import {
	TradeShow
} from "./trade-show.interface";

export interface PublicCompanyInfoModel {
	fullName: string;
	address: string;
	annualRevenue: string;
	advantages: CompanyAdvantage[];
	businessType: string;
	categories: string[];
	companyDescription: string;
	companyName: string;
	country: string;
	createdAt: string;
	tradeShows: TradeShow[]
	documents: DocumentModel[];
	role?: B2bAuthRoleInterface;
	roleId?: string;
	logo: Photo;
	banner: Photo;
	email: string;
	employeesNumber: string;
	phone: Phone;
	position: string;
	user: string;
	website: string;
	socialMedia: SocialMedia;
	yearOfFoundation: string;
	_id: string;
	path: string;
	countActiveUserProducts: number;
	paymentAndShipping: PaymentAndShipping
}

export interface PaymentAndShipping {
	paymentMethods: string[];
	tradingAreas: string[];
	deliveryTerms: string[];
	countries: string[];
}

export interface SocialMedia {
	instagram: string;
	facebook: string;
	linkedin: string;
	twitter: string;
}

export interface CompanyAdvantage {
	title: string,
	content: string;
	_id: string;
}
