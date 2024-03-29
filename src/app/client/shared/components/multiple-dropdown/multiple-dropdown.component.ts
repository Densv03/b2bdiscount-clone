import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
	ControlValueAccessor,
	FormControl,
	NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
	selector: 'b2b-multiple-dropdown',
	templateUrl: './multiple-dropdown.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => MultipleDropdownComponent),
			multi: true,
		},
	],
})
export class MultipleDropdownComponent implements ControlValueAccessor {
	@Input() multiple = false;
	@Input() label: string;
	@Input() placeholder: string;
	@Input() tooltip: string;
	@Input() options: { portName: string; _id: string }[];

	control: FormControl = new FormControl<string[]>([]);
	value: string = '';
	disabled = false;

	onChange: (value: string) => void;
	onTouched: () => void;

	writeValue(value: string): void {
		this.control.setValue(value);
	}

	registerOnChange(fn: (value: string) => void): void {
		this.onChange = fn;
		this.control.valueChanges.subscribe(this.onChange);
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	compareCategoryObjects(object1: any, object2: any): boolean {
		return object1 && object2 && object1.id == object2.id;
	}
}
