import { Injectable, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ControlValueAccessor, FormControl, ValidationErrors } from "@angular/forms";

@Injectable()
export class CustomInputService<T> implements ControlValueAccessor, OnChanges, OnInit {
    public readonly formControl: FormControl<T>;
    onChange: (value: T | string | null) => void;
    onTouched: () => void;

    constructor() {
        this.onChange = () => null;
        this.onTouched = () => null;
        this.formControl = new FormControl();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!changes["errors"]) {
            return;
        }
        this.formControl.setErrors(changes["errors"]);
    }

    ngOnInit() {
        this.subscribeOnValueChanges();
    }

    public validate(): ValidationErrors | null {
        return this.formControl.errors;
    }

    public registerOnChange(fn: (value: string | null | T) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    public writeValue(value: T): void {
        this.formControl.setValue(value);
    }

    public setDisabledState(isDisabled: boolean): void {
        if (isDisabled) {
            this.formControl.disable();
        } else {
            this.formControl.enable();
        }
    }

    protected subscribeOnValueChanges(): void {
        this.formControl.valueChanges.pipe()
            .subscribe((value) => {
                this.onChange(value);
            });
    }
}
