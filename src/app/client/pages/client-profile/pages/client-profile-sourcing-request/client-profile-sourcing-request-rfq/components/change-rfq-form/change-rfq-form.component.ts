import {
	ChangeDetectorRef,
	Component,
	HostListener,
	OnInit,
} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import {
	BehaviorSubject,
	combineLatest,
	Observable,
	pairwise,
	switchMap,
} from 'rxjs';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { CategoriesService } from '../../../../../../../services/categories/categories.service';
import { UnitsService } from '../../../../../../../services/units/units.service';
import { HotToastService } from '@ngneat/hot-toast';
import { ActivatedRoute, Router } from '@angular/router';
import { SourcingRequestService } from '../../../../../../client-sourcing-request/sourcing-request.service';
import { first, map, startWith, take, tap } from 'rxjs/operators';
import { snakeCase } from '../../../../../../../../core/helpers/function/snake-case';
import { environment } from '../../../../../../../../../environments/environment';
import { GetUrlExtension } from '../../../../../../../../core/helpers/function/get-url-extension';
import { ImageExtensions } from '../../../../../../../../core/add-offer/image-extensions';
import { DocumentExtensions } from '../../../../../../../../core/add-offer/document-extensions';
import { ClientOfferDocumentComponent } from '../../../../../../client-offer/components/client-offer-document/client-offer-document.component';
import { capitalizeFirstLetter } from '../../../../../../../../core/helpers/function/capitalize-first-letter';
import { CURRENCIES } from '../../../../../../../../core/helpers/constant/currencies';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { onlyLatin } from '../../../../../../../../core/helpers/validator/only-latin';
import { onlyNumber } from '../../../../../../../../core/helpers/validator/only-number';
import { onlyLatinAndNumber } from '../../../../../../../../core/helpers/validator/only-latin-and-number';
import { ClientProfileSourcingRequestService } from '../../../client-profile-sourcing-request.service';
import { MatDialog } from '@angular/material/dialog';
import { MixpanelService } from '../../../../../../../../core/services/mixpanel/mixpanel.service';
import { getName } from 'country-list';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { PlatformService } from '../../../../../../../services/platform/platform.service';
import { Category } from '../../../../../../../../core/models/category.model';
import { Unit } from '../../../../../../../../core/models/unit.model';

interface SelectItem {
	id: string;
	value: string;
}

@UntilDestroy()
@Component({
	selector: 'b2b-change-rfq-form',
	templateUrl: './change-rfq-form.component.html',
	styleUrls: ['./change-rfq-form.component.scss'],
	animations: [
		trigger('fadeInOut', [
			transition(':enter', [
				// :enter is alias to 'void => *'
				style({ opacity: 0 }),
				animate(500, style({ opacity: 1 })),
			]),
			transition(':leave', [
				// :leave is alias to '* => void'
				animate(500, style({ opacity: 0 })),
			]),
		]),
	],
})
export class ChangeRfqFormComponent implements OnInit {
	public form: FormGroup;

	public sectors: Category[];
	public childCategories: Category[];
	public unit$: Observable<Unit>;
	public tradeTerms$: Observable<SelectItem[]>;

	public isSubmitButtonActive$: Observable<boolean>;

	public b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;

	private hideLabelSource: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);

	constructor(
		private formBuilder: FormBuilder,
		private categoriesService: CategoriesService,
		private unitsService: UnitsService,
		private translateService: TranslateService,
		private dialog: MatDialog,
		private hotToastService: HotToastService,
		private router: Router,
		private sourcingRequestService: SourcingRequestService,
		private changeDetectionRef: ChangeDetectorRef,
		private route: ActivatedRoute,
		private clientProfileSourcingRequestService: ClientProfileSourcingRequestService,
		private readonly mixpanelService: MixpanelService,
		private platformService: PlatformService
	) {
		this.form = this.createProductInformationGroup();

		this.tradeTerms$ = this.getTradeTerms().pipe(
			tap((options) => {
				this.form.patchValue({
					tradeTerms: options[0].value,
				});
			})
		);

		this.isSubmitButtonActive$ = combineLatest([
			this.form.statusChanges,
			this.form.get('readRFQRules').valueChanges,
		]).pipe(
			map(([statusChanges, isReadRFQ]) => {
				return statusChanges === 'VALID' && isReadRFQ;
			})
		);
	}

	get hideLabel$(): Observable<boolean> {
		return this.hideLabelSource.asObservable();
	}

	ngOnInit(): void {
		this.getProductSectors();
		this.patchValueToForm();
		this.handleValueChanges();
		if (this.platformService.isBrowser) {
			this.onResize();
		}
	}

	public submitForm(form: FormGroup): void {
		const body = this.getFormData(this.getBodyRequest(form));
		this.clientProfileSourcingRequestService
			.editItem(body)
			.pipe(
				first(),
				this.hotToastService.observe({
					loading: 'Updating RFQ...',
					success: 'RFQ successfully updated.',
					error: 'RFQ updating failed',
				})
			)
			.subscribe({
				complete: () => {
					this.mixpanelService.track('RFQ edited', {
						'Product Sector': this.getCategoryName(form.value?.productSector),
						Destination: getName(form.value?.destination),
					});

					this.router.navigate([
						'/profile/your-workspace/sourcing-request/my-rfq',
					]);
				},
			});
	}

	private getCategoryName(id: string): string {
		let name: string;
		this.categoriesService
			.getCategoryNameById(id)
			.pipe(take(1))
			.subscribe((el) => (name = el));
		return name;
	}

	private getFormData(data: any): FormData {
		const formData = new FormData();

		Object.entries(data)
			.filter(([, value]) => !!value)
			.forEach(([key, value]: [string, any]) => {
				if (key === 'photos' || key === 'documents') {
					Array.from(value).forEach((file: any) => {
						formData.append(key, file);
					});
				} else if (Array.isArray(value)) {
					value
						.filter((arrayItem) => !!arrayItem)
						.forEach((arrayItem) => {
							formData.append(key, arrayItem);
						});
				} else if (typeof value === 'object' && value) {
					for (const childKey in value) {
						const fullKey = `${key}${capitalizeFirstLetter(childKey)}`;
						formData.append(fullKey, value[childKey]);
					}
				} else {
					formData.append(key, value);
				}
			});

		return formData;
	}

	private getBodyRequest(form: FormGroup): any {
		return {
			productName: form.value.productName,
			quantity: form.value.quantity.quantity,
			unitMeasure: form.value.quantity.measure,
			tradeTerms: form.value.tradeTerms,
			category: form.value.category,
			moreInformation: form.value.moreInformation,
			destination: form.value.destination,
			rfqId: this.route.snapshot.params['id'],
		};
	}

	private getUnit(amount: number): Observable<Unit> {
		return this.unitsService.getUnits().pipe(
			map((units) =>
				units.map((unit: Unit) => ({
					...unit,
					displayName: amount > 1 ? unit.pluralDisplayName : unit.displayName,
				}))
			)
		);
	}

	private getTradeTerms(): Observable<SelectItem[]> {
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

	private createProductInformationGroup(): FormGroup {
		return this.formBuilder.group({
			productName: [null, [Validators.required]],
			productSector: [null, Validators.required],
			category: [null, Validators.required],
			quantity: this.formBuilder.group({
				quantity: [null, [Validators.required, onlyNumber()]],
				measure: [null, Validators.required],
			}),
			tradeTerms: [null, Validators.required],
			moreInformation: [
				null,
				[Validators.required],
			],
			destination: [null, Validators.required],
			readRFQRules: [false, Validators.required],
		});
	}

	private getProductSectors(): void {
		this.categoriesService
			.getCategories$()
			.pipe(
				map(({ categories }) =>
					categories.filter((category: any) => category.children.length)
				),
				untilDestroyed(this)
			)
			.subscribe((el) => (this.sectors = el));
	}

	@HostListener('window:resize', ['$event'])
	private onResize(): void {
		if (this.platformService.isServer) {
			return;
		}
		this.hideLabelSource.next(window.innerWidth < 889);
	}

	private patchValueToForm(): void {
		this.sourcingRequestService
			.getRfqById(this.route.snapshot.params['id'])
			.subscribe((el) => {
				const sector = this.sectors.find((item) =>
					item.children.find((child) => child._id === el.category)
				);

				this.form.patchValue({
					productName: el?.productName,
					productSector: sector?._id,
					category: el?.category,
					quantity: {
						quantity: el?.amount?.count,
						measure: el?.unitMeasure,
					},
					tradeTerms: el?.tradeTerms,
					moreInformation: el?.moreInformation,
					destination: el?.destination?.to,
					readRFQRules: true,
				});

				this.form.markAllAsTouched();
			});
	}

	private handleValueChanges(): void {
		this.unit$ = this.form
			.get('quantity')
			.get('quantity')
			.valueChanges.pipe(switchMap((amount) => this.getUnit(amount)));

		this.form
			.get('productSector')
			.valueChanges.pipe(
				startWith(null),
				pairwise(),
				switchMap(([prevId, curId]) => {
					if (prevId) {
						this.form.get('category').reset();
						this.form.get('category').enable();
						this.form.updateValueAndValidity();
					}

					return this.categoriesService
						.getCategories$()
						.pipe(
							map(
								({ categories }) =>
									categories.find(
										(foundCategory: any) => foundCategory._id === curId
									)?.children
							)
						);
				}),
				untilDestroyed(this)
			)
			.subscribe((categories: Category[]) => {
				this.childCategories = categories;
			});
	}
}
