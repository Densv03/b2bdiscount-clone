import { Component, Inject, OnInit } from '@angular/core';
import {
	MAT_DIALOG_DATA,
	MatDialogModule,
	MatDialogRef,
} from '@angular/material/dialog';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { getName } from 'country-list';
import { B2bNgxSelectModule, B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { BehaviorSubject, map, Observable } from 'rxjs';
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
import { ClientMarketplaceService } from '../../client-marketplace.service';
import { PaginationParamsModel } from '../../../../../core/models/pagination-params.model';
import { UnitsService } from '../../../../services/units/units.service';
import { SourcingRequestService } from '../../../client-sourcing-request/sourcing-request.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HotToastService } from '@ngneat/hot-toast';
import { CategoriesService } from '../../../../services/categories/categories.service';
import { Category } from '../../shared/models/category.model';
import { MixpanelService } from '../../../../../core/services/mixpanel/mixpanel.service';
import { first, tap } from 'rxjs/operators';
import {
	SelectItem
} from "../../../client-profile/pages/client-profile-settings-new/tabs/client-company-information/client-company-information.interface";
import { MarketProductModel } from '../../models/market-product.model';

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
	public products$: Observable<any[]> = this.suppliersProducts();
	public tradeTerms$: Observable<any[]> = this.getTradeTerms();
	public units$: Observable<any>;
	private isFormValidSource: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);
	private unitsSource: BehaviorSubject<any> = new BehaviorSubject<any>([]);
	public isFormValid$: Observable<boolean> =
		this.isFormValidSource.asObservable();
	private isFormExpandedSource: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);
	public isFormExpanded$: Observable<boolean> =
		this.isFormExpandedSource.asObservable();

	private supplierProductsSource: BehaviorSubject<{ label: string, value: string }[]> = new BehaviorSubject<{label: string; value: string}[]>(null);
	private filteredQueryObj: PaginationParamsModel = {
		limit: 6,
		offset: 0,
	};
	private sectorCategories: Category[];

	constructor(
		private dialogRef: MatDialogRef<ContactSupplierFormDialogComponent>,
		private readonly marketplaceService: ClientMarketplaceService,
		private readonly unitsService: UnitsService,
		private readonly sourcingRequestService: SourcingRequestService,
		private readonly hotToastService: HotToastService,
		private readonly categoriesService: CategoriesService,
		private readonly mixpanelService: MixpanelService,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	public ngOnInit(): void {
		this.units$ = this.unitsSource.asObservable();

		this.setUnitsValue();
		this.categoriesService
			.getCategories$()
			.pipe(
				map(({ categories }) =>
					categories.filter((category: Category) => category.children.length)
				),
				untilDestroyed(this)
			)
			.subscribe((categories) => (this.sectorCategories = categories));

		this.supplierForm.statusChanges
			.pipe()
			.subscribe((status) => this.isFormValidSource.next(status === 'VALID'));
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
			this.supplierForm.addControl('expandedForm', this.getExpandedForm());
			this.supplierForm.updateValueAndValidity();
			this.supplierForm
				.get('expandedForm')
				.get('quantity')
				.valueChanges.subscribe((value) => {
					this.setUnitsValue(value);
				});
		} else {
			this.supplierForm.removeControl('expandedForm');
			this.supplierForm.updateValueAndValidity();
		}
	}

	public send(): void {
		let formValue = { ...this.supplierForm.value.baseForm };

		if (this.supplierForm.value?.expandedForm) {
			const category = this.data.product.category;
			formValue = {
				...formValue,
				...this.supplierForm.value?.expandedForm,
				productName: this.supplierProductsSource.getValue().find(product => this.supplierForm.value.baseForm.productName === product.value).label,
				category: category instanceof Array ? category[0]._id : category._id,
			};
			this.sourcingRequestService
				.createRFQ(formValue)
				.pipe(untilDestroyed(this))
				.subscribe((el) => {
					const selectedSector = this.sectorCategories.find(
						(category: Category) => {
							if (category?.children) {
								return category?.children.find(
									(childCategory: Category) =>
										childCategory._id === this.data?.product?.category[0]?._id
								);
							}
							return category._id;
						}
					)?.name;
					this.mixpanelService.track('New RFQ posted', {
						'Product Category': selectedSector,
						Destination: getName(el.destination.to),
						Source: 'Message Form',
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
				const suppliersProducts = products.map((product) => {
					return {
						label: product.title,
						value: product._id,
					};
				});

				this.supplierProductsSource.next(suppliersProducts);

				return suppliersProducts;
			})
		);
	}

	private setUnitsValue(amount: number = 0): void {
		this.unitsService
			.getUnits()
			.pipe(
				map((units) => {
					return units.map(
						(unit: {
							displayName: string;
							_id: any;
							pluralDisplayName: string;
						}) => {
							return {
								label: amount > 1 ? unit.pluralDisplayName : unit.displayName,
								value: unit._id,
							};
						}
					);
				})
			)
			.subscribe((units) => {
				this.unitsSource.next(units);
			});
	}

	private getTradeTerms(): Observable<SelectItem[]> {
		return this.sourcingRequestService.getObservableForSelect([
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
				this.data.product._id || null,
				Validators.required
			),
			moreInformation: new FormControl(null, Validators.required),
		});
	}

	private getExpandedForm(): FormGroup {
		return new FormGroup({
			tradeTerms: new FormControl(null, Validators.required),
			destination: new FormControl(null, Validators.required),
			quantity: new FormControl(null, Validators.required),
			unitMeasure: new FormControl(null, Validators.required),
		});
	}
}
