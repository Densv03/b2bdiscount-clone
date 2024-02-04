import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
	Renderer2,
} from '@angular/core';
import { B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { BehaviorSubject, combineLatest, Observable, of, tap } from 'rxjs';
import { SourcingRequestService } from '../../../../client-sourcing-request/sourcing-request.service';
import { filter, first, map, take } from 'rxjs/operators';
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../../../../../../auth/services/auth/auth.service';
import { UserService } from '../../../services/user/user.service';
import { SocialMediaEnum } from '../social-media.enum';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesService } from '../../../../../services/categories/categories.service';
import { getFormData } from '../../../../../../core/helpers/function/get-form-data';
import {
	PublicCompanyInfoModel,
	SocialMedia,
} from '../../../../../../core/models/public-company-info.model';
import { socialLink } from '../../../../../../core/helpers/validator/social-link';
import { siteLink } from '../../../../../../core/helpers/validator/site-link';
import { animate, style, transition, trigger } from '@angular/animations';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { B2bAuthRootRoleInterface } from '../../../../../../../../projects/shared/src/interfaces/b2b-auth-root-role.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { MixpanelService } from '../../../../../../core/services/mixpanel/mixpanel.service';
import { CategoriesPopupComponent } from '../../../../../shared/components/categories-dialog/categories-popup-component/categories-popup.component';
import { DocumentModel } from 'src/app/core/models/document.model';
import _ from 'lodash';

export interface SelectItem {
	id: string;
	value: string;
}

interface SocialMediaControl {
	name: SocialMediaEnum;
	icon: string;
	placeholder: string;
	validLinkExample: string;
}

interface SocialMediaButton {
	type: SocialMediaEnum;
	icon: string;
}

@UntilDestroy()
@Component({
	selector: 'b2b-client-company-information',
	templateUrl: './client-company-information.component.html',
	styleUrls: ['./client-company-information.component.scss'],
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
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCompanyInformationComponent
	implements OnInit, AfterViewInit
{
	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum =
		B2bNgxLinkThemeEnum;
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum =
		B2bNgxButtonThemeEnum;
	public readonly b2bNgxInputThemeEnum: typeof B2bNgxInputThemeEnum =
		B2bNgxInputThemeEnum;
	public readonly b2bNgxSelectThemeEnum: typeof B2bNgxSelectThemeEnum =
		B2bNgxSelectThemeEnum;

	public readonly isAdmin = this.userService.getUser()?.role?.name === 'admin';

	public foundationYear$: Observable<any>;
	public employeesNumber$: Observable<SelectItem[]>;
	public annualRevenue$: Observable<SelectItem[]>;
	public position$: Observable<SelectItem[]>;
	public categories$: Observable<any>;
	public form: FormGroup;
	public formState: { [key: string]: AbstractControl };
	public initialCompanyData!: PublicCompanyInfoModel;
	public userRole: string = '';
	public socialMediaArr: SocialMediaControl[];
	public presentSocialControls: SocialMediaControl[];
	public socialButtons: SocialMediaButton[];
	public chips: any[] = [];
	public rootRoles!: B2bAuthRootRoleInterface[];
	public isBuyerAccount =
		this.userService.getUser()?.rootRole?.displayName === 'Buyer' ||
		this.isAdmin;

	private documents: DocumentModel[] = [];
	private deletedDocuments: string[] = [];
	private employeesNumberArr: string[] = [
		'1-5',
		'5-10',
		'10-50',
		'50-100',
		'> 100',
	];
	private annualRevenueArr: string[] = ['1-5M', '5-10M', '10-50M', '50-100M'];
	private positions: string[] = [
		'Purchase manager',
		'Office manager',
		'Sales manager',
		' FEA Manager',
		' CEO ',
		'Company owner',
	];
	private availableRolesSource: BehaviorSubject<any[]> = new BehaviorSubject<
		any[]
	>([]);
	private removedSocial: SocialMediaEnum[] = [];

	constructor(
		private readonly fb: FormBuilder,
		private readonly authService: AuthService,
		private readonly hotToastService: HotToastService,
		private readonly sourcingRequestService: SourcingRequestService,
		private readonly userService: UserService,
		private readonly dialog: MatDialog,
		private readonly categoriesService: CategoriesService,
		private readonly changeDetectorRef: ChangeDetectorRef,
		private readonly renderer2: Renderer2,
		private readonly route: ActivatedRoute,
		private readonly hotToastrService: HotToastService,
		private readonly mixpanelService: MixpanelService,
		private readonly router: Router
	) {
		if (router.getCurrentNavigation()?.extras.state?.['showPopUp']) {
			hotToastrService.info(
				'Fill up empty fields to make a complete your company’s profile page. These information will be displayed on your profile.',
				{
					autoClose: false,
					dismissible: true,
				}
			);
		}
		this.form = this.createCompanyInformationGroup();
		this.formState = this.form.controls;

		this.foundationYear$ = this.getFoundationYear();
		this.position$ = this.getObservableForSelect(this.positions);
		this.employeesNumber$ = this.getObservableForSelect(
			this.employeesNumberArr
		);
		this.annualRevenue$ = this.getObservableForSelect(this.annualRevenueArr);
		this.categories$ = this.getCategories();

		this.userRole = this.userService.getUser().role.name;
		this.presentSocialControls = [];
		this.socialMediaArr = [
			{
				name: SocialMediaEnum.instagram,
				placeholder: 'Instagram',
				icon: 'instagram-colorful',
				validLinkExample: 'https://www.instagram.com',
			},
			{
				name: SocialMediaEnum.linkedin,
				placeholder: 'Linkedin',
				icon: 'linkedin-blue-big',
				validLinkExample: 'https://www.linkedin.com',
			},
			{
				name: SocialMediaEnum.fb,
				placeholder: 'Facebook',
				icon: 'facebook',
				validLinkExample: 'https://www.facebook.com',
			},
			{
				name: SocialMediaEnum.twitter,
				placeholder: 'Twitter',
				icon: 'twitter',
				validLinkExample: 'https://www.twitter.com',
			},
		];
		this.socialButtons = [
			{
				type: SocialMediaEnum.fb,
				icon: 'facebook',
			},
			{
				type: SocialMediaEnum.linkedin,
				icon: 'linkedin-blue-big',
			},
			{
				type: SocialMediaEnum.instagram,
				icon: 'instagram-colorful',
			},
			{
				type: SocialMediaEnum.twitter,
				icon: 'twitter',
			},
		];
	}

	public get availableRoles$(): Observable<any[]> {
		return this.availableRolesSource.asObservable() as any;
	}

	ngOnInit(): void {
		this.patchContactsToForm();
		this.getRolesValue();
		this.checkRoleChanges();
		this.saveAllRoles();
	}

	ngAfterViewInit() {
		this.route.queryParams
			.pipe(
				filter((data) => !!data['scrollTo']),
				first()
			)
			.subscribe(() => {
				setTimeout(() => {
					this.hotToastrService.warning(
						'Please change account type to Supplier',
						{ duration: 3500 }
					);
					const block = document.getElementById('accountTypeBlock');
					block.scrollIntoView({
						behavior: 'smooth',
						block: 'center',
						inline: 'nearest',
					});
				});
			});
	}

	public openDocument(document: any) {
		// this.dialogService.open(ClientOfferDocumentComponent, {
		// 	data: document,
		// 	width: "80vw",
		// 	height: "80vh",
		// });
	}

	public onCancel() {
		this.patchValueToForm(this.initialCompanyData);
	}

	public onSave(form: FormGroup) {
		if (form.invalid) {
			form.markAllAsTouched();
			this.scrollToTop();
			return;
		}
		const removedSocialNetworks = this.removedSocial.filter(
			(social) => !form.value.hasOwnProperty(social)
		);
		let removedSocialObject = {};
		if (removedSocialNetworks.length > 0) {
			removedSocialObject = removedSocialNetworks.reduce(
				(accumulator, value) => {
					return {
						...accumulator,
						[value]: ' ',
					};
				},
				{}
			);
		}

		const documents = form.value.documents?.filter(
			(document: any) => document instanceof File
		);
		const uploadedDocs = form.value.documents?.filter(
			(document: any) => !(document instanceof File)
		);
		const companyInfo = getFormData({
			...form.value,
			documents,
			uploadedDocs,
			yearOfFoundation: form.value.foundationYear,
			phone: form.value?.phone?.number,
			dialCode: form.value?.phone?.dialCode,
			countryCode: form.value?.phone?.countryCode,
			role: this.availableRolesSource
				.getValue()
				.find((role) => role.id === form.value.businessType),
			rootRole: this.rootRoles.find(
				(rootRole) => rootRole._id === form.value.rootRole
			),
			...removedSocialObject,
		});

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
			.subscribe((company) => this.authService.updateCompany(company));

		if (!this.isAdmin) {
			const roleId = this.availableRolesSource
				.getValue()
				.find((role) => role.id === form.value.businessType)?.id;

			const rootRoleId: string = this.rootRoles.find(
				(rootRole) => rootRole.displayName === form.value.rootRole
			)!._id;

			this.userService
				.changeRole(this.userService.getToken(), roleId, rootRoleId)
				.pipe(
					this.hotToastService.observe({
						loading: 'Updating business type...',
						success: 'Business type successfully updated.',
						error: 'Business type updating failed',
					})
				)
				.subscribe(() => {
					this.authService.updateUser({
						...this.userService.getUser(),
						role: this.availableRolesSource
							.getValue()
							.find((role) => role.id === roleId),
						rootRole: this.rootRoles.find(
							(rootRole) => rootRole._id === rootRoleId
						),
						preferences: [...form.value.categories],
					});
				});
		}

		const phoneObj = {
			phoneNumber: form.value.phone.number,
			phoneInternationalNumber: form.value.phone.internationalNumber,
			phoneNationalNumber: form.value.phone.nationalNumber,
			phoneCountryCode: form.value.phone.countryCode,
			phoneDialCode: form.value.phone.dialCode,
			phoneE164Number: form.value.phone.e164Number,
		};

		this.userService
			.updateUserSettings({ ...this.userService.getUser(), ...phoneObj })
			.subscribe(() => {
				this.authService.updateUser({
					...this.userService.getUser(),
					company: form.value.companyName,
					phone: {
						countryCode: phoneObj.phoneCountryCode,
						number: phoneObj.phoneNumber,
						internationalNumber: phoneObj.phoneInternationalNumber,
						dialCode: phoneObj.phoneDialCode,
						nationalNumber: phoneObj.phoneNationalNumber,
						e164Number: phoneObj.phoneE164Number,
					},
				});
				this.trackWebsiteChange(form);
				this.trackSocialMediaLinksChange(form);
				this.trackCompanyChange();
			});

		if (this.deletedDocuments.length > 0) {
			this.sourcingRequestService
				.deleteCompanyDocuments(
					this.authService.company._id,
					this.deletedDocuments
				)
				.pipe(untilDestroyed(this))
				.subscribe();
		}
	}

	public addSocialControl(type: SocialMediaEnum): void {
		const controlAlreadyExist: number = this.presentSocialControls.findIndex(
			({ name }) => name === type
		);
		if (!this.presentSocialControls.length || controlAlreadyExist < 0) {
			this.form.addControl(
				type,
				this.fb.control('', [socialLink(), Validators.required])
			);
			const control: any = this.socialMediaArr.find(
				({ name }) => name === type
			);
			this.presentSocialControls.push(control);
		} else {
			this.removeSocialControl(type);
		}
	}

	public removeSocialControl(type: SocialMediaEnum): void {
		this.presentSocialControls = this.presentSocialControls.filter(
			({ name }) => name !== type
		);
		this.form.removeControl(type);
		this.removedSocial.push(type);
	}

	public addCategory(): void {
		let selectedCategories: string[] = [];
		if (this.chips.length > 0) {
			selectedCategories = this.chips.map((item) => item.value);
		}

		this.dialog
			.open(CategoriesPopupComponent, {
				panelClass: 'categories-popup',
				data: {
					selectedCategories,
				},
			})
			.afterClosed()
			.pipe(filter((el) => !!el))
			.subscribe(({ categories }) => {
				this.chips = categories;
				this.formState['categories'].setValue(
					this.chips.map((item) => item.value)
				);
				this.changeDetectorRef.detectChanges();
			});
	}

	public removeCategory(id: string): void {
		this.chips = this.chips.filter(({ value }) => value !== id);
		this.form
			.get('categories')
			?.setValue(
				this.form.get('categories')?.value.filter((item: any) => item !== id)
			);
	}

	public removeDocument(name: string): void {
		if (this.documents.some((el) => el.name === name)) {
			this.deletedDocuments = this.documents
				.filter((doc) => doc.name === name)
				.map((doc) => doc._id);
		}
	}

	private trackCompanyChange() {
		const company = this.initialCompanyData;
		if (
			company.companyName &&
			company.businessType &&
			company.country &&
			company.yearOfFoundation &&
			company.employeesNumber &&
			company.annualRevenue &&
			company.companyDescription &&
			company.phone &&
			company.address &&
			company.website &&
			company.position &&
			company.role &&
			company.categories
		) {
			setTimeout(() => {
				this.mixpanelService.track('Company information completed', {
					'Account Type': this.userService.getUser().rootRole.name,
				});
			}, 200);
		}
	}

	private trackWebsiteChange(form: any) {
		if (form.value?.website !== this.initialCompanyData?.website) {
			this.initialCompanyData.website = form.value.website;
			this.mixpanelService.track('Website Link added', {
				Link: form.value.website,
			});
		}
	}

	private trackSocialMediaLinksChange(form: FormGroup) {
		const oldSocialMediaLinks = _.omitBy(
			this.initialCompanyData.socialMedia,
			(v) => _.isUndefined(v) || _.isNull(v) || v === ''
		);
		const newSocialMediaLinks = _.pick(form.value, [
			'facebook',
			'instagram',
			'linkedin',
			'twitter',
		]);
		if (!_.isEqual(newSocialMediaLinks, oldSocialMediaLinks)) {
			this.mixpanelService.track('Social Media Link added', {
				'Social Media Type': newSocialMediaLinks,
			});
		}
	}

	private createCompanyInformationGroup(): FormGroup {
		return this.fb.group({
			companyName: ['', [Validators.required]],
			businessType: ['', [Validators.required]],
			country: ['', [Validators.required]],
			foundationYear: ['', [Validators.required]],
			employeesNumber: ['', [Validators.required]],
			annualRevenue: ['', [Validators.required]],
			phone: ['', [Validators.required]],
			address: ['', [Validators.required]],
			website: ['', [siteLink()]],
			companyDescription: [
				'',
				[
					Validators.required,
					Validators.minLength(20),
					Validators.maxLength(500),
				],
			],
			position: ['', [Validators.required]],
			rootRole: ['', [Validators.required]],
			categories: [[], Validators.required],
			logo: [],
		});
	}

	private patchValueToForm(res: PublicCompanyInfoModel): void {
		const {
			companyName,
			yearOfFoundation,
			country,
			address,
			position,
			website,
			companyDescription,
			businessType,
			employeesNumber,
			annualRevenue,
			logo,
			documents,
			categories,
			socialMedia,
		} = res;
		this.patchSocialMediaControls(socialMedia);
		this.initCategoryChips(categories);
		this.form.patchValue({
			companyName,
			foundationYear: yearOfFoundation,
			website,
			country,
			address,
			position,
			businessType: this.userService.getUser().role._id || businessType,
			rootRole: this.isAdmin
				? 'Admin'
				: this.userService.getUser().rootRole?.displayName,
			companyDescription,
			phone: this.userService.getUser().phone,
			employeesNumber,
			annualRevenue,
			logo,
			documents,
			categories,
		});

		this.documents = [...documents];

		if (website?.length) {
			this.form.get('website')?.markAsTouched();
		}
	}

	private patchSocialMediaControls(socialMedia: any): void {
		for (const key in socialMedia) {
			if (Boolean(socialMedia[key]) && socialMedia[key] !== ' ') {
				this.form.addControl(
					key,
					this.fb.control(socialMedia[key], [socialLink(), Validators.required])
				);
				const control: any = this.socialMediaArr.find(
					({ name }) => name === key
				);
				this.presentSocialControls.push(control);
			}
		}
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

	private getFoundationYear(): Observable<any> {
		const yearsArr: string[] = [];
		const currentYear: number = new Date(Date.now()).getFullYear();
		for (let i = currentYear; i > currentYear - 150; i--) {
			yearsArr.push(i.toString());
		}
		return this.getObservableForSelect(yearsArr);
	}

	private initCategoryChips(chips: string[]): void {
		combineLatest([of(chips), this.categories$])
			.pipe(
				map(([tempCategories, categories]) => {
					return categories.reduce((acc: any[], val: any) => {
						val.children.forEach((item: any) => {
							if (tempCategories.includes(item.value)) {
								acc.push(item);
							}
						});
						return acc;
					}, []);
				}),
				tap((res) => {
					this.chips = res;
					this.changeDetectorRef.detectChanges();
				})
			)
			.subscribe();
	}

	private getCategories(): Observable<any> {
		return this.categoriesService.getCategories$().pipe(
			map(({ categories }) =>
				categories.map((category: any) => ({
					text: category.name,
					value: category._id,
					collapsed: true,
					checked: false,
					children: category.children.map((level2Category: any) => ({
						text: level2Category.name,
						value: level2Category._id,
						collapsed: true,
						checked: false,
					})),
				}))
			)
		);
	}

	private patchContactsToForm(): void {
		if (this.userService.getUser().rootRole?.displayName === 'Buyer') {
			this.form.removeControl('documents');
		} else if (
			this.userService.getUser().rootRole?.displayName === 'Supplier'
		) {
			this.form.addControl('documents', this.fb.control([]));
		}

		if (this.authService.company) {
			this.patchValueToForm(this.authService.company);
			this.initialCompanyData = this.authService.company;
		} else {
			this.authService
				.getCompany$()
				.pipe(
					filter((company) => !!company),
					first(),
					map((company) => {
						this.initialCompanyData = company;
						this.patchValueToForm(company);
						this.changeDetectorRef.detectChanges();
					})
				)
				.subscribe();
		}
	}

	private scrollToTop(): void {
		const scrollToTop = window.pageYOffset;
		if (scrollToTop === 0) {
			return;
		}

		const scrollStep = scrollToTop / 20;
		const scrollInterval = setInterval(() => {
			if (window.pageYOffset > 0) {
				this.renderer2.setProperty(
					document.documentElement,
					'scrollTop',
					window.pageYOffset - scrollStep
				);
			} else {
				clearInterval(scrollInterval);
			}
		}, 15);
	}

	private getRolesValue(): void {
		if (this.userService.getUser().role.name === 'admin') {
			this.availableRolesSource.next([this.userService.getUser().role]);
			return;
		}

		this.authService
			.getRootRoles()
			.pipe(
				filter((rootRoles) => rootRoles.length > 0),
				take(1),
				untilDestroyed(this)
			)
			.subscribe((rootRoles) => {
				const availableRoles = rootRoles.find(
					(rootRole: { displayName: string }) =>
						rootRole.displayName === this.form.value.rootRole
				)?.subRoles;
				this.availableRolesSource.next(availableRoles);
				if (
					!this.availableRolesSource
						.getValue()
						.some((role) => this.form.value.businessType === role.id)
				) {
					this.form.get('businessType')?.reset();
				}
				if (
					this.form.get('documents') &&
					this.form.value.rootRole === 'Buyer'
				) {
					this.form.removeControl('documents');
				} else if (this.form.value.rootRole === 'Supplier') {
					this.form.addControl('documents', this.fb.control([]));
				}
			});
	}

	private saveAllRoles(): void {
		this.authService
			.getRootRoles()
			.pipe(untilDestroyed(this))
			.subscribe((roles) => (this.rootRoles = roles));
	}

	private checkRoleChanges(): void {
		this.form.controls['rootRole'].valueChanges
			.pipe(untilDestroyed(this))
			.subscribe((rootRole) => {
				if (this.form.get('documents') && rootRole === 'Buyer') {
					this.form.removeControl('documents');
				} else if (rootRole === 'Supplier') {
					this.form.addControl('documents', this.fb.control([]));
				}
				this.getRolesValue();
			});
	}
}
