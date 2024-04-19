import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BlogNewsListComponent } from '../../components/blog-news-list/blog-news-list.component';
import { BlogSectionHeaderComponent } from '../../components/blog-section-header/blog-section-header.component';
import { PaginationModule } from '../../../../shared/components/pagination/pagination.module';
import { BlogCategoriesEnum } from '../../../../../core/enums/blog-categories.enum';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { NewArticleModel } from '../../../../../core/models/blog/new-article.model';
import { BlogService } from '../../../../services/blog/blog.service';
import { BlogCategoryGridComponent } from '../../components/blog-category-grid/blog-category-grid.component';
import { PageLoaderModule } from '../../../../../core/components/page-loader/page-loader.module';

@Component({
  selector: 'b2b-blog-trade-guide',
  standalone: true,
  imports: [
    AsyncPipe,
    BlogNewsListComponent,
    BlogSectionHeaderComponent,
    PaginationModule,
    BlogCategoryGridComponent,
    PageLoaderModule,
  ],
  templateUrl: './blog-trade-guide.component.html',
  styleUrl: './blog-trade-guide.component.scss'
})
export class BlogTradeGuideComponent implements OnInit {
	public blogCategoriesEnum = BlogCategoriesEnum;
	public offset = 0;
	public limit = 22;
	public articlesList$: Observable<NewArticleModel[]>;
	public countSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	public currentPage: number = 1;
	public description = 'Articles that will help you navigate through global trade, within specific markets, or products.';

	constructor(private readonly blogService: BlogService) {
	}

	ngOnInit(): void {
		this.getNewsData();
	}

	public togglePage(page: number): void {
		this.offset = (page - 1) * this.limit;
		this.currentPage = page;
		this.getNewsData();
	}

	private getNewsData(): void {
		this.articlesList$ = this.blogService.getArticlesByType(this.offset, this.limit, BlogCategoriesEnum.TradeGuide)
			.pipe(map(result => {
				this.countSource.next(result.count);

				return result.data;
			}));
	}
}
