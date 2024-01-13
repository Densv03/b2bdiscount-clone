import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
	animate,
	state,
	style,
	transition,
	trigger,
} from '@angular/animations';
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
		{ params: { minHeight: '30px' } }
	),
	transition('closed <=> open', [animate('300ms ease-in-out')]),
]);
export const rotateState = [
	trigger('rotatedState', [
		state(
			'true',
			style({ transform: 'rotate(-180deg)', transition: '0.3s all' })
		),
		state('false', style({ transform: 'rotate(0)', transition: '0.3s all' })),
		transition('true <=> false', animate('200ms ease-out')),
	]),
];

@Component({
	selector: 'b2b-client-dropdown',
	templateUrl: './client-dropdown.component.html',
	styleUrls: ['./client-dropdown.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [dropdownAnimation, rotateState],
})
export class ClientDropdownComponent {
	@Input() title: string;
	@Input() customHeight = 70;
	@Input() hideContentOnDropdownClose?: boolean;
	public menuIsOpen = false;
}
