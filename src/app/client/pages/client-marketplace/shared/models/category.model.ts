export interface Category {
	isSelected?: boolean;
	children: CategoryChildren[];
	_id: string;
	image?: string;
	name: string;
	path: string;
	productsCount: number;
	description?: string;
	descriptionTitle?: string;
}

export interface CategoryChildren {
	name: string;
	sort: number;
	path: string;
	_id: string;
	image: string;
	children: CategoryChildren[];
	productsCount: number;
	description?: string;
	descriptionTitle?: string;
}
