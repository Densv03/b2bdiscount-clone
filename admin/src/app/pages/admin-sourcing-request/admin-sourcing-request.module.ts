import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSourcingRequestRoutingModule } from './admin-sourcing-request-routing.module';
import { AdminSourcingRequestComponent } from './layout/admin-sourcing-request.component';
import { AdminOffersListModule } from '../admin-offers/components/admin-offers-list/admin-offers-list.module';
import { B2bNgxPaginationModule } from 'projects/ngx-pagination/src/public-api';
import { AdminOfferDeclineDialogModule } from '../admin-offers/components/admin-offer-decline-dialog/admin-offer-decline-dialog.module';
import { MatDialogModule } from '@angular/material/dialog';
import { PaginationModule } from '../../../../../src/app/client/shared/components/pagination/pagination.module';

@NgModule({
	declarations: [AdminSourcingRequestComponent],
	imports: [
		CommonModule,
		AdminSourcingRequestRoutingModule,
		AdminOffersListModule,
		B2bNgxPaginationModule,
		AdminOfferDeclineDialogModule,
		MatDialogModule,
		PaginationModule,
	],
})
export class AdminSourcingRequestModule {}
