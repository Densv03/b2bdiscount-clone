import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { BasicInfoInterface } from './models/basic-info.interface';
import { AuthService } from '../../services/auth/auth.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../client/pages/client-profile/services/user/user.service';
import { HotToastService } from '@ngneat/hot-toast';
import { combineLatest, of, switchMap } from 'rxjs';
import { User } from '../../../core/models/user/user.model';
import { SourcingRequestService } from '../../../client/pages/client-sourcing-request/sourcing-request.service';
import { MixpanelService } from '../../../core/services/mixpanel/mixpanel.service';
import { PlatformService } from '../../../client/services/platform/platform.service';
import { getName } from 'country-list';
import { catchError } from 'rxjs/operators';

@UntilDestroy()
@Component({
	selector: 'b2b-auth-register',
	templateUrl: './auth-register.component.html',
	styleUrls: ['./auth-register.component.scss'],
})
export class AuthRegisterComponent implements OnInit {
	@ViewChild('stepper') stepper!: MatStepper;

	public isSubmitting: boolean = false;
	public user!: User;
	public selectedUserType: 'buyer' | 'supplier' = 'buyer';
	public stepperSelectedIndex = 0;
	private basicInfo!: BasicInfoInterface;
	private categoriesNames: string[];

	constructor(
		private readonly authService: AuthService,
		private readonly router: Router,
		private readonly userService: UserService,
		private readonly _hotToastService: HotToastService,
		private readonly route: ActivatedRoute,
		private readonly sourcingRequestService: SourcingRequestService,
		private readonly mixpanelService: MixpanelService,
		private readonly platformService: PlatformService
	) {
		this.updateStepperSelectedIndex();
	}

	@HostListener('window:beforeunload', ['$event'])
	public unloadHandler(event: BeforeUnloadEvent): void {
		event.preventDefault();
		event.returnValue = '';
	}

	public ngOnInit(): void {
		if (!!this.userService.getUser()) {
			this.user = this.userService.getUser();
		} else if (
			!this.userService.getUser() &&
			!this.authService.userCredentials$.value
		) {
			this.router.navigate(['auth/register-credentials']);
		}
	}

	public back(): void {
		this.stepper.previous();
	}

	public firstStep(stepper: MatStepper, event: BasicInfoInterface): void {
		if (this.platformService.isServer) {
			return;
		}
		stepper.next();
		this.basicInfo = event;
		this.mixpanelService.track('Sign-Up 1st step completed');
	}

	public secondStep(stepper: MatStepper, event: 'buyer' | 'supplier'): void {
		stepper.next();
		this.selectedUserType = event;
		this.mixpanelService.track('Sign-Up 2nd step completed');
	}

	public thirdStep(event: any): void {
		if (this.isSubmitting) {
			return;
		}

		if (event.hasOwnProperty('categoriesNames')) {
			this.categoriesNames = [...event.categoriesNames];
			delete event.categoriesNames;
		}

		if (
			this.stepperSelectedIndex > 0 ||
			this.authService.isRegisteredByGoogle.value
		) {
			this.updateUserData(event);
			this.isSubmitting = true;
		} else {
			this.registerUser(event);
			this.isSubmitting = true;
		}
		this.mixpanelService.track('Sign-Up 3rd step completed');
	}

	private registerUser(event: any): void {
		const refId = parseInt(localStorage.getItem('ref') as string);

		const model = {
			...this.authService.userCredentials$.value,
			...this.basicInfo,
			...event,
		};
		model.preferences = event.categories;
		model.passwordConfirm = model.password;

		if (refId) {
			model.refId = refId;
		}

		this.authService
			.registerWithForm(model)
			.pipe(untilDestroyed(this))
			.subscribe(
				({ token }) => {
					this.authService.updateToken(token);
					this.authService.initUser();
					this.router.navigateByUrl(
						`/email-verify?email=${this.authService.userCredentials$.value.email}`,
						{ state: { email: this.authService.userCredentials$.value.email } }
					);
					this.isSubmitting = false;
				},
				() => (this.isSubmitting = false)
			);
	}

	private updateUserData(event: any): void {
		const { rootRoleId, roleId } = event;
		let user = {
			...this.userService.getUser(),
			roleId,
			rootRoleId,
			...event,
		};
		if (this.basicInfo) {
			user = { ...user, ...this.basicInfo?.phone };

			user.phoneCountryCode = this.basicInfo.phone.countryCode;
			user.phoneDialCode = this.basicInfo.phone.dialCode;
			user.phoneE164Number = this.basicInfo.phone.e164Number;
			user.phoneInternationalNumber = this.basicInfo.phone.internationalNumber;
			user.phoneNationalNumber = this.basicInfo.phone.nationalNumber;
			user.phoneNumber = this.basicInfo.phone.number;
			user.company = this.basicInfo?.company;
			user.fullName = this.basicInfo?.fullName;
			user.country = this.basicInfo?.country;
		}

		user.preferences = event.categories;
		const company = { ...user };
		company.phone = user.phone?.number || user?.phoneNumber;
		company.dialCode = user.phone?.dialCode || user?.phoneDialCode;
		company.countryCode = user.phone?.countryCode || user?.phoneCountryCode;
		company.internationalNumber =
			user.phone?.internationalNumber || user?.phoneInternationalNumber;
		company.nationalNumber =
			user.phone?.nationalNumber || user?.phoneNationalNumber;
		company.companyName = user.company;

		this.authService.updateCompany(company);

		const refId = parseInt(localStorage.getItem('ref') as string);
		// const utm_source = localStorage.getItem('utm_source') as string;
		// const utm_campaign = localStorage.getItem('utm_campaign') as string;
		// const utm_medium = localStorage.getItem('utm_medium') as string;
		//
		// const utm_term = localStorage.getItem('utm_term') as string;
		// const utm_content = localStorage.getItem('utm_content') as string;
		// const utm_id = localStorage.getItem('utm_id') as string;

		const firstRequest$ = refId
			? this.userService.addUserStatistics({
					userId: user._id,
					email: user.email,
					refId,
					typeRegistration: 'socials',
				})
			: of(null);

		firstRequest$
			.pipe(
				switchMap(() =>
					this.userService.changeRole(
						this.userService.getToken(),
						roleId,
						rootRoleId
					)
				),
				switchMap(() => {
					return this.sourcingRequestService.createCompanyInfo(company).pipe(
						catchError(() => {
							this.isSubmitting = false;
							return this.sourcingRequestService.updateCompanyInfo(company);
						})
					);
				}),
				switchMap(() => this.userService.updateUserSettings(user)),
				untilDestroyed(this),
				this._hotToastService.observe({
					loading: 'Updating profile...',
					success: 'Profile updated successfully!',
					error: 'Profile updating failed!',
				}),
				catchError(() => {
					this.isSubmitting = false;
					return of(null);
				})
			)
			.subscribe(() => {
				this.authService.updateUser(user);
				combineLatest([
					this.authService.getRootRoles(),
					this.authService.getRoles(),
				]).subscribe(
					([rootRoles, roles]) => {
						const rootRoleObject = rootRoles.find(
							(rootRole) => rootRole._id === rootRoleId
						);
						const roleObject = roles.find((role) => role._id === roleId);
						this.authService.updateUser({
							...this.userService.getUser(),
							role: roleObject,
							rootRole: rootRoleObject,
						});
						this.mixpanelService.signUp(
							{
								// 'CUSTOM UTM SOURCE': utm_source ? utm_source : 'Organic',
								// 'CUSTOM UTM CAMPAIGN': utm_campaign ? utm_campaign : 'Organic',
								// 'CUSTOM UTM MEDIUM': utm_medium ? utm_medium : 'Organic',
								// 'CUSTOM UTM TERM': utm_term ? utm_term : 'Organic',
								// 'CUSTOM UTM CONTENT': utm_content ? utm_content : 'Organic',
								// 'CUSTOM UTM ID': utm_id ? utm_id : 'Organic',
								name: user.fullName,
								User_id: user?._id,
								'Registration date': new Date().toISOString(),
								'Registration method': 'Email',
								'Email confirmed': user.email,
								'Account type': this.selectedUserType,
								'Company Name': user.company,
								'Product sectors': this.categoriesNames,
								Country: getName(user.country),
								'Auth Method': user.socialAuthType,
								// 'Campaign Source': utm_campaign ? utm_campaign : 'Organic',
							},
							'Sign-Up completed'
						);
						if (rootRoleObject?.name === 'supplier') {
							this.router.navigateByUrl(
								`/profile/your-account/company-information?registrationType=${user.socialAuthType}`,
								{ state: { showPopUp: true } }
							);
						} else {
							if (
								localStorage.getItem('blocked-route') &&
								(user.rootRole?.name === 'buyer' || 'supplier')
							) {
								this.router.navigate([
									localStorage.getItem('blocked-route'),
									{
										queryParams: { registrationType: user.socialAuthType },
									},
								]);
								localStorage.removeItem('blocked-route');
							} else {
								this.router.navigate(['/'], {
									queryParams: { registrationType: user.socialAuthType },
								});
							}
						}
						this.isSubmitting = false;
					},
					() => (this.isSubmitting = false)
				);
			});
	}

	private updateStepperSelectedIndex(): void {
		const newStepperIndex = this.route.snapshot.paramMap.get('registerStep');
		newStepperIndex ? (this.stepperSelectedIndex = +newStepperIndex) : null;
	}
}
