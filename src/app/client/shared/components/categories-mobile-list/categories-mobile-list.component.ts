import { Component } from '@angular/core';
import { Category } from '../../../pages/client-marketplace/shared/models/category.model';
import { B2bNgxLinkThemeEnum } from '@b2b/ngx-link';

@Component({
	selector: 'b2b-categories-mobile-list',
	templateUrl: './categories-mobile-list.component.html',
	styleUrls: ['./categories-mobile-list.component.scss'],
})
export class CategoriesMobileListComponent {
	public category: Category;
	public readonly b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;
	public showAllCategoriesButton: boolean = false;
}
