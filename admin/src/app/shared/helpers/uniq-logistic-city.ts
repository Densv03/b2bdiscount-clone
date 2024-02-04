import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const uniqLogisticCity = (
	cityOptions: any[],
	isCountryType: boolean = false
): ValidatorFn => {
	return (control: AbstractControl): ValidationErrors | null => {
		if (!control.value) {
			return null;
		}

		const exists = cityOptions.some(
			(city) =>
				(isCountryType ? city?.toLowerCase() : city.name?.toLowerCase()) ===
				control.value.toLowerCase()
		);

		return exists ? { cityExists: true } : null;
	};
};
