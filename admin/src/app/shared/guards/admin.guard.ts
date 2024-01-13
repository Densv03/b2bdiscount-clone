import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router,
	ActivatedRoute,
} from '@angular/router';

import { filter, map, tap } from 'rxjs/operators';
import { HotToastService } from '@ngneat/hot-toast';
import { B2bNgxLinkService } from '@b2b/ngx-link';
import { AuthService } from '../../../../../src/app/auth/services/auth/auth.service';

@Injectable({
	providedIn: 'root',
})
export class AdminGuard {
	constructor(
		private readonly _authService: AuthService,
		private readonly _router: Router,
		private readonly _hotToastrService: HotToastService,
		public readonly b2bNgxLinkService: B2bNgxLinkService,
		public readonly _hotToastService: HotToastService
	) {}

	canActivate() {
		return this._authService.getUser().pipe(
			filter((user) => user !== undefined),
			tap((user) => {
				if (user?.role?.name !== 'admin') {
					this._hotToastrService.info(
						`You don't have access to this page. Login first`,
						{
							style: {
								border: '2px solid #005dff',
								padding: '20px 15px',
							},
							autoClose: true,
							dismissible: true,
						}
					);

					this._router.navigate([
						this.b2bNgxLinkService.getStaticLink('/login'),
					]);
				}
			}),
			map((user) => {
				return !!user;
			})
		);
	}
}
