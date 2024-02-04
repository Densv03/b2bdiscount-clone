import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class RedirectGuard {
	constructor(private readonly _router: Router) {}
	canActivate() {
		// if (window.location.href.includes('discount.')) {
		// 	this._router.navigateByUrl('/');
		// 	return true;
		// }

		return true;
	}
}
