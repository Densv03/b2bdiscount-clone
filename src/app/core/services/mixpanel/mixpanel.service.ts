import { Injectable } from '@angular/core';
import * as mixpanel from 'mixpanel-browser';
import { PlatformService } from '../../../client/services/platform/platform.service';
import { MixpanelRepository } from './mixpanel.repository';
import { MixpanelProvider } from '../../providers/mixpanel/mixpanel.provider';
import { MixpanelActionBase } from '../../../../../ssr/models/mixpanel.model';

@Injectable({
	providedIn: 'root',
})
export class MixpanelService {
	private readonly token = this.mixpanelProvider.token;
	private distinctId: string;

	constructor(
		private readonly platformService: PlatformService,
		private readonly mixpanelRepository: MixpanelRepository,
		private readonly mixpanelProvider: MixpanelProvider
	) {
		this.init();
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

	public logIn(user: any): void {
		if (this.platformService.isServer) {
			return;
		}
		if (!this.distinctId) {
			this.signUp(user);
		}
		const distinctId = user['User_id'];
		mixpanel.identify(distinctId);
		const properties = this.handleUserProperties(user);
		this.track('Login completed', properties);
		this.set({
			distinctId,
			properties,
		});
	}

	public signUp(user: any, track?: string): void {
		if (this.platformService.isServer) {
			return;
		}
		const distinctId = user['User_id'];
		mixpanel.alias(distinctId, this.distinctId);
		const properties = this.handleUserProperties(user);
		this.set({
			distinctId,
			properties,
		});
		if (track) {
			this.track(track, properties);
		}
	}

	identify(id: string) {
		mixpanel.identify(id);
	}

	set(body: Partial<MixpanelActionBase>) {
		if (!body.distinctId) {
			body.distinctId = this.distinctId;
		}
		this.mixpanelRepository.set(body as MixpanelActionBase);
	}

	public logout(): void {
		if (this.platformService.isServer) {
			return;
		}
		this.track('Log Out');
		mixpanel.reset();
		this.changeDistinctId();
	}

	changeDistinctId() {
		this.distinctId = mixpanel.get_distinct_id();
		mixpanel.identify(this.distinctId);
	}

	private handleUserProperties(user: any) {
		return this.mixpanelProvider.handleUser(
			user,
			user['User_id'],
			this.distinctId
		);
	}

	private init() {
		if (this.platformService.isServer) {
			return;
		}
		mixpanel.init(this.token, { debug: !this.mixpanelProvider.isProd });
		this.distinctId = mixpanel.get_distinct_id();
	}
}
