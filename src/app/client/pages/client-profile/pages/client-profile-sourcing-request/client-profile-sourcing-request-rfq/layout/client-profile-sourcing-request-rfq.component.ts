import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RfqButtonTypeEnum } from '../shared/enums/RfqButtonType.enum';
import { Observable } from 'rxjs';
import { ClientProfileSourcingRequestService } from '../../client-profile-sourcing-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationParamsModel } from '../../../../../../../core/models/pagination-params.model';

function generateQueryString(
	obj: { [s: string]: unknown } | ArrayLike<unknown> | PaginationParamsModel,
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
	selector: 'b2b-client-profile-sourcing-request-my-rfq',
	templateUrl: './client-profile-sourcing-request-rfq.component.html',
	styleUrls: ['./client-profile-sourcing-request-rfq.component.scss'],
})
export class ClientProfileSourcingRequestRfqComponent implements OnInit {
	public totalChatsLength$: Observable<number> =
		this.clientProfileSourcingRequestService.rfqChatsLength$;
	public totalManageLength$: Observable<number> =
		this.clientProfileSourcingRequestService.manageListLength$;
	public totalArchivedLength$: Observable<number> =
		this.clientProfileSourcingRequestService.archivedListLength$;
	public rfqButtonEnum = RfqButtonTypeEnum;
	public itemId: string | number;
	public selectedIndex: number =
		this.route.snapshot.queryParams['activeTab'] || 0;

	private filteredQueryObj: PaginationParamsModel = { limit: 7, offset: 0 };
	constructor(
		private clientProfileSourcingRequestService: ClientProfileSourcingRequestService,
		private changeDetectorRef: ChangeDetectorRef,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.clientProfileSourcingRequestService.updateRfqManageList(
			generateQueryString(this.filteredQueryObj)
		);
		this.clientProfileSourcingRequestService.updateRfqArchivedList(
			generateQueryString(this.filteredQueryObj)
		);
		this.clientProfileSourcingRequestService.updateRfqChatsList(
			generateQueryString(this.filteredQueryObj, '&')
		);
	}

	public onEdit(id: number | string): void {
		this.router.navigate(['change-rfq', id], {
			relativeTo: this.route,
		});
	}

	public onArchivate(id: number | string): void {
		this.clientProfileSourcingRequestService
			.archivateItem(id)
			.subscribe((el) => {
				this.clientProfileSourcingRequestService.updateRfqArchivedList(
					generateQueryString(this.filteredQueryObj)
				);
				this.clientProfileSourcingRequestService.updateRfqManageList(
					generateQueryString(this.filteredQueryObj)
				);
			});
	}

	public onDelete(id: number | string): void {
		this.clientProfileSourcingRequestService.deleteItem(id).subscribe((el) => {
			this.clientProfileSourcingRequestService.updateRfqArchivedList(
				generateQueryString(this.filteredQueryObj)
			);
		});
	}

	public onRestore(id: number | string): void {
		this.clientProfileSourcingRequestService
			.activateItem(id)
			.subscribe((el) => {
				this.clientProfileSourcingRequestService.updateRfqArchivedList(
					generateQueryString(this.filteredQueryObj)
				);
				this.clientProfileSourcingRequestService.updateRfqManageList(
					generateQueryString(this.filteredQueryObj)
				);
			});
	}

	public togglePageManageList(pageNumber: number): void {
		this.filteredQueryObj = {
			...this.filteredQueryObj,
			offset: (pageNumber - 1) * 7,
		};
		this.clientProfileSourcingRequestService.updateRfqManageList(
			generateQueryString(this.filteredQueryObj)
		);
	}
	public togglePageArchiveList(pageNumber: number): void {
		this.filteredQueryObj = {
			...this.filteredQueryObj,
			offset: (pageNumber - 1) * 7,
		};
		this.clientProfileSourcingRequestService.updateRfqArchivedList(
			generateQueryString(this.filteredQueryObj)
		);
	}
	public togglePageChatsList(pageNumber: number): void {
		this.filteredQueryObj = {
			...this.filteredQueryObj,
			offset: (pageNumber - 1) * 7,
		};
		this.clientProfileSourcingRequestService.updateRfqChatsList(
			generateQueryString(this.filteredQueryObj, '&')
		);
	}

	public updateComponent(): void {
		this.changeDetectorRef.detectChanges();
	}
}
