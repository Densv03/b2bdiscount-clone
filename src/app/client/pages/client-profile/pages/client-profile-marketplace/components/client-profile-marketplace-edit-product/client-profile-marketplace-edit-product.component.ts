import {
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
	Observable,
	of,
	switchMap,
} from 'rxjs';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { UnitsService } from '../../../../../../services/units/units.service';
import { UserService } from '../../../../services/user/user.service';
import { TradebidService } from '../../../../../client-tradebid/tradebid.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { map } from 'rxjs/operators';
import {
	AbstractControl,
	FormArray,
	FormBuilder,
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
import { TranslateService } from '@ngx-translate/core';
import { PlatformService } from '../../../../../../services/platform/platform.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PortsService } from '../../../../../../services/ports/ports.service';
import { onlyLatinAndNumber } from '../../../../../../../core/helpers/validator/only-latin-and-number';
import { MarketProductModel } from '../../../../../client-marketplace/models/market-product.model';
import { environment } from '../../../../../../../../environments/environment';
import { Category } from '../../../../../../../core/models/category.model';

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
export class ClientProfileMarketplaceEditProductComponent implements OnInit {
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

	public unit$: Observable<any> = this.getUnit();
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
	private files: any[] = Array.from({ length: 5 }, () => null);

	constructor(
		private portsService: PortsService,
		private unitsService: UnitsService,
		private userService: UserService,
		private translateService: TranslateService,
		private formBuilder: FormBuilder,
		private clientMarketplaceService: ClientMarketplaceService,
		private tradebidService: TradebidService,
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
		if (this.formGroup.invalid) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
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
		this.mixpanelService.track('Product edited', {
			'Product Category': this.level2Categories.find(
				(category) => category._id === this.formGroup.value.category
			).name,
			"Supplier's Country": getName(this.suppliersCountry),
			'Product Count': this.formGroup.value.amount,
			'Edit Date': Date(),
		});
	}

	public updateAndRestore(): void {
		if (!this.formGroup.valid) {
			this.formGroup.markAllAsTouched();
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}

		combineLatest([
			this.clientMarketplaceService.updateProduct(
				this.productId,
				this.getFormData(this.getBodyForRequest(this.formGroup.value))
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

		newImages.forEach((file, index) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
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

				this.changeDetectorRef.detectChanges();
				this.formGroup.markAsDirty();
			};
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
		this.formGroup.patchValue({ photos: this.files });
	}

	public drop(event: CdkDragDrop<string[]>): void {
		moveItemInArray(this.images, event.previousIndex, event.currentIndex);
		this.files[event.currentIndex].serialNumber = event.currentIndex;
		this.files[event.previousIndex].serialNumber = event.previousIndex;

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

	private getBodyForRequest(data: any): any {
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
			contactPhoneNumber: userInfo.phone.number,
			contactPhoneInternationalNumber: userInfo.phone.internationalNumber,
			contactPhoneNationalNumber: userInfo.phone.nationalNumber,
			contactPhoneE164Number: userInfo.phone.e164Number,
			contactPhoneCountryCode: userInfo.phone.countryCode,
			contactPhoneDialCode: userInfo.phone.dialCode,
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
			title: [null, [Validators.required, onlyLatinAndNumber()]],
			specifications: [
				null,
				[Validators.required, Validators.minLength(60), onlyLatinAndNumber()],
			],
			amount: [null, onlyNumber()],
			unit: [null],
			brandName: [null, onlyLatinAndNumber()],
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
					specification: ['', onlyLatinAndNumber()],
					item: ['', onlyLatinAndNumber()],
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
				}),
				untilDestroyed(this)
			)
			.subscribe((categories) => (this.level2Categories = categories));

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
		combineLatest([
			this.tradebidService.getCompanyData(),
			this.clientMarketplaceService.getProductById(this.productId),
		]).subscribe(([{ country }, { product }]: Array<any>) => {
			this.suppliersCountry = country;

			const sector = this.level1Categories.find((el) =>
				el.children.find((child) => child._id === product.category._id)
			);

			this.formGroup.patchValue({
				...product,
				productOrigin: product.productOrigin || product.country,
				productSector: sector._id,
				category: product.category._id,
			});

			if (product.photos.length > 0) {
				product.photos
					.reduce((acc: any[], val: any) => {
						acc[val.serialNumber] = val;
						return acc;
					}, [])
					.forEach((photo: { lg: string }, index: any) => {
						if (photo.lg) {
							const fileUrl = environment.apiUrl + photo.lg;
							this.images.splice(index, 1, fileUrl);
							this.files.pop();
							this.files.unshift(photo);
						}
					});
				this.formGroup.patchValue({ photos: this.files });
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
				this.selectedPaymentMethods = [...this.formGroup.value.paymentMethods];
			}

			if (product.shipping.length > 0 && product.shipping[0] !== null) {
				this.shippingMethods.forEach((method) => {
					method.checked = product.shipping.includes(method.value);
				});
				this.selectedShippingMethods = [...this.formGroup.value.shipping];
			}

			if (product.tradingAreas.length > 0 && product.tradingAreas[0] !== null) {
				this.tradingAreas.forEach((area) => {
					area.checked = product.tradingAreas.includes(area.value);
				});
				this.selectedTradingAreas = [...this.formGroup.value.tradingAreas];
			}
		});
	}

	private getUnit(): Observable<any> {
		return this.unitsService.getUnits().pipe(
			map((units) =>
				units.map((unit: { name: string }) => ({
					...unit,
					displayName: this.translateService.instant(
						`UNITS.${unit.name.toUpperCase()}`
					),
				}))
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
				this.getFormData(this.getBodyForRequest(this.formGroup.value))
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
				this.getFormData(this.getBodyForRequest(this.formGroup.value))
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
