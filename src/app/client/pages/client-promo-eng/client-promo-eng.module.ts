import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientPromoEngRoutingModule } from "./client-promo-eng-routing.module";
import { B2bNgxSkeletonModule } from "@b2b/ngx-skeleton";
import { B2bNgxImageModule } from "@b2b/ngx-image";
import { B2bNgxButtonModule } from "@b2b/ngx-button";
import { B2bNgxIconModule } from "@b2b/ngx-icon";
import { ClientPromoEngComponent } from "./layout/client-promo-eng.component";

@NgModule({
	declarations: [ClientPromoEngComponent],
	imports: [
		CommonModule,
		ClientPromoEngRoutingModule,
		B2bNgxSkeletonModule,
		B2bNgxImageModule,
		B2bNgxButtonModule,
		B2bNgxIconModule,
	],
})
export class ClientPromoEngModule {}
