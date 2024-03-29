import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxLinkService, B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AuthService } from '../../../services/auth/auth.service';
import { of } from 'rxjs';
import { catchError, filter, take } from 'rxjs/operators';
import { AuthResetPasswordModalComponent } from '../components/auth-reset-password-modal/auth-reset-password-modal.component';
import { environment } from '../../../../../environments/environment';
import { MixpanelService } from '../../../../core/services/mixpanel/mixpanel.service';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../../../core/models/user/user.model';
import { DOCUMENT } from '@angular/common';

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
		public readonly b2bNgxLinkService: B2bNgxLinkService,
		private readonly _hotToastService: HotToastService,
		private readonly dialog: MatDialog,
		private readonly mixpanelService: MixpanelService,
		@Inject(DOCUMENT) private document: Document
	) {
		this.formGroup = this.getFormGroup();
		this.formState = this.formGroup.controls;
		this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	}

	openResetPasswordModal() {
		this.dialog.open(AuthResetPasswordModalComponent);
		this.formGroup.markAsUntouched();
	}

	public logInWithForm(formGroup: FormGroup) {
		if (formGroup.invalid) {
			return;
		}
		try {
			this.authService
				.logInWithForm(formGroup.value)
				.pipe(catchError((err) => this.handleError(err)))
				.subscribe();

			this.authService
				.getUser()
				.pipe(
					filter((user) => !!user),
					take(1)
				)
				.subscribe((user) => this.handleUser(user));
		} catch (err) {
			this.changeDetectorRef.detectChanges();
		}
	}

	registrationLink() {}

	logInWithGoogle() {
		this.document.location.href = `${environment.apiUrl}auth/google`;
	}

	logInWithLinkedIn() {
		this.document.location.href = `${environment.apiUrl}auth/linkedin`;
	}

	private getFormGroup() {
		return this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]],
		});
	}

	private async trackLogin(user: User) {
		if (!user) {
			return;
		}
		const mixpanel = {
			User_id: user?._id,
			'Account Type': user?.rootRole?.displayName,
			'Company Name': user?.company,
			'Auth Method': 'Email',
		};
		this.mixpanelService.logIn(mixpanel);
	}

	private handleError(er: any) {
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
			this._hotToastService.show('Incorrect email or password', {
				dismissible: true,
				style: {
					border: '1px solid #E63D3D',
				},
				autoClose: true,
			});
		}
		return of(null);
	}

	private async handleUser(val: User): Promise<void> {
		console.log('REGULAR AUTH');
		await this.trackLogin(val);
		if (
			localStorage.getItem('blocked-route') &&
			(val.rootRole?.name === 'buyer' || 'supplier')
		) {
			await this.router.navigate([localStorage.getItem('blocked-route')]);
			localStorage.removeItem('blocked-route');
		} else {
			await this.router.navigate(['/']);
		}
	}
}
