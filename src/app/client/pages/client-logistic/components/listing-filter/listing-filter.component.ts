import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	EventEmitter,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
	combineLatest,
	delay,
	filter,
	from,
	mergeMap,
	Observable,
	of,
	Subject,
	tap,
} from 'rxjs';
import { deliveryType } from '../../models/delivery-type.model';
import { ClientLogisticService } from 'src/app/client/pages/client-logistic/services/client-logistic.service';
import { ShipmentItem } from 'src/app/client/pages/client-logistic/components/listing-filter/models/shipment-item.model';
import { ContainerType } from '../../models/container.type';
import { debounceTime, distinctUntilChanged, first } from 'rxjs/operators';

export interface ContainerItem {
	name: string;
	code: ContainerType;
	checked: boolean;
}
@Component({
	selector: 'b2b-listing-filter',
	templateUrl: './listing-filter.component.html',
	styleUrls: ['./listing-filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingFilterComponent implements AfterViewInit {
	@Output() filterIsChanged: EventEmitter<deliveryType> =
		new EventEmitter<deliveryType>();

	public deliveryType$: Observable<deliveryType> =
		this.clientLogisticService.getActiveDeliveryType$();
	public shipInputValue: number = 1100;
	public containerItems: ContainerItem[] = this.getContainerTypes();
	public shipmentTypes: any[] = this.getShipments();
	private sliderValueSubject = new Subject<number>();

	constructor(
		private router: Router,
		private clientLogisticService: ClientLogisticService
	) {}

	ngAfterViewInit() {
		this.getTariffsOnChangeAirFilter();
	}

	onSliderInput(event: any) {
		this.sliderValueSubject.next(event.value);
		this.shipInputValue = event.value;
	}

	public chooseContainerType(containerType: ContainerType): void {
		this.clientLogisticService
			.getOrders$()
			.pipe(first())
			.subscribe((orders: any) => {
				this.clientLogisticService.updateContainerType(containerType);
				// console.log('UPDATE: ', containerType)
				if (orders.length && orders[0][containerType]) {
					this.filterIsChanged.emit(
						this.clientLogisticService.getActiveDeliveryType()
					);
				}
			});
	}

	private getShipments(): ShipmentItem[] {
		return [
			{
				name: 'Weight',
				min: 1,
				max: 11000,
				defaultValue: 1100,
				step: 10,
				measure: 'KG',
			},
			// {
			// 	name: 'Volume',
			// 	min: 1,
			// 	max: 20,
			// 	defaultValue: 1,
			// 	step: 1,
			// 	measure: 'm3',
			// },
		];
	}
	private getTariffsOnChangeAirFilter(): void {
		let filterValue = 0;
		this.sliderValueSubject
			.pipe(
				debounceTime(300),
				distinctUntilChanged(),
				tap((val) => (filterValue = val)),
				mergeMap(() => of(this.clientLogisticService.getOrdersAmount())),
				filter((amount) => amount > 0)
			)
			.subscribe(() => {
				this.clientLogisticService.updateWeight(filterValue);
				this.filterIsChanged.emit(
					this.clientLogisticService.getActiveDeliveryType()
				);
			});
	}

	private getContainerTypes(): ContainerItem[] {
		return [
			{
				name: '20 standard',
				code: '20ST',
				checked: false,
			},
			{
				name: '40 standard',
				code: '40ST',
				checked: true,
			},
			{
				name: '40 High Cube',
				code: '40HC',
				checked: false,
			},
			{
				name: '45 High Cube',
				code: '45HC',
				checked: false,
			},
			{
				name: '20 Refrigerated',
				code: '20REF',
				checked: false,
			},
			{
				name: '40 Refrigerated',
				code: '40REF',
				checked: false,
			},
		];
	}
}
