import { BlogTagsModel } from './blog-tags.model';
import { BlogCategoriesEnum } from '../../enums/blog-categories.enum';
import { Photo } from '../photo.model';

export interface NewArticleModel {
	tags: BlogTagsModel[];
	recommendations: string[];
	views: number;
	_id: string;
	title: string;
	description: string;
	shortDescription: string;
	datePublication: Date | string;
	readTime: string;
	pullQuote:string;
	typeArticle: BlogCategoriesEnum,
	articleStatus: string;
	images: Photo[];
	dateUpdate: Date | string;
	authorId: {
	_id: string;
		fullName: string;
		resume: string;
		path: string;
		__v: number;
		photo: Photo;
},
	path: string;
	updatedAt:  Date | string;
	createdAt:  Date | string;
	__v: number;
}
