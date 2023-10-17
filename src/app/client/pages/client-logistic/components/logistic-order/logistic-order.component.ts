import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import { deliveryType } from '../../models/delivery-type.model';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';

@Component({
	selector: 'b2b-logistic-order',
	templateUrl: './logistic-order.component.html',
	styleUrls: ['./logistic-order.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogisticOrderComponent implements OnInit {
	@Input() order: any;
	@Output() sendRequest: EventEmitter<any> = new EventEmitter<any>();
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	constructor() {}

	public ngOnInit(): void {}

	public getOrderTransportIcon(
		type: deliveryType,
		iconIsActive = false
	): string {
		console.log(type);
		return (
			(type === 'Air' ? 'air-delivery' : 'sea-delivery') +
			(iconIsActive ? '-active' : '') +
			'.svg'
		);
	}

	public sendRequestToCompany(): void {
		this.sendRequest.emit(this.order);
	}
}
