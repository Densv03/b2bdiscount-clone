import { CreateInquiryRequest } from 'src/app/client/pages/client-logistic/models/create-inquiry/create-inquiry-request.model';

export interface SubmitInquiryRequest extends CreateInquiryRequest {
	tariffSeaId: string;
	tariffAirId: string;
	seaLine: string;
}
