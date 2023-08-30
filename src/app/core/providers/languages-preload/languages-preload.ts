import {AuthService} from "../../../auth/services/auth/auth.service";
import {APP_INITIALIZER} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

export function preloadUser(authService: AuthService, translateService: TranslateService) {
	return function() {
		return authService.user$.subscribe(() => {
			return	translateService.use('en');
		})
	};
}

export const LanguagesPreload = {
	provide: APP_INITIALIZER,
	multi: true,
	useFactory: preloadUser,
	deps: [AuthService, TranslateService]
};
