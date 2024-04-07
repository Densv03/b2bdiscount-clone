import { Component, Input } from '@angular/core';
import { NewArticleModel } from '../../../../../../../core/models/blog/new-article.model';
import { SvgIconComponent } from 'angular-svg-icon';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'b2b-market-updates-section',
  standalone: true,
	imports: [
		SvgIconComponent,
		B2bNgxImageModule,
		DatePipe,
		NgOptimizedImage,
		RouterLink,
	],
  templateUrl: './market-updates-section.component.html',
  styleUrl: './market-updates-section.component.scss'
})
export class MarketUpdatesSectionComponent {
	@Input() set articles(value: NewArticleModel[]) {
		if (value?.length  > 0) {
			this.posts = value;
		}
	}

	public posts: NewArticleModel[];
}
