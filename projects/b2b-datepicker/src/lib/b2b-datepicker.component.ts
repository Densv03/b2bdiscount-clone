import {Component, forwardRef, Input, OnInit} from "@angular/core";
import {
	CalendarHeaderComponent
} from "projects/b2b-datepicker/src/lib/components/calendar-header/calendar-header.component";
import {ComponentType} from "@angular/cdk/overlay";
import {
	ControlValueAccessor,
	FormControl,
	NG_VALIDATORS,
	NG_VALUE_ACCESSOR,
	ValidationErrors,
	Validator
} from "@angular/forms";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from "@angular/material-moment-adapter";
import {fromEvent, map, Observable, startWith} from "rxjs";
import {NgxInputVersionEnum} from "projects/ngx-input/src/lib/enum/ngx-input-version.enum";

interface IconPosition {
	top: string;
	right: string;
	bottom: string;
	left: string;
}

const MY_DATE_FORMATS = {
	parse: {
		dateInput: 'DD, MMM, y',
	},
	display: {
		dateInput: 'DD, MMM, y',
		monthYearLabel: 'MMMM YYYY',
		dateA11yLabel: 'LL',
		monthYearA11yLabel: 'MMMM YYYY',
	},
};

@UntilDestroy()
@Component({
	selector: 'b2b-datepicker',
	templateUrl: './b2b-datepicker.component.html',
	styleUrls: ['./b2b-datepicker.component.scss'],
	providers: [
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
		},
		{
			provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS
		},
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => B2bDatepickerComponent),
			multi: true,
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => B2bDatepickerComponent),
			multi: true,
		},
	],
})
export class B2bDatepickerComponent implements OnInit, ControlValueAccessor, Validator {
	@Input() inputClassName: string = '';
	@Input() placeholder: string = '';
	@Input() iconName?: string;
	@Input() iconPosition?: Partial<IconPosition>;
	@Input() customHeader?: ComponentType<any> = CalendarHeaderComponent;
	@Input() today = new Date();
	@Input() version = NgxInputVersionEnum.B2B;
	@Input() label: string;

	public mobileSize$: Observable<boolean>;
	public datePicker = new FormControl(null);
	private onChange: (value: Date) => void;
	private onTouched: () => void;

	get classPrefix() {
		return this.version === NgxInputVersionEnum.B2B ? '' : 'globy-'
	}

	ngOnInit(): void {
		this.mobileSize$ = fromEvent(window, 'resize').pipe(startWith(600 > window.innerWidth),
			map(() => 600 > window.innerWidth));

		this.onChange = () => null;
		this.onTouched = () => null;


		this.subscribeOnValueChanges();
	}

	validate = (): ValidationErrors | null => {
		return this.datePicker.errors;
	};

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	writeValue(value: string): void {
		this.datePicker.setValue(value);
	}

	private subscribeOnValueChanges(): void {
		this.datePicker.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
			this.onChange(new Date(value));
		});
	}
}
