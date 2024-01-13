import { Component, OnInit } from '@angular/core';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { UserService } from 'src/app/client/pages/client-profile/services/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateRfqDialogComponent } from '../../../client-sourcing-request/components/create-rfq-dialog/create-rfq-dialog.component';
import { Router } from '@angular/router';

@Component({
	selector: 'b2b-client-unclaimed-cargo-grid-banner',
	templateUrl: './client-latest-offers-grid-banner.component.html',
	styleUrls: ['./client-latest-offers-grid-banner.component.scss'],
})
export class ClientLatestOffersGridBannerComponent implements OnInit {
	public b2bNgxButtonTheme = B2bNgxButtonThemeEnum;

	constructor(
		private userService: UserService,
		private dialog: MatDialog,
		private router: Router
	) {}

	ngOnInit(): void {}

	public getActionButtonText(): string {
		if (!this.userService.isAuth()) {
			return 'Create Product';
		} else if (this.userService.getUser()?.rootRole?.displayName === 'Buyer') {
			return 'Create RFQ';
		} else if (
			this.userService.getUser()?.rootRole?.displayName === 'Supplier'
		) {
			return 'Add cargo';
		}
		return 'Create product';
	}

	public makeAction(): void {
		if (this.userService.getUser()?.rootRole?.displayName === 'Buyer') {
			this.dialog.open(CreateRfqDialogComponent, {
				panelClass: ['add-rfq-popup', 'contact-supplier-form-dialog'],
			});
		} else if (
			this.userService.getUser()?.rootRole?.displayName === 'Supplier'
		) {
			this.router.navigate(['/offer']);
		} else if (!this.userService.isAuth()) {
			this.router.navigate(['/auth/register-credentials']);
		} else {
			this.router.navigate(['/']);
		}
	}
}
