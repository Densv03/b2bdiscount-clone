import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SeoService } from '../../../../core/services/seo/seo.service';
import { BlogCategoriesEnum } from '../../../../core/enums/blog-categories.enum';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'b2b-client-blog',
	templateUrl: './client-blog.component.html',
	styleUrls: ['./client-blog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientBlogComponent implements OnInit {
	public isArticleRoute: boolean = false;
	public loading: boolean;

	constructor(
		private readonly router: Router,
		private readonly _seoService: SeoService,
		private readonly changeDetectorRef: ChangeDetectorRef
	) {
	}

	ngOnInit() {
		this.checkIsArticleRoute();

		this.router.events.pipe(
			filter(event => event instanceof NavigationEnd)
		).subscribe(() => {
			this.checkIsArticleRoute();
		});
		this.addMetaTags();
	}


	private checkIsArticleRoute(): void {
		const blogCategoriesEnum = Object.values(BlogCategoriesEnum).filter(value => typeof value === 'string');
		const urlArr = this.router.url.split('/');
		const isNotArticleTypePage = blogCategoriesEnum.filter(el => {
		return urlArr[2]?.startsWith(el.toLowerCase().split(' ').join('-').replace('&', 'and'))
		})?.length === 0;

		this.isArticleRoute = urlArr.length > 2 && urlArr[1] === 'blog' && isNotArticleTypePage && !this.router.url.includes('/tag');
		this.changeDetectorRef.detectChanges();
		this.addMetaTags();
	}

	private addMetaTags(): void {
		this._seoService.setTitle(
			'Wholesale Trade & Logistics News | Trends and Tips | Globy Blog',
		);
		this._seoService.setDescription(
			'An all-in-one resource to discover wholesale trade trends, industry tips and tricks, logistics news, and valuable advice for managing e-commerce',
		);
	}
}
