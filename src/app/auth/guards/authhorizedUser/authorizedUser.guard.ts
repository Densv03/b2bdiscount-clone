import { Injectable } from '@angular/core';
import { UserService } from '../../../client/pages/client-profile/services/user/user.service';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class AuthorizedUserGuard {
	constructor(
		private readonly userService: UserService,
		private readonly router: Router
	) {}
	canActivate() {
		if (this.userService.getUser()) {
			this.router.navigate(['/b2bmarket']);
			return false;
		}
		return true;
	}
}
