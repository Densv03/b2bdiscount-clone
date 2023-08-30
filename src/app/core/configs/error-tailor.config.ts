import {TranslateService} from "@ngx-translate/core";

export const ERROR_TAILOR_CONFIG = {
	errors: {
		useFactory(service: TranslateService) {
			return {
				required: () => service.instant("ERRORS.REQUIRED"),
				email: service.instant("ERRORS.EMAIL"),
				fullName: service.instant("ERRORS.FULL_NAME"),
				latin: "",
				oneContainer: service.instant("ERRORS.ONE_CONTAINER"),
				min: service.instant("ERRORS.MIN"),
				max: service.instant("ERRORS.MAX"),
				minlength: ({ requiredLength }) => service.instant("ERRORS.MIN_LENGTH") + requiredLength,
				maxlength: ({ requiredLength }) => service.instant("ERRORS.MAX_LENGTH") + requiredLength,
				1000: service.instant("ERRORS.1000"),
				1001: service.instant("ERRORS.1001"),
				1002: service.instant("ERRORS.1002"),
				1012: service.instant("ERRORS.1012"),
				1014: service.instant("ERRORS.1014"),
				mask: service.instant("ERRORS.MASK"),
				validatePhoneNumber: service.instant("ERRORS.VALIDATE_PHONE_NUMBER"),
			};
		},
		deps: [TranslateService],
	},
	blurPredicate: (element: Element) => {
		return ["B2B-NGX-TEL"].some((selector) => element.tagName === selector);
	},
};
