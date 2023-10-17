import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatDialog,
	MatDialogModule,
	MatDialogRef,
} from '@angular/material/dialog';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { B2bNgxButtonModule, B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { CreateRfqDialogComponent } from '../../../pages/client-tradebid/components/create-rfq-dialog/create-rfq-dialog.component';
import { RouterLink } from '@angular/router';

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
		private readonly dialogRef: MatDialogRef<ProductCreationCongratsDialogComponent>
	) {}

	addRequest(): void {
		this.dialog.open(CreateRfqDialogComponent, {
			maxHeight: '90vh',
			maxWidth: '90vw',
			width: '65vw',
			panelClass: 'add-rfq-popup',
		});
		this.dialogRef.close();
	}
}
