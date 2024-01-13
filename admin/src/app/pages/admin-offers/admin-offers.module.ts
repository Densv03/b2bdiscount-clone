import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxButtonModule } from 'projects/ngx-button/src/public-api';
import { B2bNgxDropdownModule } from 'projects/ngx-dropdown/src/public-api';
import { B2bNgxIconModule } from 'projects/ngx-icon/src/public-api';
import { B2bNgxImageModule } from 'projects/ngx-image/src/public-api';
import { B2bNgxLinkModule } from 'projects/ngx-link/src/public-api';
import { B2bNgxPaginationModule } from 'projects/ngx-pagination/src/public-api';
import { AdminOffersRoutingModule } from './admin-offers-routing.module';
import { AdminOfferChatsDialogComponent } from './components/admin-offer-chats-dialog/admin-offer-chats-dialog.component';
import { AdminOffersComponent } from './layout/admin-offers.component';
import { AdminOffersListModule } from './components/admin-offers-list/admin-offers-list.module';
import { AdminOfferDeclineDialogModule } from './components/admin-offer-decline-dialog/admin-offer-decline-dialog.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	declarations: [AdminOffersComponent, AdminOfferChatsDialogComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		AdminOffersRoutingModule,
		B2bNgxButtonModule,
		B2bNgxIconModule,
		B2bNgxImageModule,
		B2bNgxPaginationModule,
		B2bNgxDropdownModule,
		B2bNgxLinkModule,
		AdminOffersListModule,
		AdminOfferDeclineDialogModule,
		MatDialogModule,
	],
})
export class AdminOffersModule {}
