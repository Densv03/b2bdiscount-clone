import { Injectable } from '@angular/core';
import {
	Router,
	Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot,
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class UserResolver implements Resolve<boolean> {
	constructor(private authService: AuthService) {}
	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> {
		// return this.authService.isUserLoading$.pipe(map(data => !data));
		return of(true).pipe();
	}
}
