import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {
	ClientProfileModalContainerComponent
} from "../client-profile-modal-container/client-profile-modal-container.component";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {B2bNgxButtonModule, B2bNgxButtonThemeEnum} from "@b2b/ngx-button";
import {DefaultModalData} from "./client-profile-default-modal.interface";
import {buttons, defaultLabel, defaultTitle} from "./client-profile-default-modal.constants";
import {
	ClientProfileModalContainerService
} from "../client-profile-modal-container/client-profile-modal-container.service";

@Component({
	selector: 'b2b-client-profile-default-modal',
	standalone: true,
	imports: [
		ClientProfileModalContainerComponent,
		B2bNgxButtonModule
	],
	templateUrl: './client-profile-default-modal.component.html',
	styleUrl: './client-profile-default-modal.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileDefaultModalComponent<T = boolean> extends ClientProfileModalContainerService<ClientProfileDefaultModalComponent, T> {

	protected readonly B2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;

	constructor(@Inject(MAT_DIALOG_DATA) private data: DefaultModalData<T>) {
		super();
	}

	get buttons() {
		return this.data?.buttons ?? buttons;
	}

	get label() {
		return this.data?.label ?? defaultLabel;
	}

	get description() {
		return this.data?.description
	}

	get title() {
		return this.data?.title ?? defaultTitle;
	}

	public theme(index: number) {
		if (this.buttons[index]?.theme) {
			return this.buttons[index].theme;
		}
		let response = this.B2bNgxButtonThemeEnum.OUTLINE_BLACK;
		if (index === 1) {
			response = this.B2bNgxButtonThemeEnum.BACKGROUND_BLUE;
		}
		return response
	}
}
