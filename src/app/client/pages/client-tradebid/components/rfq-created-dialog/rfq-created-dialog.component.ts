import { Component, OnInit } from '@angular/core';
import {
	MatDialog,
	MatDialogModule,
	MatDialogRef,
} from '@angular/material/dialog';
import { B2bNgxButtonModule, B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { CreateRfqDialogComponent } from '../create-rfq-dialog/create-rfq-dialog.component';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'b2b-rfq-created-dialog',
	templateUrl: './rfq-created-dialog.component.html',
	styleUrls: ['./rfq-created-dialog.component.scss'],
	imports: [B2bNgxButtonModule, B2bNgxIconModule, MatDialogModule, RouterLink],
	standalone: true,
})
export class RfqCreatedDialogComponent {
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;

	constructor(
		private dialogRef: MatDialogRef<RfqCreatedDialogComponent>,
		private readonly dialog: MatDialog
	) {}

	addNewRfqDialog(): void {
		this.dialogRef.close();

		this.dialog.open(CreateRfqDialogComponent, {
			maxHeight: '90vh',
			maxWidth: '90vw',
			width: '65vw',
			panelClass: 'add-rfq-popup',
		});
	}
}
