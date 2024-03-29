export interface HandleItem {
	url: string;
	type: ItemType;
}

export type ItemType = 'video' | 'image' | 'doc';
