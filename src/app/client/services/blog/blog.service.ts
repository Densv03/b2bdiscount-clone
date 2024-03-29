import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiService } from '../../../core/services/api/api.service';
import { first } from 'rxjs/operators';
import {
	BlogArticle,
	BlogAuthor, CreateBlogRequest,
	Tag, TypeArticle
} from "../../../../../admin/src/app/pages/admin-blog-post/types/admin-blog-post.type";
import { getFormData } from "../../../core/helpers/function/get-form-data";

@Injectable({
	providedIn: 'root',
})
export class BlogService {
	public readonly _articlesBehaviourSubject: BehaviorSubject<any[]>;
	public readonly _articles$: Observable<any>;
	public readonly _endpoint: string;

	private blogSource$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
	private blogLength: BehaviorSubject<number> = new BehaviorSubject<number>(0);

	constructor(private readonly apiService: ApiService) {
		this._articlesBehaviourSubject = new BehaviorSubject<any[]>([]);
		this._articles$ = this._articlesBehaviourSubject.asObservable();
		this._endpoint = 'blogs/';
	}

	public getTags(str: any): Observable<Tag[]> {
		return this.apiService.get(`tags?q=${str}`);
	}

	public createBlog(body: any) {
		return this.apiService.post('blog/create', body);
	}

	public uploadImage(images: any, id: string) {
		return this.apiService.put(`blog/${id}/upload-image`, images);
	}

	public updateBlog(id: any, body: any) {
		return this.apiService.put(`blog/${id}/update`, body);
	}

	public createArticle(body: any) {
		return this.apiService.post('blog/create', body);
	}

	public getComments(post: any) {
		return this.apiService.get(`comment/${post}`);
	}

	public updateArticle(id: any, body: any) {
		return this.apiService.put(`blog/${id}/update`, body);
	}

	public createComment(post: any, text: any) {
		return this.apiService.post(`comment/create`, {
			post,
			text,
		});
	}

	public getArticleById(id: string): Observable<any> {
		return this.apiService.get(`blog/${id}`);
	}

	get blog$(): Observable<any> {
		return this.blogSource$.asObservable();
	}

	get blogLength$(): Observable<any> {
		return this.blogLength.asObservable();
	}

	public getArticles(queryString: string): Observable<any> {
		return this.apiService.get(`blogs${queryString}`);
	}

	public updateBlogList(queryString: string = '&limit=7&'): void {
		this.getArticles(queryString)
			.pipe(first())
			.subscribe((data) => {
				this.blogSource$.next(data.posts);
				this.blogLength.next(data.totalCount);
			});
	}

	public deleteArticleById(id: any) {
		return this.apiService.delete(`blog/${id}/delete`);
	}

	public getAuthorList$(limit = 10, offset = 0): Observable<{ data: BlogAuthor[], count: number }> {
		return this.apiService.get('new-blog/authors', {
			params: {
				limit,
				offset
			}
		})
	}

	public createNewBlog(data: CreateBlogRequest): Observable<any> {
		return this.apiService.post('new-blog/create', getFormData(data));
	}

	public getNewArticles(limit = 10, offset = 0, type: TypeArticle = 'News'): Observable<{
		data: BlogArticle[],
		count: number
	}> {
		return this.apiService.get('new-blogs', {
			params: {
				limit,
				offset,
				type
			}
		})
	}
}
