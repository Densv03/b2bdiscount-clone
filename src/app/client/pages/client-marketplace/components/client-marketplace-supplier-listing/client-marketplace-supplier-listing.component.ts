import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientMarketplaceService } from '../../client-marketplace.service';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../client-profile/services/user/user.service';
import { PaginationParamsModel } from '../../../../../core/models/pagination-params.model';
import { PublicUserInfo } from '../../../../../core/models/shared/public-user-info';

@Component({
	selector: 'b2b-client-marketplace-supplier-listing',
	templateUrl: './client-marketplace-supplier-listing.component.html',
	styleUrls: ['./client-marketplace-supplier-listing.component.scss'],
})
export class ClientMarketplaceSupplierListingComponent implements OnInit {
	public readonly PRODUCTS_LIMIT = this.clientMarketplaceService.PRODUCTS_LIMIT;

	public supplierId: string = this.route.snapshot.params['id'];
	public supplierProducts$: Observable<any>;
	public totalSupplierProductsLength$: Observable<number>;
	public formGroup: FormGroup;

	public user$: Observable<any>;
	public supplierInfo$: Observable<PublicUserInfo>;
	public products: any[];
	public offersListTheme: 'list' | 'grid' = 'grid';

	private filteredQueryObj: PaginationParamsModel = { limit: 7, offset: 0 };
	private selectedCategories: any[];

	public readonly b2bNgxInputThemeEnum: typeof B2bNgxInputThemeEnum;

	public marketplaceSkeletonSettings: any;
	public loading$: Observable<boolean>;

	constructor(
		private readonly clientMarketplaceService: ClientMarketplaceService,
		private route: ActivatedRoute,
		private userService: UserService
	) {
		this.b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
		this.user$ = this.userService.getUser$();
		this.marketplaceSkeletonSettings =
			this.clientMarketplaceService.getMarketplaceSkeletonOptions();
		this.loading$ = this.clientMarketplaceService.loading$;
	}

	public ngOnInit(): void {
		this.getFormGroup();
		this.clientMarketplaceService.updateSupplierListing(this.supplierId);
		this.supplierInfo$ = this.userService.getPublicUserInfo(this.supplierId);
		this.supplierProducts$ = this.clientMarketplaceService.supplierListing$;
		this.totalSupplierProductsLength$ =
			this.clientMarketplaceService.supplierListingLength$;
	}

	public updateFilter(filter: any): void {
		this.clientMarketplaceService.updateSupplierListing(
			this.supplierId,
			filter.productCategories
		);
		this.selectedCategories = filter.productCategories;
		this.togglePage(1);
	}
	public changeOffersListTheme(theme: 'list' | 'grid') {
		this.offersListTheme = theme;
	}

	public togglePage(pageNumber: number): void {
		// this.filteredQueryObj = { ...this.filteredQueryObj, offset: (pageNumber - 1) * 7 };
		// this.clientMarketplaceService.updateSupplierListing(this.supplierId, this.filteredQueryObj);
		this.clientMarketplaceService.updateSupplierListing(
			this.supplierId,
			this.selectedCategories,
			(pageNumber - 1) * this.PRODUCTS_LIMIT
		);
	}

	public loadMoreProducts(clicksAmount: number): void {
		// this.filteredQueryObj = {...this.filteredQueryObj, limit: this.filteredQueryObj.limit + this.PRODUCTS_LIMIT};
		// this.clientMarketplaceService.updateSupplierListing(this.supplierId,this.filteredQueryObj, clicksAmount);
	}

	private getFormGroup(): void {
		this.formGroup = new FormGroup({
			transportType: new FormControl(null),
			'categories[]': new FormControl(null),
			destinationFrom: new FormControl(null),
			destinationTo: new FormControl(null),
			sort: new FormControl(null),
			q: new FormControl(null),
			offset: new FormControl(0),
			limit: new FormControl(12),
		});
	}
}
