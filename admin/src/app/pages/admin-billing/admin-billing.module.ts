import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { B2bNgxInputModule } from 'projects/ngx-input/src/public-api';
import { B2bNgxButtonModule } from 'projects/ngx-button/src/public-api';
import { B2bNgxDropdownModule } from 'projects/ngx-dropdown/src/public-api';
import { B2bNgxSelectModule } from 'projects/ngx-select/src/public-api';

import { AdminPaymentPlanItemComponent } from './components/admin-payment-plan-item/admin-payment-plan-item.component';
import { AdminPaymentPlanListComponent } from './components/admin-payment-plan-list/admin-payment-plan-list.component';
import { AdminBillingRoutingModule } from './admin-billing-routing.module';
import { AdminBillingComponent } from './layout/admin-billing.component';
import { SelectBillingMethodDialogComponent } from './components/select-billing-method-dialog/select-billing-method-dialog.component';

@NgModule({
	declarations: [
		AdminBillingComponent,
		SelectBillingMethodDialogComponent,
		AdminPaymentPlanItemComponent,
		AdminPaymentPlanListComponent,
	],
	imports: [
		CommonModule,
		AdminBillingRoutingModule,
		MatDialogModule,
		ReactiveFormsModule,
		B2bNgxInputModule,
		B2bNgxButtonModule,
		B2bNgxDropdownModule,
		B2bNgxSelectModule,
	],
})
export class AdminBillingModule {}
