import { AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';
import {
	BlogArticle,
	GetNewBlogResponse,
} from '../../../../../../../../admin/src/app/pages/admin-blog-post/types/admin-blog-post.type';
import { AnalysisSectionComponent } from '../../blog-home/components/analysis-section/analysis-section.component';
import { environment } from '../../../../../../../environments/environment';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule, Location } from '@angular/common';
import { BlogCategoriesEnum } from '../../../../../../core/enums/blog-categories.enum';
import { SvgIconComponent } from 'angular-svg-icon';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { SocialNetworkComponent } from '../../../components/social-network/social-network.component';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'b2b-blog-details-article',
	standalone: true,
	imports: [
		AnalysisSectionComponent,
		CommonModule,
		SvgIconComponent,
		B2bNgxImageModule,
		SocialNetworkComponent,
		RouterLink,
	],
	templateUrl: './blog-details-article.component.html',
	styleUrl: './blog-details-article.component.scss',
})
export class BlogDetailsArticleComponent {
	@Input() set blog(value: GetNewBlogResponse) {
		if (value) {
			this.blogArticle = value;
			this.isMarketExpertsPage = this.blogArticle.data.typeArticle === BlogCategoriesEnum.MarketExperts;
			this.updateArticleDescription(this.blogArticle.data.description, this.blogArticle.blogRecommendations);
			this.listenToScroll();
		}
	}

	public blogArticle: GetNewBlogResponse;
	public updatedArticleContent: SafeHtml;
	public articleHeaders: { id: string, text: string, position: number; tabIndex: number }[] = [];
	public selectedTableItem = 0;
	public isMarketExpertsPage: boolean = false;

	private ignoreScrollEvent: boolean = false;

	constructor(private readonly changeDetectorRef: ChangeDetectorRef,
							private readonly sanitizer: DomSanitizer,
							private readonly location: Location) {
	}

	public scrollToHeader(id: string, index: number): void {
		this.ignoreScrollEvent = true;
		this.selectedTableItem = index;
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}

		setTimeout(() => {
			this.ignoreScrollEvent = false;
		}, 1000);
	}

	public goBack(): void {
		this.location.back();
	}

	private updateArticleDescription(description: string, recommendations: BlogArticle[]): void {
		const splitByH2Regex = /(<h2.*?>.*?<\/h2>)/gi;
		const parts = description.split(splitByH2Regex);


		const recommendationBlocks = recommendations.map(recommendation => {
			return this.createRecommendationBlock(recommendation);
		});

		let updatedContent = '';
		let recommendationIndex = 0;
		let h2Count = 0;

		parts.forEach((part, index) => {
			if (part.match(splitByH2Regex)) {
				h2Count++;
				if (h2Count % 3 === 0 && recommendationIndex < recommendationBlocks.length) {
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

	private addIdsToHeaders(htmlContent: string): string {
		this.articleHeaders = [];
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

	private listenToScroll(): void {
		fromEvent(window, 'scroll').pipe(
			filter(() => !this.ignoreScrollEvent),
			distinctUntilChanged(),
			map(() => {
				const headers = document.querySelectorAll('h2');
				if (headers?.length > 0) {

				this.articleHeaders?.forEach((header, index) => {
					header.position = headers[index]?.offsetTop;
				});
				return this.articleHeaders?.reduce((prev, curr) => {
					return (Math.abs(curr.position - window.scrollY) < Math.abs(prev.position - window.scrollY) ? curr : prev);
				});
				} else return null
			}),
		).subscribe(closestHeader => {
			this.selectedTableItem = closestHeader?.tabIndex;
			this.changeDetectorRef.detectChanges();
		});
	}

	private createRecommendationBlock(recommendation: BlogArticle): string {
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
}
