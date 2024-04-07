import { Component, Input } from '@angular/core';
import { NewArticleModel } from '../../../../../core/models/blog/new-article.model';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'b2b-blog-news-list',
  standalone: true,
	imports: [
		B2bNgxImageModule,
		SvgIconComponent,
		RouterLink,
		DatePipe,
	],
  templateUrl: './blog-news-list.component.html',
  styleUrl: './blog-news-list.component.scss'
})
export class BlogNewsListComponent {
		@Input() set articleList(value: NewArticleModel[]) {
			if (value?.length > 0) {
				this.articles = value;
			}
		}

		public articles: NewArticleModel[] = []
}
