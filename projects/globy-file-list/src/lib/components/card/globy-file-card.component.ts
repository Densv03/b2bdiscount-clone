import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges
} from '@angular/core';
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {B2bNgxIconModule} from "@b2b/ngx-icon";
import {HandleItem, ItemType} from "../../../../../globy-file/src/lib/interfaces/handle.interface";
import {isFile} from "../../utils/isFile";
import {JsonPipe, NgStyle} from "@angular/common";
import {environment} from "../../../../../../src/environments/environment";

@Component({
	selector: 'globy-file-card',
	standalone: true,
	imports: [
		B2bNgxButtonModule,
		B2bNgxIconModule,
		JsonPipe,
		NgStyle
	],
	templateUrl: './globy-file-card.component.html',
	styleUrls: ['globy-file-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobyFileCard<T> implements OnInit, OnChanges {
	/** Main card data */
	@Input() data: T;
	/** Item index in "for" loop */
	@Input() index!: number;
	/** Handle object url */
	@Input() handleItem: (item: T) => HandleItem;
	/** Do we need to show delete button */
	@Input() showDelete: boolean = true;
	/** Show length. Will show items length at right bottom conner */
	@Input() length: number;
	/** Do we need to show edit button */
	@Input() showEdit: boolean = false;
	/** Card title. Shows below image */
	@Input() title: string;
	/** Card description. Shows below image */
	@Input() description: string;
	/** Delete output */
	@Output() deleteItem = new EventEmitter<number>();
	/** Edit item output */
	@Output() editItem = new EventEmitter<number>();

	type: ItemType = 'image';
	url: string;

	constructor(private cdr: ChangeDetectorRef) {
	}

	ngOnChanges(changes: SimpleChanges) {
		this.initDefault();
	}

	ngOnInit() {
		this.initDefault();
	}

	getUrlFormFile() {
		const fileReader = new FileReader();
		fileReader.onload = () => {
			this.url = fileReader.result as string;
			this.cdr.detectChanges();
		}
		fileReader.readAsDataURL(this.data as File);
		this.type = 'image';
	}

	initDefault() {
		const isFile = this.handleDataAsFile();
		if (isFile) {
			return;
		}
		this.getUrlFormItem();
	}

	getUrlFormItem() {
		let {type, url} = this.handleItem(this.data);
		if (url?.includes('youtube.com') || url?.includes('youtu.be')) {
			url = this.getThumbnailUrl(url);
		}
		this.type = type;
		this.url = url;
		this.cdr.detectChanges();
	}

	delete() {
		this.deleteItem.next(this.index);
	}

	edit() {
		this.editItem.next(this.index);
	}

	getThumbnailUrl(url: string): string {
		if (url.includes(environment.apiUrl)) {
			return url;
		}
		const videoId = this.extractVideoID(url);
		return `https://img.youtube.com/vi/${videoId}/0.jpg`;
	}

	videoUrl(): void {
		this.url = URL.createObjectURL(this.data as File);
		this.type = 'video'
	}

	private extractVideoID(url: string): string {
		const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		const match = url.match(regExp);

		if (match && match[2].length == 11) {
			return match[2];
		}

		throw new Error('Invalid link')
	}

	private handleDataAsFile() {
		const file = isFile(this.data);
		if (file) {
			if ((this.data as File)?.type?.includes('image')) {
				this.getUrlFormFile();
			} else if ((this.data as File)?.type?.includes('video')) {
				this.videoUrl()
			}
		}
		return file;
	}
}
