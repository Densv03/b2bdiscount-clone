import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import {
	AbstractControl,
	FormArray,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { ClientMarketplaceService } from '../../client-marketplace.service';
import { SourcingRequestService } from '../../../client-sourcing-request/sourcing-request.service';
import { Router } from '@angular/router';
import {
	BehaviorSubject,
	finalize,
	firstValueFrom,
	Observable,
	of,
} from 'rxjs';
import { filter, first, map, switchMap, take, tap } from 'rxjs/operators';
import { UnitsService } from '../../../../services/units/units.service';
import { capitalizeFirstLetter } from '../../../../../core/helpers/function/capitalize-first-letter';
import { UserService } from '../../../client-profile/services/user/user.service';
import { HotToastService } from '@ngneat/hot-toast';
import { CategoriesService } from '../../../../services/categories/categories.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MixpanelService } from '../../../../../core/services/mixpanel/mixpanel.service';
import { getName } from 'country-list';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { PlatformService } from '../../../../services/platform/platform.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PortsService } from '../../../../services/ports/ports.service';
import { PublicCompanyInfoModel } from '../../../../../core/models/public-company-info.model';
import { MarketProductModel } from '../../models/market-product.model';
import { onlyNumber } from '../../../../../core/helpers/validator/only-number';
import { onlyLatinAndNumberAndSymbols } from '../../../../../core/helpers/validator/only-latin-numbers-symbols';
import { PriceTypeEnum } from '../../../../shared/enums/price-type.enum';
import moment from 'moment';
import { Unit } from '../../../../../core/models/unit.model';
import { certificationNames } from '../../../../../core/helpers/constant/certification-names';
import { timeSpan } from '../../../../../core/helpers/constant/time-span';
import { DOCUMENT } from '@angular/common';
import { fadeInOutAnimation } from "../../shared/animations/fade-in-out.animation";

@UntilDestroy()
@Component({
	selector: 'b2b-client-marketplace-add-product',
	templateUrl: './client-marketplace-add-product.component.html',
	styleUrls: ['./client-marketplace-add-product.component.scss'],
	animations: [fadeInOutAnimation],
})
export class ClientMarketplaceAddProductComponent implements OnInit {
	public formGroup: FormGroup;
	public certificatesData: FormGroup;
	public formState: { [key: string]: AbstractControl };
	public b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public unit$: Observable<any>;
	public maximumUnitQuantity$: Observable<any>;
	public buttonLength: string = 'No file chosen';
	public images: string[] = Array.from(
		{ length: 5 },
		() => 'assets/icons/no-image-icon.svg',
	);
	public priceUnits$ = this.getUnit(1);
	public product: MarketProductModel;
	public isView: boolean = false;
	public areas = new FormControl(false);
	public shippings = new FormControl(false);
	public payments = new FormControl(false);
	public portsItems: { country: string; ports: any[] }[] = [];
	public selectedPortCountries: string[] = [];

	public level1Categories$: Observable<any[]>;
	public level2Categories: any[];
	public company: BehaviorSubject<PublicCompanyInfoModel> = new BehaviorSubject<PublicCompanyInfoModel>(null);
	public readonly shippingMethods = this.getArrayForSelect(
		this.clientMarketplaceService.shippingMethods,
	);
	public readonly paymentMethods = this.getArrayForSelect(
		this.clientMarketplaceService.paymentMethods,
	);
	public tradingAreas = this.getArrayForSelect([
		'Domestic market',
		'International market',
	]);
	public user = this.userService.getUser();
	public priceType = Object.values(PriceTypeEnum).filter(
		(value) => typeof value === 'string',
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
	public isValidCertificateForm: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);

	private isBadgeInvalidSource: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);
	public isBadgeInvalid$: Observable<boolean> =
		this.isBadgeInvalidSource.asObservable();
	public currentClear: number = 0;
	public isRequestPending: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);
	private files: File[] = Array.from({ length: 5 }, () => null);
	private hideLabelSource: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);
	public countryOptions$: Observable<any[]>;
	private selectedPaymentMethods: string[] = [];
	private selectedTradingAreas: string[] = [];
	private selectedShippingMethods: string[] = [];
	private priceUnitName: Unit;
	private productionCapacityUnitName: Unit;
	private samplesInfoMeasure: string;
	private certificationArray: any[] = [];

	constructor(
		private unitsService: UnitsService,
		private userService: UserService,
		private formBuilder: FormBuilder,
		private clientMarketplaceService: ClientMarketplaceService,
		private sourcingRequestService: SourcingRequestService,
		private hotToastService: HotToastService,
		private router: Router,
		private categoriesService: CategoriesService,
		private readonly mixpanelService: MixpanelService,
		private authService: AuthService,
		private platformService: PlatformService,
		private readonly portsService: PortsService,
		@Inject(DOCUMENT) private document: Document,
	) {
	}

	@HostListener('window:resize', ['$event'])
	private onResize(): void {
		if (this.platformService.isServer) {
			return;
		}
		this.hideLabelSource.next(window.innerWidth < 889);
	}

	get specificationList(): FormArray {
		return this.formGroup.get('specificationList') as FormArray;
	}

	get ports(): FormArray {
		return this.formGroup.get('ports') as FormArray;
	}

	ngOnInit(): void {
		this.getCompany();
		this.getLevel1Categories$();
		this.createFormGroup();
		this.formState = this.formGroup.controls;
		if (this.platformService.isBrowser) {
			this.onResize();
			this.updateIsBadgeInvalidSource();
		}
		this.countryOptions$ = this.getCountryOptions();
		this.categoriesService.getCategories$();
		this.patchForm();
	}

	public get hideLabel$(): Observable<boolean> {
		return this.hideLabelSource.asObservable();
	}

	public moveRowUp(index: number): void {
		if (index === 0) {
			return;
		}

		const currentGroup = this.specificationList.at(index);
		this.specificationList.removeAt(index);
		this.specificationList.insert(index - 1, currentGroup);
	}

	public addCertificateName(): void {
		this.showCertificationHint = true;
		this.tooltipClass = 'section-title';
		this.useInputForCertificationName = true;
	}

	public moveRowDown(index: number): void {
		if (this.specificationList.length - 1 === index) {
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

	public addCertificationFields(): void {
		if (this.showCertificationHint) {
			this.showCertificationHint = false;
		}

		const certificatesData = {
			...this.certificatesData.value,
			issueDate: moment(this.certificatesData.value.issueDate).format(
				'yyyy-MM-DD',
			),
			dateValidTo: moment(this.certificatesData.value.dateValidTo).format(
				'yyyy-MM-DD',
			),
			name: this.certificatesData.value.certificateName,
			logo: this.setLogoName(this.certificatesData.value.certificateName),
		};

		this.certificationArray.push(certificatesData);
		this.certificationStringArray.push(
			Object.values(this.certificatesData.value).join('/ '),
		);
		this.formGroup.markAsDirty();
		this.certificatesData.reset(null);
	}

	public removeChip(index: number): void {
		this.certificationStringArray.splice(index, 1);
		this.certificationArray.splice(index, 1);
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
		this.selectedPortCountries.splice(
			this.selectedPortCountries.findIndex(
				(el) => el === this.portsItems[index].country,
				1,
			),
		);
		this.filterCountryOptions();
		this.portsItems.splice(index, 1);
	}

	public addPortsField(): void {
		const ports = this.formBuilder.group({
			country: [null],
			portName: [null],
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
					file.name?.split('.')[file.name?.split('.').length - 1].toLowerCase(),
				) ||
				format.includes(file?.type.toLowerCase())
			) {
				const fileReader = new FileReader();
				fileReader.readAsDataURL(file);
				if (this.files.some((el) => el?.name === file.name)) {
					this.hotToastService.error(
						`Image with name ${file.name} is already exist`,
					);
				} else {
					fileReader.onload = (): void => {
						if (typeof fileReader.result === 'string') {
							const index = this.images.findIndex(
								(item) => item === 'assets/icons/no-image-icon.svg',
							);
							if (index !== -1) {
								this.images[index] = fileReader.result;
								this.files[index] = file;
							} else {
								if (
									(this.images.every(
											(el) => el === 'assets/icons/no-image-icon.svg',
										) &&
										this.images.length <= 5) ||
									this.images.length > 7
								) {
									this.images.pop();
									this.images.unshift(fileReader.result);

									this.files.pop();
									this.files.unshift(file);
								} else {
									this.images.push(fileReader.result);
									this.files.push(file);
								}
							}
						}
						this.formGroup.patchValue({
							photos: this.files,
						});
						this.formGroup.markAsDirty();
					};
				}
			} else this.hotToastService.error('Wrong file format');
		});
		input.value = null;
	}

	public deleteImage(index: number): void {
		this.images.splice(index, 1);
		this.files.splice(index, 1);
		if (this.images.length < 5) {
			this.images.push('assets/icons/no-image-icon.svg');
			this.files.push(null);
		}
		if (this.files.every((file) => file === null)) {
			this.files = [];
		}
		this.formGroup.patchValue({ photos: this.files });
	}

	public drop(event: CdkDragDrop<string[]>): void {
		moveItemInArray(this.images, event.previousIndex, event.currentIndex);
		moveItemInArray(this.files, event.previousIndex, event.currentIndex);
		this.formGroup.patchValue({ photos: this.files });
	}

	public setPaymentMethod(value: string, event?: Event, newValue?: boolean): void {
		if ((event?.target as HTMLInputElement)?.checked || newValue) {
			this.selectedPaymentMethods.push(value);
			this.paymentMethods.find((el) => el.value === value).checked = true;
		} else {
			const index = this.selectedPaymentMethods.indexOf(value);
			this.selectedPaymentMethods.splice(index, 1);
		}
		this.formGroup.patchValue(
			{ paymentMethods: this.selectedPaymentMethods },
			{ emitEvent: false },
		);
	}

	public setTradingArea(value: string, event?: Event, newValue?: boolean): void {
		if ((event?.target as HTMLInputElement)?.checked || newValue) {
			this.selectedTradingAreas.push(value);
			this.tradingAreas.find((el) => el.value === value).checked = true;
		} else {
			const index = this.selectedTradingAreas.indexOf(value);
			this.selectedTradingAreas.splice(index, 1);
		}
		this.formGroup.patchValue(
			{ tradingAreas: this.selectedTradingAreas },
			{ emitEvent: false },
		);
	}

	public setShippingMethod(value: string, event?: Event, newValue?: boolean): void {
		if ((event?.target as HTMLInputElement)?.checked || newValue) {
			this.selectedShippingMethods.push(value);
			this.shippingMethods.find((el) => el.value === value).checked = true;
		} else {
			const index = this.selectedShippingMethods.indexOf(value);
			this.selectedShippingMethods.splice(index, 1);
		}
		this.formGroup.patchValue(
			{ shipping: this.selectedShippingMethods },
			{ emitEvent: false },
		);
	}

	public selectUnitName(event: Unit, controlName: string): void {
		switch (controlName) {
			case 'priceUnitName':
				this.priceUnitName = event;
				return;
			case 'productionCapacityUnitName':
				this.productionCapacityUnitName = event;
				return;
			default:
				this.samplesInfoMeasure = event.name;
		}
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

		this.portsService
			.getPorts(country)
			.pipe(untilDestroyed(this))
			.subscribe((ports) => {
				this.selectedPortCountries.push(country);
				this.portsItems.splice(index, 0, { country: country, ports: ports });
				this.filterCountryOptions();
			});
	}

	public cancel(): void {
		this.formGroup.reset();
		this.images = Array.from(
			{ length: 5 },
			() => 'assets/icons/no-image-icon.svg',
		);

		this.areas.setValue(false);
		this.shippings.setValue(false);
		this.payments.setValue(false);
	}

	public submitForm(): void {
		if (this.isRequestPending.value) {
			return;
		}

		if (this.formGroup.invalid) {
			this.formGroup.markAllAsTouched();
			this.isBadgeInvalidSource.next(true);
			return;
		}

		this.isRequestPending.next(true);

		this.clientMarketplaceService
			.createProduct(
				this.getFormData(this.getBodyForRequest(this.formGroup, this.company.getValue())),
			)
			.pipe(
				first(),
				this.hotToastService.observe({
					loading: 'Product is creating...',
					success: 'Product created successfully',
					error: 'Product creation failed',
				}),
				finalize(() => this.isRequestPending.next(false)),
			)
			.subscribe(async (result: any) => {
				await this.trackCreation(result);
				if (!this.userService.getUser()?.statistics?.products?.created) {
					this.router.navigate(['/b2bmarket/product-posting-complete'], {
						queryParams: { 'first-product': true },
					});
					if (!this.userService.getUser()?.statistics) {
						this.authService.updateUser({
							...this.userService.getUser(),
							statistics: {
								rfq: {
									created: 0,
									deleted: 0,
								},
								offers: {
									created: 0,
									approved: 0,
									deleted: 0,
								},
								products: {
									created: 1,
									approved: 0,
									deleted: 0,
								},
							},
						});
					} else {
						this.authService.updateUser({
							...this.userService.getUser(),
							statistics: {
								...this.userService.getUser().statistics,
								products: {
									...this.userService.getUser().statistics.products,
									created:
										this.userService.getUser().statistics.products.created + 1,
								},
							},
						});
					}
				} else {
					this.router.navigate(['/b2bmarket/product-posting-complete']);
					this.authService.updateUser({
						...this.userService.getUser(),
						statistics: {
							...this.userService.getUser().statistics,
							products: {
								...this.userService.getUser().statistics.products,
								created:
									this.userService.getUser().statistics.products.created + 1,
							},
						},
					});
				}
			});
	}

	private async trackCreation(result: any): Promise<void> {
		const productCount =
			this.userService.getUser()?.statistics?.products?.approved;
		this.mixpanelService.track('New Product posted', {
			'Product Category':
				(await this.getCategoryName(this.formGroup.value.category)) ??
				'undefined',
			'Supplier\'s Country': getName(result.company[0].country),
			'Product Count': productCount,
			'Posting Date': new Date(),
		});
		this.mixpanelService.set({
			properties: {
				'Product Count': productCount,
			},
		});
	}

	public preview(): void {
		if (this.formGroup.invalid) {
			this.formGroup.markAllAsTouched();
			this.isBadgeInvalidSource.next(true);
			return;
		}

		const selectedPorts = this.portsItems.map((el: any, index: number) => {
			return el.ports.filter((ports: { _id: any }) =>
				this.formGroup.value.ports[index]?.portName.includes(ports._id),
			);
		});

		this.product = {
			...this.formGroup.value,
			ports: this.formGroup.value.ports.some(
				(el: { country: string }) => !!el.country,
			)
				? [].concat(...selectedPorts)
				: [],
			photosUrl: this.images.filter(
				(el) => el !== 'assets/icons/no-image-icon.svg',
			),
			certificates:
				this.certificationArray?.length > 0 ? this.certificationArray : null,
			samplesInfo:
				this.formGroup.value.samplePrice &&
				this.formGroup.value.samplesInfoMeasure
					? {
						samplePrice: this.formGroup.value.samplePrice,
						maximumOrderQuantity: this.formGroup.value.maximumOrderQuantity,
						measure: this.samplesInfoMeasure,
					}
					: null,
			productCapacity: {
				count: this.formGroup.value.productionCapacityCount,
				unit: this.productionCapacityUnitName,
				timeSpan: this.formGroup.value.productionCapacityTimeSpan,
			},
			selectedCategory: { _id: this.formGroup.value.category },
			contact: { personName: this.user.fullName },
		};

		if (this.formGroup.value.priceType === PriceTypeEnum.FixedPrice) {
			this.product.price = {
				old: this.formGroup.value.price,
				unit: this.priceUnitName,
			};
		} else if (this.formGroup.value.priceType === PriceTypeEnum.PriceRange) {
			this.product.priceRange = {
				minimum: this.formGroup.value.priceRangeMinimum,
				maximum: this.formGroup.value.priceRangeMaximum,
				unit: this.priceUnitName,
			};
		} else {
			this.product.price = { old: this.formGroup.value.price };
		}

		this.isView = true;
		setTimeout(() => {
			this.smoothScrollToTop();
		}, 0);
	}

	public backToEditing(): void {
		this.isView = false;
		this.formGroup.controls['category'].enable();

		this.paymentMethods.forEach(
			(method) =>
				(method.checked = this.selectedPaymentMethods.includes(method.value)),
		);
		this.shippingMethods.forEach(
			(method) =>
				(method.checked = this.selectedShippingMethods.includes(method.value)),
		);
		this.tradingAreas.forEach(
			(area) => (area.checked = this.selectedTradingAreas.includes(area.value)),
		);

		this.unit$ = this.getUnit(this.formGroup.value.amount);
		this.maximumUnitQuantity$ = this.getUnit(this.formGroup.value.samplePrice, [
			'item',
			'kilogram',
			'pack',
			'set',
			'liter',
		]);

		this.getCountryOptions()
			.pipe(untilDestroyed(this))
			.subscribe(options => {
				this.countryOptions$ = of(options);
				this.ports.patchValue(this.formGroup.value.ports)
			});
	}

	public getCountryOptions(): Observable<any[]> {
		return this.portsService.getCountriesWithPorts().pipe(
			map(codes => {
				return codes.map(code => ({
					label: getName(code),
					icon: code.toUpperCase(),
					code: code.toLowerCase(),
				})).sort((a, b): number => a.label.localeCompare(b.label));
			}));
	}

	public trackByFn = (_: number, value: AbstractControl): AbstractControl =>
		value;

	public trackByImageFn = (_: number, value: string): string => value;

	private async getCategoryName(id: string): Promise<string> {
		return await firstValueFrom(
			this.categoriesService.getCategoryNameById(id).pipe(take(1), first()),
		);
	}

	private getBodyForRequest(data: FormGroup, company: any): any {
		const userInfo = this.userService.getUser();
		return {
			...data.value,
			amount: data.value?.amount,
			paymentMethods: data.value.paymentMethods,
			shipping: data.value.shipping,
			suppliersType:
				userInfo.role.displayName === 'Admin'
					? 'Trader'
					: userInfo.role.displayName.trim(),
			contactPersonName: userInfo.fullName,
			contactCompanyName: userInfo.company,
			contactPhoneNumber: userInfo.phone?.number || company.phone.number,
			contactPhoneInternationalNumber:
				userInfo.phone.internationalNumber || company.phone.internationalNumber,
			contactPhoneNationalNumber:
				userInfo.phone.nationalNumber || company.phone.nationalNumber,
			contactPhoneE164Number:
				userInfo.phone.e164Number || company.phone.e164Number,
			contactPhoneCountryCode:
				userInfo.phone.countryCode || company.phone.countryCode,
			contactPhoneDialCode: userInfo.phone.dialCode || company.phone.dialCode,
			contactEmail: userInfo.email,
			country: data.value.productOrigin,
			priceRangeUnit:
				data.value.priceType === PriceTypeEnum.PriceRange
					? data.value.priceUnit
					: null,
			ports: data.value.ports.reduce(
				(acc: string | any[], current: { portName: any }) =>
					acc.concat(current.portName),
				[],
			),
			certificatesData:
				this.certificationArray.length > 0 ? this.certificationArray : null,
		};
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
				!Object.values(formGroup).some(
					(el) =>
						el === null || moment(el).format('yyyy-MM-DD') === '1970-01-01',
				),
			);
		});

		this.formGroup.controls['photos'].valueChanges
			.pipe(untilDestroyed(this))
			.subscribe((el) => {
				const filteredArr = el?.filter((file: File) => !!file);
				switch (filteredArr?.length) {
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
			}),
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
			}),
		);

		this.formGroup.controls['productSector'].valueChanges
			.pipe(
				switchMap((id: string) => {
					this.formGroup.controls['category'].reset();

					return this.categoriesService.getCategories$().pipe(
						tap(() => this.formGroup.controls['category'].enable()),
						map(
							({ categories }) =>
								categories.find(
									(foundCategory: any) => foundCategory._id === id,
								)?.children,
						),
					);
				}),
				untilDestroyed(this),
			)
			.subscribe((categories) => (this.level2Categories = categories));

		this.formGroup.controls['priceType'].valueChanges
			.pipe(untilDestroyed(this))
			.subscribe((priceType) => {
				switch (priceType) {
					case PriceTypeEnum.FixedPrice:
						this.formGroup.removeControl('priceRangeMinimum');
						this.formGroup.removeControl('priceRangeMaximum');
						this.formGroup.addControl(
							'price',
							new FormControl(null, [Validators.required, onlyNumber()]),
						);
						this.formGroup.addControl(
							'priceUnit',
							new FormControl(null, Validators.required),
						);
						this.formGroup.updateValueAndValidity();
						return;
					case PriceTypeEnum.PriceRange:
						this.formGroup.removeControl('price');
						this.formGroup.addControl(
							'priceRangeMinimum',
							new FormControl(null, [Validators.required, onlyNumber()]),
						);
						this.formGroup.addControl(
							'priceRangeMaximum',
							new FormControl(null, [Validators.required, onlyNumber()]),
						);
						this.formGroup.addControl(
							'priceUnit',
							new FormControl(null, Validators.required),
						);
						this.formGroup.updateValueAndValidity();
						return;
					default:
						const controlsArray = [
							'priceRangeMinimum',
							'priceRangeMaximum',
							'priceUnit',
						];
						controlsArray.forEach((control) =>
							this.formGroup.removeControl(control),
						);
						this.formGroup.controls['price']?.setErrors(null);
						this.formGroup.controls['price']?.clearValidators();
						this.formGroup.controls['price']?.setValue('Price upon request');
						this.formGroup.updateValueAndValidity();
						return;
				}
			});
	}

	private getArrayForSelect(
		array: any[],
	): Array<{ value: any; label: string; checked: boolean }> {
		return array.map((el) => {
			return {
				value: el,
				label: el,
				checked: false,
			};
		});
	}

	private getUnit(amount: number, filterArray?: string[]): Observable<any> {
		return this.unitsService.getUnits().pipe(
			map((units) => {
				const updatedUnits = filterArray
					? units.filter((unit: { name: string }) =>
						filterArray.includes(unit.name),
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
					}),
				);
			}),
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
					if (key === 'certificatesData') {
						formData.append(key, JSON.stringify(value));
					} else {
						value
							.filter((arrayItem) => !!arrayItem)
							.forEach((arrayItem) => {
								if (key === 'specificationList') {
									formData.append(key, JSON.stringify(arrayItem));
								} else {
									formData.append(key, arrayItem);
								}
							});
					}
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

	private updateIsBadgeInvalidSource(): void {
		this.formGroup.valueChanges
			.pipe(
				map(
					() =>
						this.formGroup.invalid &&
						Object.values(this.formGroup.controls).every(
							(control) => control.touched,
						),
				),
			)
			.subscribe((status) => this.isBadgeInvalidSource.next(status));
	}

	private getLevel1Categories$(): void {
		this.level1Categories$ = this.categoriesService
			.getCategories$()
			.pipe(
				map(({ categories }) =>
					categories.filter((category: any) => category.children.length),
				),
			);
	}

	private getCompany(): void {
		this.sourcingRequestService
			.getCompanyData()
			.pipe(first(), untilDestroyed(this))
			.subscribe((company) => (this.company.next(company)));
	}

	private smoothScrollToTop(): void {
		const pageTop = this.document.getElementById('page-top');
		pageTop!.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',
		});
	}

	private filterCountryOptions(): void {
		this.countryOptions$ = this.countryOptions$.pipe(map(options => {
				return options.filter(option => !this.selectedPortCountries.includes(option.code))
			})
		);
	}

	private patchForm() {
		this.company.pipe(
			filter(company => !!company),
			first()
		).subscribe(company => {
			company.paymentAndShipping?.paymentMethods.forEach((method: string) => {
				this.setPaymentMethod(method, null, true);
			});

			company.paymentAndShipping?.deliveryTerms.forEach((method: string) => {
				this.setShippingMethod(method, null, true);
			});

			company.paymentAndShipping?.tradingAreas.forEach((area: string) => {
				this.setTradingArea(area, null, true);
			});
		})
	}
}
