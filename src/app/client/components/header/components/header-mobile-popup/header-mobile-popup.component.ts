import { Component, OnInit } from '@angular/core';
import { HeaderMobileOptionInterface } from '../../types/header-mobile-option.interface';
import { HeaderService } from '../../header.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../../../core/models/user/user.model';
import { UserService } from '../../../../pages/client-profile/services/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateRfqDialogComponent } from '../../../../pages/client-sourcing-request/components/create-rfq-dialog/create-rfq-dialog.component';

@Component({
	selector: 'b2b-header-mobile-popup',
	templateUrl: './header-mobile-popup.component.html',
	styleUrls: ['./header-mobile-popup.component.scss'],
})
export class HeaderMobilePopupComponent implements OnInit {
	public mobilePopupItems: HeaderMobileOptionInterface[] =
		this.getMobilePopupItems();
	public user$: Observable<User> = this.userService.getUser$();
	public isMarketPage = this.router.url.includes('b2bmarket');
	public isSourcingRequestPage = this.router.url.includes('sourcing-request');
	constructor(
		private readonly headerService: HeaderService,
		private readonly userService: UserService,
		private readonly router: Router,
		private readonly dialog: MatDialog
	) {}

	ngOnInit() {
		this.filterItems();
	}

	closePopup(): void {
		this.headerService.closeHeader();
		this.headerService.updateHeaderTransparent(
			window.scrollY < 100 && this.router.url.replace(/\?.*$/, '') === '/'
		);
	}
	createRfq(): void {
		this.closePopup();
		if (this.userService.getUser()) {
			this.dialog.open(CreateRfqDialogComponent, {
				panelClass: ['add-rfq-popup', 'contact-supplier-form-dialog'],
			});
		} else {
			this.router.navigate(['/auth']);
		}
	}
	processItemClick(item: any): void {
		if (item.link) {
			this.router.navigate([item.link]);
		} else {
			item.callback();
		}
		this.closePopup();
	}

	private getMobilePopupItems(): HeaderMobileOptionInterface[] {
		return [
			{
				title: 'OUR SOLUTIONS',
				items: [
					{
						icon: 'mobile-market-new.svg',
						name: 'B2B Market',
						link: '/b2bmarket',
					},
					{
						icon: 'mobile-sourcing-request-new.svg',
						name: 'Sourcing Request',
						link: '/sourcing-request/listing',
					},
					{
						icon: 'mobile-cargo-new.svg',
						name: 'Unclaimed Cargo',
						link: '/unclaimed-cargo',
					},
					{
						icon: 'mobile-logistics-new.svg',
						name: 'Quick Logistics',
						link: '/quick-logistics',
					},
				],
			},
			{
				title: 'RESOURCES',
				items: [
					{
						icon: 'mobile-blog.svg',
						name: 'Blog',
						link: '/blog',
					},
					{
						icon: 'about-globy.svg',
						name: 'About Globy',
						link: '/about-us',
					},
					{
						icon: 'faq.svg',
						name: 'FAQ',
						callback: () =>
							window.open('https://intercom.help/b2b-discount/en/', '_blank'),
					},
				],
			},
		];
	}
	private filterItems(): void {
		if (this.isMarketPage || this.isSourcingRequestPage) {
			this.mobilePopupItems = this.mobilePopupItems.map((section) => ({
				...section,
				items: section.items.filter(
					(item) =>
						item.name !== 'B2B Market' && item.name !== 'Sourcing Request'
				),
			}));
		}
	}
}
