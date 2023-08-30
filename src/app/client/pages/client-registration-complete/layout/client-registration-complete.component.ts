import { ChangeDetectorRef, Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { skip } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'b2b-client-registration-complete',
  templateUrl: './client-registration-complete.component.html',
  styleUrls: ['./client-registration-complete.component.scss'],
})
export class ClientRegistrationCompleteComponent {
  public readonly formGroup: FormGroup;
  public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
  public readonly b2bNgxInputThemeEnum: typeof B2bNgxInputThemeEnum;

  constructor(
    private readonly _cdr: ChangeDetectorRef,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _authService: AuthService,
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router
  ) {
    this.formGroup = this.getFormGroup();
    this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
    this.b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
  }

  getFormGroup() {
    return this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  openResetPasswordModal() {
    this.formGroup.markAsUntouched();
  }

  async logInWithForm(formGroup: FormGroup) {
    if (formGroup.invalid) {
      return;
    }

    try {
      await this._authService.logInWithForm(formGroup.value).toPromise();

      const { from } = this._activatedRoute.snapshot.queryParams;

      const url = from ? `/${from}` : '/';

      this._authService
        .getUser()
        .pipe(untilDestroyed(this), skip(1))
        .subscribe(async (user) => {
          if (user.rootRole.name === 'supplier') {
            await this._router.navigateByUrl(
              '/profile/your-account/company-information',
              { state: { showPopUp: true } }
            );
          } else {
            await this._router.navigateByUrl(url);
          }
        });
    } catch (err: any) {
      const { code } = err.error;

      // const field: any =
      //   {
          // 1000: 'email',
          // 1001: 'password',
          // 1014: 'email',
      //   }[code] ?? null;

      const codesObj: any = {
        1000: 'email',
        1001: 'password',
        1014: 'email',
      }

      const field: string = codesObj[code];

      if (!field) {
        return;
      }

      this.formGroup.get(field).setErrors({ [code]: true });
      this._cdr.detectChanges();
    }
  }
}
