import {capitalizeFirstLetter} from './capitalize-first-letter';
import {
	SocialMediaEnum
} from '../../../client/pages/client-profile/pages/client-profile-settings-new/tabs/client-company-information/social-media.enum';

export function getFormData(data: any): FormData {
	const socials = Object.values(SocialMediaEnum).filter(
		(value) => typeof value === 'string'
	);
	const formData = new FormData();

	Object.entries(data)
		.filter(([key, value]) => {
			if (socials.includes(key as SocialMediaEnum)) {
				return value !== null;
			}
			return !!value;
		})
		.forEach(([key, value]: [string, any]) => {
			if (key === 'documents') {
				value.forEach((file: any) => {
					formData.append(key, file);
				});
			} else if (key === 'uploadedDocs') {
				formData.append(key, JSON.stringify(value));
			} else if (Array.isArray(value)) {
				value
					.filter((arrayItem) => !!arrayItem)
					.forEach((arrayItem) => {
						formData.append(key, arrayItem);
					});
			} else if (typeof value === 'object' && value) {
				for (const childKey in value) {
					const fullKey = `${key}${capitalizeFirstLetter(childKey)}`;
					formData.append(fullKey, value[childKey]);
				}
			} else {
				formData.append(key, value);
			}
		});

	socials.forEach((socialKey) => {
		if (data[socialKey] === null) {
			formData.append(socialKey, '');
		}
	});

	return formData;
}
