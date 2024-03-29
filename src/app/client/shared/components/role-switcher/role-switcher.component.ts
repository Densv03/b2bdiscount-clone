import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
} from '@angular/core';
import { User } from '../../../../core/models/user/user.model';
import { UserService } from '../../../pages/client-profile/services/user/user.service';
import { HotToastService } from '@ngneat/hot-toast';
import { B2bAuthRoleInterface } from '../../../../../../projects/shared/src/interfaces/b2b-auth-role.interface';
import { B2bAuthRootRoleInterface } from '../../../../../../projects/shared/src/interfaces/b2b-auth-root-role.interface';
import { delay, exhaustMap, filter, map, tap } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthService } from '../../../../auth/services/auth/auth.service';
import { Router } from '@angular/router';
import { MixpanelService } from '../../../../core/services/mixpanel/mixpanel.service';

@Component({
	selector: 'b2b-role-switcher',
	templateUrl: './role-switcher.component.html',
	styleUrls: ['./role-switcher.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleSwitcherComponent {
	@Input() user: User;
	public roleChangeInPending = false;
	constructor(
		private readonly userService: UserService,
		private readonly authService: AuthService,
		private readonly hotToastService: HotToastService,
		private readonly router: Router,
		private readonly mixpanelService: MixpanelService
	) {}

	public updateUserRole(oldRoleId: string): void {
		this.roleChangeInPending = true;
		let subRole: B2bAuthRoleInterface = null;
		let newRole: B2bAuthRootRoleInterface = null;
		this.authService
			.getRootRoles()
			.pipe(
				filter((data) => !!data.length),
				map((rolesArr) => rolesArr.filter((role) => role._id !== oldRoleId)[0]),
				tap((role) => (newRole = role)),
				first(),
				delay(200),
				exhaustMap(({ _id, subRoles }) => {
					subRole = subRoles[0] as any;
					return this.userService.changeRole(
						this.userService.getToken(),
						subRoles[0].id,
						_id
					);
				})
			)
			.subscribe({
				next: () => {
					const redirectRoutes = [
						'/b2bmarket/product',
						'/b2bmarket/edit',
						'/offer',
						'/profile/my-offers/',
					];

					this.hotToastService.success('Role updated successfully');
					this.authService.updateUser({
						...this.userService.getUser(),
						role: subRole,
						rootRole: newRole,
					});
					this.mixpanelService.set({
						distinctId: this.user._id,
						properties: {
							'Account Type': newRole.displayName,
						},
					});

					redirectRoutes.forEach((route) => {
						if (newRole.name === 'buyer' && this.router.url.includes(route)) {
							this.router
								.navigate([
									route === '/b2bmarket/product'
										? 'b2bmarket'
										: 'profile/your-account/settings',
								])
								.then(() => {
									this.hotToastService.show(
										'In order to post products, your account must be in the supplier role'
									);
								});
						} else if (this.router.url.includes('/profile/your-workspace')) {
							this.router.navigate(['profile/your-account/settings']);
						} else if (
							this.router.url.includes('/your-account/company-information')
						) {
							location.reload();
						}
					});
				},
				error: () =>
					this.hotToastService.error(
						'Something went wrong! Please try again later'
					),
				complete: () => (this.roleChangeInPending = false),
			});
	}
}
