import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategoriesService } from '../../../../services/categories/categories.service';
import { first, map } from 'rxjs/operators';
import { Category } from '../../shared/models/category.model';

@Injectable({
	providedIn: 'root',
})
export class ChipsService {
	private filterChipsSource: BehaviorSubject<any[]> = new BehaviorSubject<
		any[]
	>([]);
	private selectedMarketCategorySource: BehaviorSubject<any> =
		new BehaviorSubject(null);

	get selectedMarketCategory$(): Observable<any> {
		return this.selectedMarketCategorySource.asObservable();
	}

	get filterChips$() {
		return this.filterChipsSource.asObservable();
	}

	constructor(private readonly categoriesService: CategoriesService) {}

	public getLastChipsCategory(): { [key: string]: any } {
		const categoryChipsArr = this.filterChipsSource
			.getValue()
			.filter(
				(item: { [key: string]: string | number }) =>
					item['filterName'] === 'categories[]'
			);
		return categoryChipsArr[categoryChipsArr.length - 1];
	}

	public updateSelectedMarketCategory(category: Category): void {
		this.selectedMarketCategorySource.next(category);
	}

	public updateSelectedMarketCategorySource(lastCategoryId: string): void {
		const categoriesArr = this.categoriesService.getCategories()['categories'];
		let category = null;
		if (categoriesArr && categoriesArr.length) {
			categoriesArr.map((parentCategory: Category) => {
				parentCategory._id === lastCategoryId
					? (category = parentCategory)
					: null;

				for (const childCategory of parentCategory.children) {
					childCategory._id === lastCategoryId
						? (category = childCategory)
						: null;
				}
				return parentCategory;
			});
		}
		if (category) {
			this.selectedMarketCategorySource.next(
				category['description'] ? category : null
			);
		}
	}

	getChipsSource(): any[] {
		return this.filterChipsSource.getValue();
	}

	getChipsLength(): number {
		return this.filterChipsSource.getValue().length;
	}

	public updateFilterChips(filter: { [key: string]: string }): void {
		if (filter) {
			const arr = [...this.filterChipsSource.getValue(), filter];
			this.filterChipsSource.next(arr);
		}
	}

	public removeChipsByHiddenLabel(hiddenLabel: string): void {
		const arr = this.filterChipsSource
			.getValue()
			.filter((item) => item.filterName !== hiddenLabel);
		this.filterChipsSource.next(arr);
	}

	public updateChips(filter: Array<{ [key: string]: string }>): void {
		this.filterChipsSource.next(filter);
	}

	public removeChip(option: any): void {
		const arr = this.filterChipsSource
			.getValue()
			.filter((item) => item.path !== option.value);
		this.filterChipsSource.next(arr);
	}

	public resetChips(): void {
		this.filterChipsSource.next([]);
	}

	private areObjectsEqual(obj1: any, obj2: any): boolean {
		if (Object.keys(obj1).length !== Object.keys(obj2).length) {
			return false;
		}

		for (const key in obj1) {
			const value1 = obj1[key];
			const value2 = obj2[key];

			if (typeof value1 === 'object' && typeof value2 === 'object') {
				if (!this.areObjectsEqual(value1, value2)) {
					return false;
				}
			} else if (value1 !== value2) {
				return false;
			}
		}

		return true;
	}
}
