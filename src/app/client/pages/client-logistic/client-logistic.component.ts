import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit,
} from '@angular/core';
import { SubmitInquiryComponent } from 'src/app/client/pages/client-logistic/components/submit-inquiry/submit-inquiry.component';
import { SubmitInquirySuccessComponent } from 'src/app/client/pages/client-logistic/components/submit-inquiry-success/submit-inquiry-success.component';
import { MatDialog } from '@angular/material/dialog';
import { filter, first, map, startWith, switchMap } from 'rxjs/operators';
import { LogisticSearch } from 'src/app/client/pages/client-logistic/models/logistic-search/logistic-search.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LogisticSearchForm } from 'src/app/client/pages/client-logistic/models/logistic-search/logistic-search-form.model';
import {
	ClientLogisticService,
	listingState,
} from './services/client-logistic.service';
import { TariffsResponse } from './models/tariffs/tariffs-response.model';
import { deliveryType } from './models/delivery-type.model';
import { SeoService } from '../../../core/services/seo/seo.service';

@Component({
	selector: 'b2b-client-logistic',
	templateUrl: './client-logistic.component.html',
	styleUrls: ['./client-logistic.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientLogisticComponent implements OnDestroy, OnInit {
	public listingState$: Observable<listingState> =
		this.logisticService.getListingStates$();
	public logisticOrders$: Observable<TariffsResponse[]> =
		this.logisticService.getOrders$();

	public isSubmitInquiryFromVisible$ = this.getIsSubmitInquiryFromVisible$();
	private logisticSearchSource: BehaviorSubject<Partial<LogisticSearch>> =
		new BehaviorSubject<Partial<LogisticSearch>>({
			transportType: 'sea',
			countryFrom: null,
			countryTo: null,
		});
	public logisticSearch$ = this.logisticSearchSource.asObservable();
	constructor(
		private dialog: MatDialog,
		private logisticService: ClientLogisticService,
		private seoService: SeoService
	) {}

	ngOnInit() {
		this.seoService.setTitle(
			'Get Instant Freight Rates | Globy Quick Logistics '
		);
		this.seoService.setDescription(
			'Quick Logistics is an instant freight calculator that allows you to get rates for every destination and transport mode. Optimize your shipping processes.'
		);
	}

	public onLogisticSearch(data: LogisticSearchForm): void {
		let requestData = null;
		this.logisticService
			.getActiveDeliveryType$()
			.pipe(first())
			.subscribe((type: deliveryType) => {
				if (type === 'sea') {
					this.logisticSearchSource.next(data);
					this.logisticService.updateSeaState({
						...this.logisticService.getSeaState(),
						date: data.date,
					});
					requestData = this.logisticService.getSeaState();
				} else {
					this.logisticService.updateAirState({
						...this.logisticService.getAirState(),
						date: data.date,
					});
					requestData = this.logisticService.getAirState();
				}

				this.updateListing(requestData);
			});
	}

	public updateListingOnFilterChange(deliveryType: deliveryType): void {
		if (deliveryType === 'sea') {
			this.updateListing(this.logisticService.getSeaState());
		} else {
			this.updateListing(this.logisticService.getAirState());
		}
	}
	private updateListing(requestData: any): void {
		this.logisticService
			.getTariffs(requestData)
			.pipe(first())
			.subscribe((orders) => {
				if (orders.length) {
					this.logisticService.updateListingState('isLoaded');
					this.logisticService.updateOrdersSource(orders);
				} else {
					this.logisticService.updateListingState('Not found');
				}
			});
	}

	public onSendRequest(tariff: TariffsResponse): void {
		let dialogData = null;
		if (this.logisticService.getActiveDeliveryType() === 'air') {
			let { countryFrom, countryTo, date, cityTo, cityFrom, _id } = {
				...this.logisticService.getAirState(),
				...tariff,
			} as any;
			const readyToLoad = `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`;
			dialogData = {
				countryFrom,
				countryTo,
				date,
				airportTo: cityTo,
				airportFrom: cityFrom,
				tariffAirId: _id,
				readyToLoad,
			};
		} else if (this.logisticService.getActiveDeliveryType() === 'sea') {
			let { countryFrom, countryTo, date, portTo, portFrom, seaLine, _id } = {
				...this.logisticService.getSeaState(),
				...tariff,
			} as any;

			const readyToLoad = `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`;
			dialogData = {
				readyToLoad,
				countryFrom,
				countryTo,
				date,
				portTo,
				portFrom,
				seaLine,
				tariffSeaId: _id,
			};
		}

		this.dialog
			.open(SubmitInquiryComponent, {
				data: dialogData,
				maxWidth: 767,
				maxHeight: window.innerWidth > 767 ? 790 : '85vh',
				width: '80%',
				autoFocus: false,
				panelClass: 'submit-inquiry-dialog',
			})
			.afterClosed()
			.pipe(
				filter((data) => !!data),
				switchMap((data) => this.logisticService.submitInquiry(data))
			)
			.subscribe(() => {
				this.dialog.open(SubmitInquirySuccessComponent, {
					maxWidth: 767,
				});
			});
	}

	private getIsSubmitInquiryFromVisible$(): Observable<boolean> {
		return this.logisticOrders$.pipe(
			startWith(null),
			map((orders) => {
				if (orders && orders.length) {
					return false;
				}
				return orders && !orders.length;
			})
		);
	}

	ngOnDestroy() {
		this.logisticService.updateDeliveryType('sea');
	}
}
