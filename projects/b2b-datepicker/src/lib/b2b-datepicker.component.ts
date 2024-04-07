import {Component, Input, OnInit} from "@angular/core";
import {
	CalendarHeaderComponent
} from "projects/b2b-datepicker/src/lib/components/calendar-header/calendar-header.component";
import {ComponentType} from "@angular/cdk/overlay";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from "@angular/material-moment-adapter";
import {fromEvent, map, Observable, startWith} from "rxjs";
import {NgxInputVersionEnum} from "projects/ngx-input/src/lib/enum/ngx-input-version.enum";
import {CustomInputService} from "projects/shared/src/lib/services/custom-input/custom-input.service";
import {customInputProvider} from "projects/shared/src/lib/utils/custom-input.provider";
import {FormControl, Validators} from "@angular/forms";

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
		customInputProvider(B2bDatepickerComponent)
	],
})
export class B2bDatepickerComponent extends CustomInputService<Date> implements OnInit {
	@Input() inputClassName: string = '';
	@Input() placeholder: string = 'Choose a date';
	@Input() iconName?: string;
	@Input() iconPosition?: Partial<IconPosition>;
	@Input() customHeader?: ComponentType<any> = CalendarHeaderComponent;
	@Input() today = new Date();
	@Input() version = NgxInputVersionEnum.B2B;
	@Input() label: string;

	public mobileSize$: Observable<boolean>;

	get classPrefix() {
		return this.version === NgxInputVersionEnum.B2B ? '' : 'globy-'
	}

	override ngOnInit(): void {
		this.mobileSize$ = fromEvent(window, 'resize')
			.pipe(startWith(600 > window.innerWidth), map(() => 600 > window.innerWidth));
		this.subscribeOnValueChanges();
	}

	override subscribeOnValueChanges(): void {
		this.formControl
			.valueChanges
			.pipe(untilDestroyed(this))
			.subscribe((value) => {
				this.onChange(new Date(value));
			});
	}

	protected readonly NgxInputVersionEnum = NgxInputVersionEnum;
}
