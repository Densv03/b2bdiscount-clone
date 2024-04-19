import {BlogArticle, BlogAuthor} from "../../../../../admin/src/app/pages/admin-blog-post/types/admin-blog-post.type";

export interface BlogAuthorResponse {
	author: BlogAuthor,
	blogs: BlogArticle[],
	count: number
}
