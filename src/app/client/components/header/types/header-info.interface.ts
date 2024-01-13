export interface HeaderInfo {
	title: string;
	description: string;
	items: HeaderInfoItem[];
}

interface HeaderInfoItem {
	name: string;
	description: string;
	link: string;
}
