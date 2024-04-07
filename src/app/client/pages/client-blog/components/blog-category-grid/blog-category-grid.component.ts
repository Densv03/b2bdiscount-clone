import { Component, Input } from '@angular/core';
import { NewArticleModel } from '../../../../../core/models/blog/new-article.model';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'b2b-blog-category-grid',
  standalone: true,
	imports: [
		B2bNgxImageModule,
		DatePipe,
		NgOptimizedImage,
		SvgIconComponent,
		RouterLink,
	],
  templateUrl: './blog-category-grid.component.html',
  styleUrl: './blog-category-grid.component.scss'
})
export class BlogCategoryGridComponent {
	@Input() isMarketExpertsPage: boolean = false;
	@Input() set articleList(value: NewArticleModel[]) {
		if (value?.length > 0) {
			this.articles = value;
		}
	}

	public articles: NewArticleModel[] = []
}
