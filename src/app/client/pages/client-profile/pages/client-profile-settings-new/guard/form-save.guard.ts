import {CanDeactivate} from "@angular/router";
// can-deactivate.guard.ts
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


// unsaved-changes.interface.ts
export interface CanComponentDeactivate {
	canDeactivate: () => boolean | Promise<boolean> | Observable<boolean>;
}

@Injectable({
	providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
	canDeactivate(component: CanComponentDeactivate): boolean | Observable<boolean> | Promise<boolean> {
		return component.canDeactivate ? component.canDeactivate() : true;
	}
}
