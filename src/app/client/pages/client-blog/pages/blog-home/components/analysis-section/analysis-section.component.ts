import { Component, Input } from '@angular/core';
import { NewArticleModel } from '../../../../../../../core/models/blog/new-article.model';
import { SvgIconComponent } from 'angular-svg-icon';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'b2b-analysis-section',
  standalone: true,
	imports: [
		SvgIconComponent,
		B2bNgxImageModule,
		DatePipe,
		RouterLink,
	],
  templateUrl: './analysis-section.component.html',
  styleUrl: './analysis-section.component.scss'
})
export class AnalysisSectionComponent {
	@Input() set articles(value: NewArticleModel[]) {
		if (value?.length  > 0) {
			this.posts = value;
		}
	}

	public posts: NewArticleModel[];
}
