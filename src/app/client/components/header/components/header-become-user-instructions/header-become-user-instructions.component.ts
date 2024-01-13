import { Component, Input, OnInit } from '@angular/core';
import { HeaderBecomeInstructionsInterface } from '../../types/header-become-instructions.interface';
import { UserService } from '../../../../pages/client-profile/services/user/user.service';
import { Router } from '@angular/router';
import { CreateRfqDialogComponent } from '../../../../pages/client-sourcing-request/components/create-rfq-dialog/create-rfq-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HeaderService } from '../../header.service';
import { TooltipService } from '../../tooltip.service';

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
		private readonly router: Router
	) {}

	ngOnInit() {
		this.removeItemIfUserIsRegistered();
	}

	public hideTooltip(url: string): void {
		this.tooltipService.hideTooltip();
		if (!url.length) {
			if (this.userService.getUser()) {
				this.userService.getUser().rootRole.name === 'buyer'
					? this.openCreateRfqDialog()
					: this.router.navigate(['/b2bmarket/product']);
			} else {
				this.router.navigate(['/auth/register-credentials']);
			}
		}
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
	private openCreateRfqDialog(): void {
		if (this.userService.getUser()) {
			this.dialog.open(CreateRfqDialogComponent, {
				panelClass: ['add-rfq-popup', 'contact-supplier-form-dialog'],
			});
		} else {
			this.router.navigate(['/auth/register-credentials']);
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
