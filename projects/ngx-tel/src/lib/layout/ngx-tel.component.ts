import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	forwardRef, inject,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
	ViewChild,
} from "@angular/core";
import {
	ControlValueAccessor,
	FormControl,
	NG_VALIDATORS,
	NG_VALUE_ACCESSOR,
	ValidationErrors,
	Validators
} from "@angular/forms";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

import {B2bNgxInputThemeEnum} from "@b2b/ngx-input";
import {CountryISO, PhoneNumberFormat} from "ngx-intl-tel-input";
import {animate, style, transition, trigger} from "@angular/animations";
import {LocationService} from "../../../../../src/app/client/shared/services/location.service";
import {BehaviorSubject, first} from "rxjs";

@UntilDestroy()
@Component({
  selector: "b2b-ngx-tel",
  templateUrl: "./ngx-tel.component.html",
  styleUrls: ["./ngx-tel.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2bNgxTelComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => B2bNgxTelComponent),
      multi: true,
    },
  ],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ]),
      transition(":leave", [
        // :leave is alias to '* => void'
        animate(500, style({ opacity: 0 })),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B2bNgxTelComponent implements ControlValueAccessor, OnInit, OnChanges, AfterViewInit {
  @Input() errors: ValidationErrors = {};
  @Input() theme: string = B2bNgxInputThemeEnum.BACKGROUND_GRAY;
  @Input() customInputStyles: string = '';

  @Input() showErrorMessage: boolean = true;

  @Input() enableAutoCountrySelect: boolean = false;
  @Input() enablePlaceholder: boolean = true;
  @Input() searchCountryFlag: boolean = true;
  @Input() separateDialCode: boolean = true;
  @Input() phoneValidation: boolean = true;

  @Input() defaultNumber: string = "";
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() inputClass: string = '';

  public readonly type: string = "tel";
  public phoneNumberFormat = PhoneNumberFormat;
  public readonly selectFormControl: FormControl<string | null> = new FormControl<string>("", Validators.required);
  public readonly options: any[] = [];
  public readonly b2bNgxInputThemeEnum: typeof B2bNgxInputThemeEnum = B2bNgxInputThemeEnum;

	public selectedCountryISO$: BehaviorSubject<CountryISO> = new BehaviorSubject<CountryISO>(null);

  public mask: string = "";
  public invalid: boolean = false;
  public touched: boolean = false;

  private onChange: (value: string | null) => void = () => null;
  private onTouched: () => void = () => null;
	private locationService = inject(LocationService);

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  @ViewChild("phoneField") private phoneField!: any;

  ngAfterViewInit() {
    this.phoneField.disabled = this.disabled;
		this.setDropdownWidth();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.invalid = changes['errors'] && changes['errors'].currentValue;
  }

  ngOnInit(): void {
    this.subscribeOnValueChanges();
		this.getUserCountryCode();
  }

  public validate(): ValidationErrors | null {
		if (this.selectFormControl.invalid) {
			return this.selectFormControl.errors;
		}
    return null;
  }

  private subscribeOnValueChanges(): void {
    const selectValue$ = this.selectFormControl.valueChanges;

    selectValue$.pipe(untilDestroyed(this)).subscribe((selectValue) => {
      this.onChange(selectValue);
      this.onTouched();
    });
  }

  public changeMask(country: any): void {
    if (!country) {
      return;
    }
    this.mask = this.placeholder;

  }

  public registerOnChange(fn: (value: string| null) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public writeValue(value: any): void {
    if (!value) {
      return;
    }

    this.selectFormControl.setValue(value.number, { emitEvent: false });

    this.changeDetectorRef.detectChanges();
  }

  public setDisabledState(isDisabled: boolean): void {}

	public setDropdownWidth() {
		const inputField: any = document.querySelector('#phone');
		const countryDropdown: any = document.querySelector('.dropdown-menu.country-dropdown.show');

		if (inputField && countryDropdown) {
			const commonWidth = Math.max(inputField.offsetWidth, countryDropdown.offsetWidth);
			inputField.style.width = commonWidth + 'px';
			countryDropdown.style.width = commonWidth + 'px';
		}
	}

	private getUserCountryCode(): void {
		this.locationService.getCountryCodeFromIp()
			.pipe(first())
			.subscribe(code => {
			this.selectedCountryISO$.next(code as CountryISO);
		})
	}
}
