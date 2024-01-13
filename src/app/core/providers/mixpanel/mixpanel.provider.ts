import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import mixpanel from 'mixpanel-browser';

@Injectable({
	providedIn: 'root',
})
export class MixpanelProvider {
	isProd = !environment.apiUrl.includes('-dev');
	token: string = this.isProd
		? 'c66a4412cf0b4eff56542461afb338bd'
		: '7a0cfcbc67cff070e51719b1e725ded8';

	detectDeviceType(): string {
		const userAgent = window.navigator.userAgent;
		if (/mobile/i.test(userAgent)) {
			return 'Mobile';
		} else if (/tablet/i.test(userAgent)) {
			return 'Tablet';
		} else {
			return 'Desktop';
		}
	}

	handleUser(user: any) {
		return {
			...user,
			name: user.fullName,
			time: new Date().toISOString(),
			deviceType: this.detectDeviceType(),
			$os: window?.navigator?.platform,
		};
	}

	handleTrack(eventName: string, properties: any) {
		return {
			eventName,
			properties: {
				...properties,
				// time: new Date().toISOString(),
				deviceType: this.detectDeviceType(),
				$city: mixpanel.get_property('city'),
				$region: mixpanel.get_property('region'),
			},
		};
	}
}
