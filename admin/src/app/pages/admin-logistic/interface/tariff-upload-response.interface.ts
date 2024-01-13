import { TariffsResponse } from '../../../../../../src/app/client/pages/client-logistic/models/tariffs/tariffs-response.model';

export interface TariffUploadResponseInterface {
	resultUpdate: {
		count: {
			error: {
				errorList: {
					errorData: string;
					errorField: string;
					errorMessage: string;
				}[];
			};
		};
		tariffData: TariffsResponse[];
	};
}
