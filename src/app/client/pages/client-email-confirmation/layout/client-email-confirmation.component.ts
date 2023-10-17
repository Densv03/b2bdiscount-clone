import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { catchError, filter, first, switchMap } from 'rxjs/operators';
import { ApiService } from '../../../../core/services/api/api.service';
import { of } from 'rxjs';
import { B2bNgxLinkService } from '@b2b/ngx-link';
import { MixpanelService } from '../../../../core/services/mixpanel/mixpanel.service';
import { PlatformService } from '../../../services/platform/platform.service';
import { AuthService } from '../../../../auth/services/auth/auth.service';
import { TradebidService } from '../../client-tradebid/tradebid.service';

@UntilDestroy()
@Component({
	selector: 'b2b-client-email-confirmation',
	templateUrl: './client-email-confirmation.component.html',
	styleUrls: ['./client-email-confirmation.component.scss'],
})
export class ClientEmailConfirmationComponent implements AfterViewInit {
	isAccountActivated: boolean;

	constructor(
		private readonly _activatedRoute: ActivatedRoute,
		private readonly _router: Router,
		private readonly _apiService: ApiService,
		public readonly b2bNgxLinkService: B2bNgxLinkService,
		private readonly mixpanelService: MixpanelService,
		private readonly platformService: PlatformService,
		private readonly authService: AuthService,
		private readonly tradebidService: TradebidService
	) {}

	ngAfterViewInit() {
		if (this.platformService.isServer) {
			return;
		}
		this._activatedRoute.params
			.pipe(
				untilDestroyed(this),
				switchMap((id: any) => {
					return this._apiService.get(`email/verify/${id.id}`);
				}),
				catchError(() => {
					this.isAccountActivated = true;
					return of(null);
				})
			)
			.subscribe((result: any) => {
				if (this.platformService.isBrowser) {
					this.authService.updateToken(result.token);
					this.authService.initUser();
					this.redirect();
				}
			});
	}

	private redirect(): void {
		this.authService
			.getUser()
			.pipe(
				filter((user) => !!user),
				untilDestroyed(this)
			)
			.subscribe((user) => {
				this.tradebidService
					.createCompanyInfo({
						companyName: user.company,
						businessType: user.role.displayName,
						categories: user.preferences,
						userId: user._id,
					})
					.pipe(first())
					.subscribe();

				if (user.rootRole?.name === 'supplier') {
					this._router.navigateByUrl(
						'/profile/your-account/company-information',
						{ state: { showPopUp: true } }
					);
				} else {
					this._router.navigate(['/']);
				}
			});
	}
}
