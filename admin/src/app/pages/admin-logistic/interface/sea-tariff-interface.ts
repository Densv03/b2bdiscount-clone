import { LogisticValuesInterface } from './logistic-values.interface';

export interface SeaTariffInterface {
	'20REF': number;
	'20ST': number;
	'40HC': number;
	'40REF': number;
	'40ST': number;
	companyId: string;
	countryFrom: LogisticValuesInterface;
	countryTo: LogisticValuesInterface;
	createdAt: Date;
	currency: string;
	portFrom: LogisticValuesInterface;
	portTo: LogisticValuesInterface;
	seaLine: string;
	thcExp: string;
	thcImp: string;
	updatedAt: Date;
	validDateFrom: Date;
	validDateTo: Date;
	_id: string;
}
