import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
	providedIn: 'root'
})
export class LanguageGuard implements CanActivateChild {
	constructor(private router: Router,
							private translateService: TranslateService
	) {
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let currentUrl = state.url;
		const urlArr = currentUrl.split('/');
		const availableLangs = ["es", "fr", "hi", "pt", "tr", "ar"];
		if (currentUrl.includes('/market-promo' || '/market-promotion')) {
      if (urlArr.length > 2) {
        const languageParam = urlArr[urlArr.length - 1];
        if (languageParam.includes('?') && 	!availableLangs.includes(languageParam.split('?')[0])) {
          urlArr.pop();
          currentUrl = urlArr.join('/');
          this.router.navigate([currentUrl]);
        }
      }
			return true;
		} else {
			this.translateService.use('en');
			return true;
		}
	}
}
