import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoriesService } from '../../../../services/categories/categories.service';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { Router } from '@angular/router';
import { HeaderService } from '../../header.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'b2b-sectors-list',
	templateUrl: './sectors-list.component.html',
	styleUrls: ['./sectors-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('fadeIn', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate('1s', style({ opacity: 1 })),
			]),
		]),
	],
})
export class SectorsListComponent {
	public readonly categories$: Observable<any> =
		this.categoriesService.getCategories$();
	constructor(
		private readonly categoriesService: CategoriesService,
		private readonly headerService: HeaderService,
		private readonly router: Router
	) {}

	public getCategoryIconLink(icon: string): string {
		return `/assets/icons/header/sectors/${icon}.svg`;
	}

	public changePopupState() {
		this.headerService.updatePopupState({
			...this.headerService.getPopupStateValue(),
			popupIsOpened: false,
		});
	}
}
