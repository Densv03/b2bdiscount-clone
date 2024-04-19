import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { BlogState, BlogStore } from './blog.store';
import { BlogHomepageModel } from '../../../core/models/blog/blog-homepage.model';
import {BlogAuthor} from "../../../../../admin/src/app/pages/admin-blog-post/types/admin-blog-post.type";
import {BlogAuthorResponse} from "../../../core/models/blog/blog-author.model";

@Injectable({ providedIn: 'root' })
export class BlogQuery extends Query<BlogState> {
	public readonly homepage$: Observable<BlogHomepageModel>;
	public readonly authorInfo$: Observable<BlogAuthor>;
	public readonly authorBlogs$: Observable<Omit<BlogAuthorResponse, 'author'>>;

	constructor(protected override store: BlogStore) {
		super(store);

		this.homepage$ = this.select('homepage');
		this.authorInfo$ = this.select('authorInfo');
		this.authorBlogs$ = this.select('authorBlogs');
	}
}
