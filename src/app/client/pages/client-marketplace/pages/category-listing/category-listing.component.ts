import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryListingService } from './category-listing.service';
import { Observable } from 'rxjs';
import { Category } from '../../shared/models/category.model';

interface HeaderLinks {
  link: string;
  label: string;
}

@Component({
  selector: 'b2b-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListingComponent {
  public categories$: Observable<Category[]> =
    this.categoryListingService.presentCategoriesSource$;

  public headerLinks: HeaderLinks[];
  public activeRoute: string;

  constructor(
    private readonly router: Router,
    private readonly categoryListingService: CategoryListingService
  ) {
    this.headerLinks = [
      { link: '/b2bmarket', label: 'B2B Market' },
      { link: '/b2bmarket/category-listing', label: 'B2B sectors' },
    ];
    this.activeRoute = router.url;
  }

  public goToListing(category: Category, product: Category): void {
    if (category.children.length > 0) {
      this.router.navigate(['b2bmarket/listing', category.name]);
    } else {
      this.router.navigate(['b2bmarket/listing', product.name], {
        queryParams: { 'categories[]': category._id },
      });
    }
    localStorage.setItem('categoryId', category._id);
  }
}
