import {Offer} from "../../../../../src/app/core/models/offer.model";
import {Phone} from "../../../../../src/app/core/models/user/phone.model";
import {B2bAuthRootRoleInterface} from "../../../../../projects/shared/src/interfaces/b2b-auth-root-role.interface";
import {B2bAuthSubRoleInterface} from "../../../../../projects/shared/src/interfaces/b2b-auth-root-role.interface";
import {Photo} from "../../../../../src/app/core/models/photo.model";

interface UnclaimedCargoProductAmount {
	count: string;
	unit: {
		_id: string;
		name: string;
		displayName: string;
	};
}

interface UnclaimedCargoProductVisibility {
	companyName: boolean;
	contactPerson: boolean;
	phone: boolean;
	email: boolean;
	photos: boolean;
	documents: boolean;
}

interface UnclaimedCargoProductPrice {
	new: string | null;
	old: number;
	discount: null;
}


interface UnclaimedCargoProduct {
	_id: string;
	contact: {
		companyName: string;
		personName: string;
		phone: Phone;
		email: string;
	};
	shipping: string[];
	paymentMethods: string[];
	highDemand: boolean;
	priceDrop: boolean;
	chatCreated: boolean;
	savedCount: number;
	views: number;
	viewedBy: string[];
	openedFor: string[];
	chatStarted: string[];
	status: string;
	productApproved: boolean;
	productRejected: boolean;
	title: string;
	specifications: string;
	country: string;
	category: string;
	suppliersType: string;
	amount: UnclaimedCargoProductAmount;
	price: UnclaimedCargoProductPrice;
	visibility: UnclaimedCargoProductVisibility;
	user: string;
	photos: Photo[];
	documents: any[];
	createdAt: string;
	updatedAt: string;
	chatLastMessage: string;
}

export interface AdminUser {
	_id: string;
	favourites: string[];
	mailSubscribed: boolean;
	preferences: string[];
	company: string;
	emailConfirmed: boolean;
	fullName: string;
	email: string;
	password: string;
	role: B2bAuthSubRoleInterface;
	rootRole?: B2bAuthRootRoleInterface;
	country: string;
	phone: Phone;
	socials: {
		whatsapp: {};
		viber: {};
		telegram: {};
		facebook: {};
	};
	online: boolean;
	lastActivity: string;
	firstLogin: boolean;
	socialAuth: boolean;
	createdAt: string;
	preferredCargo: any[];
	updatedAt: string;
	countConnection: number;
	deleteAccount: boolean;
	sessionTokens: string[];
	rfqQuotes: number;
	statistics: {
		products: { created: number; deleted: number };
		offers: { created: number; deleted: number };
		rfq: { created: number; deleted: number };
	};
	sendpulseSubscribe: boolean;
	offers: Offer[];
	products: UnclaimedCargoProduct[];
}
