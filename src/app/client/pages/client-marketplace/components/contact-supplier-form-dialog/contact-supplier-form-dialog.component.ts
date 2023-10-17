import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import {
	MAT_DIALOG_DATA,
	MatDialogModule,
	MatDialogRef,
} from '@angular/material/dialog';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { getName } from 'country-list';
import { B2bNgxSelectModule, B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { BehaviorSubject, Observable, of, map } from 'rxjs';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { B2bNgxTextareaModule } from '@b2b/ngx-textarea';
import { B2bNgxInputModule, B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxCheckboxModule } from '@b2b/ngx-checkbox';
import { B2bNgxButtonModule, B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { B2bNgxCountrySelectModule } from '@b2b/ngx-country-select';
import { MarketProductModel } from '../../models/market-product.model';
import { ClientMarketplaceService } from '../../client-marketplace.service';
import { PaginationParamsModel } from '../../../../../core/models/pagination-params.model';
import { values } from 'lodash';
import { UnitsService } from '../../../../services/units/units.service';
import { SelectItem } from '../../../client-profile/pages/client-company-information/layout/client-company-information.component';
import { TradebidService } from '../../../client-tradebid/tradebid.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HotToastService } from '@ngneat/hot-toast';
import { CategoriesService } from '../../../../services/categories/categories.service';
import { Category } from '../../shared/models/category.model';
import { first, take } from 'rxjs/operators';
import { MixpanelService } from '../../../../../core/services/mixpanel/mixpanel.service';

@UntilDestroy()
@Component({
	selector: 'b2b-contact-supplier-form-dialog',
	templateUrl: './contact-supplier-form-dialog.component.html',
	styleUrls: ['./contact-supplier-form-dialog.component.scss'],
	imports: [
		CommonModule,
		B2bNgxIconModule,
		UpperCasePipe,
		B2bNgxSelectModule,
		ReactiveFormsModule,
		B2bNgxTextareaModule,
		B2bNgxCheckboxModule,
		B2bNgxButtonModule,
		MatDialogModule,
		B2bNgxInputModule,
		B2bNgxCountrySelectModule,
	],
	standalone: true,
})
export class ContactSupplierFormDialogComponent implements OnInit {
	public b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	public b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public supplierForm: FormGroup = new FormGroup({
		baseForm: this.getBaseForm(),
	});

	public isFormValid$: Observable<boolean>;
	public products$: Observable<any[]> = this.suppliersProducts();
	public tradeTerms$: Observable<any[]> = this.getTradeTerms();
	public units$: Observable<any> = this.setUnitsValue();
	private isFormExpandedSource: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);
	public isFormExpanded$: Observable<boolean> =
		this.isFormExpandedSource.asObservable();

	private filteredQueryObj: PaginationParamsModel = { limit: 6, offset: 0 };
	private sectorCategories: Category[];

	constructor(
		private dialogRef: MatDialogRef<ContactSupplierFormDialogComponent>,
		private readonly marketplaceService: ClientMarketplaceService,
		private readonly unitsService: UnitsService,
		private readonly tradeBidService: TradebidService,
		private readonly hotToastService: HotToastService,
		private readonly categoriesService: CategoriesService,
		private readonly mixpanelService: MixpanelService,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	public ngOnInit(): void {
		this.categoriesService
			.getCategories$()
			.pipe(
				map(({ categories }) =>
					categories.filter((category: Category) => category.children.length)
				),
				untilDestroyed(this)
			)
			.subscribe((categories) => (this.sectorCategories = categories));

		this.isFormValid$ = this.supplierForm.statusChanges.pipe(
			map((status) => status === 'VALID')
		);
		this.marketplaceService.updateSupplierProducts(
			this.data.product.user,
			this.filteredQueryObj
		);
	}

	public getIsFormExpanded(): boolean {
		return this.isFormExpandedSource.getValue();
	}

	public getCountryName(countryCode: string): string {
		return getName(countryCode) || '';
	}

	public toggleExpandForm(): void {
		this.isFormExpandedSource.next(!this.isFormExpandedSource.getValue());
		if (this.getIsFormExpanded()) {
			this.dialogRef.updateSize('729px', '711px');
			this.supplierForm.addControl('expandedForm', this.getExpandedForm());
		} else {
			this.dialogRef.updateSize('729px', '523px');
			this.supplierForm.removeControl('expandedForm');
			this.isFormValid$ = of(this.supplierForm.status === 'VALID');
		}
	}

	public send(): void {
		let formValue = { ...this.supplierForm.value.baseForm };

		if (this.supplierForm.value?.expandedForm) {
			formValue = { ...formValue, ...this.supplierForm.value?.expandedForm };
			this.tradeBidService
				.createRFQ(formValue)
				.pipe(untilDestroyed(this))
				.subscribe((el) => {
					const selectedSector = this.sectorCategories.find(
						(category: Category) =>
							category.children.find(
								(childCategory: Category) =>
									childCategory._id === this.data?.product?.category?._id
							)
					).name;
					this.mixpanelService.track('New RFQ posted', {
						'Product Sector': selectedSector,
						Destination: getName(el.destination.to),
					});
					this.hotToastService.success('Your request was successfully sent');
					this.dialogRef.close(formValue);
				});
			return;
		}
		this.dialogRef.close(formValue);
	}

	private suppliersProducts(): Observable<any> {
		return this.marketplaceService.supplierListing$.pipe(
			map((products) => {
				return products.map((product) => {
					return { label: product.title, value: product.title };
				});
			})
		);
	}

	private setUnitsValue(): Observable<any> {
		return this.unitsService.getUnits().pipe(
			map((units) => {
				return units.map((unit: { displayName: any; _id: any }) => {
					return { label: unit.displayName, value: unit._id };
				});
			})
		);
	}

	private getTradeTerms(): Observable<SelectItem[]> {
		return this.tradeBidService.getObservableForSelect([
			'FCA',
			'EXW',
			'CPT',
			'CIP',
			'DAP',
			'DPU',
			'DDP',
			'FAS',
			'FOB',
			'CFR',
			'CIF',
			'USD',
		]);
	}

	private getBaseForm(): FormGroup {
		return new FormGroup({
			productName: new FormControl(
				this.data.product.title || null,
				Validators.required
			),
			moreInformation: new FormControl(null, Validators.required),
		});
	}

	private getExpandedForm(): FormGroup {
		return new FormGroup({
			tradeTerms: new FormControl(null, Validators.required),
			destination: new FormControl(null, Validators.required),
			amount: new FormControl(null, Validators.required),
			unit: new FormControl(null, Validators.required),
		});
	}
}
