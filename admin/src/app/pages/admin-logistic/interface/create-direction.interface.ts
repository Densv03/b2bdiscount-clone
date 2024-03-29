export interface CreateDirectionInterface {
	type: string;
	name: string;
	countryId?: string;
	cityId?: string;
	active: boolean;
	countryNames?: string[];
}
