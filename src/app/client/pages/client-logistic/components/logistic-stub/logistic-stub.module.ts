import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogisticStubComponent } from './logistic-stub.component';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { CreateInquiryModule } from 'src/app/client/pages/client-logistic/components/create-inquiry/create-inquiry.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [LogisticStubComponent],
	exports: [LogisticStubComponent],
	imports: [
		CommonModule,
		B2bNgxImageModule,
		CreateInquiryModule,
		MatDialogModule,
	],
})
export class LogisticStubModule {}
