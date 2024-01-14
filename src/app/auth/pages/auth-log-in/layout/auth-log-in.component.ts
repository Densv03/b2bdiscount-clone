import { ChangeDetectorRef, Component } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxLinkService, B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
// import {DialogService} from "@ngneat/dialog";
import { HotToastService } from '@ngneat/hot-toast';
// import {FormBuilder, FormGroup} from "@ngneat/reactive-forms";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthService } from '../../../services/auth/auth.service';
// import {NgxSmartModalService} from "ngx-smart-modal";
import { of } from 'rxjs';
import { catchError, filter, skip, take } from 'rxjs/operators';
import { AuthRecoverAccountComponent } from '../../auth-recover-account/auth-recover-account.component';
import { AuthResetPasswordModalComponent } from '../components/auth-reset-password-modal/auth-reset-password-modal.component';
import { environment } from '../../../../../environments/environment';
import { MixpanelService } from '../../../../core/services/mixpanel/mixpanel.service';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/client/pages/client-profile/services/user/user.service';

@UntilDestroy()
@Component({
	selector: 'b2b-auth-log-in',
	templateUrl: './auth-log-in.component.html',
	styleUrls: ['./auth-log-in.component.scss'],
})
export class AuthLogInComponent {
	public readonly formGroup: FormGroup;
	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum;
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
	public readonly b2bNgxInputThemeEnum: typeof B2bNgxInputThemeEnum;
	public formState: { [key: string]: AbstractControl };

	constructor(
		private readonly authService: AuthService,
		private readonly formBuilder: FormBuilder,
		private readonly router: Router,
		private readonly changeDetectorRef: ChangeDetectorRef,
		private readonly _activatedRoute: ActivatedRoute,
		public readonly b2bNgxLinkService: B2bNgxLinkService,
		private readonly _hotToastService: HotToastService,
		private readonly dialog: MatDialog,
		private readonly mixpanelService: MixpanelService,
		private readonly userService: UserService
	) {
		this.formGroup = this.getFormGroup();
		this.formState = this.formGroup.controls;
		this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	}

	public get emailError() {
		const { errors, touched } = { errors: '', touched: false };
		// const {errors, touched} = this.formGroup.getControl("email");

		if (!errors || !touched) {
			return '';
		}

		const errorCode = Object.keys(errors)[0];
		const errorMessages: any = {
			1000: 'Email incorrect',
		};
		return errorMessages[errorCode] ?? '';
	}

	public get passwordError() {
		const { errors, touched } = { errors: '', touched: false };
		// const {errors, touched} = this.formGroup.getControl("password");

		if (!errors || !touched) {
			return '';
		}

		const errorCode = Object.keys(errors)[0];
		const errorMessages: any = {
			1001: 'Password incorrect',
		};
		return errorMessages[errorCode] ?? '';
	}

	getFormGroup() {
		return this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]],
		});
	}

	openResetPasswordModal() {
		this.dialog.open(AuthResetPasswordModalComponent);

		this.formGroup.markAsUntouched();
	}

	public logInWithForm(formGroup: FormGroup) {
		if (formGroup.invalid) {
			return;
		}

		let isRecovered = false;
		try {
			this.authService
				.logInWithForm(formGroup.value)
				.pipe(
					catchError((er) => {
						if (er.error.code === 1016) {
							this._hotToastService.show(
								'You have more than two sessions from the same account. Please login again.',
								{
									dismissible: true,
									style: {
										border: '1px solid #E63D3D',
									},
									autoClose: true,
								}
							);
						} else {
							const errorType =
								er.error.code === 1000
									? 'Incorrect email'
									: 'Incorrect password';
							this._hotToastService.show('Incorrect email or password', {
								dismissible: true,
								style: {
									border: '1px solid #E63D3D',
								},
								autoClose: true,
							});
						}
						return of(null);
					})
				)
				.subscribe((res: any) => {
					isRecovered = !!res.message;
				});

			const { from } = this._activatedRoute.snapshot.queryParams;

			const url = from ? `/${from}` : '/';
			this.authService
				.getUser()
				.pipe(
					filter((user) => !!user),
					take(1)
				)
				.subscribe((val) => {
					const mixpanel = {
						User_id: val._id,
						'Account type': val.rootRole?.displayName,
						'Company Name': val.company,
						'Auth Method': 'Email',
					};
					this.mixpanelService.logIn(mixpanel, 'Login completed');
					isRecovered && this.showDialog();
					if (localStorage.getItem('blocked-route')) {
						this.router.navigate([localStorage.getItem('blocked-route')]);
						localStorage.removeItem('blocked-route');
					} else {
						this.router.navigate(['/']);
					}
				});
		} catch (err) {
			this.changeDetectorRef.detectChanges();
		}
	}

	public showDialog(): void {
		// this._dialogService
		// 	.open(AuthRecoverAccountComponent, {
		// 		width: "40vw",
		// 		height: "auto",
		// 		minHeight: "0",
		// 		windowClass: "report-dialog",
		// 	})
		// 	.afterClosed$.pipe(untilDestroyed(this))
		// 	.subscribe();
	}

	registrationLink() {}

	logInWithGoogle() {
		// this.authService.logInWithGoogle();

		document.location.href = `${environment.apiUrl}auth/google`;
	}

	logInWithLinkedIn() {
		document.location.href = `${environment.apiUrl}auth/linkedin`;
	}
}
