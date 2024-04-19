import { AfterViewInit, ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import {
	BlogArticle,
	GetNewBlogResponse
} from "../../../../../../../../admin/src/app/pages/admin-blog-post/types/admin-blog-post.type";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { environment } from "../../../../../../../environments/environment";

@Component({
  selector: 'b2b-blog-details-news',
  templateUrl: './blog-details-news.component.html',
  styleUrl: './blog-details-news.component.scss'
})
export class BlogDetailsNewsComponent {
	@Input() set blog(value: GetNewBlogResponse) {
		if (value) {
			this.articleBlog = value;
			this.updateArticleDescription(this.articleBlog.data.description, this.articleBlog.blogRecommendations);
		}
	}
	public articleHeaders: { id: string, text: string, position: number; tabIndex: number }[] = [];
	public updatedArticleContent: SafeHtml;
	public articleBlog: GetNewBlogResponse;

	private sanitizer = inject(DomSanitizer);


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


}
