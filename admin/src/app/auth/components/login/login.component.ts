import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../../../../../src/app/auth/services/auth/auth.service';
import { catchError } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { AdminSidenavData } from '../../../data/admin-sidenav.data';

@Component({
	selector: 'b2b-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	public signInFromGroup = this.fb.group({ email: [''], password: [''] });

	public formState = this.signInFromGroup.controls;

	public b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private hotToastService: HotToastService,
		private router: Router
	) {}

	public signIn() {
		this.authService
			.logInWithForm(this.signInFromGroup.value)
			.pipe(
				catchError((err) => {
					console.log(err);
					this.hotToastService.error('Wrong email or password');
					return err;
				})
			)
			.subscribe();
		this.authService
			.getUser()
			.pipe(
				filter((user) => !!user),
				take(1)
			)
			.subscribe((user) => {
				user?.moderatorRole
					? AdminSidenavData.updateModeratorSidenavData(user)
					: null;
				console.log(AdminSidenavData.sideNavData);
				this.router.navigate([AdminSidenavData.sideNavData[0].path]);
			});
	}
}
