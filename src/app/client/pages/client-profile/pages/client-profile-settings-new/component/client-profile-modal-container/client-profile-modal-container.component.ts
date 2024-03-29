import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {MatIcon} from "@angular/material/icon";
import {NgClass} from "@angular/common";

@Component({
	selector: 'b2b-client-profile-modal-container',
	standalone: true,
	imports: [
		B2bNgxButtonModule,
		MatIcon,
		NgClass
	],
	templateUrl: './client-profile-modal-container.component.html',
	styleUrl: './client-profile-modal-container.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileModalContainerComponent {
	@Input() label: string;

	@Output() close = new EventEmitter<boolean>()

	initClose() {
		this.close.emit(true);
	}
}
