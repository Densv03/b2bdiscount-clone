import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitInquirySuccessComponent } from 'src/app/client/pages/client-logistic/components/submit-inquiry-success/submit-inquiry-success.component';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { MatDialogModule } from '@angular/material/dialog';
import { B2bNgxButtonModule } from '@b2b/ngx-button';

@NgModule({
	declarations: [SubmitInquirySuccessComponent],
	imports: [
		CommonModule,
		B2bNgxIconModule,
		MatDialogModule,
		B2bNgxButtonModule,
	],
})
export class SubmitInquirySuccessModule {}
