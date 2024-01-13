import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLogisticComponent } from './client-logistic.component';
import { ClientLogisticRoutingModule } from './client-logistic-routing.module';
import { ListingFilterModule } from './components/listing-filter/listing-filter.module';
import { LogisticStubModule } from './components/logistic-stub/logistic-stub.module';
import { LogisticSearchModule } from './components/logistic-search/logistic-search.module';
import { LogisticOrderModule } from './components/logistic-order/logistic-order.module';
import { CreateInquiryModule } from './components/create-inquiry/create-inquiry.module';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { PageLoaderModule } from '../../../core/components/page-loader/page-loader.module';

@NgModule({
	declarations: [ClientLogisticComponent],
	imports: [
		CommonModule,
		ClientLogisticRoutingModule,
		ListingFilterModule,
		LogisticStubModule,
		LogisticSearchModule,
		LogisticOrderModule,
		CreateInquiryModule,
		B2bNgxIconModule,
		PageLoaderModule,
	],
})
export class ClientLogisticModule {}
