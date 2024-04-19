import {
	AfterContentInit,
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Inject, Injector,
	OnDestroy,
	Optional,
	PLATFORM_ID,
	QueryList,
	Renderer2, ViewChild, ViewChildren, ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, fromEvent, merge, Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, first, map, switchMap, take } from 'rxjs/operators';
import { BlogService } from '../../../../../services/blog/blog.service';
import { DOCUMENT, isPlatformServer } from '@angular/common';
import { SeoService } from '../../../../../../core/services/seo/seo.service';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from '../../../../../../../environments/environment';
import { B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { REQUEST } from '../../../../../../../express.tokens';
import { Request } from 'express';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { NewArticleModel } from '../../../../../../core/models/blog/new-article.model';
import { ArticleResponseModel } from '../../../../../../core/models/blog/article-response.model';
import { BlogCategoriesEnum } from '../../../../../../core/enums/blog-categories.enum';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
	selector: 'b2b-client-blog-article',
	templateUrl: './client-blog-article.component.html',
	styleUrls: ['./client-blog-article.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientBlogArticleComponent implements AfterViewInit, OnDestroy {
	public readonly offers$: Observable<any>;
	public readonly socialMedias: any;
	public readonly tradingWikiOptions: any;
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum;
	public readonly domain = environment.apiUrl;
	public readonly formGroup: FormGroup;

	public articleHeaders: { id: string, text: string, position: number; tabIndex: number }[] = [];
	public article$: Observable<ArticleResponseModel>;
	public isMarketExpertsPage: boolean = false;
	public isNewsPage: boolean = false;
	public comments$: Observable<any>;
	public updatedArticleContent: SafeHtml;
	public getNewComments: Subject<any>;
	public selectedTableItem = 0;
	private window: Window;

	constructor(
		private readonly _activatedRoute: ActivatedRoute,
		private readonly _blogService: BlogService,
		private readonly _hotToastService: HotToastService,
		private readonly changeDetectorRef: ChangeDetectorRef,
		@Inject(DOCUMENT) private readonly _document: Document,
		@Inject(PLATFORM_ID) private platformId: any,
		@Optional() @Inject(REQUEST) private request: Request,
		private renderer2: Renderer2,
		private readonly seoService: SeoService,
		private readonly title: Title,
		private readonly sanitizer: DomSanitizer,
	) {
		this.getNewComments = new Subject();
		this.socialMedias = this.getSocialMedias();
		this.tradingWikiOptions = [];
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;

		this.formGroup = new FormGroup<{ text: FormControl<string> }>({
			text: new FormControl<string>(''),
		});
		this.window = this._document.defaultView;
	}

	ngAfterViewInit(): void {
		this.article$ = this.getArticle$();

		this.article$
			.pipe(
				first(),
				catchError(() => {
					if (isPlatformServer(this.platformId)) {
						if (this.request.res) {
							this.request.res.status(404);
						}
					}
					return of(null);
				}),
			)
			.subscribe(
				({
					 data: {
						 _id,
						 createdAt,
						 updatedAt,
						 title,
						 images,
						 authorId,
						 description,
					 },
				 }) => {
					this.comments$ = this.getComments(_id);
					this.changeDetectorRef.markForCheck();
					this.addSubscriptionForm();
					const seoImages = images[0] ? Object.values(images[0]).slice(1).map(el => environment.apiUrl + el) : [];
					description = description.replace(/<[^>]*>/g, '');
					this.seoService.addBlogMicroMarkup(
						this._document,
						this.window.location.href,
						title,
						new Date(createdAt),
						new Date(updatedAt),
						seoImages,
						authorId.fullName,
						description,
					);
				},
			);

		this.listenToScroll();
	}

	public getComments(id: string): Observable<any> {
		return this._blogService.getComments(id);
	}

	public getSocialMedias() {
		return [
			{
				icon: 'media-icons/facebook',
				href: 'https://www.facebook.com/',
				share: 'facebook',
			},
			{
				icon: 'media-icons/linkedin',
				href: 'https://www.linkedin.com/',
				share: 'linkedin',
			},
			{
				icon: 'media-icons/twitter',
				href: 'https://www.twitter.com/',
				share: 'twitter',
			},
			{
				icon: 'media-icons/mail',
				share: 'email',
			},
			{
				icon: 'media-icons/share',
				share: 'copy',
			},
		];
	}

	public getArticle$(): Observable<any> {
		return this._activatedRoute.paramMap.pipe(
			map((paramMap) => paramMap.get('id')),
			switchMap((id) => this._blogService.getNewArticleById(id)),
			map((article) => {
				this.addSeoTags(article.data);
				this.updateArticleDescription(article.data.description, article.blogRecommendations);
				this.isMarketExpertsPage = article.data.typeArticle === BlogCategoriesEnum.MarketExperts;
				this.isNewsPage = article.data.typeArticle === BlogCategoriesEnum.News;

				return article;
			}),
			untilDestroyed(this),
		);
	}

	public goBack(): void {

	}


	public scrollToHeader(id: string, index: number): void {
		this.selectedTableItem = index;
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	}

	private updateArticleDescription(description: string, recommendations: NewArticleModel[]): void {
		const splitByH2Regex = /(<h2.*?>.*?<\/h2>)/gi;
		const parts = description.split(splitByH2Regex);

		const recommendationBlocks = recommendations.map(recommendation => {
			return this.createRecommendationBlock(recommendation);
		});


		let updatedContent = '';
		let recommendationIndex = 0;

		parts.forEach((part, index) => {
			if (part.match(splitByH2Regex)) {
				if (recommendationIndex < recommendationBlocks.length) {
					updatedContent += recommendationBlocks[recommendationIndex] + part;
					recommendationIndex++;
				} else {
					updatedContent += part;
				}
			} else {
				updatedContent += part;
			}
		});
		updatedContent = this.addIdsToHeaders(updatedContent);

		this.updatedArticleContent = this.sanitizer.bypassSecurityTrustHtml(updatedContent);
	}

	private addSeoTags(product: any): void {
		const { title } = product;
		this.seoService.setTitle(`${title} | Globy B2B Marketplace`);
		this.seoService.setDescription(
			`Read our featured post, ${title}, to elevate your wholesale trade experience`,
		);
	}


	private addIdsToHeaders(htmlContent: string): string {
		const parser = new DOMParser();
		const doc = parser.parseFromString(htmlContent, 'text/html');
		const headers = doc.querySelectorAll('h2');
		headers.forEach((header, index) => {
			header.id = `header-${index}`;
			header.tabIndex = index;
			if (!this.articleHeaders.some(el => el.text === header.innerText)) {
				this.articleHeaders = [...this.articleHeaders, {
					text: header.innerText,
					id: header.id,
					position: header.getBoundingClientRect().top + window.scrollY,
					tabIndex: header.tabIndex,
				}];
			}
		});

		return doc.body.innerHTML;
	}

	private addSubscriptionForm(): void {
		const script = this.renderer2.createElement('script');
		script.async = true;
		script.src = 'https://pop-ups.sendpulse.com/assets/loader.js';
		script.setAttribute(
			'data-chats-widget-id',
			'640279e7-7070-4008-93fd-9c9d2c7d5618',
		);
		this._document.body.appendChild(script);
	}

	private createRecommendationBlock(recommendation: NewArticleModel): string {
		const imageSrc = environment.apiUrl + recommendation.images[0].lg;
		const title = recommendation.title;
		const link = `${window.location.origin}/blog/${recommendation?.path || recommendation?._id}`;

		return `<a class="recommendation-wrapper" href="${link}">
    <h3 class="recommendation-text">Recommended reading</h3>
    <div class="d-flex align-items-center recommendation-article">
      <img class="recommendation-article-image" src="${imageSrc}" alt="">
      <h4 class="recommendation-article-title">${title}</h4>
    </div>
  </a>`;
	}

	private listenToScroll(): void {
		fromEvent(window, 'scroll').pipe(
			distinctUntilChanged(), // Обробляємо подію, тільки якщо позиція змінилася
			map(() => {
				const headers = document.querySelectorAll('h2');
				this.articleHeaders.forEach((header, index) => {
					header.position = headers[index].offsetTop
				});
				return this.articleHeaders.reduce((prev, curr) => {
					return (Math.abs(curr.position - window.scrollY) < Math.abs(prev.position - window.scrollY) ? curr : prev);
				});
			})
		).subscribe(closestHeader  => {
				this.selectedTableItem = closestHeader.tabIndex;

				this.changeDetectorRef.detectChanges();
			// }
		});
	}

	ngOnDestroy() {
		this.title.setTitle('Globy');
		this._document.querySelector('[data-chats-widget-id]') &&
		this._document.querySelector('[data-chats-widget-id]').remove();
		this._document.querySelector('[id=\'micro-markup\']') &&
		this._document.querySelector('[id=\'micro-markup\']').remove();
	}
}
