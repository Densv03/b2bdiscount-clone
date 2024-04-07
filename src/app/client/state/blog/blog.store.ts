import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { BlogHomepageModel } from '../../../core/models/blog/blog-homepage.model';

export interface BlogState {
	homepage: BlogHomepageModel;
}

export function createInitialState(): BlogState {
	return {
		homepage: null,
	};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'blog' })
export class BlogStore extends Store<BlogState> {
	constructor() {
		super(createInitialState());
	}
}
