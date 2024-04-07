import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BlogCategoryGridComponent } from '../../components/blog-category-grid/blog-category-grid.component';
import { BlogSectionHeaderComponent } from '../../components/blog-section-header/blog-section-header.component';
import { PaginationModule } from '../../../../shared/components/pagination/pagination.module';
import { BlogCategoriesEnum } from '../../../../../core/enums/blog-categories.enum';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { NewArticleModel } from '../../../../../core/models/blog/new-article.model';
import { BlogService } from '../../../../services/blog/blog.service';

@Component({
  selector: 'b2b-blog-analysis',
  standalone: true,
  imports: [
    AsyncPipe,
    BlogCategoryGridComponent,
    BlogSectionHeaderComponent,
    PaginationModule,
  ],
  templateUrl: './blog-analysis.component.html',
  styleUrl: './blog-analysis.component.scss'
})
export class BlogAnalysisComponent implements OnInit {
	public blogCategoriesEnum = BlogCategoriesEnum;
	public offset = 0;
	public limit = 22;
	public articlesList$: Observable<NewArticleModel[]>;
	public countSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	public currentPage: number = 1;
	public description = 'Dive deeper into market trends and events with Globy\'s analytical materials on various subjects.';

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
		this.articlesList$ = this.blogService.getArticlesByType(this.offset, this.limit, BlogCategoriesEnum.Analysis)
			.pipe(map(result => {
				this.countSource.next(result.count);

				return result.data;
			}));
	}
}
