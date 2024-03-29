import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter,
	forwardRef,
	Input,
	Output,
	ViewChild,
} from '@angular/core';
import { SlideInOutAnimation } from '../../shared/animations/slide-in-out.animation';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { InitialCategoryState } from '../../shared/models/initial-category-state.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { getName } from 'country-list';
import { ActivatedRoute } from '@angular/router';
import { NavigationOption } from '../../layout/client-marketplace-listing.component';

@Component({
	selector: 'b2b-client-marketplace-filters-mobile',
	templateUrl: './client-marketplace-filters-mobile.component.html',
	styleUrls: ['./client-marketplace-filters-mobile.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [SlideInOutAnimation],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => ClientMarketplaceFiltersMobileComponent),
			multi: true,
		},
	],
})
export class ClientMarketplaceFiltersMobileComponent
	implements AfterViewInit, ControlValueAccessor
{
	@Input() animationState: 'in' | 'out';
	@Input() initialCategoryState: InitialCategoryState;
	@Input() filtersState: any[];
	@Input() filterType: 'b2bmarket' | 'sourcing-request';

	@Output() closePopUp: EventEmitter<void> = new EventEmitter<void>();
	@Output() filterEvent: EventEmitter<any> = new EventEmitter<any>();

	@ViewChild('backdrop', { static: true }) backdrop?: ElementRef;

	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;

	public onChange: any = () => {};
	public onTouched: any = () => {};

	constructor(
		private changeDetectorRef: ChangeDetectorRef,
		private route: ActivatedRoute
	) {}

	public getCountryName(countryCode: string): string {
		if (!countryCode) {
			return '';
		}
		return getName(countryCode.toUpperCase());
	}

	public ngAfterViewInit(): void {
		this.initTrackingBackdropClick();
	}

	public toggleShowPopUp(): void {
		this.closePopUp.emit();
	}

	public writeValue(value: any): void {}

	public registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	public chooseFilter(
		option: any,
		filterIndex: number,
		hiddenLabel: any,
		deleteMode: boolean
	) {
		this.filterEvent.emit({ option, filterIndex, hiddenLabel, deleteMode });
		this.closePopUp.emit();
	}

	public restrictOpen(filter: any, filtersArr: any): boolean {
		return false;
	}

	public isOptionSelected(
		option: any,
		filterIndex: number,
		filtersArr: any
	): boolean {
		if (!filtersArr[filterIndex].selectedOption.getValue()) return false;
		return (
			option.name === filtersArr[filterIndex].selectedOption.getValue().name
		);
	}

	public getNavigationByOption(
		option: any,
		hiddenLabel: string
	): NavigationOption {
		switch (hiddenLabel) {
			case 'rootCategory':
				return {
					routerLink: ['/b2bmarket/listing', option.path],
				};
			case 'categories':
				return {
					routerLink: [option.path],
					queryParamsHandling: 'merge',
					relativeTo: this.route,
				};
			case 'country[]':
				return {
					routerLink: [],
					queryParams: { 'country[]': option.name },
					queryParamsHandling: 'merge',
					relativeTo: this.route,
				};
			case 'type':
				return {
					routerLink: [],
					queryParams: { type: option.name },
					queryParamsHandling: 'merge',
					relativeTo: this.route,
				};
			default:
				return {
					routerLink: [],
					queryParams: {},
					queryParamsHandling: null,
					relativeTo: null,
				};
		}
	}

	private initTrackingBackdropClick(): void {
		if (this.backdrop) {
			this.backdrop.nativeElement.addEventListener('click', (e: MouseEvent) => {
				if (e.target === this.backdrop.nativeElement) {
					this.toggleShowPopUp();
					this.changeDetectorRef.markForCheck();
				}
			});
		}
	}
}
