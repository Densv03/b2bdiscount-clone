import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { deliveryType } from '../../models/delivery-type.model';
import { LogisticService } from '../../logistic.service';

@Component({
	selector: 'b2b-listing-filter',
	templateUrl: './listing-filter.component.html',
	styleUrls: ['./listing-filter.component.scss'],
})
export class ListingFilterComponent implements OnInit {
	public deliveryType$: Observable<deliveryType> =
		this.logisticService.getActiveDeliveryType();
	public containerTypes: string[] = this.getContainerTypes();
	public shipmentTypes: any[] = this.getShipments();

	constructor(
		private router: Router,
		private logisticService: LogisticService
	) {}

	ngOnInit(): void {}

	chooseContainerType(containerType: string): void {
		this.router.navigate([], {
			queryParams: { containerType },
			queryParamsHandling: 'merge',
		});
	}
	private getShipments(): any[] {
		return [
			{
				name: 'Weight',
				min: 1,
				max: 11000,
				defaultValue: 1,
				step: 10,
				measure: 'KG',
			},
		];
	}

	private getContainerTypes(): string[] {
		return [
			'20 standard',
			'40 standard',
			'40 High Cube',
			'20 Refrigerated',
			'40 Refrigerated',
			'45 High Cube',
		];
	}
}
