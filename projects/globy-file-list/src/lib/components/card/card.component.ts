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

@Component({
	selector: 'lib-card',
	standalone: true,
	imports: [
		B2bNgxButtonModule,
		B2bNgxIconModule,
		JsonPipe,
		NgStyle
	],
	templateUrl: './card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent<T> implements OnInit, OnChanges {
	/** Main card data */
	@Input() data: T;
	/** Item index in "for" loop */
	@Input() index!: number;
	/** Handle object url */
	@Input() handleItem: (item: T) => HandleItem;
	/** Do we need to show delete button */
	@Input() showDelete: boolean = true;
	/** Delete output */
	@Output() deleteItem = new EventEmitter<number>();

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
		if (isFile(this.data)) {
			return this.getUrlFormFile();
		}
		this.getUrlFormItem();
	}

	getUrlFormItem() {
		const {type, url} = this.handleItem(this.data);
		this.type = type;
		this.url = url;
		this.cdr.detectChanges();
	}

	delete() {
		this.deleteItem.next(this.index);
	}
}
