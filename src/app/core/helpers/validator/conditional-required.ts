import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

// Custom validator function adjusted for ValidatorFn signature
export const conditionalRequiredVideos = (controlName: string, relatedControlName: string): ValidatorFn => {
	return (control: AbstractControl): ValidationErrors | null => {
		const formGroup = control as FormGroup; // Cast AbstractControl to FormGroup
		const mainControl = formGroup.get(controlName);
		const linkControl = formGroup.get(relatedControlName);

		if (!mainControl || !linkControl) {
			return null; // If controls are not found, return null
		}

		// Check if videoLink has a value
		if (linkControl.value) {
			// If videoLink is not empty, videos field is not required
			if (mainControl.errors && mainControl.errors['conditionalRequire']) {
				delete mainControl.errors['conditionalRequire'];
				if (Object.keys(mainControl.errors).length === 0) {
					mainControl.setErrors(null);
				}
			}
		} else {
			// If videoLink is empty and videos is also empty, mark videos as required
			if (!mainControl.value || mainControl.value.length === 0) {
				mainControl.setErrors({ ...mainControl.errors, conditionalRequire: true });
			}
		}

		return null; // Return null because the validation result is applied directly to the controls
	};
};
