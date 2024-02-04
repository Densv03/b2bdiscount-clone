import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { CreateInquiryRequest } from 'src/app/client/pages/client-logistic/models/create-inquiry/create-inquiry-request.model';
import { CreateInquiryResponse } from 'src/app/client/pages/client-logistic/models/create-inquiry/create-inquiry-response.model';
import { SubmitInquiryRequest } from 'src/app/client/pages/client-logistic/models/submit-inquiry/submit-inquiry-request.model';
import { SubmitInquiryResponse } from 'src/app/client/pages/client-logistic/models/submit-inquiry/submit-inquiry-response.model';
import { TariffsRequest } from 'src/app/client/pages/client-logistic/models/tariffs/tariffs-request.model';
import { TariffsResponse } from 'src/app/client/pages/client-logistic/models/tariffs/tariffs-response.model';
import { DirectionsResponse } from 'src/app/client/pages/client-logistic/models/direcrions/directions-response.model';
import { DirectionsRequest } from 'src/app/client/pages/client-logistic/models/direcrions/directions-request.model';
import { deliveryType } from 'src/app/client/pages/client-logistic/models/delivery-type.model';
import { LogisticSearchItemModel } from 'src/app/client/pages/client-logistic/models/logistic-search/logistic-search-item.model';
import { ContainerType } from '../models/container.type';
import { stat } from 'ng-packagr/lib/utils/fs';

export interface BaseLogisticState {
	type: deliveryType;
	countryFrom: string;
	countryTo: string;
	date: Date;
	countryFromName?: string;
	countryToName?: string;
	readyToLoad?: string;
}

//poka hz zachem, nehai bude
export interface LogisticSeaState extends BaseLogisticState {
	containerType: ContainerType;
	portFrom: string;
	portTo: string;
}
export interface LogisticAirState extends BaseLogisticState {
	containerWeight: number;
	cityFrom: string;
	cityTo: string;
}

export type listingState =
	| 'isLoading'
	| 'isFirstDisplay'
	| 'isLoaded'
	| 'Not found';

@Injectable({
	providedIn: 'root',
})
export class ClientLogisticService {
	private activeDeliveryTypeSource: BehaviorSubject<deliveryType> =
		new BehaviorSubject<deliveryType>('sea');
	private ordersSource: BehaviorSubject<TariffsResponse[]> =
		new BehaviorSubject<TariffsResponse[]>([]);

	private listingStatesSource: BehaviorSubject<listingState> =
		new BehaviorSubject<listingState>('isFirstDisplay');
	private logisticState: BehaviorSubject<LogisticSeaState> =
		new BehaviorSubject<LogisticSeaState>({
			type: 'sea',
			containerType: '40ST',
			portFrom: null,
			portTo: null,
			countryFrom: null,
			countryTo: null,
			date: null,
		});
	private logisticAirState: BehaviorSubject<LogisticAirState> =
		new BehaviorSubject<LogisticAirState>({
			type: 'air',
			containerWeight: 1100,
			cityFrom: null,
			cityTo: null,
			countryFrom: null,
			countryTo: null,
			date: null,
		});

	getListingStates$(): Observable<listingState> {
		return this.listingStatesSource.asObservable();
	}
	getContainerType(): Omit<ContainerType, '45HC'> {
		return this.logisticState.getValue()?.containerType;
	}
	getLogisticState() {
		return this.logisticState.getValue();
	}
	getLogisticState$(): Observable<LogisticSeaState> {
		return this.logisticState.asObservable();
	}

	getOrders$(): Observable<TariffsResponse[]> {
		return this.ordersSource.asObservable();
	}
	getOrdersAmount(): number {
		return this.ordersSource.getValue()
			? this.ordersSource.getValue().length
			: 0;
	}
	getActiveDeliveryType$(): Observable<deliveryType> {
		return this.activeDeliveryTypeSource.asObservable();
	}

	getActiveDeliveryType(): deliveryType {
		return this.activeDeliveryTypeSource.getValue();
	}

	updateListingState(state: listingState): void {
		this.listingStatesSource.next(state);
	}
	updateDeliveryType(type: deliveryType): void {
		this.activeDeliveryTypeSource.next(type);
		this.logisticState.next({
			...this.logisticState.getValue(),
			type: type,
		});
		this.ordersSource.next(null);
	}
	updateContainerType(type: ContainerType): void {
		this.logisticState.next({
			...this.logisticState.getValue(),
			containerType: type,
		});
	}

	updateWeight(containerWeight: number): void {
		this.logisticAirState.next({
			...this.logisticAirState.getValue(),
			containerWeight,
		});
	}

	updateAirState(state: LogisticAirState): void {
		this.logisticAirState.next(state);
	}

	updateSeaState(state: LogisticSeaState): void {
		this.logisticState.next(state);
	}

	swapStateItems(): void {
		if (this.activeDeliveryTypeSource.getValue() === 'sea') {
			const { portFrom, portTo, ...rest } = this.logisticState.getValue();
			this.logisticState.next({
				...rest,
				portFrom: portTo,
				portTo: portFrom,
			});
		} else {
			const { cityFrom, cityTo, ...rest } = this.logisticAirState.getValue();
			this.logisticAirState.next({
				...rest,
				cityFrom: cityTo,
				cityTo: cityFrom,
			});
		}
	}
	getAirState(): LogisticAirState {
		return this.logisticAirState.getValue();
	}
	getAirState$(): Observable<LogisticAirState> {
		return this.logisticAirState.asObservable();
	}
	getSeaState(): LogisticSeaState {
		return this.logisticState.getValue();
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
	constructor(private apiService: ApiService) {}

	public createInquiry(data: CreateInquiryRequest): Observable<any> {
		return this.apiService.post<CreateInquiryResponse | any>(
			'freightcalculation/request/create ',
			data
		);
	}

	public submitInquiry(data: any): Observable<any> {
		return this.apiService.post<SubmitInquiryResponse | any>(
			'freightCalculation/modalRequest/create',
			data
		);
	}

	public getDirections(data: any): Observable<DirectionsResponse> {
		return this.apiService.get<DirectionsResponse>(
			'freightCalculation/directions',
			{
				params: {
					...data,
				},
			}
		);
	}

	public getTariffs(data: any): Observable<TariffsResponse[]> {
		this.listingStatesSource.next('isLoading');
		return this.apiService.get<TariffsResponse[]>(
			'freightCalculation/tariffs',
			{
				params: {
					...data,
				},
			}
		);
	}

	public updateOrdersSource(orders: TariffsResponse[]): void {
		this.ordersSource.next(orders);
	}
}
