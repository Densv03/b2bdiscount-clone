import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {GlobyFileCard} from "../card/globy-file-card.component";
import {HandleItem} from "../../../../../globy-file/src/lib/interfaces/handle.interface";
import {JsonPipe, NgClass} from "@angular/common";

@Component({
  selector: 'globy-file-list',
  standalone: true,
	imports: [
		GlobyFileCard,
		NgClass,
		JsonPipe
	],
  templateUrl: './globy-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobyList<T> {
	@Input() items: Array<T>;
	/** Handle object url **/
	@Input() handleItem: (item: T) => HandleItem;
	/** Show delete button **/
	@Input() showDelete: boolean;
	/** Show delete button **/
	@Input() showEdit: boolean;
	/** List class. Specify custom class for list wrapper **/
	@Input() customClass: string;
	/** Delete item **/
	@Output() deleteItem = new EventEmitter<number>();
	/** Delete item **/
	@Output() editItem = new EventEmitter<number>();

	/**
	 * Delete Item
	 * @param $event
	 */
	delete($event: number) {
		this.deleteItem.next($event)
	}

	/**
	 * Output edit item
	 * @param $event
	 */
	edit($event: number) {
		this.editItem.next($event)
	}
}
