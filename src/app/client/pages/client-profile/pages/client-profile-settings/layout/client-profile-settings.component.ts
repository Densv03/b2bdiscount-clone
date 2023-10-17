import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	ElementRef,
	OnInit,
	Renderer2,
	ViewChild,
} from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BehaviorSubject, Observable, of, Subscription, tap } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { CategoriesService } from '../../../../../services/categories/categories.service';
import { ClientProfileDeleteAccountComponent } from '../../../components/client-profile-delete-account/client-profile-delete-account.component';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../../../../core/models/user/user.model';
import { TradebidService } from '../../../../client-tradebid/tradebid.service';
import { ADMIN_ID } from '../../../../../../core/helpers/constant/role-ids';
import { fullName } from '../../../../../../core/helpers/validator/full-name';
import { onlyLatin } from '../../../../../../core/helpers/validator/only-latin';
import { animate, style, transition, trigger } from '@angular/animations';
import { AuthStore } from '../../../../../../auth/state/auth/auth.store';
import { AuthService } from '../../../../../../auth/services/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@UntilDestroy()
@Component({
	selector: 'b2b-client-profile-settings',
	templateUrl: './client-profile-settings.component.html',
	styleUrls: ['./client-profile-settings.component.scss'],
	animations: [
		trigger('fadeInOut', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate(500, style({ opacity: 1 })),
			]),
			transition(':leave', [animate(500, style({ opacity: 0 }))]),
		]),
	],
})
export class ClientProfileSettingsComponent implements OnInit {
	public readonly baseFormGroup: FormGroup = this.getBaseFormGroup();
	public readonly passwordFormGroup: FormGroup;
	public readonly countries: any[];
	public readonly socialMedias: any;

	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum;
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
	public readonly b2bNgxInputThemeEnum: typeof B2bNgxInputThemeEnum;
	public readonly b2bNgxSelectThemeEnum: typeof B2bNgxSelectThemeEnum;

	public readonly roles$: Observable<any>;
	public availableRoles: any[] = [];

	public formState: { [key: string]: AbstractControl };
	public baseFormState = this.baseFormGroup.controls;

	public id: any;
	public isDefaultRole: boolean;
	public currRole: boolean;
	@ViewChild('form') form: ElementRef;

	private displayRoleSelectorSource: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);
	private activeUser: {
		phone: { number: any };
		role: { _id: any; name: string };
	};

	constructor(
		private readonly _authStore: AuthStore,
		private readonly _hotToastService: HotToastService,
		private readonly _formBuilder: FormBuilder,
		private readonly userService: UserService,
		private readonly changeDetectorRef: ChangeDetectorRef,
		private readonly activatedRoute: ActivatedRoute,
		private readonly categoriesService: CategoriesService,
		private readonly translateService: TranslateService,
		private readonly authService: AuthService,
		private readonly dialog: MatDialog,
		private readonly renderer2: Renderer2,
		private readonly tradebidService: TradebidService
	) {
		this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
		this.b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;

		this.passwordFormGroup = this.getPasswordFormGroup();
		this.countries = this.getCountries();
		this.socialMedias = this.getSocialMedias();
		this.roles$ = this.getRoles();

		this.getUserInfo();
	}

	ngOnInit() {
		if (this.isDefaultRole) {
			this.tradebidService.getCompanyData().subscribe((companyData) => {
				if (companyData.businessType) {
					this.roles$.subscribe((roles) => {
						const roleId = roles.find(
							(role: { displayName: string }) =>
								role.displayName === companyData.businessType
						)?.id;
						if (roleId) {
							const preferences = this.userService.getUser().preferences;
							const fullName = this.userService.getUser().fullName;
							this.userService
								.updateUserSettings({ roleId, preferences, fullName })
								.subscribe();
						}
					});
				}
			});
		}
		this.displayRoleSelectorSource.next(
			!!this.activatedRoute.snapshot.params['id']
		);
	}

	public get displayRoleSelector$(): Observable<boolean> {
		return this.displayRoleSelectorSource.asObservable();
	}

	public get user(): User {
		return this.userService.getUser();
	}

	public getRoles(): Observable<any> {
		const activeUserId =
			this.activatedRoute.snapshot.params['id'] ?? this.user.role._id;
		if (activeUserId === ADMIN_ID) {
			return of([
				{
					description: 'Administrator',
					displayName: 'Admin',
					name: 'admin',
					_id: '60ba1f30445d001ecf7775af',
				},
			]);
		}

		return this.authService.getRoles().pipe(
			map((roles) =>
				roles.map((role) => {
					const roleName = this.translateService.instant(
						`ROLES.${role.name.toUpperCase()}_NAME`
					);

					return {
						...role,
						description: this.translateService.instant(
							`ROLES.${role.name.toUpperCase()}`
						),
						displayName: roleName.charAt(0).toUpperCase() + roleName.slice(1),
					};
				})
			),
			tap((roles) => (this.availableRoles = roles))
		);
	}

	public getPhoneNumber(): string {
		return this.activeUser?.phone?.number || '';
	}

	public getSocialMedias() {
		return [
			{
				label: 'Telegram',
				icon: 'telegram',
			},
			{
				label: 'Viber',
				icon: 'viber',
			},
			{
				label: 'Whatsapp',
				icon: 'whats-app',
			},
			// {
			// 	label: "Messanger",
			// 	icon: "messanger",
			// },
		];
	}

	public getCountries(): any[] {
		return [];
	}

	public saveChanges(formGroup: FormGroup): void {
		if (formGroup.invalid) {
			this.baseFormGroup.markAllAsTouched();
			return;
		}
		if (this.activeUser.role._id !== formGroup.value.roleId) {
			// this.updateUserRole(formGroup.value.roleId);
		}

		const userInfo = {
			...formGroup.value,
			phone: undefined,
			phoneNumber: formGroup.value.phone.number,
			phoneInternationalNumber: formGroup.value.phone.internationalNumber,
			phoneNationalNumber: formGroup.value.phone.nationalNumber,
			phoneCountryCode: formGroup.value.phone.countryCode,
			phoneDialCode: formGroup.value.phone.dialCode,
			phoneE164Number: formGroup.value.phone.e164Number,
		};
		delete userInfo.phone;
		if (this.id) {
			this.userService
				.updateUserById(this.id, userInfo)
				.pipe(
					untilDestroyed(this),
					this._hotToastService.observe({
						loading: 'Profile updating...',
						success: 'Profile updated successfully!',
						error: 'Profile updated failed!',
					}),
					catchError((error) => {
						const { message } = error.error;
						const phoneControl = this.baseFormGroup.get('phone');

						if (message === 'Invalid phone number') {
							phoneControl.setErrors({ 'Invalid phone number': true });
							phoneControl.markAsTouched();

							this.changeDetectorRef.detectChanges();
						}

						return of(null);
					})
				)
				.subscribe(() => {
					this._authStore.update({
						user: formGroup.value,
					});
					window.location.reload();
				});
		} else {
			this.userService
				.updateUserSettings(userInfo)
				.pipe(
					untilDestroyed(this),
					this._hotToastService.observe({
						loading: 'Profile updating...',
						success: 'Profile updated successfully!',
						error: 'Profile updated failed!',
					}),
					catchError((error) => {
						const { message } = error.error;
						const phoneControl = this.baseFormGroup.get('phone');

						if (message === 'Invalid phone number') {
							phoneControl.setErrors({ 'Invalid phone number': true });
							phoneControl.markAsTouched();
						}

						return of(null);
					})
				)
				.subscribe(() => {
					window.location.reload();
				});
		}
	}

	public updatePassword(formGroup: FormGroup): void {
		if (formGroup.invalid) {
			return;
		}

		this.userService
			.updatePassword(formGroup.value)
			.pipe(
				untilDestroyed(this),
				this._hotToastService.observe({
					loading: this.translateService.instant(
						'SETTINGS.PASSWORD_UPDATING_LOADING'
					),
					success: this.translateService.instant(
						'SETTINGS.PASSWORD_UPDATING_SUCCESS'
					),
					error: this.translateService.instant(
						'SETTINGS.PASSWORD_UPDATING_ERROR'
					),
				})
			)
			.subscribe({
				error: (err) => {
					const { code } = err.error;

					const password = this.passwordFormGroup.get('password');

					password.setErrors({ [code]: true });

					password.markAsDirty();
					password.markAsTouched();

					this.changeDetectorRef.detectChanges();
				},
			});
	}

	public deleteAccount(): void {
		if (this.activeUser.role.name === 'admin') return;

		const dialog = this.dialog.open(ClientProfileDeleteAccountComponent, {
			width: '40vw',
			height: '700px',
			minHeight: '0',
			backdropClass: 'report-dialog',
		});

		dialog
			.afterClosed()
			.pipe(untilDestroyed(this))
			.subscribe(() => {
				this.userService.deleteUser().subscribe();
			});
	}

	private getUserInfo(): Subscription {
		return this.activatedRoute.paramMap
			.pipe(
				untilDestroyed(this),
				switchMap((paramMap) => {
					this.id = paramMap.get('id');

					return this.id
						? this.userService.getUserById(this.id)
						: this.userService.getUser$();
				})
			)
			.subscribe((userInfo: any) => {
				this.activeUser = userInfo ?? this.userService.getUser();

				this.isDefaultRole = userInfo.role.name === 'default';
				this.baseFormGroup.patchValue({
					...userInfo,
					roleId: userInfo.role.name !== 'default' ? userInfo.role._id : null,
					logo: [userInfo.logo],
					mailSubscribed: userInfo?.mailSubscribed,
				});

				if (userInfo.socialAuth) {
					this.baseFormGroup.get('email').disable();
				}
			});
	}

	private getPasswordFormGroup(): FormGroup {
		return this._formBuilder.group({
			password: '',
			newPassword: '',
		});
	}

	private getBaseFormGroup(): FormGroup {
		return this._formBuilder.group({
			fullName: ['', [Validators.required, fullName(), onlyLatin()]],
			email: ['', [Validators.required, Validators.email]],
			phone: ['', [Validators.required]],
			roleId: null,
		});
	}
}
