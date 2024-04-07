import {inject, Injectable} from "@angular/core";
import {MatDialogRef} from "@angular/material/dialog";

@Injectable()
export class ModalContainerService<C, T> {

	component = inject(MatDialogRef<C>)

	onDismiss(data?: T | boolean) {
		this.component.close(data ?? false);
	}

	resize(width = '70vw', height = '') {
		this.component.updateSize(width, height);
	}
}
