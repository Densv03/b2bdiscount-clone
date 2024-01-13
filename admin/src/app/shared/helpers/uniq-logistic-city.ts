import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const uniqLogisticCity = (cityOptions: any[]): ValidatorFn => {
	return (control: AbstractControl): ValidationErrors | null => {
		if (!control.value) {
			return null;
		}

		const exists = cityOptions.some(
			(city) => city.name?.toLowerCase() === control.value.toLowerCase()
		);

		return exists ? { cityExists: true } : null;
	};
};
