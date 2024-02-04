import { Component } from '@angular/core';
import { TooltipService } from '../../tooltip.service';
import { UserService } from '../../../../pages/client-profile/services/user/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateRfqDialogComponent } from '../../../../pages/client-sourcing-request/components/create-rfq-dialog/create-rfq-dialog.component';
import { DialogService } from '../../../../../core/services/dialog-service/dialog.service';

@Component({
	selector: 'b2b-header-sourcing-request',
	templateUrl: './header-sourcing-request.component.html',
	styleUrls: ['./header-sourcing-request.component.scss'],
})
export class HeaderSourcingRequestComponent {
	constructor(
		private readonly tooltipService: TooltipService,
		private readonly dialogService: DialogService
	) {}
	public addRfq(): void {
		this.dialogService.openDialog(CreateRfqDialogComponent, {
			panelClass: ['add-rfq-popup', 'contact-supplier-form-dialog'],
		});
		this.tooltipService.hideTooltip();
	}
}
