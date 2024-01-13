export interface DirectionsRequest {
	name: string;
	type: 'country' | 'airport' | 'port' | 'city';
	countryId: string;
	cityId: string;
	active: boolean;
}
