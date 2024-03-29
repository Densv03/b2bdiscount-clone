import {
	ChangeDetectionStrategy,
	Component, Inject,
	Input,
	OnInit,
} from '@angular/core';
import { ClientMarketplaceService } from '../../../../client-marketplace.service';
import { Observable } from 'rxjs';
import { MarketProductModel } from '../../../../models/market-product.model';
import { PaginationParamsModel } from '../../../../../../../core/models/pagination-params.model';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import {DeviceExtension} from "../../../../../../../core/helpers/function/deviceExtension";
import {DOCUMENT} from "@angular/common";

@Component({
	selector: 'b2b-company-products',
	templateUrl: './company-products.component.html',
	styleUrls: ['./company-products.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyProductsComponent implements OnInit {
	@Input() userId: string;
	public products$: Observable<MarketProductModel[]> =
		this.marketService.supplierListing$;
	public totalProductsLength$: Observable<number> =
		this.marketService.supplierListingLength$;
	public PRODUCTS_LIMIT = 6;
	public isMobile: boolean = this.checkIsMobile();

	private filteredQueryObj: PaginationParamsModel = {
		limit: this.PRODUCTS_LIMIT,
		offset: 0,
	};

	constructor(private marketService: ClientMarketplaceService,
							@Inject(DOCUMENT) private readonly document: Document) {}

	ngOnInit(): void {
		this.marketService.updateSupplierProducts(
			this.userId,
			this.filteredQueryObj
		);
	}
	private checkIsMobile(): boolean {
		return this.document.defaultView.innerWidth < 576;
	}
}
