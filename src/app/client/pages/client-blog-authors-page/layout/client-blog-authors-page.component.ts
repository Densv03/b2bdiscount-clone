import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, mergeMap, Observable, of, Subject} from 'rxjs';
import { BlogService } from '../../../services/blog/blog.service';
import { FormGroup } from '@angular/forms';
import { PaginationParamsModel } from '../../../../core/models/pagination-params.model';
import { ActivatedRoute, Router } from '@angular/router';
import {BlogAuthorResponse} from "../../../../core/models/blog/blog-author.model";
import {first} from "rxjs/operators";
import {BlogAuthor} from "../../../../../../admin/src/app/pages/admin-blog-post/types/admin-blog-post.type";
import {environment} from "../../../../../environments/environment";
import {SocialMedia} from "../../../../core/models/public-company-info.model";


@Component({
	selector: 'blog-authors-page',
	templateUrl: './client-blog-authors-page.component.html',
	styleUrls: ['./client-blog-authors-page.component.scss'],
})
export class ClientBlogAuthorsPageComponent implements OnInit, OnDestroy {
	public articles$: Observable<any>;
	public authorBlogs$: Observable<Omit<BlogAuthorResponse, 'author'>>;
	public authorInfo$: Observable<BlogAuthor> = this.blogService.getAuthorInfo();

	public pageSubject: Subject<any>;
	public currentPageSource: BehaviorSubject<number> =
		new BehaviorSubject<number>(1);
	protected readonly window = window;

	private filteredQueryObj: PaginationParamsModel = { limit: 9, offset: 0 };

	constructor(
		private readonly blogService: BlogService,
		private readonly route: ActivatedRoute,
		private readonly router: Router
	) {
		this.pageSubject = new Subject<any>();
	}

	ngOnInit() {
		this.togglePageBlogList(1);
	}

	public getMediaSrc(url: string): string {
		return environment.apiUrl + url;
	}
	public convertObjectToArray(objectToConvert: {
		facebook?: string;
		twitter?: string;
		instagram?: string;
		linkedin?: string
	}): any[] {
		return Object.entries(objectToConvert).map(([key, value]) => ({
			key,
			value,
		}));
	}
	private getAuthorInfo(): void {
		this.route.params
			.pipe(first())
			.subscribe(params => {
				this.authorBlogs$ = this.blogService.getAuthorBlogs(params['id'], this.filteredQueryObj);
			});

	}

	public get currentPage$(): Observable<number> {
		return this.currentPageSource.asObservable();
	}

	public togglePageBlogList(page: number): void {
		this.filteredQueryObj = {
			...this.filteredQueryObj,
			offset: (page - 1) * 9,
		};
		this.getAuthorInfo();
		this.currentPageSource.next(page);
	}
	ngOnDestroy() {
		this.blogService.updateAuthorStore(null);
	}
}
