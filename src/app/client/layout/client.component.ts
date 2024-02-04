import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
	ActivatedRoute,
	NavigationEnd,
	NavigationStart,
	Router,
	RoutesRecognized,
} from '@angular/router';
import { UserService } from '../pages/client-profile/services/user/user.service';
import { Observable, pairwise } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { SeoService } from '../../core/services/seo/seo.service';
import { AuthService } from '../../auth/services/auth/auth.service';
import { MixpanelService } from '../../core/services/mixpanel/mixpanel.service';
import moment from 'moment';
import { PlatformService } from '../services/platform/platform.service';
import { IntercomService } from '../../core/services/intercom/intercom.service';

@UntilDestroy()
@Component({
	selector: 'b2b-client',
	templateUrl: './client.component.html',
	styleUrls: ['./client.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientComponent implements OnInit {
	public readonly user$: Observable<any>;
	public readonly b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;
	private startTime: number;

	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
		private router: Router,
		private seoService: SeoService,
		private mixpanelService: MixpanelService,
		private authService: AuthService,
		private platformService: PlatformService,
		private intercomService: IntercomService
	) {
		this.route.queryParams.pipe(untilDestroyed(this)).subscribe((data) => {
			if (data['ref']) {
				localStorage.removeItem('ref');
				localStorage.setItem('ref', data['ref']);
			}

			if (data['utm_source'] && !localStorage.getItem('utm_source')) {
				localStorage.setItem('utm_source', data['utm_source']);
			}

			if (data['utm_medium'] && !localStorage.getItem('utm_medium')) {
				localStorage.setItem('utm_medium', data['utm_medium']);
			}

			if (data['utm_campaign'] && !localStorage.getItem('utm_campaign')) {
				localStorage.setItem('utm_campaign', data['utm_campaign']);
			}

			if (data['utm_term'] && !localStorage.getItem('utm_term')) {
				localStorage.setItem('utm_term', data['utm_term']);
			}

			if (data['utm_content'] && !localStorage.getItem('utm_content')) {
				localStorage.setItem('utm_content', data['utm_content']);
			}

			if (data['utm_id'] && !localStorage.getItem('utm_id')) {
				localStorage.setItem('utm_id', data['utm_id']);
			}
		});
		this.user$ = this.authService.user$;
	}

	ngOnInit() {
		this.seoService.addCanonicalRef();
		if (this.platformService.isBrowser) {
			this.mixpanelTracking();
			this.setQueryParamForAuthorizationType();
			this.user$
				.pipe(
					filter((user) => !!user),
					untilDestroyed(this)
				)
				.subscribe((user) => {
					this.intercomService.initializeIntercom(user.email);
				});
		}
	}

	public onActivate() {
		if (this.platformService.isServer) {
			return;
		}
		const scrollToTop = window.setInterval(() => {
			const pos = window.pageYOffset;
			if (pos > 0) {
				window.scrollTo(0, pos - 20);
			} else {
				window.clearInterval(scrollToTop);
			}
		}, 10);
	}

	private setQueryParamForAuthorizationType(): void {
		if (!this.userService.getUser()) {
			return;
		}

		this.router.navigate([], {
			relativeTo: this.route,
			queryParams: {
				signIn: this.userService.getUser().socialAuthType ?? 'standard',
			},
			skipLocationChange: true,
			queryParamsHandling: 'merge',
		});
	}

	private mixpanelTracking(): void {
		this.route.firstChild.url
			.pipe(
				take(1),
				filter((el) => el?.length > 0),
				untilDestroyed(this)
			)
			.subscribe((el) => {
				this.mixpanelService.track('Page View', {
					'Time Spend': '00:00',
					URL: location.host + '/' + el[0].path,
				});
			});

		this.router.events
			.pipe(
				filter(
					(event) =>
						event instanceof NavigationStart ||
						event instanceof NavigationEnd ||
						event instanceof RoutesRecognized
				),
				pairwise(),
				untilDestroyed(this)
			)
			.subscribe((event) => {
				if (event[0] instanceof NavigationStart) {
					this.startTime = Date.now();
				} else if (
					event[0] instanceof NavigationEnd &&
					!event[0].urlAfterRedirects.startsWith('auth' || '/email-verify')
				) {
					const duration = Date.now() - this.startTime;
					const route = event[0].urlAfterRedirects;
					this.mixpanelService.track('Page View', {
						'Time Spend': moment()
							.startOf('day')
							.seconds(duration / 10)
							.format('HH:mm:ss'),
						URL: location.host + route,
					});
				}
			});
	}
}
