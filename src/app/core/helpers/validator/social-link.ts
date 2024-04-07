import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function socialLink(): ValidatorFn {
	const latinCharacters =
		/(?:https?:)?\/\/(?:[A-z]+\.)?(twitter|linkedin|instagram|facebook)\.com/;

	return (control: AbstractControl): ValidationErrors | null => {
		if (!control.value) {
			return null;
		}

		const noSpaceStr = control.value.replace(/\s/g, '');
		if (!latinCharacters.test(String(noSpaceStr).toLowerCase())) {
			return { socialError: true };
		}

		return null;
	};
}

export function youtubeLinkValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		if (!control.value) {
			// If there's no value, we consider it valid (use Validators.required to enforce value presence)
			return null;
		}

		// Updated regular expression that matches various YouTube URL formats including mobile links
		const youtubeUrlPattern = /^(https?:\/\/)?(www\.youtube\.com|youtu\.?be|m\.youtube\.com)\/.+$/;
		const isValid = youtubeUrlPattern.test(control.value);

		return isValid ? null : { invalidYoutubeLink: true };
	};
}
