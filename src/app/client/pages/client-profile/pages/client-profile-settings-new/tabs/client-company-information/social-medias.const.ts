export interface SocialMediaForm {
	name: string;
	icon: string;
	formControlName: string;
	edit?: boolean;
	value?: string;
}
export const socialMedias: SocialMediaForm[] = [
	{
		name: 'Facebook',
		icon: 'facebook',
		formControlName: 'facebook',
		edit: false,
	},
	{
		name: 'Instagram',
		icon: 'instagram',
		formControlName: 'instagram',
		edit: false,
	},
	{
		name: 'LinkedIn',
		icon: 'linkedin',
		formControlName: 'linkedin',
		edit: false,
	},
	{
		name: 'Twitter',
		icon: 'twitter',
		formControlName: 'twitter',
		edit: false,
	},
];
