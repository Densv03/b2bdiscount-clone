import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { B2bNgxButtonModule, B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'b2b-supplier-contact-success-dialog',
	templateUrl: './supplier-contact-success-dialog.component.html',
	styleUrls: ['./supplier-contact-success-dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CommonModule, B2bNgxButtonModule, MatDialogModule, RouterLink],
})
export class SupplierContactSuccessDialogComponent {
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	constructor(
		public dialogRef: MatDialogRef<SupplierContactSuccessDialogComponent>
	) {}

	closeDialog(openChat: boolean) {
		this.dialogRef.close({ openChat });
	}
}
