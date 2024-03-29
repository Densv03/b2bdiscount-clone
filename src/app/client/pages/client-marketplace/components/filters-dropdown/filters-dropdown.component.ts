import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import {
	animate,
	state,
	style,
	transition,
	trigger,
} from '@angular/animations';
import { NavigationOption } from '../../layout/client-marketplace-listing.component';
const dropdownAnimation = trigger('dropdownAnimation', [
	state(
		'open',
		style({
			height: '{{customHeight}}',
		}),
		{ params: { customHeight: '*' } }
	),
	state(
		'closed',
		style({
			height: '{{minHeight}}',
		}),
		{ params: { minHeight: '66px' } }
	),
	transition('closed <=> open', [animate('300ms ease-in-out')]),
]);
@Component({
	selector: 'b2b-filters-dropdown',
	templateUrl: './filters-dropdown.component.html',
	styleUrls: ['./filters-dropdown.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [dropdownAnimation],
})
export class FiltersDropdownComponent {
	@Input() title!: string;
	@Input() maxHeight?: number;
	@Input() menuIsOpen: boolean;
	@Input() selectedOption: any;
	@Input() options!: any[];
	@Input() openIsRestricted: boolean;
	@Input() customWidth?: string;
	@Input() navigationForChange: NavigationOption;
	@Output() changeOption: EventEmitter<any> = new EventEmitter<any>();
	constructor() {}
	public resetSelected(e: any): void {
		e.stopPropagation();
		this.changeOption.emit(this.selectedOption[0]);
		this.menuIsOpen = true;
	}
	openDropdown() {
		if (this.openIsRestricted) return;

		if (!this.selectedOption) {
			this.menuIsOpen = !this.menuIsOpen;
		}
	}
	public dropdownIsClosed(): boolean {
		return !this.menuIsOpen && !this.selectedOption;
	}
}
