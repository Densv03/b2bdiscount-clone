import {
	Component,
	ElementRef,
	HostListener,
	OnInit,
	QueryList,
	ViewChild,
	ViewChildren,
} from '@angular/core';
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
import { ActivatedRoute, Router } from '@angular/router';
import {
	BehaviorSubject,
	exhaustMap,
	filter,
	finalize,
	Observable,
	of,
} from 'rxjs';
import { first, map, switchMap, take, tap } from 'rxjs/operators';
import { UnitsService } from '../../../../services/units/units.service';
import { MatDialog } from '@angular/material/dialog';
import { capitalizeFirstLetter } from '../../../../../core/helpers/function/capitalize-first-letter';
import { UserService } from '../../../client-profile/services/user/user.service';
import { HotToastService } from '@ngneat/hot-toast';
import { animate, style, transition, trigger } from '@angular/animations';
import { CategoriesService } from '../../../../services/categories/categories.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MixpanelService } from '../../../../../core/services/mixpanel/mixpanel.service';
import { getCode, getName } from 'country-list';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { PlatformService } from '../../../../services/platform/platform.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PortsService } from '../../../../services/ports/ports.service';
import { TreeviewConfig } from '@b2b/ngx-treeview';
import { onlyLatinAndNumber } from '../../../../../core/helpers/validator/only-latin-and-number';
import { PublicCompanyInfoModel } from '../../../../../core/models/public-company-info.model';
import { MarketProductModel } from '../../models/market-product.model';
import { PortsQuery } from '../../../../state/ports/ports.query';
import { onlyNumber } from '../../../../../core/helpers/validator/only-number';
import { onlyLatinAndNumberAndSymbols } from '../../../../../core/helpers/validator/only -latin-numbers-symbols';

@UntilDestroy()
@Component({
	selector: 'b2b-client-marketplace-add-product',
	templateUrl: './client-marketplace-add-product.component.html',
	styleUrls: ['./client-marketplace-add-product.component.scss'],
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
export class ClientMarketplaceAddProductComponent implements OnInit {
	// @ViewChildren('productInformation', 'photos', 'additionalInfo') sectionList: QueryList<ElementRef>;

	public formGroup: FormGroup;
	public formState: { [key: string]: AbstractControl };
	public selectedCategoriesFromModal: BehaviorSubject<string[]> =
		new BehaviorSubject<string[]>([]);
	public b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public unit$: Observable<any>;
	public isDragged: boolean = false;
	public buttonLength: string = 'No file chosen';
	public images: string[] = Array.from(
		{ length: 5 },
		() => 'assets/icons/no-image-icon.svg'
	);
	public product: MarketProductModel;
	public isView: boolean = false;
	public areas = new FormControl(false);
	public shippings = new FormControl(false);
	public payments = new FormControl(false);
	public portsItems: { country: string; ports: any[] }[] = [];
	public config: TreeviewConfig = TreeviewConfig.create({
		hasAllCheckBox: false,
		hasFilter: false,
		hasCollapseExpand: false,
		decoupleChildFromParent: false,
		maxHeight: 400,
	});
	public level1Categories$: Observable<any[]>;
	public level2Categories: any[];
	public company: PublicCompanyInfoModel;
	public readonly shippingMethods = this.getArrayForSelect(
		this.clientMarketplaceService.shippingMethods
	);
	public readonly paymentMethods = this.getArrayForSelect(
		this.clientMarketplaceService.paymentMethods
	);
	public tradingAreas = this.getArrayForSelect([
		'Domestic market',
		'International market',
	]);
	public user = this.userService.getUser();

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
	private productId?: string = this.activatedRoute.snapshot.params['id'];
	private selectedPaymentMethods: string[] = [];
	private selectedTradingAreas: string[] = [];
	private selectedShippingMethods: string[] = [];
	private unitName: string;

	constructor(
		private unitsService: UnitsService,
		private userService: UserService,
		private formBuilder: FormBuilder,
		private clientMarketplaceService: ClientMarketplaceService,
		private sourcingRequestService: SourcingRequestService,
		private activatedRoute: ActivatedRoute,
		private dialog: MatDialog,
		private hotToastService: HotToastService,
		private router: Router,
		private categoriesService: CategoriesService,
		private readonly mixpanelService: MixpanelService,
		private authService: AuthService,
		private platformService: PlatformService,
		private readonly portsService: PortsService,
		private readonly portsQuery: PortsQuery
	) {}

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
		this.categoriesService.getCategories$();
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
			specification: ['', onlyLatinAndNumber()],
			item: ['', onlyLatinAndNumber()],
		});
		this.specificationList.push(specificationList);
	}

	public movePortsRowUp(index: number): void {
		if (this.ports.length - 1 === index) {
			return;
		}
		const currentGroup = this.ports.at(index);
		this.ports.removeAt(index);
		this.ports.insert(index - 1, currentGroup);
	}

	public movePortsRowDown(index: number): void {
		if (index === 0) {
			return;
		}
		const currentGroup = this.ports.at(index);
		this.ports.removeAt(index);
		this.ports.insert(index + 1, currentGroup);
	}

	public deletePortsRow(index: number): void {
		this.ports.removeAt(index);
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
		const format = ['svg', 'jpg', 'png', 'webp', 'jpeg', 'bmp'];

		newImages.forEach((file, index) => {
			if (
				format.includes(
					file.name?.split('.')[file.name?.split('.').length - 1]
				) ||
				format.includes(file?.type)
			) {
				const fileReader = new FileReader();
				fileReader.readAsDataURL(file);
				if (this.files.some((el) => el?.name === file.name)) {
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
							} else {
								this.images.pop();
								this.images.unshift(fileReader.result);

								this.files.pop();
								this.files.unshift(file);
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
		this.images.push('assets/icons/no-image-icon.svg');
		this.files.push(null);
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

	public selectUnitName(event: any): void {
		this.unitName =
			this.formGroup.value?.amount > 1
				? event.pluralDisplayName
				: event.displayName;
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
				this.portsItems.splice(index, 0, { country: country, ports: ports });
			});
	}

	public cancel(): void {
		this.formGroup.reset();
		this.images = Array.from(
			{ length: 5 },
			() => 'assets/icons/no-image-icon.svg'
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
				this.getFormData(this.getBodyForRequest(this.formGroup, this.company))
			)
			.pipe(
				first(),
				this.hotToastService.observe({
					loading: 'Product is creating...',
					success: 'Product created successfully',
					error: 'Product creation failed',
				}),
				finalize(() => this.isRequestPending.next(false))
			)
			.subscribe((result) => {
				this.mixpanelService.track('New Product posted', {
					'Product Category': this.getCategoryName(
						this.formGroup.value.category[0]
					),
					"Supplier's Country": getName(result.company[0].country),
					'Product Count': this.formGroup.value.amount,
					'Posting Date': Date(),
				});

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

	public preview(): void {
		if (this.formGroup.invalid) {
			this.formGroup.markAllAsTouched();
			this.isBadgeInvalidSource.next(true);
			return;
		}

		const selectedPorts = this.portsItems.map((el: any, index: number) => {
			return el.ports.filter(
				(ports: { _id: any }) =>
					this.formGroup.value.ports[index]?.portName.includes(ports._id)
			);
		});

		this.product = {
			...this.formGroup.value,
			ports: this.formGroup.value.ports.some(
				(el: { country: string }) => !!el.country
			)
				? [].concat(...selectedPorts)
				: [],
			photosUrl: this.images.filter(
				(el) => el !== 'assets/icons/no-image-icon.svg'
			),
			unit: this.formGroup.value.unit ? this.unitName : null,
		};
		this.isView = true;
		setTimeout(() => {
			this.smoothScrollToTop();
		}, 0);
	}

	public backToEditing(): void {
		this.isView = false;
		this.formGroup.controls['category'].enable();
		this.formGroup.controls['unit'].enable();

		this.paymentMethods.forEach(
			(method) =>
				(method.checked = this.selectedPaymentMethods.includes(method.value))
		);
		this.shippingMethods.forEach(
			(method) =>
				(method.checked = this.selectedShippingMethods.includes(method.value))
		);
		this.tradingAreas.forEach(
			(area) => (area.checked = this.selectedTradingAreas.includes(area.value))
		);

		this.unit$ = this.getUnit(this.formGroup.value.amount);
	}

	public trackByFn = (_: number, value: AbstractControl): AbstractControl =>
		value;

	public trackByImageFn = (_: number, value: string): string => value;

	private getCategoryName(id: string): string {
		let name: string;
		this.categoriesService
			.getCategoryNameById(id)
			.pipe(take(1))
			.subscribe((el) => (name = el));
		return name;
	}

	private getBodyForRequest(data: FormGroup, company: any): any {
		const userInfo = this.userService.getUser();
		return {
			...data.value,
			price: 1,
			amount: data.value.amount,
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
			ports: data.value.ports.reduce(
				(acc: string | any[], current: { portName: any }) =>
					acc.concat(current.portName),
				[]
			),
		};
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
			amount: [null, onlyNumber()],
			unit: [null],
			brandName: [null, onlyLatinAndNumberAndSymbols()],
			productSector: [null, Validators.required],
			category: [{ value: null, disabled: true }, Validators.required],
			photos: [null, Validators.required],
			visibilityPhotos: [true],
			shipping: [null],
			paymentMethods: [null],
			tradingAreas: [null],
			productOrigin: [null, Validators.required],
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
					default:
						this.buttonLength = 'No file chosen';
						break;
				}
			});

		this.unit$ = this.formGroup.controls['amount'].valueChanges.pipe(
			switchMap((amount) => {
				if (amount) {
					this.formGroup.get('unit').setValidators([Validators.required]);
					this.formGroup.get('unit').updateValueAndValidity();
					this.formGroup.get('unit').markAsTouched();

					return this.getUnit(amount);
				} else {
					this.formGroup.get('unit').setValue(null);
					this.formGroup.get('unit').clearValidators();
					this.formGroup.get('unit').updateValueAndValidity();

					return of([]);
				}
			})
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
									(foundCategory: any) => foundCategory._id === id
								)?.children
						)
					);
				}),
				untilDestroyed(this)
			)
			.subscribe((categories) => (this.level2Categories = categories));
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

	private getUnit(amount: number): Observable<any> {
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

	private updateIsBadgeInvalidSource(): void {
		this.formGroup.valueChanges
			.pipe(
				map(
					() =>
						this.formGroup.invalid &&
						Object.values(this.formGroup.controls).every(
							(control) => control.touched
						)
				)
			)
			.subscribe((status) => this.isBadgeInvalidSource.next(status));
	}

	private getLevel1Categories$(): void {
		this.level1Categories$ = this.categoriesService
			.getCategories$()
			.pipe(
				map(({ categories }) =>
					categories.filter((category: any) => category.children.length)
				)
			);
	}

	private getCompany(): void {
		this.sourcingRequestService
			.getCompanyData()
			.pipe(first(), untilDestroyed(this))
			.subscribe((company) => (this.company = company));
	}

	private smoothScrollToTop(): void {
		const pageTop = document.getElementById('page-top');
		pageTop!.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',
		});
	}
}
