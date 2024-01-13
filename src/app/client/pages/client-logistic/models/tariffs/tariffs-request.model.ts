import { ContainerType } from 'src/app/client/pages/client-logistic/models/container.type';

export type TariffsRequest = SeaTariff | AirTariff;

interface BaseTariff {
	countryFrom: string;
	countryTo: string;
	date: string;
}

interface SeaTariff extends BaseTariff {
	type: 'sea';
	portTo: string;
	portFrom: string;
	containerType: Omit<ContainerType, '45HC'>;
}

interface AirTariff extends BaseTariff {
	type: 'air';
	cityTo: string;
	cityFrom: string;
}
