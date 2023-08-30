import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthService} from "../../services/auth/auth.service";
import {HotToastService} from "@ngneat/hot-toast";
import {filter} from "rxjs/operators";

@Injectable({
	providedIn: 'root'
})
export class BuyerGuard implements CanActivate {

	constructor(private readonly authService: AuthService,
							private readonly hotToastrService: HotToastService
	) {
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | boolean {

		return this.authService.user$.pipe(
			filter(user => !!user),
			map((user: any) => this.showPopUp(user?.rootRole?.name, user?.role?.name)));
	}

	private showPopUp(rootRole: string, role: string): boolean {
		const accept = role === 'admin' || rootRole === 'supplier';

		if (!accept) {
			this.hotToastrService.info('Only supplier can reach this page.',
				{
					autoClose: false,
					dismissible: true,
				})
		}

		return accept;
	}
}
