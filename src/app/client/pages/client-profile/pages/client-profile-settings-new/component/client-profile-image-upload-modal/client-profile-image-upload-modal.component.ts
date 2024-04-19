import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {
	ClientProfileModalContainerComponent
} from "../client-profile-modal-container/client-profile-modal-container.component";
import {ModalContainerService} from "../client-profile-modal-container/modal-container.service";
import {MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
	ClientProfileImageContainerComponent
} from "../client-profile-image-container/client-profile-image-container.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {B2bNgxFileModule} from "@b2b/ngx-file";
import {bannerLabel, logoLabel} from "./client-profile-image-upload-modal.constant";
import {NgClass} from "@angular/common";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {environment} from "../../../../../../../../environments/environment";
import {B2bNgxIconModule} from "@b2b/ngx-icon";
import {NgxInputVersionEnum} from "../../../../../../../../../projects/ngx-input/src/lib/enum/ngx-input-version.enum";
import {ImageDismissData} from "./client-profile-image-upload-modal.interface";
import {IMAGE_TYPES} from "../client-profile-image-container/client-profile-image-container.constants";
import {HotToastService} from "@ngneat/hot-toast";
import {ImageCropperData, ImageCropperModalComponent} from "../image-cropper-modal/image-cropper-modal.component";
import {ImageCroppedEvent} from "ngx-image-cropper";

@UntilDestroy()
@Component({
	selector: 'b2b-client-profile-image-upload-modal',
	standalone: true,
	imports: [
		ClientProfileModalContainerComponent,
		ClientProfileImageContainerComponent,
		B2bNgxFileModule,
		ReactiveFormsModule,
		NgClass,
		B2bNgxButtonModule,
		B2bNgxIconModule
	],
	providers: [
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {overlayPanelClass: 'w-full'}
		}
	],
	templateUrl: './client-profile-image-upload-modal.component.html',
	styleUrls: ['./client-profile-image-upload-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileImageUploadModalComponent extends ModalContainerService<ClientProfileImageUploadModalComponent, ImageDismissData> implements OnInit {

	public control = new FormControl();
	public file: File;
	public url: string;
	public image: string;
	protected readonly NgxInputVersionEnum = NgxInputVersionEnum;
	private readonly imageTypes = IMAGE_TYPES;

	constructor(@Inject(MAT_DIALOG_DATA) public data: {
								path: string,
								mode: 'logo' | 'banner',
								device: 'mobile' | 'desktop'
								image: string
							},
							private cdr: ChangeDetectorRef,
							private matDialog: MatDialog,
							private hotToastService: HotToastService) {
		super();
	}

	get transformedUrl() {
		if (this.data?.image) {
			return 'url(' + this.data.image + ')';
		}
		if (!this.data?.path) {
			return undefined;
		}
		return 'url(' + environment.apiUrl + encodeURIComponent(this.data.path) + ')'
	}

	get label() {
		return this.data.mode === 'logo' ? logoLabel : bannerLabel
	}

	get dismissObj(): ImageDismissData {
		return {
			file: this.file,
			url: this.url,
			image: this.image
		}
	}

	ngOnInit() {
		this.url = this.transformedUrl;
		this.control
			.valueChanges
			.pipe(untilDestroyed(this))
			.subscribe((res: any) => {
				if (!res) {
					return;
				}
				if (this.checkType(res[0])) {
					console.log(res);
					this.file = res
					this.readFile();
					this.cdr.detectChanges();
				}
			});
	}

	delete() {
		this.url = undefined;
		this.control.patchValue(undefined);
	}

	readFile() {
		if (!this.file) {
			this.delete();
		}
		this.getUrlFormFile();
		this.cdr.detectChanges();
	}

	cropImage() {
		this.matDialog.open(ImageCropperModalComponent, {
			data: {
				imageURL: this.image,
				aspectRatio: this.data?.mode === 'logo' ? 1 : 16 / 5
			}
		} as MatDialogConfig<ImageCropperData>)
			.afterClosed()
			.pipe(untilDestroyed(this))
			.subscribe(async (res: ImageCroppedEvent) => {
				if (res.blob) {
					this.image = res.objectUrl;
					this.url = 'url(' + this.image + ')';
					this.file = [new File([res.blob], this.file.name || 'image.png', {type: 'image/png'})] as unknown as File;
					this.cdr.detectChanges();
				}
			});
	}

	private checkType(res: any) {
		const type = res?.name?.split('.')?.pop();
		if (!res || !type) {
			return false
		}
		if (this.imageTypes.includes(type)) {
			return true;
		}
		this.hotToastService.error('Wrong file format');
		return false;
	}

	private getUrlFormFile() {
		const fileReader = new FileReader();
		fileReader.onload = () => {
			this.image = fileReader.result as string;
			this.cropImage();
			this.cdr.detectChanges();
		}
		fileReader.readAsDataURL((this.file as unknown as any)[0]);
	}
}
