import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { BlogState, BlogStore } from './blog.store';
import { BlogHomepageModel } from '../../../core/models/blog/blog-homepage.model';

@Injectable({ providedIn: 'root' })
export class BlogQuery extends Query<BlogState> {
	public readonly homepage$: Observable<BlogHomepageModel>;

	constructor(protected override store: BlogStore) {
		super(store);

		this.homepage$ = this.select('homepage');
	}
}
