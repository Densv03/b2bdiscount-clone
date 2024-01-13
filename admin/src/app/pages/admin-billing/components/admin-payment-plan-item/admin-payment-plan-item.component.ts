import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GetPaymentPlanResponse } from '../../../../../../../src/app/core/models/admin-billing/responses/get-payment-plan-response.model';
import { B2bNgxButtonThemeEnum } from 'projects/ngx-button/src/public-api';

@Component({
	selector: 'b2b-admin-payment-plan-item',
	templateUrl: './admin-payment-plan-item.component.html',
	styleUrls: ['./admin-payment-plan-item.component.scss'],
})
export class AdminPaymentPlanItemComponent {
	@Input() public paymentPlan: GetPaymentPlanResponse;
	@Output() onDelete = new EventEmitter<string>();
	@Output() onEdit = new EventEmitter<GetPaymentPlanResponse>();

	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;

	constructor() {}

	public deletePaymentPlan(id: string, $event: MouseEvent): void {
		$event.stopPropagation();
		this.onDelete.emit(id);
	}

	public editPaymentPlan(paymentPlan: GetPaymentPlanResponse): void {
		this.onEdit.emit(paymentPlan);
	}
}
