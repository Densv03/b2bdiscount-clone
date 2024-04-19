import { Component, Input } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { Router } from '@angular/router';
import {BlogArticle} from "../../../../../../admin/src/app/pages/admin-blog-post/types/admin-blog-post.type";

@Component({
	selector: 'b2b-blog-grid-list',
	templateUrl: './blog-grid-list.component.html',
	styleUrls: ['./blog-grid-list.component.scss'],
})
export class BlogGridListComponent {
	@Input() set getArticles(value: BlogArticle[]) {
		this.articles = value;
	}
	@Input() title: string;
	@Input() isBigger = false;
	isAuthorsPage: boolean;
	articles: BlogArticle[];
	public readonly domain = environment.apiUrl;
	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum;

	constructor(private readonly router: Router) {
		this.isAuthorsPage = !this.router.url
			.split('/')
			[this.router.url.split('/').length - 2].includes('blog');
		this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;
	}
}
