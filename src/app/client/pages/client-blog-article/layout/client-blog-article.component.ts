import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Inject,
	OnDestroy,
	Optional,
	PLATFORM_ID,
	Renderer2,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../../../../auth/services/auth/auth.service';
import { catchError, Observable, of, Subject } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { BlogService } from '../../../services/blog/blog.service';
import { DOCUMENT, isPlatformServer } from '@angular/common';
import { SeoService } from '../../../../core/services/seo/seo.service';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';
import { Meta, Title } from '@angular/platform-browser';

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
	public readonly article$: Observable<any>;

	public readonly formGroup: FormGroup;

	public comments$: Observable<any>;

	public getNewComments: Subject<any>;

	constructor(
		private readonly _activatedRoute: ActivatedRoute,
		private readonly _blogService: BlogService,
		private readonly _hotToastService: HotToastService,
		private readonly _authService: AuthService,
		private readonly _router: Router,
		private readonly changeDetectorRef: ChangeDetectorRef,
		@Inject(DOCUMENT) private readonly _document: Document,
		@Inject(PLATFORM_ID) private platformId: any,
		@Optional() @Inject(REQUEST) private request: Request,
		private renderer2: Renderer2,
		private readonly seoService: SeoService,
		private readonly title: Title,
		private readonly meta: Meta
	) {
		this.getNewComments = new Subject();
		this.socialMedias = this.getSocialMedias();
		this.tradingWikiOptions = [];
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;

		this.article$ = this.getArticle$();

		this.formGroup = new FormGroup<{ text: FormControl<string> }>({
			text: new FormControl<string>(''),
		});
	}

	ngAfterViewInit() {
		this.getArticle$()
			.pipe(
				first(),
				catchError(() => {
					if (isPlatformServer(this.platformId)) {
						if (this.request.res) {
							this.request.res.status(404);
						}
					}
					return of(null);
				})
			)
			.subscribe(
				({
					blog: {
						_id,
						createdAt,
						updatedAt,
						title,
						image,
						author,
						description,
					},
				}) => {
					this.comments$ = this.getComments(_id);
					this.changeDetectorRef.markForCheck();
					this.addSubscriptionForm();
					const images = Object.values(image);
					images.shift();
					const imgArray = images.map((el) => environment.apiUrl + el);
					description = description.replace(/<[^>]*>/g, '');
					this.seoService.addBlogMicroMarkup(
						this._document,
						window.location.href,
						title,
						new Date(createdAt),
						new Date(updatedAt),
						imgArray,
						author,
						description
					);
				}
			);
	}

	public getComments(id: string): Observable<any> {
		return this._blogService.getComments(id);
	}

	public createComment(articleId: string, formGroup: any): void {
		if (!this._authService.getToken()) {
			this._router.navigateByUrl('auth/register-credentials');
			return;
		}

		if (!formGroup.text) {
			return;
		}

		this._blogService
			.createComment(articleId, formGroup.text)
			.pipe(
				this._hotToastService.observe({
					loading: 'Comment creating...',
					success: 'Comment created successfully!',
					error: 'You have to be authorized',
				})
			)
			.subscribe(() => this.getNewComments.next(true));

		this.formGroup.reset();
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
			switchMap((id) => this._blogService.getArticleById(id)),
			map((article) => {
				this.addSeoTags(article.blog);
				return {
					blog: article.blog,
					anotherBlogs: article.anotherBlogs.slice(0, -1),
				};
			})
		);
	}

	private addSeoTags(product: any): void {
		this.title.setTitle(`${product.title.trim()} | B2B Discount`);
		this.meta.updateTag({
			name: 'description',
			content: `Read about ${product.title.trim()} on B2B Discount Blog`,
		});
	}

	public processShareBtn(shareName: string): void {
		if (shareName === 'copy') {
			this._hotToastService.success('URL copied');
		}
	}

	private addSubscriptionForm(): void {
		const script = this.renderer2.createElement('script');
		script.async = true;
		script.src = 'https://pop-ups.sendpulse.com/assets/loader.js';
		script.setAttribute(
			'data-chats-widget-id',
			'640279e7-7070-4008-93fd-9c9d2c7d5618'
		);
		this._document.body.appendChild(script);
	}

	ngOnDestroy() {
		this.title.setTitle('B2B Discount');
		this._document.querySelector('[data-chats-widget-id]') &&
			this._document.querySelector('[data-chats-widget-id]').remove();
		this._document.querySelector("[id='micro-markup']") &&
			this._document.querySelector("[id='micro-markup']").remove();
	}
}
