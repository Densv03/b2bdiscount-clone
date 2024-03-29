import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { mergeMap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthService } from '../../../services/auth/auth.service';

@UntilDestroy()
@Component({
	selector: 'b2b-auth-register-google-account',
	templateUrl: './auth-register-google-account.component.html',
})
export class AuthRegisterGoogleAccountComponent implements OnInit {
	constructor(
		private readonly router: Router,
		private readonly changeDetectorRef: ChangeDetectorRef,
		private readonly _activatedRoute: ActivatedRoute,
		private readonly _authService: AuthService
	) {}

	ngOnInit() {
		this._activatedRoute.queryParams
			.pipe(untilDestroyed(this))
			.subscribe((params) => {
				let { token, role } = params;
				const updatedToken = token.endsWith('/') ? token.slice(0, -1) : token;
				this._authService.updateToken(updatedToken);
				this._authService.initUser();
				this._authService
					.returnInitedUser()
					.pipe(
						mergeMap((user) => {
							return this._authService.getUser().pipe(untilDestroyed(this));
						})
					)
					.subscribe((user) => {
						this._authService.updateToken(updatedToken);
						this._authService.updateRole(role);
						this.router.navigate(['/auth/register']);
						this._authService.isRegisteredByGoogle.next(true);
						this.changeDetectorRef.detectChanges();
					});
			});
	}
}
