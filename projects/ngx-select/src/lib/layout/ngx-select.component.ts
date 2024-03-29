import {
	AfterViewInit,
	ChangeDetectionStrategy, ChangeDetectorRef,
	Component,
	EventEmitter,
	forwardRef,
	Input,
	OnChanges,
	OnInit,
	Output, SimpleChanges,
	ViewChild,
} from "@angular/core";
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors} from "@angular/forms";
import {B2bNgxSelectThemeEnum} from "../enums";
import {NgSelectComponent} from "@ng-select/ng-select";
import { NgxSelectVariantEnum } from "../enums/ngx-select-variant.enum";

@Component({
	selector: "b2b-ngx-select",
	templateUrl: "./ngx-select.component.html",
	styleUrls: ["./ngx-select.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => B2bNgxSelectComponent),
			multi: true,
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => B2bNgxSelectComponent),
			multi: true,
		},
	],
})
export class B2bNgxSelectComponent implements ControlValueAccessor, OnInit, OnChanges, AfterViewInit {
	@Output() public searched: EventEmitter<string>;
	@Output() public changed: EventEmitter<any>;
	@Output() public emitBtnEvent: EventEmitter<void> = new EventEmitter<void>();

	@Input() public customParentClass: string = '';
	@Input() public buttonInDropdownLabel: string;
	@Input() public invalid: boolean = false;
	@Input() public label: string = '';
	@Input() public options: any = [];
	@Input() public theme: B2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum.BACKGROUND_TRANSPARENT;
	@Input() public className: string = '';
	@Input() public placeholder: string;
	@Input() public bindValue: string;
	@Input() public bindLabel: string;
	@Input() public groupBy: string | ((value: any) => any);
	@Input() public selectableGroup: boolean = false;
	@Input() public selectableGroupAsModel: boolean = true;
	@Input() public groupValue!: any;
	@Input() public virtualScroll: boolean = false;
	@Input() public multiple: boolean = false;
	@Input() public searchable: boolean = false;
	@Input() public isOpen: boolean;
	@Input() public minTermLength: number = 0;
	@Input() public closeOnSelect: boolean = true;
	@Input() public zeroMargin: boolean = false;
	@Input() clearValue: boolean = false;
	@Input() errors?: ValidationErrors;
	@Input() touched?: boolean;
	@Input() multipleCheckbox: boolean = false;
	@Input() version?: NgxSelectVariantEnum = NgxSelectVariantEnum.B2B;
	@ViewChild(NgSelectComponent)
	private ngSelectComponent!: NgSelectComponent;
	public multipleCheckboxArray: any = [];
	public formControl: FormControl<string | string[] | null>;

	private onChange: (value: string | string[]) => void;
	private onTouched: () => void;

	constructor(private readonly cdr: ChangeDetectorRef) {
		this.searched = new EventEmitter<string>();
		this.changed = new EventEmitter<string>();
		this.onChange = () => null;
		this.onTouched = () => null;

		this.formControl = new FormControl<string>('');

		this.bindLabel = "label";
		this.bindValue = "value";
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

	ngOnInit(): void {
		this.subscribeOnValueChanges();
	}

	ngOnChanges(changes: SimpleChanges): void {
		// console.log(changes['options'].currentValue)
		if (changes['errors']) {
			this.formControl.setErrors(changes['errors'].currentValue);
		}
		if (this.multipleCheckbox && this.clearValue ) {
			this.formControl.reset();
			this.multipleCheckboxArray = [];
		}
	}

	public ngAfterViewInit(): void {
		if (this.multipleCheckbox && this.formControl.value) {
			this.multipleCheckboxArray = [...this.formControl.value];
			this.multipleCheckboxArray.forEach((el: string) => {
				this.isSelected(el);
				// this.trackValue(el, null, true);
			})
		}
	}


	public clearSelect(): void {
		// this.ngSelectComponent.handleClearClick();
	}

	public validate(): ValidationErrors | null {
		return this.formControl.errors;
	}

	public registerOnChange(fn: (value: string | string[] | null) => void): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	public writeValue(value: string | string[]): void {
		this.formControl.setValue(value);
	}

	public emitSearch(item: any) {
		this.searched.emit(item.term);
	}

	public setDisabledState(isDisabled: boolean): void {
		if (isDisabled) {
			this.formControl.disable();
		} else {
			this.formControl.enable();
		}
	}

	public isSelected(value: string): boolean {
		return this.formControl.value?.includes(value);
	}

	public trackValue(value: string, event?: Event, checked?: boolean): void {
		const booleanValue = event ? (event?.target as HTMLInputElement).checked : checked;
		if (booleanValue) {
			this.multipleCheckboxArray = [...this.multipleCheckboxArray, value];
		} else {
			const index = this.multipleCheckboxArray.indexOf(value);
			this.multipleCheckboxArray.splice(index, 1);
		}
		this.formControl.setValue(this.multipleCheckboxArray);
	}

	public setMultiValue(event: Event): void {
		if (!this.multipleCheckbox) {
			return;
		}

		this.formControl.setValue(this.multipleCheckboxArray);
	}

	public emitChange(e: any): void {
		if (e.link) this.changed.emit(e.link);
		this.changed.emit(e);
	}

	private subscribeOnValueChanges(): void {
		this.formControl.valueChanges.subscribe((value) => {
			this.onChange(value);
		});
	}

	get selectLabelClass() {
		return this.version === NgxSelectVariantEnum.B2B ? 'ngx-select-label' : 'globy-ngx-select-label';
	}

	get selectClass() {
		return this.version === NgxSelectVariantEnum.B2B ? this.className : 'globy-ngx-select';
	}
}
