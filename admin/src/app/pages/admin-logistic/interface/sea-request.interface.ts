export interface SeaRequestInterface {
	limit: number;
	offset: number;
	companyId?: string;
	countryTo?: string;
	countryFrom?: string;
	portTo?: string;
	portFrom?: string;
	date?: string;
	containerType?: string;
}
