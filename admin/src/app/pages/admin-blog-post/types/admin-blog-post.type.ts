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

export const CreatingAuthorMessages = {
	loading: 'Author creating...',
	success: 'Author created successfully!',
	error: 'Author creation failed!',
}

export const DeletingAuthorMessages = {
	loading: 'Author deleting...',
	success: 'Author deleted successfully!',
	error: 'Author deletion failed!',
}

export const UpdatingAuthorMessages = {
	loading: 'Author updating...',
	success: 'Author updated successfully!',
	error: 'Author updating failed!',
}

export const ArticleTypes = [
	'News',
	'Trade guide',
	'Analysis',
	'Market experts',
	'Market updates',
	'Logistics & Supply chain'
];

export const ArticleStatuses = [
	'draft',
	'planned',
	'published'
];


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
		instagram?: string;
		linkedin?: string;
	};
	dateJoinedPlatform: string;
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

export type ArticleStatus = typeof ArticleStatuses[number];
export type TypeArticle = typeof ArticleTypes[number];

export interface CreateAuthorRequest {
	fullName: string;
	resume: string;
	photo: File;
	facebook: string;
	twitter: string;
	instagram: string;
	linkedin: string;
	dateJoinedPlatform: string;
}

export interface GetNewBlogResponse {
	data: BlogArticle;
	blogRecommendations: BlogArticle[];
	footerRecommendations: BlogArticle[];
}
