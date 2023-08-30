import {Component, HostListener, OnInit} from "@angular/core";
import {B2bNgxInputThemeEnum} from "@b2b/ngx-input";
import {B2bNgxSelectThemeEnum} from "@b2b/ngx-select";
import {B2bNgxButtonThemeEnum} from "@b2b/ngx-button";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {onlyNumber} from "../../../../../core/helpers/validator/only-number";
import {ClientMarketplaceService} from "../../client-marketplace.service";
import {TradebidService} from "../../../client-tradebid/tradebid.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject, exhaustMap, Observable} from "rxjs";
import {first, map, take} from "rxjs/operators";
import {UnitsService} from "../../../../services/units/units.service";
import {MatDialog} from "@angular/material/dialog";
import {capitalizeFirstLetter} from "../../../../../core/helpers/function/capitalize-first-letter";
import {UserService} from "../../../client-profile/services/user/user.service";
import {HotToastService} from "@ngneat/hot-toast";
import {animate, style, transition, trigger} from "@angular/animations";
import {CategoriesService} from "../../../../services/categories/categories.service";
import {UntilDestroy} from "@ngneat/until-destroy";
import {MixpanelService} from "../../../../../core/services/mixpanel/mixpanel.service";
import {getName} from "country-list";
import {AuthService} from "src/app/auth/services/auth/auth.service";
import {TranslateService} from "@ngx-translate/core";
import {PlatformService} from "../../../../services/platform/platform.service";

@UntilDestroy()
@Component({
	selector: "b2b-client-marketplace-add-product",
	templateUrl: "./client-marketplace-add-product.component.html",
	styleUrls: ["./client-marketplace-add-product.component.scss"],
	animations: [
		trigger("fadeInOut", [
			transition(":enter", [
				// :enter is alias to 'void => *'
				style({opacity: 0}),
				animate(500, style({opacity: 1})),
			]),
			transition(":leave", [
				// :leave is alias to '* => void'
				animate(500, style({opacity: 0})),
			]),
		]),
	],
})
export class ClientMarketplaceAddProductComponent implements OnInit {
	public formGroup: FormGroup;
	public formState: { [key: string]: AbstractControl };
	public selectedCategoriesFromModal: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
	public b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public unit$: Observable<any> = this.getUnit();

	public readonly shippingMethods = this.getArrayForSelect(this.clientMarketplaceService.shippingMethods);
	public readonly paymentMethods = this.getArrayForSelect(this.clientMarketplaceService.paymentMethods);

	private isBadgeInvalidSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public isBadgeInvalid$: Observable<boolean> = this.isBadgeInvalidSource.asObservable();

	private hideLabelSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	private productId?: string = this.activatedRoute.snapshot.params["id"];

	constructor(
		private unitsService: UnitsService,
		private userService: UserService,
		private translateService: TranslateService,
		private formBuilder: FormBuilder,
		private clientMarketplaceService: ClientMarketplaceService,
		private tradebidService: TradebidService,
		private activatedRoute: ActivatedRoute,
		private dialog: MatDialog,
		private hotToastService: HotToastService,
		private router: Router,
		private categoriesService: CategoriesService,
		private readonly mixpanelService: MixpanelService,
		private authService: AuthService,
		private platformService: PlatformService
	) {
		this.formGroup = this.createFormGroup();
		this.formState = this.formGroup.controls;
	}

	ngOnInit(): void {
		if (this.platformService.isBrowser) {
			this.onResize();
			this.updateIsBadgeInvalidSource();
		}
		this.categoriesService.getCategories$();
	}

	public get hideLabel$(): Observable<boolean> {
		return this.hideLabelSource.asObservable();
	}

	@HostListener("window:resize", ["$event"])
	private onResize(): void {
		if (this.platformService.isServer) {
			return;
		}
		this.hideLabelSource.next(window.innerWidth < 889);
	}

	public cancel(): void {
		this.router.navigate(["profile/your-workspace/b2bmarket"]);
	}

	public submitForm(): void {
		if (!this.formGroup.valid) {
			this.formGroup.markAllAsTouched();
			this.isBadgeInvalidSource.next(true);
			return;
		}

		this.tradebidService
			.getCompanyData()
			.pipe(
				first(),
				exhaustMap((company) => {
					return this.clientMarketplaceService
						.createProduct(this.getFormData(this.getBodyForRequest(this.formGroup, company)))
						.pipe(
							this.hotToastService.observe({
								loading: "Product is creating...",
								success: "Product created successfully",
								error: "Product creation failed",
							})
						);
				})
			)
			.subscribe((result) => {
				this.mixpanelService.track('New Product posted', {
					'Product Category': this.getCategoryName(this.formGroup.value.category[0]),
					'Supplier\'s Country': getName(result.company[0].country),
					'Product Count': this.formGroup.value.amount,
					'Posting Date': Date()
				});

				if (!this.userService.getUser()?.statistics?.products?.created) {
					this.router.navigate(["/b2bmarket/product-posting-complete"], {queryParams: {'first-product': true}});
					if (!this.userService.getUser()?.statistics) {
						this.authService.updateUser({
							...this.userService.getUser(), statistics: {
								rfq: {
									created: 0,
									deleted: 0,
								},
								offers: {
									created: 0,
									approved: 0,
									deleted: 0
								},
								products: {
									created: 1,
									approved: 0,
									deleted: 0
								}
							}
						})
					} else {
						this.authService.updateUser({
							...this.userService.getUser(),
							statistics: {
								...this.userService.getUser().statistics,
								products: {
									...this.userService.getUser().statistics.products,
									created: this.userService.getUser().statistics.products.created + 1
								}
							}
						});
					}
				} else {
					this.router.navigate(["/b2bmarket/product-posting-complete"]);
					this.authService.updateUser({
						...this.userService.getUser(),
						statistics: {
							...this.userService.getUser().statistics,
							products: {
								...this.userService.getUser().statistics.products,
								created: this.userService.getUser().statistics.products.created + 1
							}
						}
					});
				}
			});
	}


	private getCategoryName(id: string): string {
		let name: string;
		this.categoriesService.getCategoryNameById(id)
			.pipe(take(1))
			.subscribe(el => name = el);
		return name;
	}

	private getBodyForRequest(data: FormGroup, company: any): any {
		const userInfo = this.userService.getUser();
		return {
			...data.value,
			amount: data.value.amount,
			paymentMethods: data.value.paymentMethods,
			shipping: data.value.shipping,
			suppliersType: userInfo.role.displayName === "Admin" ? "Trader" : userInfo.role.displayName.trim(),
			contactPersonName: userInfo.fullName,
			contactCompanyName: userInfo.company,
			contactPhoneNumber: userInfo.phone.number || company.phone.number,
			contactPhoneInternationalNumber: userInfo.phone.internationalNumber || company.phone.internationalNumber,
			contactPhoneNationalNumber: userInfo.phone.nationalNumber || company.phone.nationalNumber,
			contactPhoneE164Number: userInfo.phone.e164Number || company.phone.e164Number,
			contactPhoneCountryCode: userInfo.phone.countryCode || company.phone.countryCode,
			contactPhoneDialCode: userInfo.phone.dialCode || company.phone.dialCode,
			contactEmail: userInfo.email,
			country: this.formState["country"].value,
		};
	}

	private createFormGroup(): FormGroup {
		return this.formBuilder.group({
			title: [null, Validators.required],
			specifications: [null, Validators.required],
			amount: [null, [Validators.required]],
			unit: [null, Validators.required],
			category: [null, Validators.required],
			photos: [null, Validators.required],
			visibilityPhotos: [true],
			price: [null, [Validators.required, onlyNumber()]],
			shipping: [null, Validators.required],
			paymentMethods: [null, Validators.required],
			country: [null, Validators.required],
		});
	}

	private getArrayForSelect(array: any[]): Array<{ value: any; label: string }> {
		return array.map((el) => {
			return {
				value: el,
				label: el,
			};
		});
	}

	private getUnit(): Observable<any> {
		return this.unitsService.getUnits().pipe(
			map((units) =>
				units.map((unit: { name: string; }) => ({
					...unit,
					displayName: this.translateService.instant(`UNITS.${unit.name.toUpperCase()}`),
				}))
			)
		);
	}

	private getFormData(data: any): FormData {
		const formData = new FormData();

		Object.entries(data)
			.filter(([, value]) => !!value)
			.forEach(([key, value]: [string, any]) => {
				if (key === "photos" || key === "documents") {
					Array.from(value).forEach((file: any) => {
						formData.append(key, file);
					});
				} else if (Array.isArray(value)) {
					value
						.filter((arrayItem) => !!arrayItem)
						.forEach((arrayItem) => {
							formData.append(key, arrayItem);
						});
				} else if (typeof value === "object" && value) {
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
				map(() => this.formGroup.invalid && Object.values(this.formGroup.controls).every((control) => control.touched))
			)
			.subscribe((status) => this.isBadgeInvalidSource.next(status));
	}
}
