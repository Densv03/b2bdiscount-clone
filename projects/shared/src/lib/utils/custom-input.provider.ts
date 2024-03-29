import { Component, forwardRef, Provider } from "@angular/core";
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from "@angular/forms";
import { CustomInputService } from "../services/custom-input/custom-input.service";

export function customInputProvider(component: Object): Provider {
    return [
        CustomInputService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => component),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => component),
            multi: true
        }
    ];
}
