import { Injectable } from '@angular/core';
import { LogisticSearchItemModel } from './models/logistic-search-item.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { deliveryType } from './models/delivery-type.model';

@Injectable({
	providedIn: 'root',
})
export class LogisticService {
	private activeDeliveryTypeSource: BehaviorSubject<deliveryType> =
		new BehaviorSubject<deliveryType>('Sea');
	getActiveDeliveryType(): Observable<deliveryType> {
		return this.activeDeliveryTypeSource.asObservable();
	}
	updateDeliveryType(type: deliveryType): void {
		this.activeDeliveryTypeSource.next(type);
	}
	getSearchOptions$(): Observable<LogisticSearchItemModel[]> {
		return of([
			{
				name: 'Dallas, TX',
				icon: 'US',
				countryName: 'United State',
				type: 'City',
			},
			{
				name: 'Mallas, TX',
				icon: 'US',
				countryName: 'United State',
				type: 'City',
			},
			{
				name: 'Damalllas, TX',
				icon: 'US',
				countryName: 'United State',
				type: 'City',
			},
			{
				name: 'Laplas, MD',
				icon: 'US',
				countryName: 'Ukraine',
				type: 'City',
			},
			{
				name: 'Odessa Port',
				icon: 'anchor',
				countryName: 'Ukraine',
				type: 'Port',
			},
			{
				name: 'Odessa Airort',
				icon: 'airplane',
				countryName: 'Ukraine',
				type: 'Airport',
			},
		]);
	}
}
