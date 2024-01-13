import { Injectable } from '@angular/core';
import * as mixpanel from 'mixpanel-browser';
import { PlatformService } from '../../../client/services/platform/platform.service';
import { MixpanelRepository } from './mixpanel.repository';
import { MixpanelProvider } from '../../providers/mixpanel/mixpanel.provider';
import { MixpanelPeopleAction } from '../../../../../ssr/enums/mixpanel-people.enum';

@Injectable({
	providedIn: 'root',
})
export class MixpanelService {
	private readonly token = this.mixpanelProvider.token;

	constructor(
		private readonly platformService: PlatformService,
		private readonly mixpanelRepository: MixpanelRepository,
		private readonly mixpanelProvider: MixpanelProvider
	) {
		this.init();
	}

	get distinctId() {
		return mixpanel.get_distinct_id();
	}

	init() {
		if (this.platformService.isServer) {
			return;
		}
		mixpanel.init(this.token, { debug: !this.mixpanelProvider.isProd });
	}

	peopleAction(action: MixpanelPeopleAction, body: any) {
		const repository = this.mixpanelRepository;
		try {
			switch (action) {
				case MixpanelPeopleAction.APPEND:
					return repository.append(body);
				case MixpanelPeopleAction.CLEAR_CHANGES:
					return repository.clearCharges(body);
				case MixpanelPeopleAction.DELETE_USER:
					return repository.deleteUser(body);
				case MixpanelPeopleAction.INCREMENT:
					return repository.increment(body);
				case MixpanelPeopleAction.TRACK_CHARGE:
					return repository.trackChange(body);
				case MixpanelPeopleAction.SET:
					return repository.set(body);
				case MixpanelPeopleAction.UNION:
					return repository.union(body);
				case MixpanelPeopleAction.SET_ONCE:
					return repository.setOnce(body);
				case MixpanelPeopleAction.REMOVE:
					return repository.remove(body);
				case MixpanelPeopleAction.UNSET:
					return repository.unset(body);
			}
		} catch (e) {
			throw e;
		}
	}

	public track(eventName: string, properties?: any): void {
		if (this.platformService.isServer) {
			return;
		}
		if (!eventName) {
			throw new Error("Can't track event. No event name");
		}
		this.mixpanelRepository.track(
			this.mixpanelProvider.handleTrack(eventName, properties)
		);
	}

	public logIn(user: any, track?: string): void {
		if (this.platformService.isServer) {
			return;
		}
		if (!this.distinctId) {
			this.signUp(user, track);
		}
		this.mixpanelRepository.append({
			distinctId: this.distinctId,
			properties: {
				time: new Date().toISOString(),
				deviceType: this.mixpanelProvider.detectDeviceType(),
			},
		});
		if (track) {
			this.track(track, this.mixpanelProvider.handleUser(user));
		}
	}

	public signUp(user: any, track: string): void {
		if (this.platformService.isServer) {
			return;
		}
		const properties = this.mixpanelProvider.handleUser(user);
		mixpanel.alias(user['User_id']);
		mixpanel.register({
			distinctId: user['User_id'],
			...properties,
		});
		this.mixpanelRepository.set({
			distinctId: user['User_id'],
			properties,
		});
		this.track(track, properties);
	}

	public logout(): void {
		if (this.platformService.isServer) {
			return;
		}
		this.track('Log Out');
		mixpanel.reset();
	}
}
