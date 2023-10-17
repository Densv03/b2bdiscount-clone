import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function productNameWithHS(): ValidatorFn {
	const nameWithHS = /^.+ \([A-Z]{2}\s\d{8}\)$/;
	return (control: AbstractControl): ValidationErrors | null => {
		if (!control.value) {
			return null;
		}

		if (!nameWithHS.test(control.value)) {
			return { nameWithHS: true };
		}

		return null;
	};
}
