import { Injectable } from '@angular/core';
import * as mixpanel from 'mixpanel-browser';
import { PlatformService } from '../../../client/services/platform/platform.service';
import { MixpanelRepository } from './mixpanel.repository';
import { MixpanelProvider } from '../../providers/mixpanel/mixpanel.provider';

@Injectable({
	providedIn: 'root',
})
export class MixpanelService {
	private readonly token = this.mixpanelProvider.token;
	private readonly distinctId: string;

	constructor(
		private readonly platformService: PlatformService,
		private readonly mixpanelRepository: MixpanelRepository,
		private readonly mixpanelProvider: MixpanelProvider
	) {
		if (this.platformService.isBrowser) {
			this.init();
			this.distinctId = mixpanel.get_distinct_id();
		}
	}

	init() {
		mixpanel.init(this.token, { debug: !this.mixpanelProvider.isProd });
	}

	public track(eventName: string, properties?: any): void {
		if (this.platformService.isServer) {
			return;
		}
		if (!eventName) {
			throw new Error("Can't track event. No event name");
		}
		this.mixpanelRepository.track(
			this.mixpanelProvider.handleTrack(eventName, properties, this.distinctId)
		);
	}

	public logIn(user: any, track?: string): void {
		if (this.platformService.isServer) {
			return;
		}
		if (!this.distinctId) {
			this.signUp(user, track);
		}
		const distinctId = user['User_id'];
		mixpanel.identify(distinctId);
		const properties = this.handleUserProperties(user);
		const obj = {
			distinctId,
			properties,
		};
		this.mixpanelRepository.set(obj);
	}

	public signUp(user: any, track?: string): void {
		if (this.platformService.isServer) {
			return;
		}
		const distinctId = user['User_id'];
		const properties = this.handleUserProperties(user);
		mixpanel.alias(distinctId);
		this.mixpanelRepository.set({
			distinctId,
			properties,
		});
		if (track) {
			this.track(track, properties);
		}
	}

	public logout(): void {
		if (this.platformService.isServer) {
			return;
		}
		this.track('Log Out');
		mixpanel.reset();
	}

	handleUserProperties(user: any) {
		return this.mixpanelProvider.handleUser(
			user,
			user['User_id'],
			this.distinctId
		);
	}
}
