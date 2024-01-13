import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RfqButtonTypeEnum } from '../../shared/enums/RfqButtonType.enum';
import { ClientProfileSourcingRequestService } from '../../../client-profile-sourcing-request.service';
import { Observable } from 'rxjs';
import { MixpanelService } from '../../../../../../../../core/services/mixpanel/mixpanel.service';
import { CategoriesService } from '../../../../../../../services/categories/categories.service';
import { take } from 'rxjs/operators';
import { getName } from 'country-list';

@Component({
	selector: 'b2b-client-profile-sourcing-request-manage-rfq',
	templateUrl: './client-profile-sourcing-request-manage-rfq.component.html',
	styleUrls: ['./client-profile-sourcing-request-manage-rfq.component.scss'],
})
export class ClientProfileSourcingRequestManageRfqComponent implements OnInit {
	public manageList$: Observable<any> =
		this.clientProfileSourcingRequestService.myRfqManage$;

	@Input() buttonType: RfqButtonTypeEnum = RfqButtonTypeEnum.Manage;
	@Output() edit: EventEmitter<string | number> = new EventEmitter<
		string | number
	>();
	@Output() archivate: EventEmitter<string | number> = new EventEmitter<
		string | number
	>();

	constructor(
		private clientProfileSourcingRequestService: ClientProfileSourcingRequestService,
		private readonly mixpanelService: MixpanelService,
		private readonly categoriesService: CategoriesService
	) {}

	public ngOnInit(): void {}

	public onEdit(id: string | number): void {
		this.edit.emit(id);
	}

	public onArchivate(item: any): void {
		this.archivate.emit(item._id);

		this.mixpanelService.track('RFQ archived', {
			'Product Sector': this.getCategoryName(item.category),
			Destination: getName(item.destination.to),
		});
	}
	private getCategoryName(id: string): string {
		let categoryName: string;
		this.categoriesService
			.getCategoryNameById(id)
			.pipe(take(1))
			.subscribe((name) => (categoryName = name));
		return categoryName;
	}
}
