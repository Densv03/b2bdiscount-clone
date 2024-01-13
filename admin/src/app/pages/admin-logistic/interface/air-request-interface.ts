export interface AirRequestInterface {
	limit: number;
	offset: number;
	companyId?: string;
	countryTo?: string;
	countryFrom?: string;
	cityTo?: string;
	cityFrom?: string;
	date?: string;
}
