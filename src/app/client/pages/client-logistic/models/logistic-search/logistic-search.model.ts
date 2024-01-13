export interface LogisticSearch {
	transportType: 'air' | 'sea';
	countryFrom?: string;
	countryTo?: string;
	airportFrom?: string;
	airportTo?: string;
	portFrom?: string;
	portTo?: string;
	date?: Date;
}
