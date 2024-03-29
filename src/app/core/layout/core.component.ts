import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	Inject,
	OnInit,
	ViewChild,
} from '@angular/core';
import { debounceTime, filter, map, startWith } from 'rxjs/operators';

import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { B2bNgxLinkService, B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { MobileSidenavLinkModel } from '../models/mobile-sidenav-link.model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SocketService } from '../../client/services/socket/socket.service';
import { AuthService } from '../../auth/services/auth/auth.service';
import { UserService } from '../../client/pages/client-profile/services/user/user.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { User } from '../models/user/user.model';
import { SlideInOutAnimation } from '../../client/shared/animations/slide-in-out.animation';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PlatformService } from '../../client/services/platform/platform.service';
import { overwrite } from 'country-list';
import { HeaderService } from '../../client/components/header/header.service';
import { HeaderPopupState } from '../../client/components/header/types/header-popup-state.interface';
import { COUNTRIES_OVERRIDE } from '../constants/countries-override';
import { DOCUMENT } from '@angular/common';

type ActiveHeaderTab = 'Settings' | 'None';

@UntilDestroy()
@Component({
	selector: 'b2b-core',
	templateUrl: './core.component.html',
	styleUrls: ['./core.component.scss'],
	// changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [SlideInOutAnimation],
})
export class CoreComponent implements OnInit, AfterViewInit {
	public headerPopupState$: Observable<HeaderPopupState> =
		this.headerService.popupState$();
	public toolTipIsOpened$: Observable<boolean> =
		this.headerService.toolTipIsOpened$();
	public readonly sidenavAccountOptions!: any[];
	public readonly sidenavWorkspaceOptions!: any[];
	public readonly headerLinks!: any[];
	public readonly options!: any[];
	public readonly mobileLinks!: MobileSidenavLinkModel[];
	public readonly socialMedias!: any[];
	public readonly user$: Observable<User>;
	public readonly b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;
	public readonly b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public readonly sidenavOptions: any;
	public isUserLoading$: Observable<boolean> =
		this.authService.isUserLoading$.pipe(startWith(true));

	public activeHeaderTab: ActiveHeaderTab = 'None';
	public settingsOptions: any[] = this.getSettingsOptions();

	public isMobileView = false;
	public animationState: 'in' | 'out' = 'out';
	public mobileProfileOptions: any[] = this.getMobileProfileOptions();
	@ViewChild('backdrop', {static: true}) backdrop?: ElementRef;

	constructor(
		private readonly _router: Router,
		private readonly _activatedRoute: ActivatedRoute,
		private readonly socketService: SocketService,
		private readonly authService: AuthService,
		private readonly userService: UserService,
		private readonly hotToastService: HotToastService,
		public readonly b2bNgxLinkService: B2bNgxLinkService,
		private readonly ccService: NgcCookieConsentService,
		private readonly platformService: PlatformService,
		private readonly headerService: HeaderService,
		@Inject(DOCUMENT) private document: Document
	) {
		if (this.platformService.isBrowser) {
			this.initSession();
			this.headerLinks = this.getHeaderLinks();
			this.options = this.getOptions();
			this.socialMedias = this.getSocialMedias();
			this.user$ = this.authService.user$;
			this.sidenavOptions = this.getSidenavOptions();
			this.mobileLinks = this.getMobileLinks();

			this.sidenavAccountOptions = this.getAccountOptions();
			this.sidenavWorkspaceOptions = this.getWorkspaceOptions();
		}
	}

	public ngOnInit(): void {
		this.updateNavOnStateChange();
		if (this.platformService.isServer) {
			return;
		}

		this.ccService.statusChange$.subscribe((data) => {
			this.setCookie('cookieconsent_status', data.status, 365);
		});

		this.userService
			.getUser$()
			.pipe(filter((user) => !!user))
			.subscribe((user) => {
				if (user.socialAuth) {
					this?.ccService?.destroy();
				}
			});

		const isContactUsParamExist =
			this._activatedRoute.snapshot.queryParams['contact-us'];
		isContactUsParamExist && this.openContactUsModal();
		if (this.platformService.isServer) {
			return;
		}
		this.isMobileView = 888 > innerWidth;
	}

	private updateNavOnStateChange(): void {
		this.headerService.profileNavIsOpened$().subscribe((state) => {
			if (!state) {
				this.animationState = 'out';
			}
		});
	}

	public get isBrowser(): boolean {
		return this.platformService.isBrowser;
	}

	public toggleShowPopUp(link?: string,
												 options?: { redirect: boolean, activeSection: ActiveHeaderTab }): void {
		if (options?.activeSection === 'Settings') {
			this.updateActiveHeaderTab(options.activeSection);
			return;
		} else if (options?.activeSection === 'None') {
			this.updateActiveHeaderTab(options.activeSection);
			if (!link) {
				return;
			}
		}

		if (link) this._router.navigate([link]);
		this.animationState = this.animationState === 'in' ? 'out' : 'in';
		if (this.animationState === 'in') {
			this.headerService.updateHeaderTransparent(false);
			this.headerService.updateProfileNavIsOpened(true);
		} else {
			const headerIsTransparent =
				this._router.url.replace(/\?.*$/, '') === '/' && window.scrollY < 100;
			if (headerIsTransparent) {
				this.headerService.updateHeaderTransparent(true);
			}
			this.headerService.updateProfileNavIsOpened(false);
		}
	}

	public updateActiveHeaderTab(activeHeaderTab: ActiveHeaderTab): void {
		this.activeHeaderTab = activeHeaderTab;
	}

	public openInDevelopmentPopUp(option: MobileSidenavLinkModel): void {
		if (option?.disabled) {
			this.hotToastService.show(
				'Thank you for your interest, but this feature is under development.'
			);
		}
	}

	public ngAfterViewInit(): void {
		// 	this._scriptsService.loadScripts();
		this.renameCountries();
	}

	public get unreadMarketplaceMessagesCount$() {
		return this.socketService.unreadMarketplaceMessagesCount$;
	}

	public get unreadOfferMessagesCount$() {
		return this.socketService.unreadOfferMessagesCount$;
	}

	public get unreadRfqMessagesCount$() {
		return this.socketService.unreadRfqMessagesCount$;
	}

	public openContactUsModal(): void {
		// this._ngxSmartModalService.create("createContactModal", ClientContactUsModalComponent).open();
	}

	public initSession(): void {
		const isSessionExpired =
			new Date().getTime() >= (Number(localStorage.getItem('session')) || 0);

		if (isSessionExpired) {
			const date = new Date();
			date.setMinutes(date.getMinutes() + 30);

			this._activatedRoute.queryParamMap
				.pipe(
					map((queryParams: any) => {
						if (queryParams.params['contact-us']) {
							const availableParams = [
								'facebook',
								'accounts.google.com',
								'lm.facebook.com',
								'mgid.com',
								'l.facebook.com',
								'instagram.com',
								'google',
								'm.facebook.com',
								'linkedin.com',
							];
							const removedContactUs = Object.keys(queryParams.params).reduce(
								(acc: any, key) => {
									const isAvailableKey = availableParams.includes(key);
									if (isAvailableKey) {
										acc[key] = queryParams.params[key];
									}
									return acc;
								},
								{}
							);
							queryParams.params = {...removedContactUs};
						}
						return queryParams;
					})
					// untilDestroyed(this)
				)
				.subscribe((params: any) => {
					const source =
						params.keys.length > 0
							? params.keys
								.map((key: any) => `${key}=${params.get(key)}`)
								.join('&')
							: 'google.organic';
					localStorage.setItem('session', date.getTime().toString());
					localStorage.setItem('source', source);
				});
		}
	}

	public get displayHeader(): boolean {
		return !this._router.url.includes('admin');
	}

	public get isAuth(): boolean {
		return this._router.url.includes('auth');
	}

	public async logOut(): Promise<void> {
		this.authService.logOut();
		await this._router.navigate(['']);
	}

	public onActivate(): void {
		const scrollToTop = window.setInterval(() => {
			const pos = window.pageYOffset;
			if (pos > 0) {
				window.scrollTo(0, pos - 20);
			} else {
				window.clearInterval(scrollToTop);
			}
		}, 10);
	}

	public getSidenavOptions(): any[] {
		return [
			{
				label: 'SIDENAV.CHATS',
				link: '/profile/my-chats',
				icon: 'chat',
			},
			{
				label: 'SIDENAV.MY_OFFERS',
				link: '/profile/my-offers',
				icon: 'price-tag',
			},
			{
				label: 'SIDENAV.SAVE',
				link: '/profile/saved-offers',
				icon: 'star',
			},
			{
				label: 'SIDENAV.TRADE_BID',
				link: '/sourcing-request/listing',
				icon: 'tradebid',
			},
			{
				label: '',
				link: '',
				icon: '',
			},
			{
				label: 'SIDENAV.MY_SETTINGS',
				link: '/profile/settings',
				icon: 'user-2',
			},
			// {
			// 	label: "SIDENAV.PRICING",
			// 	icon: "card",
			// 	link: "/pricing",
			// },
			//,
		];
	}

	public getSocialMedias(): any[] {
		return [
			{
				icon: 'facebook',
				href: 'https://www.facebook.com/',
			},
			{
				icon: 'twitter',
				href: 'https://twitter.com/',
			},
			{
				icon: 'linkedin',
				href: 'https://www.linkedin.com/',
			},
			{
				icon: 'youtube',
				href: 'https://www.youtube.com/',
			},
		];
	}

	public getMobileLinks(): MobileSidenavLinkModel[] {
		return [
			{
				text: 'HEADER.MARKET',
				link: '/b2bmarket',
				label: 'new',
				labelBackground: '#e80202',
			},
			// {
			// 	text: 'Quick Logistics',
			// 	link: '/quick-logistics',
			// 	label: 'new',
			// 	labelBackground: '#e80202',
			// },
			{
				text: 'HEADER.UNCLAIMED_CARGO',
				link: '/unclaimed-cargo',
				labelBackground: '#005dff',
			},
			// {
			//   text: "HEADER.CALCULATE_LOGISTICS",
			//   link: "/",
			//   disabled: true,
			// },
			{
				text: 'HEADER.TRADE_BID',
				link: '/sourcing-request/listing',
			},
			{
				text: 'HEADER.BLOG',
				link: '/blog',
			},
			{
				text: 'HEADER.ABOUT_US',
				link: '/about-us',
			},
			// {
			// 	label: "HEADER.HOT_IT_WORKS",
			// 	link: "/how-it-works",
			// },
			// {
			// 	label: "HEADER.TRADE_WIKI",
			// 	link: "/trade-wiki",
			// },
		];
	}

	public getOptions(): any[] {
		return [
			{
				label: 'HEADER.MARKET',
				link: '/b2bmarket',
				// isNew: true,
			},
			// {
			// 	label: 'Quick Logistics',
			// 	link: '/quick-logistics',
			// 	isNew: true,
			// },
			{
				label: 'HEADER.UNCLAIMED_CARGO',
				link: '/unclaimed-cargo',
			},
			// {
			//   label: "HEADER.CALCULATE_LOGISTICS",
			//   link: '',
			//   disabled: true
			// },
			{
				label: 'HEADER.TRADE_BID',
				link: '/sourcing-request/listing',
			},
			{
				label: 'HEADER.BLOG',
				link: '/blog',
			},
			{
				label: 'HEADER.ABOUT_US',
				link: '/about-us',
			},
			// {
			// 	label: "HEADER.HOT_IT_WORKS",
			// 	link: "/how-it-works",
			// },
		];
		// {
		// 	label: "HEADER.SERVICES",
		// 	link: "",
		// },
		// {
		// 	label: "HEADER.TRADE_WIKI",
		// 	link: "/trade-wiki",
		// },
		// {
		// 	label: "HEADER.LEGAL_HELP",
		// 	link: "/legal-help",
		// },
		// {
		// 	label: "HEADER.PRICING",
		// 	link: "/pricing",
		// }
	}

	public getHeaderLinks(): any[] {
		return [
			{
				label: 'Trade Bid',
				link: '/sourcing-request',
			},
			// {
			// 	label: "Trade Wiki",
			// 	link: "/trade-wiki",
			// },
			// {
			// 	label: "Legal Help",
			// 	link: "/legal-help",
			// }
		];
	}

	public getAccountOptions(): any[] {
		return [
			{
				label: 'Settings',
				icon: 'sidenav-line',
				link: '/profile/your-account/settings',
			},
			{
				label: 'Company information',
				icon: 'sidenav-line',
				link: '/profile/your-account/company-information',
			},
			{
				label: '',
				icon: '',
				link: '',
			},
		];
	}

	public getWorkspaceOptions(): any[] {
		return [
			{
				label: 'B2B Market',
				link: '/profile/your-workspace/b2bmarket',
				icon: 'sidenav-line',
			},
			{
				label: 'Unclaimed cargo',
				link: '/profile/your-workspace/unclaimed-cargo',
				icon: 'sidenav-line',
			},
			{
				label: 'Sourcing Request',
				link: '/profile/your-workspace/sourcing-request',
				icon: 'sidenav-line',
			},
			{
				label: 'SIDENAV.LOG_OUT',
				onClick: () => this.logOut(),
				icon: 'log-out',
			},
		];
	}

	private renameCountries(): void {
		overwrite(COUNTRIES_OVERRIDE);
	}

	closeHeaderPopup(): void {
		this.headerService.closeHeader();
	}

	private getMobileProfileOptions(): any[] {
		return [
			{
				name: 'My products',
				icon: 'assets/icons/header/profile/my-products-profile.svg',
				link: '/profile/your-workspace/b2bmarket',
			},
			{
				name: 'Sourcing Request',
				icon: 'assets/icons/header/profile/sourcing-request-profile.svg',
				link: '/profile/your-workspace/sourcing-request',
			},
			{
				name: 'Unclaimed Cargo',
				icon: 'assets/icons/header/profile/unclaimed-cargo-profile.svg',
				link: '/profile/your-workspace/unclaimed-cargo',
			},
			{
				name: 'Settings',
				icon: 'assets/icons/header/profile/settings-profile.svg',
				link: '/profile/settings',
			},
		];
	}

	private setCookie(name: string, value: string, days: number): void {
		const d = new Date();
		d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
		const expires = 'expires=' + d.toUTCString();
		this.document.cookie = name + '=' + value + ';' + expires + ';path=/';
	}

	private getSettingsOptions() {
		return [
			{
				label: 'My account',
				link: '/profile/your-account/settings',
				icon: 'assets/icons/header/profile/my-account.svg'
			},
			{
				label: 'Company Information',
				link: '/profile/your-account/settings',
				icon: 'assets/icons/header/profile/company-information.svg'
			},
			{
				label: "Following Products",
				link: "/profile/your-account/settings/following-products",
				icon: 'assets/icons/header/profile/following-products.svg'
			},
			// {
			// 	label: "Notification",
			// 	link: "/profile/your-account/notification",
			// 	icon: 'assets/icons/header/profile/notification.svg'
			// }
		]
	}
}
