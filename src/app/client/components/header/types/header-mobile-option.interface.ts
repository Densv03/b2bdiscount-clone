export interface HeaderMobileOptionInterface {
	title: string;
	items: HeaderMobileSubOption[];
}

interface HeaderMobileSubOption {
	name: string;
	link?: string;
	callback?: Function;
	icon: string;
}
