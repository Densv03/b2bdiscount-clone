import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientMarketplaceService } from '../../../../../../../src/app/client/pages/client-marketplace/client-marketplace.service';
import { PaginationParamsModel } from '../../../../../../../src/app/core/models/pagination-params.model';
import { filter, Observable } from 'rxjs';
import { ConfirmationDialogComponent } from '../../../../../../../src/app/client/shared/components/confirmation-dialog/confirmation-dialog.component';
import { B2bNgxButtonThemeEnum } from 'projects/ngx-button/src/public-api';
import { untilDestroyed } from '@ngneat/until-destroy';
import { HotToastService } from '@ngneat/hot-toast';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'b2b-admin-supplier-product-list',
	templateUrl: './admin-supplier-product-list.component.html',
	styleUrls: ['./admin-supplier-product-list.component.scss'],
})
export class AdminSupplierProductListComponent implements OnInit {
	public marketplaceProducts$ =
		this.clientMarketplaceService.marketplaceProducts$;
	public productsTotalLength$: Observable<any> =
		this.clientMarketplaceService.marketplaceProductsLength$;
	public menuOptions = this.getMenuOptions();
	public filteredQueryObj: PaginationParamsModel = {
		limit: 10,
		offset: 0,
	};

	constructor(
		private route: ActivatedRoute,
		private clientMarketplaceService: ClientMarketplaceService,
		private router: Router,
		private hotToastService: HotToastService,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.clientMarketplaceService.updateProductsByAdmin(
			{ limit: 10, offset: 0 },
			{ supplierId: this.route.snapshot.params['id'] }
		);
	}

	public togglePage(pageNumber: number): void {
		this.filteredQueryObj = {
			limit: 10,
			offset: (pageNumber - 1) * this.filteredQueryObj.limit,
		};
		this.clientMarketplaceService.updateProductsByAdmin(this.filteredQueryObj, {
			supplierId: this.route.snapshot.params['id'],
		});
	}

	public redirectToProductDetails(product: any): void {
		const queryParams = this.route.snapshot.queryParams;
		this.router.navigate(['/b2bmarket', 'listing', 'products', product._id], {
			queryParams: {
				admin: true,
				...queryParams,
			},
		});
	}

	private getMenuOptions() {
		return [
			{
				label: 'Delete',
				icon: 'delete-red',
				onClick: (marketplaceItem: { id: string }) => {
					this.dialog
						.open(ConfirmationDialogComponent, {
							data: {
								title: 'Delete product',
								message: 'Are you sure you want to delete this product?',
								confirmButtonText: 'Delete',
								confirmButtonTheme: B2bNgxButtonThemeEnum.BACKGROUND_RED,
								cancelButtonText: 'Cancel',
								cancelButtonTheme: B2bNgxButtonThemeEnum.OUTLINE_BLACK,
							},
						})
						.afterClosed()
						.pipe(filter((data) => !!data))
						.subscribe(() => {
							this.deleteProductByAdmin(marketplaceItem.id);
						});
				},
			},
			{
				label: 'approve by admin',
				icon: 'check',
				onClick: (marketplaceItem: { _id: string }) => {
					this.clientMarketplaceService
						.approveProductByAdmin(marketplaceItem._id)
						.pipe(
							untilDestroyed(this),
							this.hotToastService.observe({
								loading: 'Approving...',
								success: 'Approved successfully',
								error: 'Approving error',
							})
						)
						.subscribe();
				},
			},
			{
				label: 'decline by admin',
				icon: 'cross',
				onClick: (marketplaceItem: { _id: string }) => {
					this.clientMarketplaceService
						.declineProductByAdmin(marketplaceItem._id)
						.pipe(
							untilDestroyed(this),
							this.hotToastService.observe({
								loading: 'Declining...',
								success: 'Declined successfully',
								error: 'Declining error',
							})
						)
						.subscribe();
				},
			},
		];
	}

	private deleteProductByAdmin(id: string): void {
		this.clientMarketplaceService
			.deleteProductByAdmin(id)
			.pipe(
				untilDestroyed(this),
				this.hotToastService.observe({
					loading: 'Deleting...',
					success: 'Deleted successfully',
					error: 'Error while deleting',
				})
			)
			.subscribe();
	}
}
