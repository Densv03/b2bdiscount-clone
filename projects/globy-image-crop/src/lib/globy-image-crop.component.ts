import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ImageCroppedEvent, ImageCropperModule} from "ngx-image-cropper";
import {customInputProvider} from 'projects/shared/src/lib/utils/custom-input.provider';
import {CustomInputService} from 'projects/shared/src/lib/services/custom-input/custom-input.service';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
	selector: 'globy-image-crop',
	standalone: true,
	imports: [
		ImageCropperModule,
		ReactiveFormsModule
	],
	templateUrl: './globy-image-crop.component.html',
	styleUrls: ['globy-image-crop.component.scss']
})
export class GlobyImageCropComponent {
	/**
	 * Aspect ratio
	 */
	@Input() aspectRatio: number = 4 / 3;
	/**
	 * Output format
	 */
	@Input() outputFormat: 'png' | 'jpeg' = 'png';
	/**
	 * Image URL
	 */
	@Input() imageURL: string = '';
	/**
	 * Result
	 */
	@Output() croppedResult = new EventEmitter<ImageCroppedEvent>();

	imageCropped(event: ImageCroppedEvent) {
		this.croppedResult.next(event);
	}
}
