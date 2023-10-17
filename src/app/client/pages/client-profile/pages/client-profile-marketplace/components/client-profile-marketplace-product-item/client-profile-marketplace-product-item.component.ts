import { Component, Input, OnInit } from '@angular/core';
import { EditMode } from '../client-profile-marketplace-edit-product/client-profile-marketplace-edit-product.component';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { MarketProductModel } from '../../../../../../../core/models/client-marketplace/market-product.model';
import { ClientMarketplaceService } from '../../../../../../shared/services/client-marketplace-service/client-marketplace.service';
import { dropdownLabels } from '@b2b/ngx-dropdown';
import { MixpanelService } from '../../../../../../../core/services/mixpanel/mixpanel.service';
import { getName } from 'country-list';
import { PlatformService } from '../../../../../../services/platform/platform.service';

@Component({
	selector: 'b2b-client-profile-marketplace-product-item',
	templateUrl: './client-profile-marketplace-product-item.component.html',
	styleUrls: ['./client-profile-marketplace-product-item.component.scss'],
})
export class ClientProfileMarketplaceProductItemComponent implements OnInit {
	@Input() product: MarketProductModel;
	@Input() public itemsForDropdown: any[] = [];

	public readonly isMobile = this.platformService.isServer
		? false
		: window.innerWidth < 576;

	constructor(
		private clientMarketplaceService: ClientMarketplaceService,
		private router: Router,
		private hotToastService: HotToastService,
		private readonly mixpanelService: MixpanelService,
		private platformService: PlatformService
	) {}

	public ngOnInit(): void {
		this.updateItemsForDropDown();
	}

	private updateItemsForDropDown(): void {
		if (this.product.hidden) {
			this.itemsForDropdown = this.getItemsForArchiveDropdown();
		} else {
			this.itemsForDropdown = this.getItemsForProductsDropdown();
		}
	}

	private getItemsForArchiveDropdown(): any[] {
		return [
			{
				label: dropdownLabels.RESTORE,
				icon: 'edit',
				onClick: (product: any, paymentMethods: string | any[]) => {
					if (!paymentMethods.length) {
						this.router.navigate(
							['/profile/your-workspace/b2bmarket/edit', product._id],
							{ queryParams: { mode: EditMode.ARCHIVE } }
						);
						this.hotToastService.warning('Please edit product info firstly');
					} else {
						this.clientMarketplaceService
							.restoreProduct(product._id)
							.pipe(
								this.hotToastService.observe({
									loading: 'Restoring product...',
									success: 'Product restored',
									error: 'Error restoring product',
								})
							)
							.subscribe(() => {
								this.mixpanelService.track('Archived product posted', {
									'Product Category': product.category[0]?.name,
									"Supplier's Country": getName(product.company[0].country),
									'Product Count':
										product.amount.count + ' ' + product.amount.unit?.name,
									'Posting Date': Date(),
								});
								this.clientMarketplaceService.updateManageProducts();
							});
					}
				},
			},
			{
				label: dropdownLabels.DELETE,
				icon: 'delete-red',
				onClick: (product: any) => {
					this.deleteProduct(product);
				},
			},
			{
				label: dropdownLabels.EDIT,
				icon: 'edit',
				onClick: (product: any) => {
					this.router.navigate(
						['profile', 'your-workspace', 'b2bmarket', 'edit', product._id],
						{
							queryParams: { mode: EditMode.ARCHIVE },
						}
					);
				},
			},
		];
	}

	private deleteProduct(product: any): void {
		this.clientMarketplaceService
			.deleteProduct(product._id)
			.pipe(
				this.hotToastService.observe({
					loading: 'Deleting product...',
					success: 'Product deleted',
					error: 'Error deleting product',
				})
			)
			.subscribe(() => {
				this.mixpanelService.track('Product deleted', {
					'Product Category': product.category[0]?.name,
					"Supplier's Country": getName(product.company[0].country),
					'Product Count':
						product.amount.count + ' ' + product.amount.unit?.name,
					'Deletion Date': Date(),
				});
				this.clientMarketplaceService.updateManageProducts();
			});
	}

	private getItemsForProductsDropdown(): any[] {
		return [
			{
				label: dropdownLabels.EDIT,
				icon: 'edit',
				onClick: (product: any) => {
					this.router.navigate(
						['profile', 'your-workspace', 'b2bmarket', 'edit', product._id],
						{
							queryParams: { mode: EditMode.EDIT },
						}
					);
				},
			},
			{
				label: dropdownLabels.ARCHIVE,
				icon: 'archive-red',
				onClick: (product: any) => {
					this.clientMarketplaceService
						.archiveProduct(product._id)
						.pipe(
							this.hotToastService.observe({
								loading: 'Archiving product...',
								success: 'Product archived',
								error: 'Error archiving product',
							})
						)
						.subscribe(() => {
							this.mixpanelService.track('Product archived', {
								'Product Category': product.category[0]?.name,
								"Supplier's Country": getName(product.company[0].country),
								'Product Count':
									product.amount.count + ' ' + product.amount.unit?.name,
								'Archivation Date': Date(),
							});
							this.clientMarketplaceService.updateManageProducts();
						});
				},
			},
		];
	}

	public restoreProduct(id: string): void {
		this.clientMarketplaceService
			.restoreProduct(id)
			.pipe(
				this.hotToastService.observe({
					loading: 'Restoring product...',
					success: 'Product restored',
					error: 'Error restoring product',
				})
			)
			.subscribe(() => {
				this.clientMarketplaceService.updateManageProducts();
			});
	}
}
