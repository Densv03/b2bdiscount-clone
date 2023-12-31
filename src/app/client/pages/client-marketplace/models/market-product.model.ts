import { Category } from '../../../../core/models/category.model';
import { Amount } from '../../../../core/models/amount.model';
import { Photo } from '../../../../core/models/photo.model';
import { Contact } from '../../../../core/models/contact.model';
import { Visibility } from '../../../../core/models/visibility.model';

export interface MarketProductModel {
	chatStarted: string[];
	reasonForDeletion: string;
	price: Price;
	amount: Amount;
	contact: Contact;
	visibility: Visibility;
	shipping: string[];
	ports: {
		country: string;
		countryCode?: string;
		portName: string[];
		_id?: string;
	}[];
	paymentMethods: string[];
	tradingAreas: string[];
	highDemand: boolean;
	priceDrop: boolean;
	chatCreated: boolean;
	savedCount: number;
	views: number;
	path: string;
	viewedBy: string[];
	openedFor: any[];
	status: string;
	productApproved: boolean;
	productRejected: boolean;
	_id: string;
	description: string;
	title: string;
	specifications: string;
	country: string;
	category: Category[];
	suppliersType: string;
	user: string;
	photos: Photo[];
	photosUrl?: string[];
	documents: any[];
	createdAt: Date;
	updatedAt: Date;
	hidden: boolean;
	productOrigin: string;
	brandName?: string;
	unit?: string;
	specificationList?: {
		item: string;
		specification: string;
		_id: string;
	}[];
}

export interface Price {
	old: number;
}
