import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	forwardRef,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges
} from "@angular/core";
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from "@angular/forms";
// TODO: uncomment code below when libs will be inserted in b2b
// @ts-ignore
import { getName } from 'country-list'
import { COUNTRIES } from "../data";
import { B2bNgxSelectThemeEnum } from "@b2b/ngx-select";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { PortsService } from "../../../../../src/app/client/services/ports/ports.service";
import { NgxSelectVariantEnum } from "projects/ngx-select/src/lib/enums/ngx-select-variant.enum";
import {BehaviorSubject, map, Observable, of} from "rxjs";

@UntilDestroy()
@Component({
	selector: "b2b-ngx-country-select",
	templateUrl: "./ngx-country-select.component.html",
	styleUrls: ["./ngx-country-select.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => B2bNgxCountrySelectComponent),
			multi: true,
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => B2bNgxCountrySelectComponent),
			multi: true,
		},
	],
})
export class B2bNgxCountrySelectComponent implements ControlValueAccessor, AfterViewInit, OnChanges {
	@Input() errors: ValidationErrors = {};

	@Input() public customParentClass: string = '';
	@Input() public invalid: boolean = false;
	@Input() showInTransit?: boolean;
	@Input() hideCountriesWithoutPorts: boolean;
	@Input() public theme: B2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum.BACKGROUND_GRAY;
	@Input() public className: string = '';
	@Input() public placeholder: string;
	@Input() public multiple: boolean = false;
	@Input() public touched: boolean = false;
	@Input() public version: NgxSelectVariantEnum = NgxSelectVariantEnum.B2B;

	@Input()
	public set customOptions(options: {value: Observable<any[]>, length: number}) {
		if (options?.length > 0) {
			this.options$ = options?.value;
			this.optionLength = options?.length;
		}
	};

	@Input() hideSelectedCountries: string[] = [];

	@Output() openSelect: EventEmitter<void> = new EventEmitter<void>();
	@Output() closeSelect: EventEmitter<void> = new EventEmitter<void>();
	public readonly formControl: FormControl<string | null>;
	public options$: Observable<any[]>;
	private onChange: (value: string | null) => void;
	private onTouched: () => void;
	private optionLength: number = 0;

	constructor(private readonly portsService: PortsService,
							private readonly cdr: ChangeDetectorRef) {
		this.placeholder = "";

		this.onChange = () => null;
		this.onTouched = () => null;

		this.formControl = new FormControl<string | null>(null);
	}

	get selectLabelClass() {
	    return 	this.version === NgxSelectVariantEnum.B2B ? 'ngx-country-label' : 'globy-ngx-select-label'
	}

	public get selectClassName() {
		const defaultClassName = ``;

		return `${defaultClassName} ${this.theme} ${this.selectClass}`;
	}

	public get error(): string {
		if (!this.errors) {
			return "";
		}

		const firstErrorKey = Object.keys(this.errors)[0];

		return this.errors[firstErrorKey] as string;
	}

	public ngAfterViewInit(): void {
		if (this.optionLength === 0) {
			this.options$ = this.getOptions();
			this.cdr.detectChanges();
		}
		this.subscribeOnValueChanges();
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes['errors']) {
			this.formControl.setErrors(changes['errors'].currentValue);
		}
	}

	public validate(): ValidationErrors | null {
		return this.formControl.errors;
	}

	public registerOnChange(fn: (value: string | null) => void): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	public writeValue(value: string): void {
		this.formControl.setValue(value, {onlySelf: true});
	}

	public setDisabledState(isDisabled: boolean): void {
		if (isDisabled) {
			this.formControl.disable();
		} else {
			this.formControl.enable();
		}
	}

	public emitOpen() {
		this.openSelect.emit();
	}

	public emitClose() {
		this.closeSelect.emit();
	}

	private subscribeOnValueChanges(): void {
		this.formControl.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
			this.onChange(value);
		});
	}

	private getOptions(): Observable<{ label: string, icon: string, code: string }[]> {
		let countriesArr = COUNTRIES.map((country) => ({
			label: getName(country),
			icon: country,
			code: country.toLowerCase(),
		})).sort((a, b): number => a.label.localeCompare(b.label));

		if (this.hideCountriesWithoutPorts) {
			return this.portsService.getCountriesWithPorts().pipe(map(code => {
				if (this.hideSelectedCountries?.length > 0) {
					countriesArr = countriesArr.filter(item => !this.hideSelectedCountries.includes(item.code))
				}
				const updatedList = countriesArr.filter(item => code.includes(item.code));

				if (this.showInTransit) {
					updatedList.unshift({
						label: 'In transit',
						icon: "ship-in-transit",
						code: "In transit"
					})
				}

				return updatedList;
			}));
		} else {
			return of(countriesArr)
		}
	}


	get selectClass() {
		return this.version === NgxSelectVariantEnum.B2B ? this.className : 'globy-ngx-select';
	}
}
