import {Component, OnInit} from '@angular/core';
import {B2bNgxLinkThemeEnum} from '@b2b/ngx-link';
import {B2bNgxButtonThemeEnum} from '@b2b/ngx-button';
import {B2bNgxInputThemeEnum} from '@b2b/ngx-input';
import {B2bNgxSelectThemeEnum} from '@b2b/ngx-select';
import {combineLatest, Observable, of} from 'rxjs';
import {HotToastService} from '@ngneat/hot-toast';
import {SourcingRequestService} from '../../sourcing-request.service';
import {filter, first, map} from 'rxjs/operators';
import {AbstractControl, FormBuilder, FormGroup, Validators,} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from 'src/app/auth/services/auth/auth.service';
import {UserService} from 'src/app/client/pages/client-profile/services/user/user.service';
import {ApiService} from 'src/app/core/services/api/api.service';
import {onlyLatinAndNumberAndSymbols} from "../../../../../core/helpers/validator/only-latin-numbers-symbols";
import {fadeInOutAnimation} from "../../../client-marketplace/shared/animations/fade-in-out.animation";
import {User} from "../../../../../core/models/user/user.model";
import {
	ClientCompanyInformationService
} from "../../../client-profile/pages/client-profile-settings-new/tabs/client-company-information/client-company-information.service";

interface SelectItem {
	id: string;
	value: string;
}

@Component({
	selector: 'b2b-company-information',
	templateUrl: './company-information.component.html',
	styleUrls: ['./company-information.component.scss'],
	animations: [fadeInOutAnimation],
})
export class CompanyInformationComponent implements OnInit {
	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum =
		B2bNgxLinkThemeEnum;
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum =
		B2bNgxButtonThemeEnum;
	public readonly b2bNgxInputThemeEnum: typeof B2bNgxInputThemeEnum =
		B2bNgxInputThemeEnum;
	public readonly b2bNgxSelectThemeEnum: typeof B2bNgxSelectThemeEnum =
		B2bNgxSelectThemeEnum;

	public businessType$: Observable<SelectItem[]>;
	public foundationYear$: Observable<SelectItem[]>;
	public employeesNumber$: Observable<SelectItem[]>;
	public annualRevenue$: Observable<SelectItem[]>;
	// public position$: Observable<SelectItem[]>;
	public form: FormGroup;
	public initialCompanyData: any = null;
	public formType: 'add-rfq' | 'quotation' | 'unclaimed-cargo' | 'b2bmarket';
	public navigationUrl!: string;
	public formState: { [key: string]: AbstractControl };
	public userRole: string = '';
	public employeesNumberArr: string[] = [
		'1-5',
		'5-10',
		'10-50',
		'50-100',
		'> 100',
	];
	public annualRevenueArr: string[] = ['1-5M', '5-10M', '10-50M', '50-100M'];
	public positions: string[] = [
		'Purchase manager',
		'Office manager',
		'Sales manager',
		' FEA Manager',
		' CEO ',
		'Company owner',
	];
	private businessTypesArr: string[] = [
		'Trader',
		'Manufacturer',
		'Logistic company',
		'Broker',
		'Wholesaler'
	];

	constructor(
		private fb: FormBuilder,
		private route: ActivatedRoute,
		private authService: AuthService,
		private router: Router,
		private hotToastService: HotToastService,
		private sourcingRequestService: SourcingRequestService,
		private userService: UserService,
		private apiService: ApiService,
		public clientCompanyInformationService: ClientCompanyInformationService
	) {
		this.clientCompanyInformationService.initDefault();
		this.form = this.createCompanyInformationGroup();
		this.formState = this.form.controls;
		combineLatest([this.sourcingRequestService
			.getCompanyData(), this.userService.getUser$()])
			.pipe(
				filter(([company, user]) => !!company && !!user),
				map(([company, user]) => {
					this.initialCompanyData = company;
					this.patchValueToForm(this.initialCompanyData, user);
				})
			)
			.subscribe();

		this.businessType$ = this.getObservableForSelect(this.businessTypesArr);
		this.foundationYear$ = this.getFoundationYear();
		this.employeesNumber$ = this.getObservableForSelect(
			this.employeesNumberArr
		);
		this.annualRevenue$ = this.getObservableForSelect(this.annualRevenueArr);
		this.formType = this.route.snapshot.queryParams['url'];
		this.getNavigationLink();

		this.userRole = this.userService.getUser()?.role?.name;
	}

	ngOnInit(): void {
		localStorage.setItem('showCancelButton', 'true');
	}

	public getNavigationLink(): void {
		if (this.formType === 'quotation') {
			this.navigationUrl = `sourcing-request/quotation/${localStorage.getItem(
				'quotationId'
			)}`;
			localStorage.removeItem('quotationId');
		} else if (this.formType === 'add-rfq') {
			this.navigationUrl = 'sourcing-request/add-rfq';
		} else if (this.formType === 'b2bmarket') {
			this.navigationUrl = 'b2bmarket/product';
		} else {
			this.navigationUrl = 'offer';
		}
	}

	public onSave() {
		this.form.markAllAsTouched();
		if (this.form.invalid) {
			return;
		}
		const companyInfo: any = {
			...this.form.value,
			phone: this.form.value.phone.number,
			countryCode: this.form.value.phone.countryCode,
			yearOfFoundation: this.form.value.foundationYear,
		};

		if (!companyInfo.businessType) {
			companyInfo.businessType = undefined;
		}

		this.sourcingRequestService
			.updateCompanyInfo(companyInfo)
			.pipe(
				first(),
				this.hotToastService.observe({
					loading: 'Updating company information...',
					success: 'Company information successfully updated.',
					error: 'Company information updating failed',
				})
			)
			.subscribe({
				complete: () => {
					this.apiService.get('user/').subscribe((data: any) => {
						const fullName = data.fullName;
						const preferences = data.preferences;
						const roleId =
							this.userService.getUser().role.name === 'admin'
								? this.userService.getUser().role._id
								: this.clientCompanyInformationService.subRoles.find(
									(role) =>
										role.name?.toLowerCase() ===
										this.form.value.businessType?.toLowerCase()
								)?.id;
						const phone = data.phone;
						this.userService
							.updateUserSettings({
								roleId,
								fullName,
								preferences,
								phoneNumber: phone.number,
								phoneInternationalNumber: phone.internationalNumber,
								phoneNationalNumber: phone.nationalNumber,
								phoneCountryCode: phone.countryCode,
								phoneDialCode: phone.dialCode,
								phoneE164Number: phone.e164Number,
							})
							.subscribe();

						this.userService.changeRole(this.authService.getToken(), this.form.value['businessType'], this.userService.getUser().rootRole._id)
							.subscribe(() => this.authService.initUser())
					});
					return this.router.navigate([this.navigationUrl]);
				},
			});
	}

	private createCompanyInformationGroup(): FormGroup {
		return this.fb.group({
			companyName: ['', [Validators.required, onlyLatinAndNumberAndSymbols()]],
			businessType: ['', [Validators.required]],
			country: ['', [Validators.required]],
			foundationYear: ['', [Validators.required]],
			employeesNumber: ['', [Validators.required]],
			annualRevenue: ['', [Validators.required]],
			phone: ['', [Validators.required]],
			address: ['', [Validators.required, onlyLatinAndNumberAndSymbols()]],
			companyDescription: [
				'',
				[
					Validators.required,
					Validators.minLength(40),
					Validators.maxLength(500),
					onlyLatinAndNumberAndSymbols()
				],
			],
		});
	}

	private patchValueToForm(res: any, user: User): void {
		this.form.patchValue({
			companyName: res?.companyName,
			foundationYear: res?.yearOfFoundation,
			website: res?.website,
			country: res?.country,
			address: res?.address,
			businessType: res?.businessType || user.role._id,
			companyDescription: res?.companyDescription,
			phone: res?.phone,
			employeesNumber: res?.employeesNumber,
			annualRevenue: res?.annualRevenue,
		});
	}

	private getObservableForSelect(arr: string[]): Observable<SelectItem[]> {
		return of(
			arr.map((el) => {
				return {
					id: el,
					value: el,
				};
			})
		);
	}

	private getFoundationYear(): Observable<SelectItem[]> {
		const yearsArr: string[] = [];
		const currentYear: number = new Date(Date.now()).getFullYear();
		for (let i = currentYear; i > currentYear - 150; i--)
			yearsArr.push(i.toString());
		return this.getObservableForSelect(yearsArr);
	}
}
