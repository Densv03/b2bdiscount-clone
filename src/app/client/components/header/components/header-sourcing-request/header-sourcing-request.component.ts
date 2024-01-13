import { Component } from '@angular/core';
import { TooltipService } from '../../tooltip.service';
import { UserService } from '../../../../pages/client-profile/services/user/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateRfqDialogComponent } from '../../../../pages/client-sourcing-request/components/create-rfq-dialog/create-rfq-dialog.component';

@Component({
	selector: 'b2b-header-sourcing-request',
	templateUrl: './header-sourcing-request.component.html',
	styleUrls: ['./header-sourcing-request.component.scss'],
})
export class HeaderSourcingRequestComponent {
	constructor(
		private readonly tooltipService: TooltipService,
		private readonly router: Router,
		private readonly userService: UserService,
		private readonly dialog: MatDialog
	) {}
	public addRfq(): void {
		if (!this.userService.getUser()) {
			this.router.navigate(['/auth/register-credentials']);
		} else {
			this.dialog.open(CreateRfqDialogComponent, {
				panelClass: ['add-rfq-popup', 'contact-supplier-form-dialog'],
			});
		}
		this.tooltipService.hideTooltip();
	}
}
