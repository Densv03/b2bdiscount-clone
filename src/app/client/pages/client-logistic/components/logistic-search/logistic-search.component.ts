import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	OnInit,
	Renderer2,
	ViewChild,
} from '@angular/core';
import {
	deliveryType,
	DeliveryTypeModel,
} from '../../models/delivery-type.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LogisticSearchItemModel } from '../../models/logistic-search-item.model';
import { LogisticService } from '../../logistic.service';

@Component({
	selector: 'b2b-logistic-search',
	templateUrl: './logistic-search.component.html',
	styleUrls: ['./logistic-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogisticSearchComponent implements OnInit {
	@ViewChild('deliveryTypesInner') deliveryTypesInner: ElementRef;
	public origin?: string;
	public destination: string;
	searchOptions$: Observable<LogisticSearchItemModel[]> =
		this.logisticService.getSearchOptions$();
	public deliveryType$: Observable<deliveryType> =
		this.logisticService.getActiveDeliveryType();

	private innerTranslateSource: BehaviorSubject<number> =
		new BehaviorSubject<number>(0);

	constructor(private readonly logisticService: LogisticService) {}

	get innerTranslate$(): Observable<number> {
		return this.innerTranslateSource.asObservable();
	}
	ngOnInit(): void {}

	getDeliveryTypes(): DeliveryTypeModel[] {
		return [
			{
				name: 'Sea',
				icon: '/sea-delivery.svg',
				activeIcon: '/sea-delivery-active.svg',
			},
			{
				name: 'Air',
				icon: '/air-delivery.svg',
				activeIcon: '/air-delivery-active.svg',
			},
		];
	}

	switchDeliveryType(typesWrapperWidth: number, type: DeliveryTypeModel) {
		const deliveryTypeIndex = this.getDeliveryTypes().findIndex(
			({ name }: DeliveryTypeModel) => name === type.name
		);
		const innerTranslate = 56 * deliveryTypeIndex;
		this.deliveryTypesInner.nativeElement.style.transform = `translateX(${innerTranslate}px)`;
		this.logisticService.updateDeliveryType(type.name);
	}

	public openDatepicker($event: MouseEvent) {
		$event.preventDefault();
	}

	swapItems() {
		const temp = this.origin;
		this.origin = this.destination;
		this.destination = temp;
	}
}
