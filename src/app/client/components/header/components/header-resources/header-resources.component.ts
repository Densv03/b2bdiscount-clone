import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ClientContactUsModalComponent } from '../../../client-contact-us-modal/client-contact-us-modal.component';
import { HeaderService } from '../../header.service';

interface MenuOption {
	name: string;
	description: string;
	callback?: () => void;
	navigate?: {
		link: string;
		_target?: '_blank' | '_self' | '_parent' | '_top' | string;
		isExternal?: boolean;
	};
}

interface ResourceOption {
	name: string;
	icon: string;
	options: MenuOption[];
}

@Component({
	selector: 'b2b-header-resources',
	templateUrl: './header-resources.component.html',
	styleUrls: ['./header-resources.component.scss'],
})
export class HeaderResourcesComponent {
	public resourcesOptions: any[] = this.getResourcesOptions();

	constructor(
		private readonly router: Router,
		private readonly headerService: HeaderService,
		private readonly dialog: MatDialog
	) {}
	public changePopupState(): void {
		this.headerService.updatePopupState({
			...this.headerService.getPopupStateValue(),
			popupIsOpened: false,
		});
	}

	public processLinkClick(option: MenuOption): void {
		this.changePopupState();
		if (option.callback) {
			option.callback();
			return;
		}
	}

	private getResourcesOptions(): ResourceOption[] {
		return [
			{
				name: 'Blog',
				icon: '/assets/icons/header/resources/blog-icon.svg',
				options: [
					{
						name: 'Explore blog',
						description: 'Articles, events and more.',
						navigate: {
							link: '/blog',
						},
					},
					// {
					// 	name: 'Industry insights',
					// 	description: 'Industry-related articles from our team.',
					// 	navigate: {
					// 		link: '/blog',
					// 	},
					// },
					// {
					// 	name: 'From expert',
					// 	description: 'Guest materials from industry’s experts.',
					// 	navigate: {
					// 		link: '/blog',
					// 	},
					// },
					// {
					// 	name: 'Events',
					// 	description: 'Discover offline and online events.',
					// 	navigate: {
					// 		link: '/blog',
					// 	},
					// },
				],
			},
			{
				name: 'Company',
				icon: '/assets/icons/header/resources/company-icon.svg',
				options: [
					{
						name: 'About Globy',
						description: 'Learn what we do',
						navigate: {
							link: '/about-us',
						},
					},
					{
						name: 'Support',
						description: 'Get support or provide feedback',
						callback: () => {
							this.dialog.open(ClientContactUsModalComponent);
						},
					},
				],
			},
			{
				name: 'FAQ',
				icon: '/assets/icons/header/resources/faq-icon.svg',
				options: [
					{
						name: 'General FAQ',
						description: 'Explore all topics',
						navigate: {
							link: 'https://intercom.help/b2b-discount/en/',
							_target: '_blank',
							isExternal: true,
						},
					},
					{
						name: 'What is Unclaimed cargo?',
						description: '',
						navigate: {
							link: 'https://intercom.help/b2b-discount/en/articles/7235167-what-is-unclaimed-cargo-and-how-does-it-work',
							_target: '_blank',
							isExternal: true,
						},
					},
					{
						name: 'What is Sourcing request?',
						description: '',
						navigate: {
							link: 'https://intercom.help/b2b-discount/en/articles/8481696-what-is-a-sourcing-request-rfq',
							_target: '_blank',
							isExternal: true,
						},
					},
					{
						name: 'How do quick logistics work?',
						description: '',
						navigate: {
							link: 'https://intercom.help/b2b-discount/en/articles/8750221-how-do-quick-logistics-work',
							_target: '_blank',
							isExternal: true,
						},
					},
				],
			},
		];
	}
}
