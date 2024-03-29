import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Category, CategoryChildren} from "../../../../shared/models/category.model";
import {B2bNgxImageModule} from "@b2b/ngx-image";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'b2b-market-category-card',
  standalone: true,
	imports: [
		B2bNgxImageModule,
		RouterLink
	],
  templateUrl: './market-category-card.component.html',
  styleUrl: './market-category-card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketCategoryCardComponent {

	@Input() category: Category;
	@Input() childCategory: CategoryChildren;


	categoryLink(category: Category, childCategory: CategoryChildren) {
		return ['/b2bmarket/listing', category.path, childCategory.path]
	}
}
