import { LogisticSearch } from 'src/app/client/pages/client-logistic/models/logistic-search/logistic-search.model';
import { CreateInquiryForm } from 'src/app/client/pages/client-logistic/models/create-inquiry/create-inquiry-form.model';

export interface CreateInquiryRequest
	extends Omit<LogisticSearch, 'date'>,
		CreateInquiryForm {
	readyToLoad?: string;
}
