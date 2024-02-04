import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import mixpanel from 'mixpanel-browser';
import { UserService } from '../../../client/pages/client-profile/services/user/user.service';
import { User } from '../../models/user/user.model';

@Injectable({
	providedIn: 'root',
})
export class MixpanelProvider {
	isProd = !environment.apiUrl.includes('-dev');
	token: string = this.isProd
		? 'c66a4412cf0b4eff56542461afb338bd'
		: '7a0cfcbc67cff070e51719b1e725ded8';

	constructor(private userService: UserService) {}

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

	getOS() {
		let userAgent = window.navigator.userAgent,
			platform = window.navigator.platform,
			macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
			windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
			iosPlatforms = ['iPhone', 'iPad', 'iPod'],
			os = null;

		if (macosPlatforms.indexOf(platform) !== -1) {
			os = 'Mac OS';
		} else if (iosPlatforms.indexOf(platform) !== -1) {
			os = 'iOS';
		} else if (windowsPlatforms.indexOf(platform) !== -1) {
			os = 'Windows';
		} else if (/Android/.test(userAgent)) {
			os = 'Android';
		} else if (!os && /Linux/.test(platform)) {
			os = 'Linux';
		}

		return os;
	}

	handleUser(user: any, distinctId: any, deviceId: string) {
		if (user['Registration method']) {
			delete user['Registration method'];
		}
		return {
			...user,
			name: user?.fullName,
			deviceType: this.detectDeviceType(),
			distinct_id: distinctId,
			$user_id: distinctId,
			$device_id: deviceId,
			$os: this.getOS(),
			$city: mixpanel.get_property('city'),
			$region: mixpanel.get_property('region'),
		};
	}

	handleTrack(eventName: string, properties: any, deviceId: string) {
		const user = this.userService?.getUser();
		const distinctId = user ? user?._id : deviceId;
		return {
			eventName,
			properties: {
				...properties,
				distinct_id: distinctId,
				deviceType: this.detectDeviceType(),
				$user_id: distinctId,
				$device_id: deviceId,
				$os: this.getOS(),
				$city: mixpanel.get_property('city'),
				$region: mixpanel.get_property('region'),
			},
		};
	}
}
