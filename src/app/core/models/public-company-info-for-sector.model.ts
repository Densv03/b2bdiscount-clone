import { Phone } from './user/phone.model';
import { Photo } from './photo.model';
import { DocumentModel } from './document.model';
import { B2bAuthRoleInterface } from '../../../../projects/shared/src/interfaces/b2b-auth-role.interface';
import { Category } from '../../client/pages/client-marketplace/shared/models/category.model';

export interface PublicCompanyInfoForSector {
	address: string;
	annualRevenue: string;
	businessType: string;
	categories: Category[];
	companyDescription: string;
	companyName: string;
	country: string;
	createdAt: string;
	documents: DocumentModel[];
	role?: B2bAuthRoleInterface;
	logo: Photo;
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
}

export interface SocialMedia {
	instagram: string;
	facebook: string;
	linkedin: string;
	twitter: string;
}
