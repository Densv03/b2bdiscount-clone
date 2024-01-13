import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOfferRoutingModule } from './admin-offer-routing.module';
import { AdminOfferComponent } from './layout/admin-offer.component';

@NgModule({
	declarations: [AdminOfferComponent],
	imports: [CommonModule, AdminOfferRoutingModule],
})
export class AdminOfferModule {}
