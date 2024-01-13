import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class IntercomService {
	private intercomAppId = 'fgjzhwn9';

	constructor(
		@Inject(PLATFORM_ID) private platformId: Object,
		private http: HttpClient
	) {}

	public initializeIntercom(userEmail: string): void {
		if (isPlatformBrowser(this.platformId)) {
			this.http
				.get<{ hmac: string }>('/intercom/hmac', { params: { userEmail } })
				.subscribe((response) => {
					const userHash = response.hmac;
					this.loadIntercom(userEmail, userHash);
				});
		}
	}

	private loadIntercom(userEmail: string, userHash: string) {
		(window as any).intercomSettings = {
			api_base: 'https://api-iam.intercom.io',
			app_id: this.intercomAppId,
			email: userEmail,
			user_hash: userHash,
		};
	}
}
