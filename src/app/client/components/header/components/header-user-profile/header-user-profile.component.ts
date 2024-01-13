import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
} from '@angular/core';
import { UserService } from '../../../../pages/client-profile/services/user/user.service';
import { delay, exhaustMap, filter, map, Observable, tap } from 'rxjs';
import { User } from '../../../../../core/models/user/user.model';
import { AuthService } from '../../../../../auth/services/auth/auth.service';
import { ProfileOptionInterface } from '../../types/profile-option.interface';
import { Router } from '@angular/router';
import { HeaderService } from '../../header.service';
import { TooltipService } from '../../tooltip.service';

@Component({
	selector: 'b2b-header-user-profile',
	templateUrl: './header-user-profile.component.html',
	styleUrls: ['./header-user-profile.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserProfileComponent {
	public user$: Observable<User> = this.userService.getUser$();
	public profileOptions: ProfileOptionInterface[] = this.getProfileOptions();

	constructor(
		private readonly userService: UserService,
		private readonly authService: AuthService,
		private readonly router: Router,
		private readonly headerService: HeaderService,
		private readonly tooltipService: TooltipService,
		private readonly cdr: ChangeDetectorRef
	) {}

	public async logOut(): Promise<void> {
		this.authService.logOut();
		this.cdr.detectChanges();
		await this.router.navigateByUrl('');
	}
	private getProfileOptions(): ProfileOptionInterface[] {
		return [
			{
				name: 'Workspace',
				icon: 'assets/icons/header/workspace.svg',
				link: '/profile/your-workspace/b2bmarket',
			},
			{
				name: 'Settings',
				icon: 'assets/icons/header/settings.svg',
				link: '/profile/your-account/settings',
			},
			{
				name: 'Log Out',
				icon: 'assets/icons/header/log-out.svg',
				link: '',
			},
		];
	}

	hideTooltip(name: string) {
		this.tooltipService.hideTooltip();
		if (name === 'Log Out') {
			this.logOut();
		}
	}
}
