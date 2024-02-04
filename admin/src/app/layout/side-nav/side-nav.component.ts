import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminSidenavData } from '../../data/admin-sidenav.data';
import { UserService } from '../../../../../src/app/client/pages/client-profile/services/user/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'b2b-side-nav',
	templateUrl: './side-nav.component.html',
	styleUrls: ['./side-nav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {
	public sidenavOptions: any[] = AdminSidenavData.sideNavData;

	constructor() {}
}
