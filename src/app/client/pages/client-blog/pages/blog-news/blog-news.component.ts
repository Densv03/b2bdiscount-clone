import { Component, OnInit } from '@angular/core';
import { BlogSectionHeaderComponent } from '../../components/blog-section-header/blog-section-header.component';
import { BlogCategoriesEnum } from '../../../../../core/enums/blog-categories.enum';
import { BlogService } from '../../../../services/blog/blog.service';
import { BlogNewsListComponent } from '../../components/blog-news-list/blog-news-list.component';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { NewArticleModel } from '../../../../../core/models/blog/new-article.model';
import { CommonModule } from '@angular/common';
import { PaginationModule } from '../../../../shared/components/pagination/pagination.module';

@Component({
	selector: 'b2b-blog-news',
	standalone: true,
	imports: [
		BlogSectionHeaderComponent,
		BlogNewsListComponent,
		CommonModule,
		PaginationModule,
	],
	templateUrl: './blog-news.component.html',
	styleUrl: './blog-news.component.scss',
})
export class BlogNewsComponent implements OnInit {
	public blogCategoriesEnum = BlogCategoriesEnum;
	public offset = 0;
	public limit = 16;
	public newsList$: Observable<NewArticleModel[]>;
	public countSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	public currentPage: number = 1;
	public description = 'Fresh baked news from the global trade industry and other sectors of the worldwide economy. ';

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
		this.newsList$ = this.blogService.getArticlesByType(this.offset, this.limit, BlogCategoriesEnum.News)
			.pipe(map(result => {
				this.countSource.next(result.count);

				return result.data;
			}));
	}
}
