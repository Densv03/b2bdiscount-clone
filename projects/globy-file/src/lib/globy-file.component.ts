import {Component, Input} from '@angular/core';
import {CustomInputService} from 'projects/shared/src/lib/services/custom-input/custom-input.service'
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {MatIcon} from "@angular/material/icon";
import {UntilDestroy} from "@ngneat/until-destroy";
import _ from "lodash";
import {HandleItem} from "./interfaces/handle.interface";
import {JsonPipe, NgClass} from "@angular/common";
import {ListComponent} from 'projects/globy-file-list/src/public-api';
import {Custom, Doc, Image, Video} from "./interfaces/file.interface";
import {IMAGE_TYPES} from "./globy-file.constants";
import {customInputProvider} from 'projects/shared/src/lib/utils/custom-input.provider';
import {ReactiveFormsModule} from "@angular/forms";
import {B2bNgxIconModule} from "@b2b/ngx-icon";

@UntilDestroy()
@Component({
	selector: 'globy-file',
	standalone: true,
	imports: [
		B2bNgxButtonModule,
		MatIcon,
		ListComponent,
		NgClass,
		JsonPipe,
		ReactiveFormsModule,
		B2bNgxIconModule
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

	get value() {
		return this.formControl?.value || [];
	}

	constructor() {
		super();
		this.formControl.valueChanges.subscribe(res => {
			console.log(res);
		})
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
		const files = ($event.target as HTMLInputElement).files;
		if (this.multiple) {
			this.formControl.patchValue([...this.value, ...files as any]);
		} else {
			this.formControl.patchValue([...files as any]);
		}
	}
}
