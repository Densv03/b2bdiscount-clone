import { PostModel } from './post.model';

export interface BlogResponseModel {
	posts: PostModel[];
	totalCount: number;
}
