import { Component, Input, OnInit } from '@angular/core';
import { HeaderService } from '../../header.service';
import { Router } from '@angular/router';
import { HeaderInfo } from '../../types/header-info.interface';

@Component({
	selector: 'b2b-header-info-list',
	templateUrl: './header-info-list.component.html',
	styleUrls: ['./header-info-list.component.scss'],
})
export class HeaderInfoListComponent {
	@Input() listType: 'resources' | 'solutions';
	public info: Record<'resources' | 'solutions', HeaderInfo> =
		this.getHeaderInfo();

	constructor(
		private readonly headerService: HeaderService,
		private readonly router: Router
	) {}
	public changePopupState(): void {
		this.headerService.updatePopupState({
			...this.headerService.getPopupStateValue(),
			popupIsOpened: false,
		});
	}

	private getHeaderInfo(): Record<'resources' | 'solutions', HeaderInfo> {
		return {
			solutions: {
				title: 'Our Solutions',
				description:
					'Globy is a platform for businesses engaged in global trade. We connect suppliers and buyers worldwide, providing solutions that help your business achieve its daily goals.',
				items: [
					{
						name: 'B2B Market',
						description:
							'Marketplace, where you can find thousands of products from Suppliers worldwide',
						link: '/b2bmarket',
					},
					{
						name: 'Sourcing Request',
						description:
							'An easy way for buyers to get quality quotes. Send your RFQ and receive offers for the products you want from reliable suppliers in just a day.',
						link: '/sourcing-request/listing',
					},
					{
						name: 'Unclaimed Cargo',
						description:
							'Sell and buy cargo that has been rejected by the initial buyer. Only goods in good condition.',
						link: '/unclaimed-cargo',
					},
					// {
					// 	name: 'Quick Logistics',
					// 	description:
					// 		'Get an immediate calculation for your logistics in almost any direction.',
					// 	link: '/quick-logistics',
					// },
				],
			},
			resources: {
				title: 'Resources',
				description:
					"Keep current with our articles, news, and in-depth content from experts in the industry. Explore both online and offline events to ensure you're always in the loop.",
				items: [
					{
						name: 'Industry insights',
						description: 'Industry-related articles from our team.',
						link: '/blog',
					},
					// {
					// 	name: 'From expert',
					// 	description:
					// 		'Guest materials from industry experts that provide a deep overview of the industry’s subject matter',
					// 	link: '/blog',
					// },
					// {
					// 	name: 'Events',
					// 	description:
					// 		'Browse hundreds of industry events that take place worldwide as well as online.',
					// 	link: '/blog',
					// },
				],
			},
		};
	}
}
