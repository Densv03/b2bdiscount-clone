import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { catchError, filter, first, switchMap, take } from 'rxjs/operators';
import { ApiService } from '../../../../core/services/api/api.service';
import { of } from 'rxjs';
import { B2bNgxLinkService } from '@b2b/ngx-link';
import { MixpanelService } from '../../../../core/services/mixpanel/mixpanel.service';
import { PlatformService } from '../../../services/platform/platform.service';
import { AuthService } from '../../../../auth/services/auth/auth.service';
import { SourcingRequestService } from '../../client-sourcing-request/sourcing-request.service';
import { getName } from 'country-list';
import { CategoriesService } from '../../../services/categories/categories.service';
import { User } from '../../../../core/models/user/user.model';

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
		private readonly sourcingRequestService: SourcingRequestService,
		private readonly categoriesService: CategoriesService
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
				}
				this.redirect();
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
				const utm_source = localStorage.getItem('utm_source') as string;
				const utm_campaign = localStorage.getItem('utm_campaign') as string;
				const utm_medium = localStorage.getItem('utm_medium') as string;
				const utm_term = localStorage.getItem('utm_term') as string;
				const utm_content = localStorage.getItem('utm_content') as string;
				const utm_id = localStorage.getItem('utm_id') as string;

				const names = this.getCategoriesNames(user.preferences);

				this.mixpanelService.signUp(
					{
						'CUSTOM UTM SOURCE': utm_source ? utm_source : 'Organic',
						'CUSTOM UTM CAMPAIGN': utm_campaign ? utm_campaign : 'Organic',
						'CUSTOM UTM MEDIUM': utm_medium ? utm_medium : 'Organic',
						'CUSTOM UTM TERM': utm_term ? utm_term : 'Organic',
						'CUSTOM UTM CONTENT': utm_content ? utm_content : 'Organic',
						'CUSTOM UTM ID': utm_id ? utm_id : 'Organic',
						name: user.fullName,
						User_id: user?._id,
						'Registration date': new Date().toISOString(),
						'Email confirmed': user.emailConfirmed,
						'Account type': user.rootRole.name,
						'Company Name': user.company,
						'Product sectors': names,
						Country: getName(user.country),
						'Auth Method': user.socialAuthType,
					},
					'Sign-Up completed'
				);

				if (user.rootRole?.name === 'supplier') {
					this._router.navigateByUrl(
						'/profile/your-account/company-information',
						{ state: { showPopUp: true } }
					);
				} else {
					if (localStorage.getItem('blocked-route')) {
						this._router.navigate([localStorage.getItem('blocked-route'), {}]);
						localStorage.removeItem('blocked-route');
					} else {
						this._router.navigate(['/']);
					}
				}
			});
	}

	private getCategoriesNames(categoriesIds: string[]): string[] {
		let categoriesNames: string[] = [];
		this.categoriesService
			.getCategories$()
			.pipe(untilDestroyed(this))
			.subscribe(({ categories }) => {
				categoriesNames = categories
					.filter((category: any) => categoriesIds.includes(category._id))
					.map((value: { name: any }) => value.name);
			});
		return categoriesNames;
	}
}
