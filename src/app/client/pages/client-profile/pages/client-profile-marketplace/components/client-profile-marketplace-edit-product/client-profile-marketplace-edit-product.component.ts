import {
	AfterContentInit,
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	HostListener,
	OnInit,
} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import {
	BehaviorSubject,
	combineLatest,
	filter,
	firstValueFrom,
	Observable,
	of,
	pairwise,
	Subject,
	switchMap,
} from 'rxjs';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { UnitsService } from '../../../../../../services/units/units.service';
import { UserService } from '../../../../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { map, startWith } from 'rxjs/operators';
import {
	AbstractControl,
	FormArray,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { onlyNumber } from '../../../../../../../core/helpers/validator/only-number';
import { capitalizeFirstLetter } from '../../../../../../../core/helpers/function/capitalize-first-letter';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CategoriesService } from '../../../../../../services/categories/categories.service';
import { ClientMarketplaceService } from '../../../../../../shared/services/client-marketplace-service/client-marketplace.service';
import { MixpanelService } from '../../../../../../../core/services/mixpanel/mixpanel.service';
import { getName } from 'country-list';
import { PlatformService } from '../../../../../../services/platform/platform.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PortsService } from '../../../../../../services/ports/ports.service';
import { MarketProductModel } from '../../../../../client-marketplace/models/market-product.model';
import { environment } from '../../../../../../../../environments/environment';
import { Category } from '../../../../../../../core/models/category.model';
import { onlyLatinAndNumberAndSymbols } from '../../../../../../../core/helpers/validator/only-latin-numbers-symbols';
import { checkSerialNumber } from '../../../../../../../core/helpers/function/check-serial-number';
import { PublicCompanyInfoModel } from '../../../../../../../core/models/public-company-info.model';
import { PriceTypeEnum } from '../../../../../../shared/enums/price-type.enum';
import moment from 'moment';
import { certificationNames } from '../../../../../../../core/helpers/constant/certification-names';
import { timeSpan } from '../../../../../../../core/helpers/constant/time-span';

export enum EditMode {
	ARCHIVE = 'archive',
	EDIT = 'edit',
}

@UntilDestroy(this)
@Component({
	selector: 'b2b-client-profile-marketplace-edit-product',
	templateUrl: './client-profile-marketplace-edit-product.component.html',
	styleUrls: ['./client-profile-marketplace-edit-product.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
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
export class ClientProfileMarketplaceEditProductComponent
	implements OnInit, AfterViewInit
{
	public PRODUCTS_LIMIT: number = this.clientMarketplaceService.PRODUCTS_LIMIT;
	public formGroup: FormGroup;
	public certificatesData: FormGroup;
	public formState: { [key: string]: AbstractControl };
	public editMode: EditMode;
	public EditModeEnum = EditMode;
	public product: MarketProductModel;
	public portsItems: any = [];
	public selectedPortCountries: string[] = [];
	public buttonLength: string = 'No file chosen';
	public b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public level1Categories: Category[];
	public level2Categories: Category[];
	public images: string[] = Array.from(
		{ length: 5 },
		() => 'assets/icons/no-image-icon.svg'
	);
	public countryOptions$: Observable<any[]>;
	public priceUnits$ = this.getUnit(1);
	public priceType = Object.values(PriceTypeEnum).filter(
		(value) => typeof value === 'string'
	);
	public priceTypeEnum = PriceTypeEnum;
	public certificationStringArray: string[] = [];
	public certificationNames = certificationNames.map((el) => ({
		_id: el,
		displayName: el,
	}));
	public tooltipClass: string;
	public showCertificationHint: boolean = false;
	public hintText: string;
	public useInputForCertificationName: boolean = false;
	public productionCapacityTimeSpanOptions = timeSpan.map((el) => ({
		_id: el,
		displayName: el,
	}));
	public unit$: Observable<any>;
	public maximumUnitQuantity$: Observable<any>;
	public isValidCertificateForm: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);

	private isRedirectFromAdminPanel =
		!!this.activatedRoute.snapshot.queryParams?.['admin'];

	public readonly shippingMethods = this.getArrayForSelect(
		this.clientMarketplaceService.shippingMethods
	);
	public readonly paymentMethods = this.getArrayForSelect(
		this.clientMarketplaceService.paymentMethods
	);
	public readonly tradingAreas = this.getArrayForSelect([
		'Domestic market',
		'International market',
	]);
	public currentClear: number = 0;

	private hideLabelSource: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);
	private productId: string = this.activatedRoute.snapshot.params['id'];
	private suppliersCountry: string;
	private removedFilesId: string[] = [];
	private removedCertificatesId: string[] = [];
	private selectedPaymentMethods: string[] = [];
	private selectedTradingAreas: string[] = [];
	private selectedShippingMethods: string[] = [];
	private company: PublicCompanyInfoModel;
	private files: any[] = Array.from({ length: 5 }, () => null);
	private certificationArray: any[] = [];

	constructor(
		private portsService: PortsService,
		private unitsService: UnitsService,
		private userService: UserService,
		private formBuilder: FormBuilder,
		private clientMarketplaceService: ClientMarketplaceService,
		private activatedRoute: ActivatedRoute,
		public dialog: MatDialog,
		private hotToastService: HotToastService,
		private router: Router,
		private categoriesService: CategoriesService,
		private readonly mixpanelService: MixpanelService,
		private readonly changeDetectorRef: ChangeDetectorRef,
		private platformService: PlatformService
	) {}

	get specificationList(): FormArray {
		return this.formGroup.get('specificationList') as FormArray;
	}

	get ports(): FormArray {
		return this.formGroup.get('ports') as FormArray;
	}

	get hideLabel$(): Observable<boolean> {
		return this.hideLabelSource.asObservable();
	}

	ngOnInit(): void {
		this.createFormGroup();
		this.getLevel1Categories$();
		this.detectEditMode();
		if (this.platformService.isBrowser) {
			this.onResize();
		}

		this.categoriesService.getCategories$();
	}

	ngAfterViewInit(): void {
		this.countryOptions$ = this.getCountryOptions();
		this.patchForm();
	}

	public cancel(): void {
		this.router.navigate(['profile/your-workspace/b2bmarket']);
	}

	public archive(): void {
		this.clientMarketplaceService
			.archiveProduct(this.productId)
			.pipe(
				this.hotToastService.observe({
					loading: 'Archiving...',
					success: 'Product archived successfully',
					error: 'Archiving failed',
				})
			)
			.subscribe(async () => {
				await this.router.navigate(['profile/your-workspace/b2bmarket']);
				await this.trackEvent();
			});
	}

	public updateProduct(): void {
		this.formGroup.markAllAsTouched();
		if (
			this.files.every((el: any) => !el) ||
			this.images.every(
				(el: string) => el === 'assets/icons/no-image-icon.svg'
			) ||
			this.formGroup.value.photos.every((el: any) => !el)
		) {
			this.formGroup.controls['photos'].reset();
			this.formGroup.controls['photos'].markAllAsTouched();
		}

		if (this.formGroup.invalid) {
			return;
		}

		this.formGroup.patchValue({
			serialNumbers: this.getPhotosOrder(this.files),
		});

		if (this.isRedirectFromAdminPanel) {
			this.updateProductByAdmin();
		} else {
			this.updateProductByUser();
		}
		this.trackEditEvent();
	}

	public updateAndRestore(): void {
		if (this.platformService.isServer) {
			return;
		}
		if (!this.formGroup.valid) {
			this.formGroup.markAllAsTouched();
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
			return;
		}

		combineLatest([
			this.clientMarketplaceService.updateProduct(
				this.productId,
				this.getFormData(
					this.getBodyForRequest(this.formGroup.value, this.company)
				)
			),
			this.clientMarketplaceService.restoreProduct(this.productId),
		])
			.pipe(
				this.hotToastService.observe({
					loading: 'Restoring product...',
					success: 'Product restored',
					error: 'Error restoring product',
				})
			)
			.subscribe(() => {
				this.clientMarketplaceService.updateManageProducts(
					(1 - 1) * this.PRODUCTS_LIMIT
				);

				this.router.navigate(['/profile/your-workspace/b2bmarket']);
			});
	}

	public moveRowUp(index: number): void {
		if (this.specificationList.length - 1 === index) {
			return;
		}
		const currentGroup = this.specificationList.at(index);
		this.specificationList.removeAt(index);
		this.specificationList.insert(index - 1, currentGroup);
	}

	public moveRowDown(index: number): void {
		if (index === 0) {
			return;
		}
		const currentGroup = this.specificationList.at(index);
		this.specificationList.removeAt(index);
		this.specificationList.insert(index + 1, currentGroup);
	}

	public deleteRow(index: number): void {
		this.specificationList.removeAt(index);
	}

	public addField(): void {
		const specificationList = this.formBuilder.group({
			specification: ['', onlyLatinAndNumberAndSymbols()],
			item: ['', onlyLatinAndNumberAndSymbols()],
		});
		this.specificationList.push(specificationList);
	}

	public movePortsRowUp(index: number): void {
		if (0 === index) {
			return;
		}
		const item = this.portsItems[index];
		this.portsItems[index] = this.portsItems[index - 1];
		this.portsItems[index - 1] = item;
		const currentGroup = this.ports.at(index);
		this.ports.removeAt(index);
		this.ports.insert(index - 1, currentGroup);
	}

	public movePortsRowDown(index: number): void {
		if (index === this.ports.length - 1) {
			return;
		}
		const item = this.portsItems[index];
		this.portsItems[index] = this.portsItems[index + 1];
		this.portsItems[index + 1] = item;

		const currentGroup = this.ports.at(index);
		this.ports.removeAt(index);
		this.ports.insert(index + 1, currentGroup);
	}

	public deletePortsRow(index: number): void {
		this.ports.removeAt(index);
		this.portsItems.splice(index, 1);
		this.selectedPortCountries.splice(
			this.selectedPortCountries.findIndex(
				(el) => el === this.portsItems[index].country,
				1
			)
		);
	}

	public addPortsField(): void {
		const ports = this.formBuilder.group({
			country: [null],
			portName: [''],
		});
		this.ports.push(ports);
	}

	public uploadFile(event: Event): void {
		const input = event.target as HTMLInputElement;
		const files = input.files;

		if (!files || files.length === 0) {
			return;
		}

		const newImages = Array.from(files);
		const format = ['svg', 'jpg', 'png', 'webp', 'jpeg', 'bmp', 'image/jpeg'];

		newImages.forEach((file, index) => {
			if (
				format.includes(
					file.name?.split('.')[file.name?.split('.').length - 1].toLowerCase()
				) ||
				format.includes(file?.type.toLowerCase())
			) {
				const fileReader = new FileReader();
				fileReader.readAsDataURL(file);
				if (
					this.files.some(
						(el) => el?.imageName === file.name || el?.name === file.name
					)
				) {
					this.hotToastService.error(
						`Image with name ${file.name} is already exist`
					);
				} else {
					fileReader.onload = (): void => {
						if (typeof fileReader.result === 'string') {
							const index = this.images.findIndex(
								(item) => item === 'assets/icons/no-image-icon.svg'
							);
							if (index !== -1) {
								this.images[index] = fileReader.result;
								this.files[index] = file;
								this.changeDetectorRef.detectChanges();
							} else {
								if (
									(this.images.every(
										(el) => el === 'assets/icons/no-image-icon.svg'
									) &&
										this.images.length <= 5) ||
									this.images.length > 7
								) {
									this.files.pop();
									this.files.unshift(file);
									this.images.pop();
									this.images.unshift(fileReader.result);
								} else {
									this.images.push(fileReader.result);
									this.files.push(file);
								}

								this.changeDetectorRef.detectChanges();
							}

							this.formGroup.patchValue({
								photos: this.files,
							});
						}
					};

					this.changeDetectorRef.detectChanges();
					this.formGroup.markAsDirty();
				}
			} else {
				this.hotToastService.error('Wrong file format');
			}
		});
		input.value = null;
	}

	public deleteImage(index: number): void {
		this.images.splice(index, 1);
		if (this.images.length < 5) {
			this.images.push('assets/icons/no-image-icon.svg');
			this.files.push(null);
		}
		if (this.files[index]?._id) {
			this.removedFilesId.push(this.files[index]?._id);
		}
		this.files.splice(index, 1);
		if (this.files.every((file) => file === null)) {
			this.files = [];
		}
		this.formGroup.patchValue({ photos: this.files });
	}

	public addCertificationFields(): void {
		if (this.showCertificationHint) {
			this.showCertificationHint = false;
		}

		const certificatesData = {
			...this.certificatesData.value,
			issueDate: moment(this.certificatesData.value.issueDate).format(
				'yyyy-MM-DD'
			),
			dateValidTo: moment(this.certificatesData.value.dateValidTo).format(
				'yyyy-MM-DD'
			),
		};

		this.certificationArray.push(certificatesData);
		this.certificationStringArray.push(
			Object.values(this.certificatesData.value).join('/ ')
		);
		Object.keys(this.certificatesData.value).forEach((control) =>
			this.certificatesData.patchValue({ [control]: null })
		);
	}

	public removeChip(index: number): void {
		if (this.certificationArray[index]._id) {
			this.removedCertificatesId.push(this.certificationArray[index]._id);
		}
		this.certificationStringArray.splice(index, 1);
		this.certificationArray.splice(index, 1);
	}

	public addCertificateName(): void {
		this.showCertificationHint = true;
		this.tooltipClass = 'section-title';
		this.useInputForCertificationName = true;
	}

	public drop(event: CdkDragDrop<string[]>): void {
		moveItemInArray(this.images, event.previousIndex, event.currentIndex);
		moveItemInArray(this.files, event.previousIndex, event.currentIndex);

		this.formGroup.patchValue({
			photos: this.files,
			serialNumbers: this.getPhotosOrder(this.files),
		});
	}

	public setPaymentMethod(event: Event, value: string): void {
		if ((event.target as HTMLInputElement).checked) {
			this.selectedPaymentMethods.push(value);
		} else {
			const index = this.selectedPaymentMethods.indexOf(value);
			this.selectedPaymentMethods.splice(index, 1);
		}
		this.formGroup.patchValue(
			{ paymentMethods: this.selectedPaymentMethods },
			{ emitEvent: false }
		);
	}

	public setTradingArea(event: Event, value: string): void {
		if ((event.target as HTMLInputElement).checked) {
			this.selectedTradingAreas.push(value);
		} else {
			const index = this.selectedTradingAreas.indexOf(value);
			this.selectedTradingAreas.splice(index, 1);
		}
		this.formGroup.patchValue(
			{ tradingAreas: this.selectedTradingAreas },
			{ emitEvent: false }
		);
	}

	public selectCountry(index: number): void {
		const country = (this.formGroup.get('ports') as FormArray)
			.at(index)
			.get('country').value;
		(this.formGroup.get('ports') as FormArray)
			.at(index)
			.get('portName')
			.reset();
		this.currentClear = index;

		this.getPortsByCountry(country, index);
	}

	public setShippingMethod(event: Event, value: string): void {
		if ((event.target as HTMLInputElement).checked) {
			this.selectedShippingMethods.push(value);
		} else {
			const index = this.selectedShippingMethods.indexOf(value);
			this.selectedShippingMethods.splice(index, 1);
		}
		this.formGroup.patchValue(
			{ shipping: this.selectedShippingMethods },
			{ emitEvent: false }
		);
	}

	public trackByFn = (_: number, value: AbstractControl): AbstractControl =>
		value;

	public trackByImageFn = (_: number, value: string): string => value;

	@HostListener('window:resize', ['$event'])
	private onResize(): void {
		if (this.platformService.isServer) {
			return;
		}
		this.hideLabelSource.next(window.innerWidth < 889);
	}

	private async trackEvent() {
		const productCount =
			this.userService.getUser()?.statistics?.products?.approved;
		this.mixpanelService.track('Product archived', {
			'Product Category': this.level2Categories.find(
				(category) => category._id === this.formGroup.value?.category
			)?.name,
			"Supplier's Country": getName(this.suppliersCountry),
			'Product Count': productCount,
			'Archivation Date': new Date(),
		});
		this.mixpanelService.set({
			properties: {
				'Product Count': productCount,
			},
		});
	}

	private async trackEditEvent() {
		const productCount =
			this.userService.getUser()?.statistics?.products?.approved;
		const categoryId: string =
			this.formGroup.value?.category ?? this.product.category._id;
		this.mixpanelService.track('Product edited', {
			'Product Category': this.level2Categories.find(
				(category) => category._id === categoryId
			)?.name,
			'Product URL': `https://globy.com/b2bmarket/listing/products/${this.productId}`,
			'Product Id': this.productId,
			"Supplier's Country": getName(this.suppliersCountry),
			'Product Count': productCount - 1,
			'Edit Date': new Date(),
		});
		this.mixpanelService.set({
			properties: {
				'Product Count': productCount,
			},
		});
	}

	private getPhotosOrder(arr: Array<File | any>): any[] {
		return arr.reduce((acc, curr, index) => {
			acc.push({
				imageName: curr?.name || curr?.imageName,
				serialNumber: index,
			});
			return acc;
		}, []);
	}

	private getBodyForRequest(data: any, company: any): any {
		const portsArray = data.ports?.reduce(
			(acc: string | any[], current: { portName: any }) =>
				acc.concat(current.portName),
			[]
		);

		const userInfo = this.userService.getUser();
		const model = {
			...data,
			amount: data.amount,
			paymentMethods: data.paymentMethods,
			shipping: data.shipping,
			suppliersType:
				userInfo.role.displayName === 'Admin'
					? 'Trader'
					: userInfo.role.displayName,
			contactPersonName: userInfo.fullName,
			contactCompanyName: userInfo.company,
			contactPhoneNumber: userInfo.phone?.number,
			contactPhoneInternationalNumber: !this.isRedirectFromAdminPanel
				? userInfo.phone?.internationalNumber
				: company.phone.dialCode + company.phone.number,
			contactPhoneNationalNumber: !this.isRedirectFromAdminPanel
				? userInfo.phone?.nationalNumber
				: company.phone.number,
			contactPhoneE164Number: !this.isRedirectFromAdminPanel
				? userInfo.phone?.e164Number
				: company.phone.dialCode + company.phone.number,
			contactPhoneCountryCode: !this.isRedirectFromAdminPanel
				? userInfo.phone.countryCode
				: company.phone.countryCode,
			contactPhoneDialCode: !this.isRedirectFromAdminPanel
				? userInfo.phone.dialCode
				: company.phone.dialCode,
			contactEmail: userInfo.email,
			country: this.formGroup.value.productOrigin,
			ports: Array.from(new Set(portsArray)),
			photos: null,
			specificationList:
				this.specificationList.length > 0 &&
				!!this.specificationList.at(0).value.specification &&
				!!this.specificationList.at(0).value.item
					? this.specificationList.value
					: null,
			certificates: null,
			certificatesData: null,
			priceRangeUnit:
				data?.priceType === PriceTypeEnum.PriceRange ? data.priceUnit : null,
			priceUnit:
				data?.priceType === PriceTypeEnum.FixedPrice ? data.priceUnit : null,
		};
		const certificatesData = this.certificationArray.filter((el) => !el._id);

		if (certificatesData.length > 0) {
			model.certificatesData = certificatesData.map((ceritificate) => ({
				...ceritificate,
				name: ceritificate.certificateName,
				logo: this.setLogoName(ceritificate.certificateName),
			}));
		}

		const photos = this.formGroup.value.photos.filter(
			(photo: any) => photo instanceof File
		);
		if (photos.length > 0) {
			model.photos = photos;
		}

		return model;
	}

	private setLogoName(name: string): string {
		if (this.certificationNames.some((el) => el.displayName === name)) {
			return `./assets/icons/certificate-logos/${name
				.split(' ')
				.join('-')}.svg`;
		} else {
			return './assets/icons/certificate-logos/default.svg';
		}
	}

	private createFormGroup(): void {
		this.formGroup = this.formBuilder.group({
			title: [null, [Validators.required, onlyLatinAndNumberAndSymbols()]],
			specifications: [
				null,
				[
					Validators.required,
					Validators.minLength(60),
					onlyLatinAndNumberAndSymbols(),
				],
			],
			priceType: [PriceTypeEnum.FixedPrice, Validators.required],
			price: [null, [Validators.required, onlyNumber()]],
			priceUnit: [null, Validators.required],
			productionCapacityCount: [null, onlyNumber()],
			productionCapacityUnit: [null],
			productionCapacityTimeSpan: [null],
			brandName: [null, onlyLatinAndNumberAndSymbols()],
			productSector: [null, Validators.required],
			category: [{ value: null, disabled: true }, Validators.required],
			photos: [null, Validators.required],
			visibilityPhotos: [true],
			serialNumbers: [null, Validators.required],
			shipping: [null, Validators.required],
			paymentMethods: [null, Validators.required],
			tradingAreas: [null, Validators.required],
			productOrigin: [null, Validators.required],
			maximumOrderQuantity: [null],
			samplesInfoMeasure: [null],
			samplePrice: [null, onlyNumber()],
			specificationList: this.formBuilder.array([
				this.formBuilder.group({
					specification: ['', onlyLatinAndNumberAndSymbols()],
					item: ['', onlyLatinAndNumberAndSymbols()],
				}),
			]),
			ports: this.formBuilder.array([
				this.formBuilder.group({
					country: [null],
					portName: [''],
				}),
			]),
		});

		this.certificatesData = this.formBuilder.group({
			organization: [null],
			certificateName: [null],
			certificateNumber: [null],
			issueDate: [null],
			dateValidTo: [null],
		});

		this.certificatesData.valueChanges.subscribe((formGroup) => {
			this.isValidCertificateForm.next(
				!Object.values(formGroup).some((el) => el === null)
			);
		});

		this.formState = this.formGroup.controls;

		this.formGroup.controls['productSector'].valueChanges
			.pipe(
				startWith(null),
				pairwise(),
				switchMap(([prevId, curId]) => {
					if (prevId) {
						this.formGroup.get('category').reset();
						this.formGroup.get('category').enable();
						this.formGroup.updateValueAndValidity();
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
			.subscribe((categories) => {
				this.level2Categories = categories;
			});

		this.formGroup.controls['photos'].valueChanges
			.pipe(untilDestroyed(this))
			.subscribe((el) => {
				const filteredArr = el.filter((file: File) => !!file);
				switch (filteredArr.length) {
					case 1:
						this.buttonLength = 'One file chosen';
						break;
					case 2:
						this.buttonLength = 'Two files chosen';
						break;
					case 3:
						this.buttonLength = 'Three files chosen';
						break;
					case 4:
						this.buttonLength = 'Four files chosen';
						break;
					case 5:
						this.buttonLength = 'Fife files chosen';
						break;
					case 0:
						this.buttonLength = 'No file chosen';
						break;
					default:
						this.buttonLength = 'More than fife files chosen';
						break;
				}
			});

		this.unit$ = this.formGroup.controls[
			'productionCapacityCount'
		].valueChanges.pipe(
			switchMap((amount) => {
				if (amount) {
					this.formGroup
						.get('productionCapacityUnit')
						.addValidators(Validators.required);
					this.formGroup
						.get('productionCapacityTimeSpan')
						.addValidators(Validators.required);
					this.formGroup
						.get('productionCapacityTimeSpan')
						.updateValueAndValidity();
					this.formGroup.get('productionCapacityUnit').updateValueAndValidity();

					return this.getUnit(amount);
				} else {
					this.formGroup.get('productionCapacityUnit').setValue(null);
					this.formGroup.get('productionCapacityUnit').clearValidators();
					this.formGroup.get('productionCapacityUnit').updateValueAndValidity();
					this.formGroup.get('productionCapacityTimeSpan').setValue(null);
					this.formGroup.get('productionCapacityTimeSpan').clearValidators();
					this.formGroup
						.get('productionCapacityTimeSpan')
						.updateValueAndValidity();

					return of([]);
				}
			})
		);

		this.maximumUnitQuantity$ = this.formGroup.controls[
			'maximumOrderQuantity'
		].valueChanges.pipe(
			switchMap((maximumOrderQuantity) => {
				if (maximumOrderQuantity) {
					this.formGroup.get('samplesInfoMeasure').updateValueAndValidity();
					this.formGroup.get('samplesInfoMeasure').markAsTouched();

					return this.getUnit(maximumOrderQuantity, [
						'item',
						'kilogram',
						'pack',
						'set',
						'liter',
					]);
				} else {
					this.formGroup.get('samplesInfoMeasure').setValue(null);
					this.formGroup.get('samplesInfoMeasure').clearValidators();
					this.formGroup.get('samplesInfoMeasure').updateValueAndValidity();

					return of([]);
				}
			})
		);

		this.formGroup.controls['priceType'].valueChanges
			.pipe(untilDestroyed(this))
			.subscribe((priceType) => {
				switch (priceType) {
					case PriceTypeEnum.FixedPrice:
						this.formGroup.removeControl('priceRangeMinimum');
						this.formGroup.removeControl('priceRangeMaximum');
						this.formGroup.addControl(
							'price',
							new FormControl(null, [Validators.required, onlyNumber()])
						);
						this.formGroup.addControl(
							'priceUnit',
							new FormControl(null, Validators.required)
						);
						this.formGroup.updateValueAndValidity();
						return;
					case PriceTypeEnum.PriceRange:
						this.formGroup.removeControl('price');
						this.formGroup.addControl(
							'priceRangeMinimum',
							new FormControl(null, [Validators.required, onlyNumber()])
						);
						this.formGroup.addControl(
							'priceRangeMaximum',
							new FormControl(null, [Validators.required, onlyNumber()])
						);
						this.formGroup.addControl(
							'priceUnit',
							new FormControl(null, Validators.required)
						);
						this.formGroup.updateValueAndValidity();
						return;
					case PriceTypeEnum.PriceUponRequest:
						const controlsArray = [
							'priceRangeMinimum',
							'priceRangeMaximum',
							'priceUnit',
						];
						controlsArray.forEach((control) =>
							this.formGroup.removeControl(control)
						);
						this.formGroup.controls['price'].setErrors(null);
						this.formGroup.controls['price'].clearValidators();
						this.formGroup.controls['price'].setValue('Price upon request');
						this.formGroup.updateValueAndValidity();
						return;
				}
			});
	}

	private getArrayForSelect(
		array: any[]
	): Array<{ value: any; label: string; checked: boolean }> {
		return array.map((el) => {
			return {
				value: el,
				label: el,
				checked: false,
			};
		});
	}

	private getParentCategoryId(
		categoriesList: any[],
		categoryId: string
	): string {
		let parentCategoryId = '';
		categoriesList.forEach((category) => {
			if (
				category._id === categoryId ||
				category.children.some(
					(childCategory: any) => childCategory._id === categoryId
				)
			) {
				parentCategoryId = category._id;
			}
		});
		return parentCategoryId;
	}

	private patchForm(): void {
		this.clientMarketplaceService
			.getProductById(this.productId)
			.pipe(untilDestroyed(this))
			.subscribe(({ company, product }) => {
				this.company = company;
				this.suppliersCountry = company.country;
				this.product = product;

				const sector = this.level1Categories.find((el) =>
					el.children.find(
						(child) => child._id === (product.category as Category)._id
					)
				);

				this.formGroup.patchValue(
					{
						...product,
						productOrigin: product.productOrigin || product.country,
						productSector: sector?._id,
						category: (product.category as Category)._id,
						ports: null,
					},
					{ emitEvent: false }
				);

				if (product?.price?.old && product?.price?.unit?._id) {
					this.formGroup.patchValue({
						price: product.price?.old,
						priceUnit: product?.price?.unit?._id,
					});
				} else if (
					product?.priceRange &&
					Object.values(product?.priceRange).every((value) => value !== null)
				) {
					this.formGroup.patchValue({
						priceType: PriceTypeEnum.PriceRange,
						priceRangeMinimum: product.priceRange.minimum,
						priceRangeMaximum: product.priceRange.maximum,
						priceUnit: product.priceRange?.unit?._id,
					});
				} else {
					this.formGroup.patchValue({
						priceType: PriceTypeEnum.PriceUponRequest,
					});
				}

				if (product.certificates.length > 0) {
					this.certificationArray = product.certificates.map((el) => ({
						certificateName: el.certificateName,
						certificateNumber: el.certificateNumber,
						organization: el.organization,
						issueDate: el.issueDate,
						dateValidTo: el.dateValidTo,
						documentName: el.documentName,
						_id: el._id,
					}));

					product.certificates.forEach((el) => {
						const certificateDataObj = `${el.certificateName} / ${el.certificateNumber} / ${el.issueDate}`;
						this.certificationStringArray.push(certificateDataObj);
					});
				}

				if (
					product?.productCapacity?.count &&
					product.productCapacity?.unit?._id
				) {
					this.formGroup.patchValue({
						productionCapacityCount: product?.productCapacity?.count,
						productionCapacityUnit: product.productCapacity?.unit?._id,
						productionCapacityTimeSpan: product?.productCapacity?.timeSpan,
					});
				}

				if (product?.samplesInfo) {
					this.formGroup.patchValue({
						maximumOrderQuantity: product?.samplesInfo?.maximumOrderQuantity,
						samplesInfoMeasure: product?.samplesInfo?.measure,
						samplePrice: product?.samplesInfo?.samplePrice,
					});
				}

				if (product.photos.length > 0) {
					if (
						product.photos.every((photo) => 'serialNumber' in photo) &&
						checkSerialNumber(product.photos)
					) {
						product.photos = product.photos.reduce((acc: any[], val: any) => {
							acc[val?.serialNumber] = val;
							return acc;
						}, []);
						this.formGroup.patchValue({
							serialNumbers: product.photos.forEach((photo) => ({
								imageName: photo.imageName,
								serialNumber: photo.serialNumber,
							})),
						});
					}

					product.photos.forEach((photo, index: any) => {
						if (photo.lg) {
							const fileUrl = environment.apiUrl + photo.lg;

							if (this.images.length <= 5) {
								this.images.splice(index, 1, fileUrl);
								this.files.splice(index, 1, photo);
							} else {
								this.files.push(photo);
								this.images.push(fileUrl);
							}
						}
					});
					this.formGroup.patchValue({
						photos: this.files,
						serialNumbers: this.getPhotosOrder(this.files),
					});
				}

				if (product.amount) {
					this.formGroup.patchValue({
						amount: product.amount.count,
						unit: product.amount.unit?._id || product.amount.unit,
					});
				}

				if (
					product.specificationList.length > 0 &&
					!!product.specificationList[0].specification &&
					!!product.specificationList[0].item
				) {
					product.specificationList.forEach((value: any, index: number) =>
						index === 0 ? null : this.addField()
					);
					const list = product.specificationList.map(
						(el: { specification: any; item: any }) => ({
							specification: el.specification,
							item: el.item,
						})
					);
					this.specificationList.setValue(list);
				}

				if (product.paymentMethods.length > 0) {
					this.paymentMethods.forEach((method) => {
						method.checked = product.paymentMethods.includes(method.value);
					});
					this.selectedPaymentMethods = [
						...this.formGroup.value.paymentMethods,
					];
				}

				if (product.shipping.length > 0 && product.shipping[0] !== null) {
					this.shippingMethods.forEach((method) => {
						method.checked = product.shipping.includes(method.value);
					});
					this.selectedShippingMethods = [...this.formGroup.value.shipping];
				}

				if (
					product.tradingAreas.length > 0 &&
					product.tradingAreas[0] !== null
				) {
					this.tradingAreas.forEach((area) => {
						area.checked = product.tradingAreas.includes(area.value);
					});
					this.selectedTradingAreas = [...this.formGroup.value.tradingAreas];
				}

				if (product.ports[0] !== null && product.ports.length > 0) {
					const productPorts = this.getPorts(product);

					productPorts.forEach((value, index) => {
						if (index > 0) {
							this.addPortsField();
						}
						this.getPortsByCountry(value.country, index, value.portName);
					});

					this.changeDetectorRef.detectChanges();
				}
			});
	}

	private getUnit(amount: number, filterArray?: string[]): Observable<any> {
		return this.unitsService.getUnits().pipe(
			map((units) => {
				const updatedUnits = filterArray
					? units.filter((unit: { name: string }) =>
							filterArray.includes(unit.name)
						)
					: units;
				return updatedUnits.map(
					(unit: {
						_id: string;
						name: string;
						pluralDisplayName: string;
						displayName: string;
					}) => ({
						...unit,
						_id: filterArray ? unit.name : unit._id,
						displayName: amount > 1 ? unit.pluralDisplayName : unit.displayName,
					})
				);
			})
		);
	}

	private getFormData(data: any): FormData {
		const formData = new FormData();

		Object.entries(data)
			.filter(([, value]) => !!value)
			.forEach(([key, value]: [string, any]) => {
				if (key === 'photos' || key === 'documents' || key === 'certificates') {
					Array.from(value).forEach((file: any) => {
						formData.append(key, file);
					});
				} else if (Array.isArray(value)) {
					if (key === 'serialNumbers' || key === 'certificatesData') {
						formData.append(key, JSON.stringify(value));
						return;
					}
					value
						.filter((arrayItem) => !!arrayItem)
						.forEach((arrayItem) => {
							if (key === 'specificationList') {
								formData.append(key, JSON.stringify(arrayItem));
							} else {
								formData.append(key, arrayItem);
							}
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

	private updateProductByUser(): void {
		const deleteRequest$ =
			this.removedFilesId.length > 0 || this.removedCertificatesId.length > 0
				? this.clientMarketplaceService.deletePhotosFromProduct(
						this.productId,
						this.removedFilesId.length > 0 ? this.removedFilesId : null,
						this.removedCertificatesId.length > 0
							? this.removedCertificatesId
							: null
					)
				: of(null);

		this.clientMarketplaceService
			.updateProduct(
				this.productId,
				this.getFormData(
					this.getBodyForRequest(this.formGroup.value, this.company)
				)
			)
			.pipe(
				this.hotToastService.observe({
					loading: 'Updating product...',
					success: 'Product updated successfully',
					error: 'Error updating product',
				}),
				switchMap(() => {
					return deleteRequest$;
				}),
				this.hotToastService.observe({
					loading: 'Updating photos...',
					success: 'Photos updated successfully',
					error: 'Error updating photos',
				})
			)
			.subscribe(() => {
				this.router.navigate(['profile/your-workspace/b2bmarket']);
			});
	}

	private updateProductByAdmin(): void {
		this.clientMarketplaceService
			.updateProductByAdmin(
				this.productId,
				this.getFormData(
					this.getBodyForRequest(this.formGroup.value, this.company)
				)
			)
			.pipe(
				this.hotToastService.observe({
					loading: 'Updating product...',
					success: 'Product updated successfully',
					error: 'Error updating product',
				}),
				switchMap(() => {
					return this.removedFilesId.length > 0 ||
						this.removedCertificatesId.length > 0
						? this.clientMarketplaceService.deletePhotosFromProduct(
								this.productId,
								this.removedFilesId.length > 0 ? this.removedFilesId : null,
								this.removedCertificatesId.length > 0
									? this.removedCertificatesId
									: null
							)
						: of(null);
				}),
				this.hotToastService.observe({
					loading: 'Updating photos...',
					success: 'Photos updated successfully',
					error: 'Error updating photos',
				})
			)
			.subscribe(() => {
				const page = this.activatedRoute.snapshot.queryParams['page'];
				this.router.navigate(['/admin/b2bmarket'], {
					queryParams: {
						page,
					},
				});
			});
	}

	private detectEditMode(): void {
		this.activatedRoute.queryParams
			.pipe(
				map((data) => data['mode']),
				filter((data) => !!data),
				untilDestroyed(this)
			)
			.subscribe((mode) => (this.editMode = mode));
	}

	private getLevel1Categories$(): void {
		this.categoriesService
			.getCategories$()
			.pipe(
				map(({ categories }) =>
					categories.filter((category: any) => category.children.length)
				)
			)
			.subscribe((el) => (this.level1Categories = el));
	}

	private getPortsByCountry(
		country: string,
		index: number,
		portName?: string[]
	): void {
		this.portsService
			.getPorts(country)
			.pipe(untilDestroyed(this))
			.subscribe((ports) => {
				this.portsItems.splice(index, 0, { country: country, ports: ports });
				if (portName?.length > 0) {
					this.ports.at(index).setValue({ country, portName });
				}
				this.selectedPortCountries.push(country);
			});
	}

	private getPorts(
		product: MarketProductModel
	): { country: string; portName: string[] }[] {
		return product.ports?.reduce((acc: any[], selectedPorts) => {
			const existingCountry = acc?.find(
				(port) => port.country === selectedPorts.countryCode
			);

			if (existingCountry) {
				existingCountry.portName.push(selectedPorts._id);
			} else {
				acc.push({
					country: selectedPorts?.countryCode,
					portName: [selectedPorts?._id],
				});
			}

			return acc;
		}, []);
	}

	private getCountryOptions(): Observable<any[]> {
		const selectedCountries = this.selectedPortCountries?.length > 0 ? this.selectedPortCountries : []
		return this.portsService.getCountriesWithPorts().pipe(
			filter(codes => selectedCountries.some(code => !codes.includes(code))),
			map(codes => {
				return codes.map(code => ({
					label: getName(code),
					icon: code,
					code: code.toLowerCase(),
				})).sort((a, b): number => a.label.localeCompare(b.label));
		}));
	}

    protected readonly open = open;
}
