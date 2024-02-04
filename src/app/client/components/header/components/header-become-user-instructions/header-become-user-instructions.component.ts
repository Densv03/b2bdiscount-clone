import { Component, Input, OnInit } from '@angular/core';
import { HeaderBecomeInstructionsInterface } from '../../types/header-become-instructions.interface';
import { UserService } from '../../../../pages/client-profile/services/user/user.service';
import { Router } from '@angular/router';
import { CreateRfqDialogComponent } from '../../../../pages/client-sourcing-request/components/create-rfq-dialog/create-rfq-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HeaderService } from '../../header.service';
import { TooltipService } from '../../tooltip.service';
import { DialogService } from '../../../../../core/services/dialog-service/dialog.service';

@Component({
	selector: 'b2b-header-become-user-instructions',
	templateUrl: './header-become-user-instructions.component.html',
	styleUrls: ['./header-become-user-instructions.component.scss'],
})
export class HeaderBecomeUserInstructionsComponent implements OnInit {
	@Input() listType: 'becomeSupplier' | 'forBuyer';
	public instructions: Record<
		'becomeSupplier' | 'forBuyer',
		HeaderBecomeInstructionsInterface
	> = this.getInstructions();

	constructor(
		private readonly userService: UserService,
		private readonly dialog: MatDialog,
		private readonly tooltipService: TooltipService,
		private readonly router: Router,
		private readonly dialogService: DialogService
	) {}

	ngOnInit() {
		this.removeItemIfUserIsRegistered();
	}

	public hideTooltip(url: string): void {
		this.tooltipService.hideTooltip();
		this.dialogService.handleCustomDialogAndRole(
			url,
			'buyer',
			'/b2bmarket/product',
			CreateRfqDialogComponent,
			{ panelClass: ['add-rfq-popup', 'contact-supplier-form-dialog'] }
		);
	}
	private removeItemIfUserIsRegistered(): void {
		if (this.listType === 'becomeSupplier' && this.userService.getUser()) {
			this.instructions = {
				...this.getInstructions(),
				becomeSupplier: {
					items: this.getInstructions().becomeSupplier.items.splice(0, 1),
				},
			};
		}
	}

	private getInstructions(): Record<
		'becomeSupplier' | 'forBuyer',
		HeaderBecomeInstructionsInterface
	> {
		return {
			forBuyer: {
				items: [
					{
						title: 'Request product \n' + 'quotation',
						icon: 'request-quotation',
						link: '',
					},
					{
						title: 'Marketplace',
						description:
							'Place where you can find thousands of products from Suppliers worldwide',
						icon: 'marketplace',
						link: '/b2bmarket',
					},
				],
			},
			becomeSupplier: {
				items: [
					{
						title: 'Why should you trade on\n' + 'Globy?',
						icon: 'about-us',
						link: '/market-promo',
					},
					{
						title: 'Register my company',
						icon: 'register-company',
						link: '/auth/register-credentials',
					},
				],
			},
		};
	}
}
