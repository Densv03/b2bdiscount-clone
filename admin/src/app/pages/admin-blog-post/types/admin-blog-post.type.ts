import { Photo } from "../../../../../../src/app/core/models/photo.model";
import { Image } from "@ckeditor/ckeditor5-image";

export interface Tag {
	name: string;
	_id: string;
}

export const UpdatingPostMessages = {
	loading: 'Post updating...',
	success: 'Post updated successfully!',
	error: 'Post updating failed!',
}

export const CreatingPostMessages = {
	loading: 'Post creating...',
	success: 'Post created successfully!',
	error: 'Post creation failed!',
}

export const UploadingImagesMessages = {
	loading: 'Uploading images...',
	success: 'Images uploaded successfully!',
	error: 'Images uploading failed!',
}

export const ArticleTypes = [
	'News',
	'Trade Guide',
	'Analysis',
	'Market Experts',
	'Market Updates',
	'Logistics & Supply chain'
]


export interface CreateBlogFormGroupData {
	title: string;
	description: string;
	shortDescription: string;
	authorId: string;
	datePublication?: Date;
	timePublication?: string;
	tags: Tag[];
	typeArticle: TypeArticle;
	recommendations: string[];
	images: File[];
	isDraft: boolean;
}

export interface CreateBlogRequest extends Omit<CreateBlogFormGroupData, 'timePublication' | 'datePublication' | 'tags' | 'isDraft'> {
	readTime: string;
	pullQuote: string;
	articleStatus: ArticleStatus;
	datePublication: string;
	tags: string[];
}

export interface BlogAuthor {
	fullName: string;
	resume?: string;
	photo?: Photo;
	socialMedia?: {
		facebook?: string;
		twitter?: string;
		instragram?: string;
		linkedin?: string;
	},
	path: string;
	__v?: number;
	_id?: string;
}

export interface BlogArticle {
	tags: Tag[];
	recommendations: string[];
	views: number;
	_id: string;
	title: string;
	description: string;
	shortDescription: string;
	datePublication: string;
	readTime: string;
	typeArticle: TypeArticle;
	articleStatus: ArticleStatus;
	images: Image[];
	dateUpdate: string;
	authorId: BlogAuthor;
	path: string;
	updatedAt: string;
	createdAt: string;
	__v: number;
}

export type ArticleStatus = 'draft' | 'planned' | 'published';
export type TypeArticle = typeof ArticleTypes[number];
