import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateInquiryComponent } from 'src/app/client/pages/client-logistic/components/create-inquiry/create-inquiry.component';

@NgModule({
	declarations: [CreateInquiryComponent],
	exports: [CreateInquiryComponent],
	imports: [CommonModule],
})
export class CreateInquiryModule {}
