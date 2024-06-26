import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientProfileSourcingRequestService } from '../../../client-profile-sourcing-request.service';
import { MixpanelService } from '../../../../../../../../core/services/mixpanel/mixpanel.service';
import { CategoriesService } from '../../../../../../../services/categories/categories.service';
import { take } from 'rxjs/operators';
import { getName } from 'country-list';

@Component({
	selector: 'b2b-client-profile-sourcing-request-archived',
	templateUrl: './client-profile-sourcing-request-archived.component.html',
	styleUrls: ['./client-profile-sourcing-request-archived.component.scss'],
})
export class ClientProfileSourcingRequestArchivedComponent {
	public archiveList$: Observable<any> =
		this.clientProfileSourcingRequestService.myRfqArchived$;

	@Input() buttonType: any;
	@Output() delete: EventEmitter<string | number> = new EventEmitter<
		string | number
	>();
	@Output() restore: EventEmitter<string | number> = new EventEmitter<
		string | number
	>();

	constructor(
		private clientProfileSourcingRequestService: ClientProfileSourcingRequestService,
		private readonly mixpanelService: MixpanelService,
		private readonly categoriesService: CategoriesService
	) {}

	public deleteEvent(event: any): void {
		this.delete.emit(event._id);
		this.mixpanelService.track('RFQ deleted', {
			'Product Sector': this.getCategoryName(event.category),
			Destination: getName(event.destination.to),
		});
	}

	public restoreEvent(event: any): void {
		this.restore.emit(event._id);
		this.mixpanelService.track('Archived RFQ posted', {
			'Product Sector': this.getCategoryName(event.category),
			Destination: getName(event.destination.to),
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
