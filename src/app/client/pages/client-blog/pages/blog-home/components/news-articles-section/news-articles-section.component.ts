import { Component, Input } from '@angular/core';
import { BlogResponseModel } from '../../../../../../../core/models/blog/blog-response.model';
import { PostModel } from '../../../../../../../core/models/blog/post.model';
import { PlatformService } from '../../../../../../services/platform/platform.service';
import { MatIcon } from '@angular/material/icon';
import { SvgIconComponent } from 'angular-svg-icon';
import { NewArticleModel } from '../../../../../../../core/models/blog/new-article.model';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'b2b-news-articles-section',
  standalone: true,
	imports: [
		MatIcon,
		SvgIconComponent,
		DatePipe,
		RouterLink,
	],
  templateUrl: './news-articles-section.component.html',
  styleUrl: './news-articles-section.component.scss'
})
export class NewsArticlesSectionComponent {
	public posts: NewArticleModel[];
	@Input() set newsArticles(value: NewArticleModel[]) {
		if (value?.length > 0) {
			this.posts = value;
		}
	}
}
