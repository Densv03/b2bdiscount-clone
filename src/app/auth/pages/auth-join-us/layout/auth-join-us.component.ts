import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { B2bNgxLinkService, B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'b2b-auth-join-us',
  templateUrl: './auth-join-us.component.html',
  styleUrls: ['./auth-join-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthJoinUsComponent {
  public readonly roles$: Observable<any>;
  public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum;

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    public readonly b2bNgxLinkService: B2bNgxLinkService,
    public readonly translateService: TranslateService
  ) {
    this.roles$ = this.getRoles();
    this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;
  }

  public getRoles() {
    return this._authService.getRoles().pipe(
      map((roles) =>
        roles.map((role) => ({
          ...role,
          description: this.translateService.instant(
            `ROLES.${role.name.toUpperCase()}`
          ),
          displayName: this.translateService.instant(
            `ROLES.${role.name.toUpperCase()}_NAME`
          ),
        }))
      )
    );
  }

  public async updateRole(role: { _id: any; }) {
    await this._router.navigate(
      [this.b2bNgxLinkService.getStaticLink('/auth/register-credentials')],
      {
        queryParams: {
          ...this._activatedRoute.snapshot.queryParams,
          role: role._id,
        },
      }
    );
  }
}
