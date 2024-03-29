import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthService } from '../../../services/auth/auth.service';
import { AuthRecoverAccountComponent } from '../../auth-recover-account/auth-recover-account.component';
import { MixpanelService } from '../../../../core/services/mixpanel/mixpanel.service';
import { firstValueFrom } from 'rxjs';
import { User } from '../../../../core/models/user/user.model';

@UntilDestroy()
@Component({
	selector: 'b2b-auth-google-sign-in-success',
	templateUrl: './auth-google-sign-in-success.component.html',
	styleUrls: ['./auth-google-sign-in-success.component.scss'],
	animations: [
		trigger('fadeInOut', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate(500, style({ opacity: 1 })),
			]),
			transition(':leave', [animate(500, style({ opacity: 0 }))]),
		]),
	],
})
export class AuthGoogleSignInSuccessComponent implements OnInit {
	constructor(
		private readonly _activatedRoute: ActivatedRoute,
		private readonly _authService: AuthService,
		private readonly _router: Router,
		private readonly mixpanelService: MixpanelService // private readonly _dialogService: DialogService
	) {}

	ngOnInit() {
		this._activatedRoute.queryParams
			.pipe(untilDestroyed(this))
			.subscribe((params) => {
				const { token, recovered } = params;
				const updatedToken = token.endsWith('/') ? token.slice(0, -1) : token;
				this._authService.updateToken(updatedToken);
				this._authService.initUser();
				this._authService
					.getUser()
					.pipe(untilDestroyed(this))
					.subscribe((user) => {
						console.log('AUTH SERVICE GOOGLE SIGN IN');
						this.trackLogin(user);
						this._authService.updateToken(updatedToken);
						this._authService.updateRole(user?.role);
						this._router.navigateByUrl('/');
					});
			});
	}

	async trackLogin(user: User) {
		if (!user) {
			return;
		}
		const mixpanel = {
			User_id: user?._id,
			'Account Type': user?.rootRole?.displayName,
			'Company Name': user?.company,
			'Auth Method': user?.socialAuthType,
		};
		this.mixpanelService.logIn(mixpanel);
	}
}
