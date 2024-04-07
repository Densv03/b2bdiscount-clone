import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../../services/blog/blog.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
	RecentlyPublishedArticlesComponent
} from './components/recently-published-articles/recently-published-articles.component';
import { BlogResponseModel } from '../../../../../core/models/blog/blog-response.model';
import { CommonModule } from '@angular/common';
import { NewsArticlesSectionComponent } from './components/news-articles-section/news-articles-section.component';
import { BlogHomePageData, BlogHomepageModel } from '../../../../../core/models/blog/blog-homepage.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
	TradeGuidesOrLogisticsComponent
} from './components/trade-guides-or-logistics/trade-guides-or-logistics.component';
import { AnalysisSectionComponent } from './components/analysis-section/analysis-section.component';
import { MarketUpdatesSectionComponent } from './components/market-updates-section/market-updates-section.component';

@UntilDestroy()
@Component({
  selector: 'b2b-blog-home',
  standalone: true,
	imports: [
		RecentlyPublishedArticlesComponent,
		CommonModule,
		NewsArticlesSectionComponent,
		TradeGuidesOrLogisticsComponent,
		AnalysisSectionComponent,
		MarketUpdatesSectionComponent,
	],
  templateUrl: './blog-home.component.html',
  styleUrl: './blog-home.component.scss'
})
export class BlogHomeComponent implements OnInit {
	public blogHomePageData$: Observable<BlogHomePageData>;

		constructor(private readonly blogService: BlogService) {
	}

	ngOnInit(): void {
		this.getArticles();
	}

	private getArticles(): void {
		this.blogHomePageData$ = this.blogService.getHomePage().pipe(map(data => data.data));
	}
}
