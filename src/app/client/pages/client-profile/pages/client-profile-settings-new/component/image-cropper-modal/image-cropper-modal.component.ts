import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {
	GlobyImageCropComponent
} from "../../../../../../../../../projects/globy-image-crop/src/lib/globy-image-crop.component";
import {
	ClientProfileModalContainerComponent
} from "../client-profile-modal-container/client-profile-modal-container.component";
import {TitleCasePipe} from "@angular/common";
import {ModalContainerService} from "../client-profile-modal-container/modal-container.service";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {ImageCroppedEvent} from "ngx-image-cropper";

export interface ImageCropperData {
	imageURL: string
	aspectRatio: number;
}

@Component({
	selector: 'b2b-image-cropper-modal',
	standalone: true,
	imports: [GlobyImageCropComponent, ClientProfileModalContainerComponent, TitleCasePipe, B2bNgxButtonModule, ReactiveFormsModule],
	templateUrl: './image-cropper-modal.component.html',
	styleUrl: './image-cropper-modal.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageCropperModalComponent extends ModalContainerService<ImageCropperModalComponent, ImageCroppedEvent> {
	image = '';
	event: ImageCroppedEvent;

	constructor(@Inject(MAT_DIALOG_DATA) public data: ImageCropperData) {
		super();
	}

	onCrop($event: ImageCroppedEvent) {
		this.event = $event;
		this.image = $event.objectUrl;
	}

	save() {
		this.onDismiss(this.event);
	}
}
