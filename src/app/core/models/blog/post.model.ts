import { Photo } from '../photo.model';

export interface PostModel {
	author: string;
	country: string;
	createdAt: Date | string;
	path: string;
	shortDescription: string;
	tags: string[];
	title: string;
	updatedAt: Date | string;
	image: Photo;
	_id: string;
}
