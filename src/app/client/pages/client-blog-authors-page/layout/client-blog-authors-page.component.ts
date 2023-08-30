import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {map, startWith, switchMap, tap} from "rxjs/operators";
import {BlogService} from "../../../services/blog/blog.service";
import {NgxSkeletonLoaderConfig} from "ngx-skeleton-loader/lib/ngx-skeleton-loader-config.types";
import {FormControl, FormGroup} from "@angular/forms";
import {PaginationParamsModel} from "../../../../core/models/pagination-params.model";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";
import {B2bNgxLinkThemeEnum} from "@b2b/ngx-link";

function generateQueryString(obj: any, initialValue: string = "?") {
	return Object.entries(obj)
		.filter(([, value]: any) => !!value)
		.reduce((queryString: string, [key, value]: any) => {
			return Array.isArray(value)
				? `${queryString}${value.reduce((str, arrayItem) => `${str}${key}=${arrayItem}&`, "")}`
				: `${queryString}${key}=${value}&`;
		}, initialValue);
}

function stripHtml(html: any) {
	// Create a new div element
	const temporalDivElement = document.createElement("div");
	// Set the HTML content with the providen
	temporalDivElement.innerHTML = html;
	// Retrieve the text property of the element (cross-browser support)
	return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

@Component({
  selector: 'app-layout',
  templateUrl: './client-blog-authors-page.component.html',
  styleUrls: ['./client-blog-authors-page.component.scss']
})
export class ClientBlogAuthorsPageComponent implements OnInit {
	public articles$: Observable<any>;

	public readonly formGroup: FormGroup;

	public totalCount: any;

	public pageSubject: Subject<any>;
	public totalBlogLength$: Observable<number> = this.blogService.blogLength$;
	public currentPageSource: BehaviorSubject<number> = new BehaviorSubject<number>(1);

	private filteredQueryObj: PaginationParamsModel = {limit: 8, offset: 0};

	constructor(private readonly blogService: BlogService,
							private readonly route: ActivatedRoute,
							private readonly router: Router) {
		this.pageSubject = new Subject<any>();
	}

	ngOnInit() {
		this.getArticles();
		this.blogPageInit();
	}

	public get currentPage$(): Observable<number> {
		return this.currentPageSource.asObservable();
	}

	public togglePageBlogList(page: number): void {
		this.filteredQueryObj = {...this.filteredQueryObj, offset: (page - 1) * 8};
		this.getArticles();
		this.blogService.updateBlogList(generateQueryString(this.filteredQueryObj));

		this.router.navigate([], {
			relativeTo: this.route,
			queryParams: {
				page:	page > 1 ? page : null,
			},
			queryParamsHandling: "merge"
		});

		this.currentPageSource.next(page);
	}

	private blogPageInit(): void {
		let page = this.route.snapshot.queryParams['page'];
		if (!page) {
			this.router.navigate([], {
				relativeTo: this.route,
				queryParams: {
					page: 1,
				},
				queryParamsHandling: "merge"
			});
			page = 1
		}

		this.togglePageBlogList(+page);
	}

	private getArticles(): void {
		this.blogService.getArticles(generateQueryString(this.filteredQueryObj));
		this.articles$ = this.blogService.blog$
	}
}
