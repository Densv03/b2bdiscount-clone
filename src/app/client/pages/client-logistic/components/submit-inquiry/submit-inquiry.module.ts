import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitInquiryComponent } from './submit-inquiry.component';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		B2bNgxIconModule,
		MatDialogModule,
		SubmitInquiryComponent,
	],
})
export class SubmitInquiryModule {}
