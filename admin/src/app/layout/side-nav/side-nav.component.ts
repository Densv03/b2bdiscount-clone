import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminSidenavData } from '../../data/admin-sidenav.data';

@Component({
	selector: 'b2b-side-nav',
	templateUrl: './side-nav.component.html',
	styleUrls: ['./side-nav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {
	public readonly sidenavOptions: any[];

	constructor() {
		this.sidenavOptions = AdminSidenavData;
	}
}
