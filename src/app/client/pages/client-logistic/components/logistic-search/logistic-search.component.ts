import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';
import {
	deliveryType,
	DeliveryTypeModel,
} from '../../models/delivery-type.model';
import { BehaviorSubject, filter, fromEvent, Observable } from 'rxjs';
import {
	ClientLogisticService,
	LogisticAirState,
	LogisticSeaState,
} from 'src/app/client/pages/client-logistic/services/client-logistic.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsDropdownDirective } from 'ngx-bootstrap/dropdown';
import { ShipmentItem } from 'src/app/client/pages/client-logistic/components/listing-filter/models/shipment-item.model';
import { LogisticSearchForm } from 'src/app/client/pages/client-logistic/models/logistic-search/logistic-search-form.model';
import { debounceTime, first, map, switchMap, tap } from 'rxjs/operators';
import { getCode } from 'country-list';
import { ContainerItem } from '../listing-filter/listing-filter.component';
import { ContainerType } from '../../models/container.type';
import { MixpanelService } from '../../../../../core/services/mixpanel/mixpanel.service';

@Component({
	selector: 'b2b-logistic-search',
	templateUrl: './logistic-search.component.html',
	styleUrls: ['./logistic-search.component.scss'],
})
export class LogisticSearchComponent implements OnInit, AfterViewInit {
	@ViewChild('deliveryTypesInner') deliveryTypesInner: ElementRef;
	@ViewChild('countryFromInput') countryFromInput: ElementRef;
	@ViewChild('countryToInput') countryToInput: ElementRef;
	@ViewChild('origin') originDropdown: BsDropdownDirective;
	@ViewChild('countryTo') countryToDropdown: BsDropdownDirective;
	@ViewChild('dropdown') dropdown: BsDropdownDirective;
	@Output() logisticSearch: EventEmitter<LogisticSearchForm> =
		new EventEmitter<LogisticSearchForm>();
	public origin?: string;
	public destination: string;

	public deliveryType$: Observable<deliveryType> =
		this.clientLogisticsService.getActiveDeliveryType$();

	public containerTypes: ContainerItem[] = this.getContainerTypes();
	public ship: number = 1100;

	public today = new Date();
	public maxDate = new Date(this.today.setDate(this.today.getDate() + 60));

	public shipmentTypes: any[] = this.getShipments();
	public form: FormGroup = new FormGroup({
		countryFrom: new FormControl<null | string>(null, Validators.required),
		countryTo: new FormControl<null | string>(null, Validators.required),
		date: new FormControl<null | Date>(null, Validators.required),
		transportType: new FormControl<deliveryType>(null),
	});
	private innerTranslateSource: BehaviorSubject<number> =
		new BehaviorSubject<number>(0);
	private mobileFilterValue: BehaviorSubject<string> =
		new BehaviorSubject<string>('');
	private originSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

	constructor(
		private readonly clientLogisticsService: ClientLogisticService,
		private readonly cdr: ChangeDetectorRef,
		private readonly mixpanelService: MixpanelService
	) {}

	get originSource$(): Observable<any[]> {
		return this.originSource.asObservable();
	}

	get innerTranslate$(): Observable<number> {
		return this.innerTranslateSource.asObservable();
	}

	ngAfterViewInit() {
		this.searchOnTyping(
			this.countryFromInput,
			this.originDropdown,
			this.originSource
		);
		this.searchOnTyping(
			this.countryToInput,
			this.countryToDropdown,
			this.originSource
		);
	}

	chooseFirstLevelItem(item: any): void {
		this.clientLogisticsService
			.getActiveDeliveryType$()
			.pipe(first())
			.subscribe((type) => {
				const { ports, airports } = item;
				let items = type === 'sea' ? [...ports] : [...airports];
				items = items.map((el) => ({
					...el,
					country: item.country,
					cityId: item._id,
				}));

				if (!items.length) {
					items.push({
						type: 'notFound',
						text: `No ${type === 'sea' ? 'Ports' : 'Airports'} was found`,
					});
				}
				this.originSource.next(items);
			});
	}

	chooseTargetPoint(item: any, controlName: 'countryFrom' | 'countryTo'): void {
		this.deliveryType$.pipe(first()).subscribe((type: deliveryType) => {
			this.form.get(controlName).setValue(item.name);
			if (type === 'sea') {
				const portDirection: 'portTo' | 'portFrom' =
					controlName === 'countryFrom' ? 'portFrom' : 'portTo';
				this.clientLogisticsService.updateSeaState({
					...this.clientLogisticsService.getSeaState(),
					[controlName]: item.country.id ?? item.country._id,
					[portDirection]: item._id,
					[controlName + 'Name']: item.country?.name,
				});
			} else {
				const portDirection: 'cityTo' | 'cityFrom' =
					controlName === 'countryFrom' ? 'cityFrom' : 'cityTo';
				this.clientLogisticsService.updateAirState({
					...this.clientLogisticsService.getAirState(),
					[controlName]: item.country.id ?? item.country._id,
					[portDirection]: item.cityId,
					[controlName + 'Name']: item.country?.name,
				});
			}
		});
	}

	ngOnInit(): void {
		this.resetSearchOnDeliveryTypeChange();
	}

	public getDeliveryTypes(): DeliveryTypeModel[] {
		return [
			{
				name: 'sea',
				icon: '/sea-delivery.svg',
				activeIcon: '/sea-delivery-active.svg',
			},
			{
				name: 'air',
				icon: '/air-delivery.svg',
				activeIcon: '/air-delivery-active.svg',
			},
		];
	}

	public getMobileFilterValue$(): Observable<string> {
		return this.mobileFilterValue.asObservable();
	}

	public searchResults(form: FormGroup): void {
		if (form.invalid) {
			this.form.markAllAsTouched();
			return;
		}
		this.mixpanelService.track(
			'Logistic browse count',
			this.handleTackProperties(form)
		);
		this.logisticSearch.emit(form.value);
	}

	public switchDeliveryType(
		typesWrapperWidth: number,
		type: DeliveryTypeModel
	): void {
		const deliveryTypeIndex = this.getDeliveryTypes().findIndex(
			({ name }: DeliveryTypeModel) => name === type.name
		);
		const itemWidth = (
			document.querySelector('.search__transportation-item') as HTMLElement
		).clientWidth;
		const innerTranslate = itemWidth * deliveryTypeIndex;
		this.deliveryTypesInner.nativeElement.style.transform = `translateX(${innerTranslate}px)`;
		this.clientLogisticsService.updateDeliveryType(type.name);
		this.form.get('transportType').setValue(type.name);
		this.clientLogisticsService.updateListingState('isFirstDisplay');
	}

	public swapItems(): void {
		const firstValue = this.form.get('countryFrom').value;
		this.form.get('countryFrom').setValue(this.form.get('countryTo').value);
		this.form.get('countryTo').setValue(firstValue);
		this.clientLogisticsService.swapStateItems();
		const state = this.getCurrentState();
		const delivery = this.clientLogisticsService.getActiveDeliveryType();
		const newState = {
			...state,
			countryToName: state.countryFromName,
			countryFromName: state.countryToName,
			countryTo: state.countryFrom,
			countryFrom: state.countryTo,
		};
		if (delivery === 'sea') {
			this.clientLogisticsService.updateSeaState(newState as LogisticSeaState);
		} else {
			this.clientLogisticsService.updateAirState(newState as LogisticAirState);
		}
	}

	public chooseContainerType(
		containerType: ContainerType,
		dropdown: BsDropdownDirective
	): void {
		dropdown.hide();
		this.clientLogisticsService
			.getOrders$()
			.pipe(first())
			.subscribe((orders: any) => {
				if (orders.length && orders[0][containerType]) {
					this.clientLogisticsService.updateListingState('isLoaded');
				}
			});
		this.clientLogisticsService.updateContainerType(containerType);

		this.mobileFilterValue.next(containerType);
	}

	onOpenChange($event: boolean, shipInputValue: number) {
		this.mobileFilterValue.next($event ? 'Hide filter' : null);
		this.clientLogisticsService
			.getActiveDeliveryType$()
			.pipe(
				first(),
				filter((type) => type === 'air')
			)
			.subscribe(() => {
				this.mobileFilterValue.next(
					$event ? 'Hide filter' : shipInputValue + 'kg'
				);
				this.clientLogisticsService.updateWeight(shipInputValue);
				this.clientLogisticsService
					.getListingStates$()
					.pipe(
						filter((type) => type === 'isLoaded' && !$event),
						first()
					)
					.subscribe(() => {
						this.logisticSearch.emit(this.form.value);
					});
			});
	}

	setInput($event: any) {
		this.ship = $event.target.value;
	}

	private handleTackProperties(form: FormGroup) {
		const value = form.value;
		const state = this.getCurrentState();
		return {
			'Transport mode':
				value.transportType ||
				this.clientLogisticsService.getActiveDeliveryType() ||
				'sea',
			'ORIGIN OF SHIPMENT': state?.countryFromName,
			'DESTINATION OF SHIPMENT': state?.countryToName,
		};
	}

	getCurrentState() {
		const deliveryType = this.clientLogisticsService.getActiveDeliveryType();
		return deliveryType === 'sea'
			? this.clientLogisticsService.getSeaState()
			: this.clientLogisticsService.getAirState();
	}

	private searchOnTyping(
		input: ElementRef,
		dropdown: BsDropdownDirective,
		source: BehaviorSubject<any[]>
	): void {
		const inputChanges$ = fromEvent<Event>(input.nativeElement, 'input')
			.pipe(
				debounceTime(300),
				map((event: Event) => (event.target as HTMLInputElement).value),
				tap((data) => (data.length <= 2 ? dropdown.hide() : null)),
				filter((data: string) => data.length && data.length > 2),
				switchMap((term: string) => {
					return this.clientLogisticsService.getDirections({ q: term });
				})
			)
			.subscribe(({ data }) => {
				if (data.length) {
					let temp = [];
					if (data[0].type === 'country') {
						temp = data[0].cities.map((item: any) => ({
							...item,
							country: {
								name: data[0].name,
								id: data[0]._id,
							},
							countryIcon: getCode(data[0].name),
						}));
					} else if (data[0].type === 'city') {
						temp = data.map((item: any) => ({
							...item,
							countryIcon: getCode(item.country.name),
						}));
					}

					source.next(temp);
					dropdown.show();
					this.cdr.detectChanges();
				} else {
					source.next([
						{
							type: 'notFound',
							text: 'Not found',
						},
					]);
					dropdown.show();
					this.cdr.detectChanges();
				}
			});
	}

	private resetSearchOnDeliveryTypeChange(): void {
		this.clientLogisticsService.getActiveDeliveryType$().subscribe(() => {
			this.form.reset();
			this.mobileFilterValue.next('');
		});
	}

	private getShipments(): ShipmentItem[] {
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
