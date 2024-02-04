import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SeoService } from '../../../../core/services/seo/seo.service';
import { PlatformService } from '../../../services/platform/platform.service';

@Component({
	selector: 'b2b-client-cookie-policy',
	templateUrl: './client-cookie-policy.component.html',
	styleUrls: ['./client-cookie-policy.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCookiePolicyComponent implements OnInit {
	public table = {
		rows: [
			{
				cookie: '_gcl_au',
				domain: '.globy.com',
				description:
					'Google Tag Manager sets the cookie to experiment advertisement efficiency of websites using their services.',
				duration: '3 months',
				type: 'Analytics',
			},
			{
				cookie: '_fbp',
				domain: '.globy.com',
				description:
					'Facebook sets this cookie to display advertisements when either on Facebook or on a digital platform powered by Facebook advertising after visiting the website.',
				duration: '3 months',
				type: 'Analytics',
			},
			{
				cookie: '_ga_*',
				domain: '.globy.com',
				description:
					'Google Analytics sets this cookie to store and count page views.',
				duration: '1 year 1 month 4 days',
				type: 'Analytics',
			},
			{
				cookie: '_ga',
				domain: '.globy.com',
				description:
					"Google Analytics sets this cookie to calculate visitor, session and campaign data and track site usage for the site's analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognise unique visitors.",
				duration: '1 year 1 month 4 days',
				type: 'Analytics',
			},
			{
				cookie: '_gid',
				domain: '.globy.com',
				description:
					"Google Analytics sets this cookie to store information on how visitors use a website while also creating an analytics report of the website's performance. Some of the collected data includes the number of visitors, their source, and the pages they visit anonymously.",
				duration: '1 day',
				type: 'Analytics',
			},
			{
				cookie: '_gat_UA-*',
				domain: '.globy.com',
				description:
					'Google Analytics sets this cookie for user behaviour tracking.',
				duration: '1 minute',
				type: 'Analytics',
			},
			{
				cookie: 'test_cookie',
				domain: '.doubleclick.net',
				description:
					"doubleclick.net sets this cookie to determine if the user's browser supports cookies.",
				duration: '15 minutes',
				type: 'Advertisement',
			},
			{
				cookie: '_hjSessionUser_*',
				domain: '.globy.com',
				description:
					'Hotjar sets this cookie to ensure data from subsequent visits to the same site is attributed to the same user ID, which persists in the Hotjar User ID, which is unique to that site.',
				duration: '1 year',
				type: 'Analytics',
			},
			{
				cookie: '_hjIncludedInSessionSample_2316891',
				domain: '.globy.com',
				description: 'No description',
				duration: '1 hour',
				type: 'Other',
			},
			{
				cookie: '_hjSession_*',
				domain: '.globy.com',
				description:
					'Hotjar sets this cookie to ensure data from subsequent visits to the same site is attributed to the same user ID, which persists in the Hotjar User ID, which is unique to that site.',
				duration: '1 hour',
				type: 'Analytics',
			},
			{
				cookie: 'mp_*_mixpanel',
				domain: '.globy.com',
				description:
					'Mixpanel sets this cookie to determine how users use the website so that a good user experience can be provided.',
				duration: '1 year',
				type: 'Analytics',
			},
			{
				cookie: 'connect.sid',
				domain: 'api.globy.com',
				description:
					'This cookie is used for authentication and for secure log-in. It registers the log-in information.',
				duration: 'session',
				type: 'Necessary',
			},
			{
				cookie: 'firstVisit',
				domain: 'globy.com',
				description: 'No description',
				duration: '1 year',
				type: 'Other',
			},
			{
				cookie: 'intercom-id-*',
				domain: '.globy.com',
				description:
					"Intercom sets this cookie that allows visitors to see any conversations they've had on Intercom websites.",
				duration: '8 months 26 days 1 hour',
				type: 'Necessary',
			},
			{
				cookie: 'intercom-session-*',
				domain: '.globy.com',
				description:
					"Intercom sets this cookie that allows visitors to see any conversations they've had on Intercom websites.",
				duration: '7 days',
				type: 'Necessary',
			},
			{
				cookie: 'intercom-device-id-*',
				domain: '.globy.com',
				description:
					"Intercom sets this cookie that allows visitors to see any conversations they've had on Intercom websites.",
				duration: '8 months 26 days 1 hour',
				type: 'Necessary',
			},
			{
				cookie: 'token',
				domain: 'globy.com',
				description: 'No description available.',
				duration: 'never',
				type: 'Other',
			},
			{
				cookie: 'session',
				domain: 'globy.com',
				description: 'No description available.',
				duration: 'never',
				type: 'Other',
			},
		],
		columns: [
			{ prop: 'cookie', name: 'Cookie' },
			{ prop: 'domain', name: 'Domain' },
			{ prop: 'description', name: 'Description' },
			{ prop: 'duration', name: 'Duration' },
			{ prop: 'type', name: 'Type' },
		],
	};

	constructor(
		private seoService: SeoService,
		private platformService: PlatformService
	) {}

	public get isPlatformBrowser(): boolean {
		return this.platformService.isBrowser;
	}
	ngOnInit() {
		this.addSeoTags();
	}

	private addSeoTags() {
		this.seoService.setTitle('Cookie Policy | Globy B2B Marketplace');
		this.seoService.setDescription(
			'Familiarize yourself with the Globy’s cookie policy. Learn how we use cookies to improve your experience with our wholesale platform.'
		);
	}
}
