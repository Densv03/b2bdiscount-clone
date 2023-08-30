import {Component, HostListener, OnInit, ViewChild} from "@angular/core";
import {MatStepper} from "@angular/material/stepper";
import {BasicInfoInterface} from "./models/basic-info.interface";
import {AuthService} from "../../services/auth/auth.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../client/pages/client-profile/services/user/user.service";
import {HotToastService} from "@ngneat/hot-toast";
import {combineLatest, of, switchMap} from "rxjs";
import {User} from "../../../core/models/user/user.model";
import {TradebidService} from "../../../client/pages/client-tradebid/tradebid.service";
import {MixpanelService} from "../../../core/services/mixpanel/mixpanel.service";
import mixpanel from "mixpanel-browser";
import {PlatformService} from "../../../client/services/platform/platform.service";

@UntilDestroy()
@Component({
	selector: "b2b-auth-register",
	templateUrl: "./auth-register.component.html",
	styleUrls: ["./auth-register.component.scss"],
})
export class AuthRegisterComponent implements OnInit {
	@ViewChild("stepper") stepper!: MatStepper;

	public user!: User;
	public selectedUserType: "buyer" | "supplier" = 'buyer';
	public stepperSelectedIndex = 0;
	private basicInfo!: BasicInfoInterface;

	constructor(
		private readonly authService: AuthService,
		private readonly router: Router,
		private readonly userService: UserService,
		private readonly _hotToastService: HotToastService,
		private readonly route: ActivatedRoute,
		private readonly tradebidService: TradebidService,
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
		console.log('AUTH REGISTER: ', this.userService.getUser())
		// if (this.platformService.isBrowser) {
		if (!!this.userService.getUser()) {
			this.user = this.userService.getUser();
		} else if (!this.userService.getUser() && !this.authService.userCredentials$.value) {
			this.router.navigate(['auth/register-credentials'])
		}
		// }
	}

	public back(): void {
		this.stepper.previous();
	}

	public firstStep(stepper: MatStepper, event: BasicInfoInterface): void {
		stepper.next();
		this.basicInfo = event;
		this.mixpanelService.track('Sign-Up 1st step completed', {'Auth Method ': 'Email'});
	}

	public secondStep(stepper: MatStepper, event: "buyer" | "supplier"): void {
		stepper.next();
		this.selectedUserType = event;
		this.mixpanelService.track('Sign-Up 2nd step completed');
		mixpanel.people.set({'Account Property': event})
	}

	public thirdStep(event: any): void {
		if (this.stepperSelectedIndex > 0 || this.authService.isRegisteredByGoogle.value) {
			this.updateUserData(event);
		} else {
			this.registerUser(event);
		}
	}

	private registerUser(event: any): void {
		const refId = parseInt(localStorage.getItem("ref") as string);

		const model = {...this.authService.userCredentials$.value, ...this.basicInfo, ...event};
		model.preferences = event.categories;
		model.passwordConfirm = model.password;
		if (refId) {
			model.refId = refId;
		}
		this.authService.registerWithForm(model)
			.pipe(untilDestroyed(this))
			.subscribe(({token}) => {
				this.mixpanelService.track('Sign-Up 3nd step completed', {
					'Login Method': 'E-mail'
				});
				this.authService.updateToken(token);
				this.authService.initUser();
				this.router.navigateByUrl(`/email-verify?email=${this.authService.userCredentials$.value.email}`, {state: {email: this.authService.userCredentials$.value.email}});
			})
	}

	private updateUserData(event: any): void {
		const {rootRoleId, roleId} = event;
		let user = {...this.userService.getUser(), roleId, rootRoleId, ...event};
		if (this.basicInfo) {
			user = {...user, ...this.basicInfo?.phone};

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
		const company = {...user};
		company.phone = user.phone?.number || user?.phoneNumber;
		company.dialCode = user.phone?.dialCode || user?.phoneDialCode;
		company.countryCode = user.phone?.countryCode || user?.phoneCountryCode;
		company.internationalNumber = user.phone?.internationalNumber || user?.phoneInternationalNumber;
		company.nationalNumber = user.phone?.nationalNumber || user?.phoneNationalNumber;
		company.companyName = user.company;

		const refId = parseInt(localStorage.getItem("ref") as string);

		const firstRequest$ = refId
			? this.userService.addUserStatistics({
				userId: user._id,
				email: user.email,
				refId,
				typeRegistration: "socials",
			})
			: of(null);

		firstRequest$
			.pipe(
			switchMap(() => 	this.userService.changeRole(this.userService.getToken(), roleId, rootRoleId)),
			switchMap(() => {
				return combineLatest([
					this.tradebidService.createCompanyInfo(company),
					this.userService.updateUserSettings(user),
				]);
			}),
			untilDestroyed(this),
			this._hotToastService.observe({
				loading: "Updating profile...",
				success: "Profile updated successfully!",
				error: "Profile updating failed!",
			})
		)
			.subscribe(() => {
				this.authService.updateUser(user);
				combineLatest([this.authService.getRootRoles(), this.authService.getRoles()]).subscribe(
					([rootRoles, roles]) => {
						const rootRoleObject = rootRoles.find((rootRole) => rootRole._id === rootRoleId);
						const roleObject = roles.find((role) => role._id === roleId);
						// @ts-ignore
						this.authService.updateUser({...this.userService.getUser(), role: roleObject, rootRole: rootRoleObject});
						this.mixpanelService.signUp({
								name: user.fullName,
								'User_id': user?._id,
								'Registration date': new Date().toISOString(),
								'Email confirmed': user.email,
								'Account Property': this.selectedUserType,
								'Company Name': user.company,
								'Product sectors': event.rootRoleName,
								'Country': user.country,
								'Login Method': user.socialAuthType
							},
							'Sign-Up completed');
						if (rootRoleObject?.name === 'supplier') {
							this.router.navigateByUrl('/profile/your-account/company-information', {state: {showPopUp: true}});
						} else {
							this.router.navigate(["/"]);
						}
					}
				);
			});
	}

	private updateStepperSelectedIndex(): void {
		const newStepperIndex = this.route.snapshot.paramMap.get("registerStep");
		newStepperIndex ? (this.stepperSelectedIndex = +newStepperIndex) : null;
	}
}
