import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { B2bNgxLinkService, B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { User } from '../../../core/models/user/user.model';
import { Router } from '@angular/router';
import { ClientContactUsModalComponent } from '../client-contact-us-modal/client-contact-us-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { PlatformService } from '../../services/platform/platform.service';

@Component({
	selector: 'b2b-client-footer',
	templateUrl: './client-footer.component.html',
	styleUrls: ['./client-footer.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFooterComponent {
	@Input() public user: User;
	public socialMedias: any[];
	public footerOptions: any[];
	public privacyOptions: any[];
	public readonly currentYear = new Date(Date.now()).getFullYear();
	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum;

	constructor(
		public readonly b2bNgxLinkService: B2bNgxLinkService,
		public readonly platformService: PlatformService,
		private readonly dialog: MatDialog,
		private readonly router: Router
	) {
		this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;
		this.socialMedias = this.getSocialMedias();
		this.footerOptions = this.getFooterOptions();
		this.privacyOptions = this.getPrivacyOptions();
	}
	public processItemClick(item: any): void {
		if (item.link) {
			this.router.navigate([item.link]);
		} else {
			item.callback();
		}
	}
	private getOptions() {
		return [
			{
				label: 'B2B Market',
				link: '/b2bmarket',
			},
			{
				label: 'Sourcing Request',
				link: '/sourcing-request/listing',
			},
			{
				label: 'Unclaimed Cargo',
				link: '/unclaimed-cargo',
			},
			{
				label: 'Quick Logistic',
				link: '/quick-logistics',
			},
		];
	}
	private getResourceOptions(): any[] {
		return [
			{
				label: 'Industry Insights',
				link: '/blog',
			},
		];
	}
	private getCompanyOptions(): any[] {
		return [
			{
				label: 'About',
				link: '/about-us',
			},
			{
				label: 'Support',
				callback: () => {
					this.dialog.open(ClientContactUsModalComponent);
				},
			},
			{
				label: 'FAQ',
				callback: () => {
					window.open('https://intercom.help/b2b-discount/en/', '_blank');
				},
			},
		];
	}
	private getSocialMedias() {
		return [
			{
				icon: 'fb',
				href: 'https://www.facebook.com/globy.platform',
			},
			{
				icon: 'twitter',
				href: 'https://twitter.com/Globy_platform',
			},
			{
				icon: 'linkedin',
				href: 'https://www.linkedin.com/company/globy-b2bplatform',
			},
			{
				icon: 'youtube',
				href: 'https://www.youtube.com/channel/UCiQkM2ypxPbt6Ufl_ON0eaw',
			},
		];
	}
	private getFooterOptions(): any[] {
		return [
			{
				name: 'OUR SOLUTIONS',
				options: this.getOptions(),
			},
			{
				name: 'RESOURCES',
				options: this.getResourceOptions(),
			},
			{
				name: 'COMPANY',
				options: this.getCompanyOptions(),
			},
		];
	}
	private getPrivacyOptions(): any[] {
		return [
			{
				label: 'Terms and Conditions',
				link: '/terms-and-conditions',
			},
			{
				label: 'Privacy Policy',
				link: '/privacy-policy',
			},
			{
				label: 'Cookie Policy',
				link: '/cookie-policy',
			},
		];
	}
}
