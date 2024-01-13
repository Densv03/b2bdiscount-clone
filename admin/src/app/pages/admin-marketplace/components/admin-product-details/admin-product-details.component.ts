import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import {
	AbstractControl,
	FormArray,
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { Category } from '../../../../../../../src/app/core/models/category.model';
import {
	BehaviorSubject,
	combineLatest,
	filter,
	Observable,
	of,
	pairwise,
	switchMap,
} from 'rxjs';
import { PublicCompanyInfoModel } from '../../../../../../../src/app/core/models/public-company-info.model';
import { PortsService } from '../../../../../../../src/app/client/services/ports/ports.service';
import { UnitsService } from '../../../../../../../src/app/client/services/units/units.service';
import { UserService } from '../../../../../../../src/app/client/pages/client-profile/services/user/user.service';
import { TranslateService } from '@ngx-translate/core';
import { ClientMarketplaceService } from '../../../../../../../src/app/client/shared/services/client-marketplace-service/client-marketplace.service';
import { SourcingRequestService } from '../../../../../../../src/app/client/pages/client-sourcing-request/sourcing-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { CategoriesService } from '../../../../../../../src/app/client/services/categories/categories.service';
import { MixpanelService } from '../../../../../../../src/app/core/services/mixpanel/mixpanel.service';
import { PlatformService } from '../../../../../../../src/app/client/services/platform/platform.service';
import { getName } from 'country-list';
import { onlyLatinAndNumber } from '../../../../../../../src/app/core/helpers/validator/only-latin-and-number';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { onlyLatinAndNumberAndSymbols } from '../../../../../../../src/app/core/helpers/validator/only -latin-numbers-symbols';
import { onlyNumber } from '../../../../../../../src/app/core/helpers/validator/only-number';
import { map, startWith } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { checkSerialNumber } from '../../../../../../../src/app/core/helpers/function/check-serial-number';
import { environment } from '../../../../../../../src/environments/environment';
import { capitalizeFirstLetter } from '../../../../../../../src/app/core/helpers/function/capitalize-first-letter';
import { MarketProductModel } from '../../../../../../../src/app/client/pages/client-marketplace/models/market-product.model';
import { EditMode } from '../../../../../../../src/app/client/pages/client-profile/pages/client-profile-marketplace/components/client-profile-marketplace-edit-product/client-profile-marketplace-edit-product.component';
import { animate, style, transition, trigger } from '@angular/animations';

@UntilDestroy()
@Component({
	selector: 'app-admin-product-details',
	templateUrl: './admin-product-details.component.html',
	styleUrls: ['./admin-product-details.component.scss'],
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
export class AdminProductDetailsComponent {
	public PRODUCTS_LIMIT: number = this.clientMarketplaceService.PRODUCTS_LIMIT;
	public formGroup: FormGroup;
	public formState: { [key: string]: AbstractControl };
	public editMode: EditMode;
	public EditModeEnum = EditMode;
	public portsItems: any = [];
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

	public unit$: Observable<any>;
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
	private selectedPaymentMethods: string[] = [];
	private selectedTradingAreas: string[] = [];
	private selectedShippingMethods: string[] = [];
	private company: PublicCompanyInfoModel;
	private files: any[] = Array.from({ length: 5 }, () => null);

	constructor(
		private portsService: PortsService,
		private unitsService: UnitsService,
		private userService: UserService,
		private translateService: TranslateService,
		private formBuilder: FormBuilder,
		private clientMarketplaceService: ClientMarketplaceService,
		private sourcingRequestService: SourcingRequestService,
		private activatedRoute: ActivatedRoute,
		public dialog: MatDialog,
		private hotToastService: HotToastService,
		private router: Router,
		private categoriesService: CategoriesService,
		private readonly mixpanelService: MixpanelService,
		private readonly changeDetectorRef: ChangeDetectorRef,
		private platformService: PlatformService
	) {}

	ngOnInit(): void {
		this.createFormGroup();
		this.getLevel1Categories$();
		this.detectEditMode();
		this.patchForm();
		if (this.platformService.isBrowser) {
			this.onResize();
		}

		this.categoriesService.getCategories$();
	}

	get specificationList(): FormArray {
		return this.formGroup.get('specificationList') as FormArray;
	}

	get ports(): FormArray {
		return this.formGroup.get('ports') as FormArray;
	}

	get hideLabel$(): Observable<boolean> {
		return this.hideLabelSource.asObservable();
	}

	@HostListener('window:resize', ['$event'])
	private onResize(): void {
		if (this.platformService.isServer) {
			return;
		}
		this.hideLabelSource.next(window.innerWidth < 889);
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
			.subscribe(() => {
				this.mixpanelService.track('Product archived', {
					'Product Category': this.level2Categories.find(
						(category) => category._id === this.formGroup.value.category
					).name,
					"Supplier's Country": getName(this.suppliersCountry),
					'Product Count': this.formGroup.value.amount,
					'Archivation Date': Date(),
				});
				// this.clientMarketplaceService.updateMarketplaceProducts(this.filteredQueryObj);
				this.router.navigate(['profile/your-workspace/b2bmarket']);
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

		this.updateProductByAdmin();
	}

	public updateAndRestore(): void {
		if (this.platformService.isServer) {
			return;
		}
		if (!this.formGroup.valid) {
			this.formGroup.markAllAsTouched();
			window.scrollTo({ top: 0, behavior: 'smooth' });
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
								this.images.pop();
								this.images.unshift(fileReader.result);

								this.files.pop();
								this.files.unshift(file);
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
			} else this.hotToastService.error('Wrong file format');
		});
		input.value = null;
	}

	public deleteImage(index: number): void {
		this.images.splice(index, 1);
		this.images.push('assets/icons/no-image-icon.svg');
		if (this.files[index]?._id) {
			this.removedFilesId.push(this.files[index]?._id);
		}
		this.files.splice(index, 1);
		this.files.push(null);
		if (this.files.every((file) => file === null)) {
			this.files = [];
		}
		this.formGroup.patchValue({ photos: this.files });
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
		};

		const photos = this.formGroup.value.photos.filter(
			(photo: any) => photo instanceof File
		);
		if (photos.length > 0) {
			model.photos = photos;
		}

		return model;
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
			category: [null, Validators.required],
			photos: [null, Validators.required],
			serialNumbers: [null],
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

		this.formState = this.formGroup.controls;

		this.formGroup.controls['productSector'].valueChanges
			.pipe(
				startWith(null),
				pairwise(),
				switchMap(([prevId, curId]) => {
					if (prevId) {
						this.formGroup.get('category').reset();
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
			.subscribe(({ company, product }) => {
				this.company = company;
				this.suppliersCountry = company.country;

				const sector = this.level1Categories.find((el) =>
					el.children.find(
						(child) => child._id === (product.category as Category)._id
					)
				);

				this.formGroup.patchValue(
					{
						...product,
						productOrigin: product.productOrigin || product.country,
						productSector: sector._id,
						category: (product.category as Category)._id,
					},
					{ emitEvent: false }
				);

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
							this.images.splice(index, 1, fileUrl);
							this.files.splice(index, 1, photo);
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

				if (product.ports[0] !== null && product.ports.length > 0) {
					const productPorts = this.getPorts(product);

					productPorts.forEach((value, index) => {
						index === 0 ? null : this.addPortsField();
						this.getPortsByCountry(value.country, index);
					});

					this.ports.setValue(productPorts);
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
					if (key === 'serialNumbers') {
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
			this.removedFilesId.length > 0
				? this.clientMarketplaceService.deletePhotosFromProduct(
						this.productId,
						this.removedFilesId
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
					return this.clientMarketplaceService.deletePhotosFromProduct(
						this.productId,
						this.removedFilesId
					);
				}),
				this.hotToastService.observe({
					loading: 'Updating photos...',
					success: 'Photos updated successfully',
					error: 'Error updating photos',
				})
			)
			.subscribe(() => {
				const page = this.activatedRoute.snapshot.queryParams['page'];
				this.router.navigate(['/b2bmarket'], {
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

	private getPortsByCountry(country: string, index: number): void {
		this.portsService
			.getPorts(country)
			.pipe(untilDestroyed(this))
			.subscribe((ports) => (this.portsItems[index] = ports));
	}

	private getPorts(
		product: MarketProductModel
	): { country: string; _id: string[] }[] {
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
}
