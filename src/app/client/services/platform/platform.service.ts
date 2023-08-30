import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, isPlatformServer} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

	constructor(
		@Inject(PLATFORM_ID) private platformId: any) {
	}

	public get isBrowser(): boolean {
		return isPlatformBrowser(this.platformId);
	}

	public get isServer(): boolean {
		return isPlatformServer(this.platformId);
	}
}
