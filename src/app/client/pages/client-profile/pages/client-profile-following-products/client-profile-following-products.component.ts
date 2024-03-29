import {
	AfterViewInit,
	ChangeDetectionStrategy, ChangeDetectorRef,
	Component,
	ElementRef,
	OnInit,
} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {filter, first, map} from 'rxjs/operators';
import {AuthService} from '../../../../../auth/services/auth/auth.service';
import {CategoriesService} from '../../../../services/categories/categories.service';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {SvgIconComponent} from 'angular-svg-icon';
import {PlatformService} from '../../../../services/platform/platform.service';
import {
	Category,
	CategoryChildren,
} from '../../../client-marketplace/shared/models/category.model';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {
	CategoriesMobileListComponent
} from '../../../../shared/components/categories-mobile-list/categories-mobile-list.component';
import {SectorsModalComponent} from './components/sectors-modal/sectors-modal.component';
import {PublicCompanyInfoModel} from '../../../../../core/models/public-company-info.model';

@Component({
	selector: 'b2b-client-profile-following-products',
	standalone: true,
	imports: [AsyncPipe, JsonPipe, SvgIconComponent, MatButton],
	templateUrl: './client-profile-following-products.component.html',
	styleUrl: './client-profile-following-products.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientProfileFollowingProductsComponent implements OnInit, AfterViewInit {
	public companyCategories$: Observable<Category[]>;
	public platformIsBrowser = this.platformService.isBrowser;
	public initialCategories$: Observable<Category[]>;
	private companyCategoriesSource: BehaviorSubject<Category[]> =
		new BehaviorSubject<Category[]>([]);
	private company: PublicCompanyInfoModel;
	private initialCategoriesSource: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>(null);

	constructor(
		private readonly userService: UserService,
		private readonly platformService: PlatformService,
		private readonly categoriesService: CategoriesService,
		private readonly dialog: MatDialog,
		private readonly authService: AuthService,
		private readonly cdr: ChangeDetectorRef
	) {
	}

	ngOnInit() {
		this.companyCategories$ = this.companyCategoriesSource.asObservable();
		this.initialCategories$ = this.initialCategoriesSource.asObservable();
		this.fetchCompanyCategories();
		this.updateCategoriesOnInfoChange();
		this.getCategories();
	}

	ngAfterViewInit() {
		this.cdr.detectChanges();
	}

	private getCategories(): any {
		this.categoriesService.getCategories$()
			.pipe(
				filter(({categories}) => categories.length > 0),
				map(({categories}) => categories),
				first()
			)
			.subscribe(data => {
				this.initialCategoriesSource.next(data);
			})
	}

	public openSectorsDialog(): void {
		const dialog = this.dialog.open(SectorsModalComponent, {
			panelClass: 'categories-list-mobile',
		});
		dialog.componentInstance.sectors =
			this.categoriesService.getCategories().categories;
		dialog.componentInstance.company = this.company;

		dialog.afterClosed().pipe(first()).subscribe(() => {
			this.cdr.detectChanges();
		})
	}

	public generateSectorIconPath(path: string): string {
		return `/assets/icons/header/sectors/${path}.svg`;
	}

	public toggleOpenedBody(itemBody: HTMLDivElement) {
		itemBody.classList.toggle('opened');
	}

	private fetchCompanyCategories(): void {
		if (this.authService.company) {
			this.company = this.authService.company;
		} else {
			this.authService
				.getCompany$()
				.pipe(
					filter((company) => !!company),
					first(),
					map((company) => {
						this.company = company;
					})
				)
				.subscribe();
		}
	}

	private findCompanyCategories(arr: string[]): void {
		combineLatest([of(arr), this.initialCategories$])
			.pipe(
				filter(([selectedCategories, initialCategories]) => !!selectedCategories && !!initialCategories),
				first()
			)
			.subscribe(([selectedCategories, initialCategories]) => {
				const temp: Category[] = [];
				for (let parentCategory of initialCategories) {
					const childCategories: CategoryChildren[] = [];
					let parent: Category = JSON.parse(JSON.stringify(parentCategory));
					for (let childCategory of parentCategory.children) {
						if (selectedCategories.includes(childCategory._id)) {
							childCategories.push(childCategory);
						}
					}
					if (childCategories.length) {
						parent.children = childCategories;
						temp.push(parent);
					}
				}
				this.companyCategoriesSource.next(temp);
			})
	}

	private updateCategoriesOnInfoChange(): void {
		this.authService.getCompany$().subscribe(({categories}) => {
			this.findCompanyCategories(categories);
		});
	}
}
