import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientPromoFrRoutingModule } from './client-promo-fr-routing.module';
import { B2bNgxSkeletonModule } from '@b2b/ngx-skeleton';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { ClientPromoFrComponent } from './layout/client-promo-fr.component';

@NgModule({
	declarations: [ClientPromoFrComponent],
	imports: [
		CommonModule,
		ClientPromoFrRoutingModule,
		B2bNgxSkeletonModule,
		B2bNgxImageModule,
		B2bNgxButtonModule,
		B2bNgxIconModule,
	],
})
export class ClientPromoFrModule {}
