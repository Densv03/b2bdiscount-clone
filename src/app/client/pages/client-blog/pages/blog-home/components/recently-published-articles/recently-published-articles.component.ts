import { Component, Input, OnInit } from '@angular/core';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { SvgIconComponent } from 'angular-svg-icon';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NewArticleModel } from '../../../../../../../core/models/blog/new-article.model';
import { BlogCategoriesEnum } from '../../../../../../../core/enums/blog-categories.enum';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'b2b-recently-published-articles',
  standalone: true,
	imports: [
		B2bNgxImageModule,
		SvgIconComponent,
		CommonModule,
		NgOptimizedImage,
		RouterLink,
	],
  templateUrl: './recently-published-articles.component.html',
  styleUrl: './recently-published-articles.component.scss'
})
export class RecentlyPublishedArticlesComponent implements OnInit {
	@Input() set articles(value: NewArticleModel[]) {
		if (value?.length  > 0) {
			this.posts = value;
		}
	}
	@Input() isRecentlyPublished: boolean = true;

	public sectionTitle: string
	public posts: NewArticleModel[];

	ngOnInit(): void {
		this.sectionTitle = this.isRecentlyPublished ? 'recently published' : BlogCategoriesEnum.MarketExperts;
	}
}
