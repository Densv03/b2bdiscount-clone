import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-admin-sidenav',
	templateUrl: './admin-sidenav.component.html',
	styleUrls: ['./admin-sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminSidenavComponent {
	@Input() options: any[];
}
