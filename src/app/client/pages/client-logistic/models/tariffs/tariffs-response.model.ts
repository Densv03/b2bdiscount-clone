import { Phone } from 'src/app/core/models/user/phone.model';

export interface TariffsResponse {
	_id: string;
	companyId: string;
	portFrom: DestinationPointInfo;
	countryFrom: DestinationPointInfo;
	portTo: DestinationPointInfo;
	countryTo: DestinationPointInfo;
	seaLine: string;
	currency: string;
	'20ST': number;
	'40ST': number;
	'40HC': number;
	'20REF': number;
	'40REF': number;
	validDateFrom: Date;
	validDateTo: string;
	thcExp: string;
	thcImp: string;
	createdAt: string;
	updatedAt: string;
	company: Company[];
}

interface DestinationPointInfo {
	_id: string;
	name: string;
	type: 'country' | 'port';
}

interface Company {
	_id: string;
	name: string;
	email: string;
	country: string;
	transportType: string[];
	phone: Phone;
	user: string;
	company: string;
	destinationsList: string[];
	createdAt: string;
	updatedAt: string;
}
