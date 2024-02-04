import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
} from '@angular/core';
import { ClientProfileSourcingRequestService } from '../../client-profile-sourcing-request.service';
import { Observable } from 'rxjs';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';

function generateQueryString(
	obj: { [s: string]: unknown } | ArrayLike<unknown>,
	initialValue: string = '?'
) {
	return Object.entries(obj)
		.filter(([, value]: any) => !!value)
		.reduce((queryString: string, [key, value]: any) => {
			return Array.isArray(value)
				? `${queryString}${value.reduce(
						(str, arrayItem) => `${str}${key}=${arrayItem}&`,
						''
					)}`
				: `${queryString}${key}=${value}&`;
		}, initialValue);
}

@Component({
	selector: 'b2b-client-profile-sourcing-request-quotation',
	templateUrl: './client-profile-sourcing-request-quotation.component.html',
	styleUrls: ['./client-profile-sourcing-request-quotation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientProfileSourcingRequestQuotationComponent implements OnInit {
	public chatsList$: Observable<any> =
		this.clientProfileSourcingRequestService.myQuotationChats$;
	public totalChatsLength$: Observable<number> =
		this.clientProfileSourcingRequestService.quotationChatsLength$;
	private filteredQueryObj: any = { limit: 7, offset: 0 };
	constructor(
		private clientProfileSourcingRequestService: ClientProfileSourcingRequestService
	) {}

	ngOnInit(): void {
		this.clientProfileSourcingRequestService.updateQuotationChatsList(
			generateQueryString(this.filteredQueryObj, '&')
		);
	}

	public togglePageManageList(pageNumber: number): void {
		this.filteredQueryObj = {
			...this.filteredQueryObj,
			offset: (pageNumber - 1) * 7,
		};
		this.clientProfileSourcingRequestService.updateQuotationChatsList(
			generateQueryString(this.filteredQueryObj, '&')
		);
	}

	updateChat() {
		this.clientProfileSourcingRequestService.updateQuotationChatsList();
	}
}
