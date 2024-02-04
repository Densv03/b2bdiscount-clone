import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	OnInit,
	ViewChild,
} from '@angular/core';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../../client-profile/services/user/user.service';
import { CategoriesService } from '../../../../services/categories/categories.service';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { AuthService } from '../../../../../auth/services/auth/auth.service';
import { map } from 'rxjs/operators';
import { Category } from '../../shared/models/category.model';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormControl, FormGroup } from '@angular/forms';
import { B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { PlatformService } from '../../../../services/platform/platform.service';
import { SeoService } from '../../../../../core/services/seo/seo.service';
import { B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { CreateRfqDialogComponent } from '../../../client-sourcing-request/components/create-rfq-dialog/create-rfq-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesMobileListComponent } from '../../../../shared/components/categories-mobile-list/categories-mobile-list.component';
import { DialogService } from '../../../../../core/services/dialog-service/dialog.service';

@Component({
	selector: 'b2b-client-marketplace-main',
	templateUrl: './client-marketplace-main.component.html',
	styleUrls: ['./client-marketplace-main.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('fadeAnimation', [
			transition(':enter', [
				style({ height: 0, opacity: 0 }),
				animate('300ms', style({ height: 20, opacity: 1 })),
			]),
			transition(':leave', [
				style({ height: 1, opacity: 1 }),
				animate('300ms', style({ height: 0, opacity: 0 })),
			]),
		]),
	],
})
export class ClientMarketplaceMainComponent implements OnInit {
	@ViewChild('searchInput', { static: true }) searchInput!: ElementRef;

	public formGroup: FormGroup = new FormGroup<any>({
		q: new FormControl(null),
		'categories[]': new FormControl(null),
		level1Category: new FormControl(null),
		level2Category: new FormControl(null),
	});
	public selectedCategory: Category;
	public b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
	public readonly b2bNgxSelectThemeEnum: typeof B2bNgxSelectThemeEnum;
	public readonly user$: Observable<any>;
	public selectedFirstLevelCategoryIndex: number = 0;
	public firstLevelCategories$: Observable<Category[]>;
	public secondLevelCategories: Category[];

	public isAuth$: Observable<boolean>;

	constructor(
		public readonly platformService: PlatformService,
		private readonly router: Router,
		private readonly usersService: UserService,
		private readonly route: ActivatedRoute,
		private readonly categoriesService: CategoriesService,
		private readonly authService: AuthService,
		private readonly userService: UserService,
		private readonly seoService: SeoService,
		private readonly dialog: MatDialog,
		private readonly dialogService: DialogService
	) {
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
		this.user$ = this.usersService.getUser$();
		this.isAuth$ = this.authService.user$.pipe(map((user) => !!user));
	}

	public ngOnInit(): void {
		this.getCategories();
		this.addSeoTags();
	}

	public setSearch(searchValue: string): void {
		this.formGroup.controls['q'].setValue(searchValue);
		this.router.navigate(['listing'], {
			relativeTo: this.route,
			queryParams: { q: searchValue },
		});
	}

	public marSearchFocus(): void {
		this.searchInput.nativeElement.focus();
	}

	public selectCategory(category: Category, index: number): void {
		if (window.innerWidth < 600) {
			const dialog = this.dialog.open(CategoriesMobileListComponent, {
				width: '100%',
				height: '100%',
				maxWidth: '100%',
				panelClass: 'categories-list-mobile',
			});
			dialog.componentInstance.category = category;
			dialog.componentInstance.showAllCategoriesButton = true;
			return;
		}

		this.selectedCategory = category;
		this.selectedFirstLevelCategoryIndex = index;
		this.secondLevelCategories = category.children;
	}

	public createRfq(): void {
		this.dialogService.openDialog(CreateRfqDialogComponent, {
			panelClass: ['add-rfq-popup', 'contact-supplier-form-dialog'],
		});
	}

	public getCategoryImage(categoryImage: string): string {
		return categoryImage[0] === '/' ? categoryImage.slice(1) : categoryImage;
	}

	private getCategories(): void {
		this.firstLevelCategories$ = this.categoriesService.getCategories$().pipe(
			map(({ categories }) => {
				const filteredCategories = categories.filter(
					(category: any) => category.children.length
				);

				if (filteredCategories.length > 0 && window.innerWidth > 600) {
					this.selectCategory(
						filteredCategories[0],
						this.selectedFirstLevelCategoryIndex
					);
				}

				return filteredCategories;
			})
		);
	}

	private addSeoTags() {
		this.seoService.setTitle(
			'Sell or Buy Wholesale Goods Online | Global sourcing | B2B Market'
		);
		this.seoService.setDescription(
			'Explore our catalog of wholesale goods to buy from direct suppliers. Join the B2B marketplace platform to show your products to thousands of users worldwide'
		);
	}
}
