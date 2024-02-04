import { Component, OnInit } from '@angular/core';
import { B2bNgxInputModule, B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { B2bNgxSelectModule, B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { B2bNgxTextareaModule } from '@b2b/ngx-textarea';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { B2bNgxButtonModule, B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { CommonModule } from '@angular/common';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import {
	MatDialog,
	MatDialogModule,
	MatDialogRef,
} from '@angular/material/dialog';
import { B2bNgxCountrySelectModule } from '@b2b/ngx-country-select';
import { onlyNumber } from 'src/app/core/helpers/validator/only-number';
import { CategoriesService } from 'src/app/client/services/categories/categories.service';
import { UnitsService } from 'src/app/client/services/units/units.service';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'src/app/client/pages/client-profile/pages/client-company-information/layout/client-company-information.component';
import { SourcingRequestService } from '../../sourcing-request.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HotToastService } from '@ngneat/hot-toast';
import { ProductCreationCongratsDialogComponent } from '../../../../shared/components/product-creation-congrats-dialog/product-creation-congrats-dialog.component';
import { MixpanelService } from '../../../../../core/services/mixpanel/mixpanel.service';
import { getName } from 'country-list';
import { Category } from '../../../../../core/models/category.model';

@UntilDestroy()
@Component({
	selector: 'b2b-create-rfq-dialog',
	templateUrl: './create-rfq-dialog.component.html',
	styleUrls: ['./create-rfq-dialog.component.scss'],
	imports: [
		CommonModule,
		B2bNgxInputModule,
		B2bNgxSelectModule,
		ReactiveFormsModule,
		B2bNgxTextareaModule,
		B2bNgxButtonModule,
		B2bNgxIconModule,
		MatDialogModule,
		B2bNgxCountrySelectModule,
	],
	standalone: true,
})
export class CreateRfqDialogComponent implements OnInit {
	public b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;

	public rfqFormGroup: FormGroup = new FormGroup({
		productName: new FormControl(null, Validators.required),
		productSector: new FormControl(null, Validators.required),
		category: new FormControl(null, Validators.required),
		quantity: new FormControl(null, [Validators.required, onlyNumber()]),
		moreInformation: new FormControl(null, Validators.required),
		tradeTerms: new FormControl(null, Validators.required),
		destination: new FormControl(null, Validators.required),
		unitMeasure: new FormControl(null, Validators.required),
	});

	public isValid$: Observable<boolean> = this.rfqFormGroup.statusChanges.pipe(
		map((status) => status === 'VALID')
	);

	public units$: Observable<any[]>;
	public level1Categories$: Observable<any[]> = this.getLevel1Categories$();
	public level2Categories$: Observable<any[]> = this.getLevel2Categories$();
	public tradeTerms$: Observable<SelectItem[]> = this.getTradeTerms$();

	private selectedCategory: string;
	constructor(
		private categoriesService: CategoriesService,
		private unitsService: UnitsService,
		private sourcingRequestService: SourcingRequestService,
		private hotToastService: HotToastService,
		private dialogRef: MatDialogRef<ProductCreationCongratsDialogComponent>,
		private dialog: MatDialog,
		private mixpanelService: MixpanelService
	) {}

	public ngOnInit(): void {
		this.getUnit();
		this.initSecondLevelCategoryObserve();
	}

	public selectCategory(category: Category): void {
		this.selectedCategory = category.name;
	}

	public submitForm(): void {
		this.sourcingRequestService
			.createRFQ(this.rfqFormGroup.value)
			.pipe(untilDestroyed(this))
			.subscribe((el) => {
				this.hotToastService.success('Your request was successfully sent');
				this.mixpanelService.track('New RFQ posted', {
					'Product Sector': this.selectedCategory,
					Destination: getName(el.destination.to),
					Source: 'Pop Up',
				});
				this.dialogRef.close(el);
				this.dialog.open(ProductCreationCongratsDialogComponent, {
					panelClass: 'rfq-created-pop-up',
				});
			});
	}

	private getLevel1Categories$(): Observable<any[]> {
		return this.categoriesService
			.getCategories$()
			.pipe(
				map(({ categories }) =>
					categories.filter((category: any) => category.children.length)
				)
			);
	}

	private getLevel2Categories$(): Observable<any[]> {
		return this.rfqFormGroup.get('productSector').valueChanges.pipe(
			switchMap((id) => {
				return this.categoriesService
					.getCategories$()
					.pipe(
						map(
							({ categories }) =>
								categories.find(
									(foundCategory: any) => foundCategory._id === id
								)?.children
						)
					);
			})
		);
	}

	private getUnit$(amount: number): Observable<any[]> {
		return this.unitsService.getUnits().pipe(
			map((units) =>
				units.map(
					(unit: {
						name: string;
						pluralDisplayName: string;
						displayName: string;
					}) => ({
						...unit,
						displayName: amount > 1 ? unit.pluralDisplayName : unit.displayName,
					})
				)
			)
		);
	}

	private getTradeTerms$(): Observable<SelectItem[]> {
		return this.sourcingRequestService.getObservableForSelect([
			'CIF',
			'EXW',
			'FCA',
			'CPT',
			'CIP',
			'DAP',
			'DPU',
			'DDP',
			'FAS',
			'FOB',
			'CFR',
		]);
	}

	private getUnit(): void {
		this.units$ = this.rfqFormGroup.controls['quantity'].valueChanges.pipe(
			switchMap((amount: number) => {
				this.rfqFormGroup.get('unitMeasure').reset();

				if (amount) {
					return this.getUnit$(amount);
				} else {
					return of([]);
				}
			})
		);
	}

	private initSecondLevelCategoryObserve(): void {
		this.rfqFormGroup.get('productSector').valueChanges.subscribe(() => {
			this.rfqFormGroup.get('category').reset();
		});
	}
}
