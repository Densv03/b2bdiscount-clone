import {AbstractControl, FormGroup, ValidatorFn} from '@angular/forms';

// Function to generate a date range validator
export function dateRangeValidator(startDateField: string, endDateField: string): ValidatorFn {
	return (formGroup: AbstractControl): { [key: string]: any } | null => {
		const start = formGroup.get(startDateField).value;
		const end = formGroup.get(endDateField).value;
		// Check if the start date is greater than the end date
		return start && end && new Date(start) > new Date(end) ? { 'dateRangeError': true } : null;
	};
}
