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
import { TariffsResponse } from '../../models/tariffs/tariffs-response.model';
import {
	ClientLogisticService,
	LogisticAirState,
} from '../../services/client-logistic.service';
import { BehaviorSubject, combineLatest, filter, Observable } from 'rxjs';
import { ContainerType } from '../../models/container.type';
import { first, map, takeUntil, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
	selector: 'b2b-logistic-order',
	templateUrl: './logistic-order.component.html',
	styleUrls: ['./logistic-order.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogisticOrderComponent implements OnInit {
	@Input() order: any;
	@Output() sendRequest: EventEmitter<TariffsResponse> =
		new EventEmitter<TariffsResponse>();
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public activeDeliveryType$: Observable<deliveryType> =
		this.logisticService.getActiveDeliveryType$();
	public airState$: Observable<LogisticAirState> =
		this.logisticService.getAirState$();
	private orderPriceSource: BehaviorSubject<number> =
		new BehaviorSubject<number>(null);
	constructor(private logisticService: ClientLogisticService) {}

	get orderPrice$(): Observable<number> {
		return this.orderPriceSource.asObservable();
	}
	public ngOnInit(): void {
		this.updatePriceOnContainerChange();
	}

	public getOrderTransportIcon(
		type: deliveryType,
		iconIsActive = false
	): string {
		return (
			(type === 'air' ? 'air-delivery' : 'sea-delivery') +
			(iconIsActive ? '-active' : '') +
			'.svg'
		);
	}

	public sendRequestToCompany(): void {
		this.sendRequest.emit(this.order);
	}

	private updatePriceOnContainerChange(): void {
		combineLatest([
			this.logisticService.getLogisticState$(),
			this.logisticService.getActiveDeliveryType$(),
		])
			.pipe(
				filter((data) => data[1] === 'sea'),
				map((data) => data[0]),
				untilDestroyed(this)
			)
			.subscribe((state) => {
				const newOrderPrice = this.order[state.containerType];
				if (newOrderPrice) {
					this.orderPriceSource.next(newOrderPrice);
				} else {
					this.logisticService.updateListingState('Not found');
				}
			});
	}
}
