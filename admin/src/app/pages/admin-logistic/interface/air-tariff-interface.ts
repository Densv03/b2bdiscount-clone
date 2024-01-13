import { LogisticValuesInterface } from './logistic-values.interface';

export interface AirTariffInterface {
	cityFrom: LogisticValuesInterface;
	cityTo: LogisticValuesInterface;
	companyId: string;
	countryFrom: LogisticValuesInterface;
	countryTo: LogisticValuesInterface;
	createdAt: Date;
	price: number;
	updatedAt: Date;
	validDateFrom: Date;
	validDateTo: Date;
	_id: string;
}
