export interface LogisticSearchItemModel {
	name: string;
	icon: string;
	countryName: string;
	type: logisticTargetType;
}

type logisticTargetType = 'Airport' | 'Port' | 'City';
