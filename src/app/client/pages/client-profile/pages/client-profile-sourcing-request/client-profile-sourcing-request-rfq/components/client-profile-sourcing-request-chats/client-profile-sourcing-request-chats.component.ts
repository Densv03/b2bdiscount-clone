import {
	ChangeDetectorRef,
	Component,
	EventEmitter,
	OnInit,
	Output,
} from '@angular/core';
import { ClientProfileSourcingRequestService } from '../../../client-profile-sourcing-request.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'b2b-client-profile-sourcing-request-chats',
	templateUrl: './client-profile-sourcing-request-chats.component.html',
	styleUrls: ['./client-profile-sourcing-request-chats.component.scss'],
})
export class ClientProfileSourcingRequestChatsComponent implements OnInit {
	@Output() deleteChat: EventEmitter<void> = new EventEmitter<void>();

	public chatsList$: Observable<any> =
		this.clientProfileSourcingRequestService.myRfqChats$;
	constructor(
		private clientProfileSourcingRequestService: ClientProfileSourcingRequestService,
		private changeDetectorRef: ChangeDetectorRef
	) {}

	ngOnInit(): void {}

	public updateComponent(): void {
		this.clientProfileSourcingRequestService.updateRfqChatsList();
		this.deleteChat.emit();
	}
}
