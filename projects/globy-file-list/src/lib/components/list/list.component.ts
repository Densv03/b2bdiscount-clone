import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {HandleItem} from "../../../../../globy-file/src/lib/interfaces/handle.interface";
import {JsonPipe, NgClass} from "@angular/common";

@Component({
  selector: 'globy-file-list',
  standalone: true,
	imports: [
		CardComponent,
		NgClass,
		JsonPipe
	],
  templateUrl: './list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent<T> {
	@Input() items: Array<T>;
	/** Handle object url **/
	@Input() handleItem: (item: T) => HandleItem;
	/** Show delete button **/
	@Input() showDelete: boolean;
	/** List class. Specify custom class for list wrapper **/
	@Input() customClass: string;
	/** Delete item **/
	@Output() deleteItem = new EventEmitter<number>();

	/**
	 * Delete Item
	 * @param $event
	 */
	delete($event: number) {
		this.deleteItem.next($event)
	}
}
