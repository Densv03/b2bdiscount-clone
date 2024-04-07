import {Component, DestroyRef, Inject, inject, OnInit} from '@angular/core';
import {B2bDatepickerModule} from "@b2b/datepicker";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {B2bNgxInputModule} from "@b2b/ngx-input";
import {
	ClientProfileModalContainerComponent
} from "../client-profile-modal-container/client-profile-modal-container.component";
import {GlobyFile} from "../../../../../../../../../projects/globy-file/src/lib/globy-file.component";
import {MatError} from "@angular/material/form-field";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, TitleCasePipe} from "@angular/common";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Folder, FolderStatus, FolderUpdate} from "../../../../../../../core/models/folder.model";
import {siteLink} from "../../../../../../../core/helpers/validator/site-link";
import {MediaModalData} from "./client-profile-media-modal.interface";
import {Photo} from "../../../../../../../core/models/photo.model";
import {Video} from "../../../../../../../core/models/video.model";
import {FolderService} from "../../../../../../services/folder/folder.service";
import {NgxInputVersionEnum} from "../../../../../../../../../projects/ngx-input/src/lib/enum/ngx-input-version.enum";
import {
	imageUploadDescription,
	videoUploadDescription
} from "../client-profile-trade-shows-modal/client-profile-trade-shows-modal.constants";
import {HandleItem, ItemType} from "../../../../../../../../../projects/globy-file/src/lib/interfaces/handle.interface";
import {environment} from "../../../../../../../../environments/environment";
import {ModalContainerService} from "../client-profile-modal-container/modal-container.service";
import {
	GlobyList
} from "../../../../../../../../../projects/globy-file-list/src/lib/components/list/globy-list.component";
import {
	GlobyFileCard
} from "../../../../../../../../../projects/globy-file-list/src/lib/components/card/globy-file-card.component";
import {onlyLatinAndNumberAndSymbols} from "../../../../../../../core/helpers/validator/only-latin-numbers-symbols";
import {conditionalRequiredVideos} from "../../../../../../../core/helpers/validator/conditional-required";
import {youtubeLinkValidator} from "../../../../../../../core/helpers/validator/social-link";
import {VIDEO_TYPES} from "../../../../../../../../../projects/globy-file/src/lib/globy-file.constants";
import {IMAGE_TYPES} from "../client-profile-image-container/client-profile-image-container.constants";
import {debounceTime, first} from "rxjs/operators";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {toastMessages} from "../../tabs/client-company-information/client-company-information.constants";
import {HotToastService} from "@ngneat/hot-toast";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
	selector: 'b2b-client-profile-media-modal',
	standalone: true,
	imports: [
		B2bDatepickerModule,
		B2bNgxButtonModule,
		B2bNgxInputModule,
		ClientProfileModalContainerComponent,
		GlobyFile,
		GlobyList,
		GlobyFileCard,
		MatError,
		ReactiveFormsModule,
		TitleCasePipe,
		NgClass
	],
	templateUrl: './client-profile-media-modal.component.html',
	styleUrl: './client-profile-media-modal.component.scss'
})
export class ClientProfileMediaModalComponent extends ModalContainerService<ClientProfileMediaModalComponent, Folder> implements OnInit {

	form = this.buildForm();
	mode: 'edit' | 'create' = this.data.folder?._id ? 'edit' : 'create';
	destroyRef = inject(DestroyRef);
	protected readonly NgxInputVersionEnum = NgxInputVersionEnum;
	protected readonly fileUploadDescription = this.data.type === 'image' ? imageUploadDescription : videoUploadDescription;
	protected readonly VIDEO_TYPES = VIDEO_TYPES;
	protected readonly IMAGE_TYPES = IMAGE_TYPES;

	constructor(@Inject(MAT_DIALOG_DATA) public data: MediaModalData,
							private fb: FormBuilder,
							private folderService: FolderService,
							private hotToastService: HotToastService) {
		super();
	}

	get controls() {
		return this.form.controls;
	}

	get title() {
		return this.controls.title
	}

	get description() {
		return this.controls.description;
	}

	get videoLink() {
		return this.controls.videoLink;
	}

	get videos() {
		return this.controls.videos
	}

	get images() {
		return this.controls.images
	}

	get video(): Video {
		return {
			link: this.videoLink.value as string,
		}
	}

	get multiple() {
		return this.data.type === 'image'
	}

	private get handleEditData(): FolderUpdate {
		const form = this.form.value;
		const folder = this.data?.folder;
		const uploadedImages = form?.images?.filter(x => !!x._id).map(x => x._id);
		const uploadedVideos = form?.videos?.filter(x => !!x._id).map(x => x._id);
		return {
			...folder,
			...form,
			uploadedImages,
			uploadedVideos
		}
	}

	private get handleCreateData(): FolderUpdate {
		return this.form.value;
	}

	ngOnInit() {
		this.patchForm();
		this.videoLinkListener();
	}

	onSubmit() {
		if (this.mode === 'edit') {
			this.folderService.update(this.handleEditData)
				.pipe(
					first(),
					this.hotToastService.observe(toastMessages),
					takeUntilDestroyed(this.destroyRef))
				.subscribe(() => {
					this.onDismiss();
				});
		}
		if (this.mode === 'create') {
			this.folderService.create(this.handleCreateData)
				.pipe(
					first(),
					this.hotToastService.observe(toastMessages),
					takeUntilDestroyed(this.destroyRef))
				.subscribe(() => {
					this.onDismiss();
				})
		}
	}

	public handleItem(item: Video | Photo): HandleItem {
		let url;
		let type: ItemType = 'image'
		if ((item as Video)?.link) {
			url = (item as Video).link;
		}
		if (item?.path?.includes('video')) {
			type = "video"
		}
		if (item?.path) {
			url = environment.apiUrl + encodeURIComponent(item.path);
		}
		return {url, type}
	}

	get validVideoLink() {
		return this.videoLink?.value && !this.videoLink?.errors?.['invalidYoutubeLink'];
	}

	clearVideoLink() {
		this.videoLink.reset();
		this.videos.reset();
	}

	videoLinkListener() {
		if (!this.controls.videoLink) {
			return;
		}
		this.controls
			.videoLink
			.valueChanges
			.pipe(debounceTime(1000), untilDestroyed(this))
			.subscribe(res => {
			if (res) {
				this.videos.patchValue([]);
			}
		})
		this.controls.videos.valueChanges.pipe(untilDestroyed(this)).subscribe(res => {
			if (res?.[0]) {
				this.videoLink.disable();
			} else {
				this.videoLink.enable();
			}
		})
	}

	private buildForm() {
		const form = this.fb.group(
			{
				title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40), onlyLatinAndNumberAndSymbols()]],
				description: ['', [Validators.required, Validators.minLength(40), Validators.maxLength(1000), onlyLatinAndNumberAndSymbols()]],
				images: [[] as Photo[], [Validators.required]],
				videos: [[] as Video[]],
				status: [FolderStatus.PUBLIC],
				videoLink: [null as string, [siteLink(), youtubeLinkValidator()]]
			}, {
				validators: conditionalRequiredVideos('video', 'videoLink')
			});
		if (this.data.type === 'image') {
			form.removeControl('videos')
			form.removeControl('videoLink')
		}
		if (this.data.type === 'video') {
			form.removeControl('images');
		}
		return form;
	}

	private patchForm() {
		if (this.data.folder?._id) {
			this.form.patchValue(
				{
					...this.data.folder,
					videoLink: this.data?.folder?.videos?.find(x => !!x?.link)?.link || undefined
				}
			);
		}
	}
}

