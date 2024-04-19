import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, publish, share, shareReplay} from 'rxjs';
import {ApiService} from '../../../core/services/api/api.service';
import {first, tap, map} from 'rxjs/operators';
import {BlogResponseModel} from '../../../core/models/blog/blog-response.model';
import {BlogQuery} from '../../state/blog/blog.query';
import {BlogHomepageModel} from '../../../core/models/blog/blog-homepage.model';
import {BlogStore} from '../../state/blog/blog.store';
import {BlogCategoriesEnum} from '../../../core/enums/blog-categories.enum';
import {HttpParams} from '@angular/common/http';
import {NewArticleModel} from '../../../core/models/blog/new-article.model';
import {
	ArticleStatus,
	BlogArticle,
	BlogAuthor, CreateAuthorRequest, CreateBlogRequest, GetNewBlogResponse,
	Tag, TypeArticle
} from "../../../../../admin/src/app/pages/admin-blog-post/types/admin-blog-post.type";
import {getFormData} from "../../../core/helpers/function/get-form-data";
import {PaginationParamsModel} from "../../../core/models/pagination-params.model";
import {BlogAuthorResponse} from "../../../core/models/blog/blog-author.model";

@Injectable({
	providedIn: 'root',
})
export class BlogService {
	public readonly _articlesBehaviourSubject: BehaviorSubject<any[]>;
	public readonly _articles$: Observable<any>;
	public readonly _endpoint: string;

	private articleTypeSource: BehaviorSubject<BlogCategoriesEnum> = new BehaviorSubject<BlogCategoriesEnum>(null);
	public articleType$ = this.articleTypeSource.asObservable();
	private blogSource$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
	private blogLength: BehaviorSubject<number> = new BehaviorSubject<number>(0);

	constructor(private readonly apiService: ApiService,
							private readonly blogQuery: BlogQuery,
							private readonly blogStore: BlogStore) {
		this._articlesBehaviourSubject = new BehaviorSubject<any[]>([]);
		this._articles$ = this._articlesBehaviourSubject.asObservable();
		this._endpoint = 'blogs/';
	}

	public setArticleType(type: BlogCategoriesEnum): void {
		this.articleTypeSource.next(type);
	}

	public getTags(str: any): Observable<Tag[]> {
		return this.apiService.get(`tags?q=${str}`);
	}

	public getTagByName(name: string): Observable<Tag> {
		return this.apiService.get<Tag[]>(`tags?q=${name}`)
			.pipe(map(tags => tags[0]))
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

	public getNewArticleById(id: string): Observable<GetNewBlogResponse> {
		return this.apiService.get(`new-blog/${id}`);
	}

	public updateNewArticle(id: string, body: CreateBlogRequest) {
		return this.apiService.put(`new-blog/update/${id}`, getFormData(body));
	}

	get blog$(): Observable<any> {
		return this.blogSource$.asObservable();
	}

	get blogLength$(): Observable<any> {
		return this.blogLength.asObservable();
	}

	public getArticles(queryString: string): Observable<BlogResponseModel> {
		return this.apiService.get<BlogResponseModel>(`blogs${queryString}`);
	}

	public updateBlogList(queryString: string = '&limit=7&'): void {
		this.getArticles(queryString)
			.pipe(first())
			.subscribe((data) => {
				this.blogSource$.next(data.posts);
				this.blogLength.next(data.totalCount);
			});
	}

	public getAuthorBlogs(id: string, paginationObj: PaginationParamsModel): Observable<Omit<BlogAuthorResponse, 'author'>> {
		const {limit, offset} = paginationObj;

		return this.apiService.get<BlogAuthorResponse>(`new-blog/author/${id}`, {params: {limit, offset}})
			.pipe(
				shareReplay(),
				tap(response => this.updateAuthorStore(response)));
	}

	public getAuthorInfo(): Observable<BlogAuthor> {
		return this.blogQuery.authorInfo$;
	}

	public getHomePage(): Observable<BlogHomepageModel> {
		const {homepage} = this.blogQuery.getValue();

		if (homepage) {
			return of(homepage);
		} else {
			return this.apiService.get<BlogHomepageModel>('new-blogs/homepage')
				.pipe(tap(homepage => this.updateHomepage(homepage)));
		}
	}

	public deleteArticleById(id: any) {
		return this.apiService.delete(`blog/${id}/delete`);
	}

	public getAuthorList$(limit = 20, offset = 0): Observable<{ data: BlogAuthor[], count: number }> {
		return this.apiService.get('new-blog/authors', {
			params: {
				limit,
				offset
			}
		});
	}

	public createNewBlog(data: CreateBlogRequest): Observable<any> {
		return this.apiService.post('new-blog/create', getFormData(data));
	}

	public getNewArticles(offset = 0, type?: TypeArticle | TypeArticle[], status?: ArticleStatus | ArticleStatus[], tags?: string, limit = 10): Observable<{
		data: BlogArticle[],
		count: number
	}> {
		const filteredObj: any = {};
		const argument: any = {offset, type, status, limit, tags};
		for (const key in argument) {
			if (argument[key] !== undefined && argument[key] !== null) {
				filteredObj[key] = argument[key];
			}
		}
		return this.apiService.get('new-blogs', {
			params: {
				...filteredObj
			}
		})
	}

	public deleteNewArticle(id: string): Observable<any> {
		return this.apiService.delete(`new-blog/delete/${id}`);
	}

	public createAuthor(data: CreateAuthorRequest): Observable<any> {
		return this.apiService.post('new-blog/author/create', getFormData(data));
	}

	public updateAuthor(data: CreateAuthorRequest, id: string): Observable<any> {
		return this.apiService.put(`new-blog/author/${id}`, getFormData(data));
	}

	public deleteAuthor(id: string): Observable<any> {
		return this.apiService.delete(`new-blog/author/${id}`);
	}

	public getArticlesByType(
		offset: number,
		limit: number,
		type: BlogCategoriesEnum,
		status?: string,
		tags?: string[]
	): Observable<{ count: number, data: NewArticleModel[] }> {
		let params = new HttpParams();
		params = params.append('limit', limit)
			.append('offset', offset)
			.append('type', type);
		if (status) {
			params.append('status', status);
		}
		if (tags?.length > 0) {
			tags.forEach(tag => params.append('tags', tag));
		}

		return this.apiService.get('new-blogs', {params});
	}

	public updateAuthorStore(response: BlogAuthorResponse | null): void {
		if (!response) {
			this.blogStore.update({authorBlogs: null, authorInfo: null});
		} else {
			const {author, blogs, count} = response;
			this.blogStore.update({authorInfo: author, authorBlogs: {count: count, blogs: blogs}});
		}

	}

	private updateHomepage(homepage: BlogHomepageModel): void {
		this.blogStore.update({ homepage });
	}
}
