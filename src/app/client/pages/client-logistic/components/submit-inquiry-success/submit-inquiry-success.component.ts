import { Component, OnInit } from '@angular/core';
import { B2bNgxButtonModule, B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
	selector: 'b2b-create-inquiry-success',
	templateUrl: './submit-inquiry-success.component.html',
	styleUrls: ['./submit-inquiry-success.component.scss'],
	imports: [B2bNgxButtonModule, B2bNgxIconModule, MatDialogModule],
	standalone: true,
})
export class SubmitInquirySuccessComponent {
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
}
