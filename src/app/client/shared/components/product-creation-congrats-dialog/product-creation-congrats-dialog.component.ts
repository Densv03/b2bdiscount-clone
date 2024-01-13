import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatDialog,
	MatDialogModule,
	MatDialogRef,
} from '@angular/material/dialog';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { B2bNgxButtonModule, B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { CreateRfqDialogComponent } from '../../../pages/client-sourcing-request/components/create-rfq-dialog/create-rfq-dialog.component';
import { Router, RouterLink } from '@angular/router';

@Component({
	selector: 'b2b-product-creation-congrats-dialog',
	templateUrl: './product-creation-congrats-dialog.component.html',
	styleUrls: ['./product-creation-congrats-dialog.component.scss'],
	standalone: true,
	imports: [
		CommonModule,
		MatDialogModule,
		B2bNgxIconModule,
		B2bNgxButtonModule,
		RouterLink,
	],
})
export class ProductCreationCongratsDialogComponent {
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;

	constructor(
		private readonly dialog: MatDialog,
		private readonly dialogRef: MatDialogRef<ProductCreationCongratsDialogComponent>,
		private readonly router: Router
	) {}

	addRequest(): void {
		this.dialog.open(CreateRfqDialogComponent, {
			panelClass: ['add-rfq-popup', 'contact-supplier-form-dialog'],
		});
		this.dialogRef.close();
	}

	public redirectToMyRfq(): void {
		this.router.navigate(['/profile/your-workspace/sourcing-request/my-rfq'], {
			queryParams: {
				activeTab: 1,
			},
		});
	}
}
