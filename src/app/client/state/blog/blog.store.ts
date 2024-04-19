import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { BlogHomepageModel } from '../../../core/models/blog/blog-homepage.model';
import {BlogArticle, BlogAuthor} from "../../../../../admin/src/app/pages/admin-blog-post/types/admin-blog-post.type";
import {BlogAuthorResponse} from "../../../core/models/blog/blog-author.model";

export interface BlogState {
	homepage: BlogHomepageModel;
	authorInfo: BlogAuthor,
	authorBlogs: Omit<BlogAuthorResponse, 'author'>
}

export function createInitialState(): BlogState {
	return {
		homepage: null,
		authorInfo: null,
		authorBlogs: null
	};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'blog' })
export class BlogStore extends Store<BlogState> {
	constructor() {
		super(createInitialState());
	}
}
