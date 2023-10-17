import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { first, Observable, of } from 'rxjs';
import { RfqButtonTypeEnum } from '../../../client-profile-tradebid/client-profile-tradebid-rfq/shared/enums/RfqButtonType.enum';
import { SortType } from '../../../../../../../core/models/sort-type.model';
import { B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { ClientMarketplaceService } from '../../../../../../shared/services/client-marketplace-service/client-marketplace.service';
import { FormControl, FormGroup } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'b2b-client-profile-marketplace-products',
	templateUrl: './client-profile-marketplace-products.component.html',
	styleUrls: ['./client-profile-marketplace-products.component.scss'],
})
export class ClientProfileMarketplaceProductsComponent implements OnInit {
	@Input() products$: Observable<any[]> = of([]);

	@Output() archive: EventEmitter<void> = new EventEmitter<void>();

	public rfqButtonTypeEnum = RfqButtonTypeEnum;
	public marketplaceSkeletonOptions: any =
		this.clientMarketplaceService.getMarketplaceSkeletonOptions();
	public loading$: Observable<boolean> = this.clientMarketplaceService.loading$;

	public sortTypes: SortType[] = this.getSortTypes();
	public readonly b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	public form: FormGroup = new FormGroup({
		sort: new FormControl(),
	});
	public userHasProducts = false;

	constructor(private clientMarketplaceService: ClientMarketplaceService) {}

	ngOnInit() {
		this.products$
			.pipe(
				filter((data: any[]) => !!data.length),
				first()
			)
			.subscribe(() => (this.userHasProducts = true));
	}

	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;

	public updateSortType(e: SortType): void {
		this.clientMarketplaceService.updateManageProducts(0, e.value);
	}
	private getSortTypes(): SortType[] {
		return [
			{
				value: null,
				label: 'All',
			},
			{
				value: 'published',
				label: 'Published',
			},
			{
				value: 'hide',
				label: 'Archival',
			},
		];
	}
}
