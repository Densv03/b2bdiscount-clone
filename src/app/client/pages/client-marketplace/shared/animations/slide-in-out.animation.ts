import {
	trigger,
	state,
	style,
	animate,
	transition,
} from '@angular/animations';

export const SlideInOutAnimation = trigger('slideInOut', [
	state(
		'in',
		style({
			transform: 'translateY(0)',
		})
	),
	state(
		'out',
		style({
			transform: 'translateY(110%)',
		})
	),
	transition('in => out', animate('500ms ease-in-out')),
	transition('out => in', animate('500ms ease-in-out')),
]);
