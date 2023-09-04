import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { B2bNgxLinkThemeEnum } from "@b2b/ngx-link";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import {
	ActivatedRoute,
	NavigationEnd,
	NavigationStart,
	Params,
	Router,
	RoutesRecognized
} from "@angular/router";
import { UserService } from "../pages/client-profile/services/user/user.service";
import { Observable, pairwise, switchMap } from "rxjs";
import { filter, first, map, startWith, take } from "rxjs/operators";
import { TradebidService } from "../pages/client-tradebid/tradebid.service";
import { SeoService } from "../../core/services/seo/seo.service";
import { AuthService } from "../../auth/services/auth/auth.service";
import { ClientMarketplaceService } from "../pages/client-marketplace/client-marketplace.service";
import { MixpanelService } from "../../core/services/mixpanel/mixpanel.service";
import moment from "moment";
import { PlatformService } from "../services/platform/platform.service";
import { startsWith } from "lodash";


@UntilDestroy()
@Component({
	selector: "b2b-client",
	templateUrl: "./client.component.html",
	styleUrls: ["./client.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientComponent implements OnInit, AfterViewInit {
	public readonly options: any[];
	public readonly socialMedias: any[];
	public readonly user$: Observable<any>;
	public readonly b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;
	private startTime: number;

	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
		private tradebidService: TradebidService,
		private router: Router,
		private seoService: SeoService,
		private marketService: ClientMarketplaceService,
		private readonly mixpanelService: MixpanelService,
		private authService: AuthService,
		private readonly platformService: PlatformService
	) {
		this.route.queryParams.pipe(untilDestroyed(this)).subscribe((data) => {
			if (data["ref"]) {
				localStorage.removeItem("ref");
				localStorage.setItem("ref", data["ref"]);
			}
		});
		this.options = this.getOptions();
		this.socialMedias = this.getSocialMedias();
		this.user$ = this.authService.user$;
	}

	ngOnInit() {
		if (this.platformService.isBrowser) {
			this.seoService.addCanonicalRef();
			this.initRefSubscription();
			this.initIntercomSettings();
			this.addUserStatistics();
			this.mixpanelTracking();
			this.setQueryParamForAuthorizationType();
		}

	}

	ngAfterViewInit() {
	}

	public addUserStatistics(): void {
		if (!this.userService.getUser()) {
			return;
		}
		const {company, role, preferences, _id} = this.userService.getUser();
		this.tradebidService
			.createCompanyInfo({
				companyName: company,
				businessType: role.displayName,
				categories: preferences,
				userId: _id,
			})
			.pipe(first())
			.subscribe();
	}

	private initRefSubscription(): void {
		this.route.url
			.pipe(
				startWith(null),
				switchMap(() => {
					const isLoggedIn$ = this.userService.getToken$().pipe(map(token => !!token))

					console.log('isAuth', this.userService.isAuth());

					if (!!this.userService.getUser() && localStorage.getItem('ref') !== null) {
						this.addNewEntry();
					}

					return isLoggedIn$;
				}),
				untilDestroyed(this)
			)
			.subscribe();
	}

	private addNewEntry(): void {
		let refId = localStorage.getItem('ref').replace(/\//g, '');

		if (!refId || isNaN(+refId)) {
			return;
		}

		this.userService.addUserStatistics({
			userId: this.userService.getUser()._id,
			email: this.userService.getUser().email,
			refId: +refId,
			typeRegistration: this.userService.getUser().socialAuth ? 'socials' : 'standard'
		}).subscribe(data => {

			console.log('test');

			console.log('data', data);
			console.log('refId', refId);
			localStorage.removeItem('ref')
		})
	}

	public onActivate() {
		const scrollToTop = window.setInterval(() => {
			const pos = window.pageYOffset;
			if (pos > 0) {
				window.scrollTo(0, pos - 20);
			} else {
				window.clearInterval(scrollToTop);
			}
		}, 10);
	}

	public getSocialMedias() {
		return [
			{
				icon: "facebook",
				href: "https://www.facebook.com/b2b.discount",
			},
			{
				icon: "twitter",
				href: "https://twitter.com/DiscountB2b",
			},
			{
				icon: "linkedin",
				href: "https://www.linkedin.com/company/b2b-discount",
			},
			{
				icon: "youtube",
				href: "https://www.youtube.com/channel/UCW8RdiD7Fql5RelC37WkjjA",
			},
		];
	}

	public getOptions() {
		return [
			// {
			// 	label: "HEADER.HOT_IT_WORKS",
			// 	link: "/how-it-works",
			// },
			{
				label: "HEADER.UNCLAIMED_CARGO",
				link: "/latest-offers",
			},
			{
				label: "HEADER.B2BMARKET",
				link: "/b2bmarket",
			},
			{
				label: "HEADER.TRADE_BID",
				link: "/tradebid",
			},
			{
				label: "HEADER.BLOG",
				link: "/blog",
			},
			{
				label: "CONTACT_US.TITLE",
				link: "/contact-us",
			},
			{
				label: "HEADER.ABOUT_US",
				link: "/about-us",
			},
		];
	}

	private setQueryParamForAuthorizationType(): void {
		if (!this.userService.getUser()) {
			return;
		}

		this.router.navigate([], {
			relativeTo: this.route,
			queryParams: {
				signIn: this.userService.getUser().socialAuthType ?? "standard",
			},
			skipLocationChange: true,
			queryParamsHandling: "merge",
		});
	}

	private initIntercomSettings(): void {
		// this.user$.subscribe((user) => {
		// 	(window as any).Intercom("boot", {});
		// 	if (user) {
		// 		(window as any).Intercom("update", {
		// 			email: user.email,
		// 			name: user.fullName,
		// 		});
		// 	} else {
		// 		(window as any).Intercom("update");
		// 	}
		// });
	}

	private mixpanelTracking(): void {
		this.route.firstChild.url
			.pipe(take(1),
				filter(el => el?.length > 0))
			.subscribe(el => {
				this.mixpanelService.track('Page View', {
					'Time Spend': '00:00',
					'URL': location.host + '/' + el[0].path
				})
			})

		this.router.events
			.pipe(
				filter(event => event instanceof NavigationStart || event instanceof NavigationEnd || event instanceof RoutesRecognized),
				pairwise()
			).subscribe((event) => {
			if (event[0] instanceof NavigationStart) {
				this.startTime = Date.now();
			} else if (event[0] instanceof NavigationEnd && !event[0].urlAfterRedirects.startsWith('auth' || '/email-verify')) {
				const duration = Date.now() - this.startTime;
				const route = event[0].urlAfterRedirects;
				this.mixpanelService.track('Page View', {
					'Time Spend': moment().startOf('day').seconds(duration / 10).format('HH:mm:ss'),
					'URL': location.host + route
				})
			}
		});
	}
}
