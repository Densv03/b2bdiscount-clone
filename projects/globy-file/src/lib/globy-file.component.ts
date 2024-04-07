import {Component, inject, Input} from '@angular/core';
import {CustomInputService} from 'projects/shared/src/lib/services/custom-input/custom-input.service'
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {MatIcon} from "@angular/material/icon";
import {UntilDestroy} from "@ngneat/until-destroy";
import _ from "lodash";
import {HandleItem} from "./interfaces/handle.interface";
import {JsonPipe, NgClass} from "@angular/common";
import {Custom, Doc, Image, Video} from "./interfaces/file.interface";
import {IMAGE_TYPES, VIDEO_TYPES} from "./globy-file.constants";
import {customInputProvider} from 'projects/shared/src/lib/utils/custom-input.provider';
import {ReactiveFormsModule} from "@angular/forms";
import {B2bNgxIconModule} from "@b2b/ngx-icon";
import {GlobyList} from 'projects/globy-file-list/src/lib/components/list/globy-list.component';
import {HotToastService} from "@ngneat/hot-toast";
import {MatError} from "@angular/material/form-field";

@UntilDestroy()
@Component({
	selector: 'globy-file',
	standalone: true,
	imports: [
		B2bNgxButtonModule,
		MatIcon,
		NgClass,
		GlobyList,
		JsonPipe,
		ReactiveFormsModule,
		B2bNgxIconModule,
		MatError
	],
	providers: [
		customInputProvider(GlobyFile)
	],
	templateUrl: './globy-file.component.html',
	styleUrls: ['./globy-file.component.scss']
})
export class GlobyFile<T> extends CustomInputService<T[]> {
	/** Button Icon; Set "null" to hide */
	@Input() buttonIcon: string = 'export';
	/** Button label */
	@Input() buttonLabel: string = 'Upload file';
	/** Button class. Specify button style **/
	@Input() buttonClass: string;
	/** Specify in MB  **/
	@Input() maxFileWeight: number = 10;
	/** Describe files and their use **/
	@Input() description: string;
	/** Allows to upload multiple files **/
	@Input() multiple: boolean;
	/** File types to accept **/
	@Input() accept: Image | Video | Doc | Custom = IMAGE_TYPES;
	/** Set no file label **/
	@Input() noFileLabel: string;
	/** Show media list **/
	@Input() showResulList: boolean = true;
	/** Custom list class **/
	@Input() customListClass: string;
	/** Show delete button on card **/
	@Input() showDelete: boolean = true;
	/** Handle object url. Use this to transform custom object to image **/
	@Input() handleItem: (item: T) => HandleItem;
	/** Show custom errors */
	@Input() errors: string[];
	hotToastService = inject(HotToastService);

	constructor() {
		super();
	}

	get value() {
		return this.formControl?.value || [];
	}

	get acceptTypes() {
		const types = this.accept.map(x => `.${x}`);
		return types.join(', ');
	}

	get items() {
		if (Array.isArray(this.formControl.value)) {
			return this.formControl.value;
		}
		return [this.formControl.value]
	}

	delete(index: number) {
		let values = _.cloneDeep(this.value);
		values = _.without(values, values[index]);
		this.formControl.patchValue(values);
	}

	uploadFile($event: any) {
		let files = ($event.target as HTMLInputElement).files;
		if (!this.checkFormat(files)) {
			return;
		}
		const validFiles = this.checkFileSize(files);
		if (this.multiple) {
			this.formControl.patchValue([...this.value, ...validFiles as any]);
		} else {
			this.formControl.patchValue([...validFiles as any]);
		}
	}

	checkFormat(files: FileList) {
		const array = Array.from(files);
		const types: string[] = array.map(x => x.name.split('.').pop());
		const canAccept = types.every(val => this.accept.includes(val as never))
		if (!canAccept) {
			this.hotToastService.error('Wrong file type')
		}
		return canAccept;
	}

	checkFileSize(files: FileList) {
		let array: File[] = Array.from(files);
		for (let i = 0; i < array.length; i++) {
			const item = array[i]
			if (item.size / 1000000 > this.maxFileWeight) {
				this.hotToastService.error(`File "${item.name}" is too big`)
				array = array.filter(file => file.name !== item.name);
			}
		}
		return array;
	}
}
