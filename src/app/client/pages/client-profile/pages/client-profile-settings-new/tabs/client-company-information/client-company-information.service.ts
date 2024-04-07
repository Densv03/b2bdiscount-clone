import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {siteLink} from '../../../../../../../core/helpers/validator/site-link';
import {socialLink} from '../../../../../../../core/helpers/validator/social-link';
import {filter, first, take} from 'rxjs/operators';
import {AuthService} from '../../../../../../../auth/services/auth/auth.service';
import {Subject, tap} from 'rxjs';
import {
	B2bAuthRootRoleInterface,
	B2bAuthSubRoleInterface,
} from '../../../../../../../../../projects/shared/src/interfaces/b2b-auth-root-role.interface';
import {UserService} from '../../../../services/user/user.service';
import {toastMessages, transformToSelect,} from './client-company-information.constants';
import {PublicCompanyInfoModel, SocialMedia,} from '../../../../../../../core/models/public-company-info.model';
import {SourcingRequestService} from '../../../../../client-sourcing-request/sourcing-request.service';
import {HotToastService} from '@ngneat/hot-toast';
import {MixpanelService} from '../../../../../../../core/services/mixpanel/mixpanel.service';
import _ from 'lodash';
import {getFormData} from '../../../../../../../core/helpers/function/get-form-data';
import {SelectItem} from "./client-company-information.interface";
import {onlyLatinAndNumberAndSymbols} from "../../../../../../../core/helpers/validator/only-latin-numbers-symbols";

@Injectable(
	{
		providedIn: 'root'
	}
)
export class ClientCompanyInformationService {
	readonly isAdmin = this.userService.getUser()?.role?.name === 'admin';
	form = this.initForm();
	rootRoles$ = new Subject<B2bAuthRootRoleInterface[]>();
	subRoles: B2bAuthSubRoleInterface[] = [];
	yearOfFoundationList: SelectItem[] = this.getFoundationYear();
	isSubmit = false;

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private userService: UserService,
		private sourcingRequestService: SourcingRequestService,
		private hotToastService: HotToastService,
		private mixpanelService: MixpanelService,
	) {
	}

	get company() {
		return this.authService.company;
	}

	set company(company: PublicCompanyInfoModel) {
		this.authService.updateCompany(company);
	}

	initForm(): FormGroup {
		return this.fb.group({
			companyName: ['', [Validators.required, onlyLatinAndNumberAndSymbols()]],
			businessType: ['', [Validators.required]],
			country: ['', [Validators.required]],
			yearOfFoundation: ['', [Validators.required]],
			employeesNumber: ['', [Validators.required]],
			annualRevenue: ['', [Validators.required]],
			address: ['', [Validators.required, onlyLatinAndNumberAndSymbols()]],
			website: ['', [siteLink()]],
			companyDescription: [
				'',
				[
					Validators.required,
					Validators.minLength(40),
					onlyLatinAndNumberAndSymbols()
				],
			],
			logo: [null],
			banner: [null],
			socialMedia: this.fb.group({
				facebook: ['', socialLink()],
				instagram: ['', socialLink()],
				linkedin: ['', socialLink()],
				twitter: ['', socialLink()],
			}),
		});
	}

	public initDefault() {
		this.getRoles();
		this.getFoundationYear();
	}

	onSubmit(company: PublicCompanyInfoModel) {
		this.isSubmit = false;
		const socialMedia = company.socialMedia;
		const data = getFormData({
			...company,
			...socialMedia
		});
		try {
			if (!company.banner) {
				this.sourcingRequestService.deleteBanner().subscribe();
			}
			if (!company.logo) {
				this.sourcingRequestService.deleteLogo().subscribe();
			}
			this.updateCompany(data, company, socialMedia);
		} catch (e) {
			console.log(e);
		}
		this.isSubmit = true;
	}

	updateCompany(update: any, company: PublicCompanyInfoModel, socialMedia?: SocialMedia) {
		this.sourcingRequestService
			.updateCompanyInfo(update)
			.pipe(
				first(),
				this.hotToastService.observe(toastMessages),
				tap(() => {
					this.mixpanelChangeUser(company);
					this.trackWebsiteChange(company);

					if (socialMedia) {
						this.trackSocialMediaLinksChange(socialMedia);
					}
					this.trackCompanyChange();
				})
			)
			.subscribe((company) => {
				this.authService.updateCompany(company);
			});
	}

	mixpanelChangeUser(company: PublicCompanyInfoModel) {
		const user = this.authService.user;
		this.mixpanelService.set({
			distinctId: this.userService.getUser()._id,
			properties: {
				'Account Type': user.rootRole,
				'Company Name': company.companyName,
				Name: company.companyName,
			},
		});
	}

	private getRoles() {
		return this.authService
			.getRootRoles()
			.pipe(
				filter((rootRoles) => !!rootRoles.length),
				take(1),
			)
			.subscribe((res) => {
				this.rootRoles$.next(res);
				if (this.authService.user.rootRole.name === 'supplier') {
					this.subRoles = res.find(x => x.name === 'supplier').subRoles;
				} else {
					this.subRoles = res.find(x => x.name === 'buyer').subRoles;
				}
			});
	}

	private getFoundationYear(): SelectItem[] {
		const yearsArr: string[] = [];
		const currentYear: number = new Date(Date.now()).getFullYear();
		for (let i = currentYear; i > currentYear - 150; i--) {
			yearsArr.push(i.toString());
		}
		return transformToSelect(yearsArr);
	}

	private trackWebsiteChange(form: PublicCompanyInfoModel) {
		if (form?.website !== this.company?.website) {
			this.company.website = form?.website;
			this.mixpanelService.track('Website Link added', {
				Link: form?.website,
			});
		}
	}

	private trackSocialMediaLinksChange(socialMedia: SocialMedia) {
		const oldSocialMediaLinks = _.omitBy(
			this.company?.socialMedia,
			(v) => _.isUndefined(v) || _.isNull(v) || v === '' || v === ' '
		);
		const newSocialMediaLinks = _.pick(socialMedia, [
			'facebook',
			'instagram',
			'linkedin',
			'twitter',
		]);
		if (!_.isEqual(newSocialMediaLinks, oldSocialMediaLinks)) {
			this.mixpanelService.track('Social Media Link added', {
				'Social Media Type': newSocialMediaLinks,
			});
			this.company = {
				...this.company,
				socialMedia: newSocialMediaLinks,
			};
		}
	}

	private trackCompanyChange() {
		const requiredProperties = [
			'companyName',
			'businessType',
			'country',
			'employeesNumber',
			'yearOfFoundation',
			'annualRevenue',
			'companyDescription',
			'address',
			'position',
		];
		const newCompanyData = _.omitBy(
			_.pick(this.company, requiredProperties),
			(v) => _.isUndefined(v) || _.isNull(v) || v === ''
		);
		const oldCompanyData = _.pick(this.company, requiredProperties);
		const keys = Object.keys(newCompanyData);
		const isCompleted = _.isEqual(keys.sort(), requiredProperties.sort());
		if (isCompleted && !_.isEqual(newCompanyData, oldCompanyData)) {
			this.mixpanelService.track('Company information completed', {
				'Account Type': this.userService.getUser().rootRole?.name,
			});
			this.company = {
				...this.company,
				...newCompanyData,
			};
		}
	}
}
