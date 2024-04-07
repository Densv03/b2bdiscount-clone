import { Component, Input, OnInit } from '@angular/core';
import { NewArticleModel } from '../../../../../../../core/models/blog/new-article.model';
import { SvgIconComponent } from 'angular-svg-icon';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { DatePipe } from '@angular/common';
import { BlogCategoriesEnum } from '../../../../../../../core/enums/blog-categories.enum';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'b2b-trade-guides-or-logistics',
  standalone: true,
	imports: [
		SvgIconComponent,
		B2bNgxImageModule,
		DatePipe,
		RouterLink,
	],
  templateUrl: './trade-guides-or-logistics.component.html',
  styleUrl: './trade-guides-or-logistics.component.scss'
})
export class TradeGuidesOrLogisticsComponent implements OnInit {
	@Input() isGuides: boolean = true;
	@Input() set articles(value: NewArticleModel[]) {
		if (value?.length  > 0) {
			this.posts = value;
		}
	}

	public posts: NewArticleModel[];
	public sectionTitle: string;
	public link: string;

	ngOnInit(): void {
		this.link = this.isGuides ? '/blog/trade-guide' : '/blog/logistics-and-supply-chain'
		this.sectionTitle = this.isGuides ? BlogCategoriesEnum.TradeGuide : BlogCategoriesEnum.LogisticsSupplyChain;
	}
}
