import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function onlyNumber(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		if (control.value === null || control.value === '') {
			return null;
		}

		return /^[0-9]*$/g.test(control.value) ? null : { number: true };
	};
}
