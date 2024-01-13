import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateInquiryComponent } from 'src/app/client/pages/client-logistic/components/create-inquiry/create-inquiry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { B2bNgxCountrySelectModule } from '@b2b/ngx-country-select';
import { B2bNgxTelModule } from '@b2b/ngx-tel';
import { B2bNgxTextareaModule } from '@b2b/ngx-textarea';
import { B2bNgxButtonModule } from '@b2b/ngx-button';

@NgModule({
	declarations: [CreateInquiryComponent],
	exports: [CreateInquiryComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		B2bNgxInputModule,
		B2bNgxCountrySelectModule,
		B2bNgxTelModule,
		B2bNgxTextareaModule,
		B2bNgxButtonModule,
	],
})
export class CreateInquiryModule {}
