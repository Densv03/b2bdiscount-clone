import {
	ChangeDetectionStrategy,
	Component,
	Inject,
	OnInit,
} from '@angular/core';
import { B2bNgxLinkService, B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { animate, style, transition, trigger } from '@angular/animations';
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms';
import { UniqEmail } from '../../../core/helpers/validator/uniq-email';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { MixpanelService } from '../../../core/services/mixpanel/mixpanel.service';
import { SeoService } from '../../../core/services/seo/seo.service';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'b2b-auth-enter-credentials',
	templateUrl: './auth-enter-credentials.component.html',
	styleUrls: ['./auth-enter-credentials.component.scss'],
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
export class AuthEnterCredentialsComponent implements OnInit {
	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum;
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
	public readonly b2bNgxInputThemeEnum: typeof B2bNgxInputThemeEnum;
	public form: FormGroup = this.fb.group({
		email: [
			'',
			[Validators.required, Validators.email],
			[this.uniqEmail.uniqLogin()],
		],
		password: [
			'',
			[Validators.required, Validators.minLength(6), Validators.maxLength(30)],
		],
		termsAndConditions: [null, Validators.requiredTrue],
	});

	public formState: { [key: string]: AbstractControl } = this.form.controls;

	constructor(
		public readonly b2bNgxLinkService: B2bNgxLinkService,
		private readonly uniqEmail: UniqEmail,
		private readonly fb: FormBuilder,
		private readonly router: Router,
		private readonly authService: AuthService,
		private readonly mixpanelService: MixpanelService,
		private readonly seoService: SeoService,
		@Inject(DOCUMENT) private document: Document
	) {
		this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	}

	ngOnInit() {
		this.seoService.setTitle('Register | Globy');
		this.seoService.setDescription(
			'Join Globy to connect with global buyers or trusted suppliers.'
		);
	}

	public registerWithGoogle() {
		this.mixpanelService.track('Sign-Up started');
		this.document.location.href = `${environment.apiUrl}auth/google`;
	}

	public registerWithLinkedIn() {
		this.mixpanelService.track('Sign-Up started');
		this.document.location.href = `${environment.apiUrl}auth/linkedin`;
	}

	public goToNextStep(form: FormGroup): void {
		this.mixpanelService.track('Sign-Up started');
		this.router.navigate(['/auth/register']);
		this.authService.userCredentials$.next(form.value);
	}
}
