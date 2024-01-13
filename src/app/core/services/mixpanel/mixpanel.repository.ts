import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MixpanelPeopleAction } from '../../../../../ssr/enums/mixpanel-people.enum';
import { MixpanelEvent } from '../../../../../ssr/models/mixpanel-event.model';
import {
	MixpanelActionBase,
	MixpanelIncrement,
	MixpanelRemove,
	MixpanelUnion,
	MixpanelUnset,
} from '../../../../../ssr/models/mixpanel.model';
import { MixpanelProvider } from '../../providers/mixpanel/mixpanel.provider';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class MixpanelRepository {
	private readonly baseUrl = this.mixpanelProvider.isProd
		? environment.prodUrl
		: environment.devUrl;

	constructor(
		private mixpanelProvider: MixpanelProvider,
		private httpClient: HttpClient
	) {}

	private get ref() {
		return this.baseUrl + 'mixpanel/';
	}

	private get peopleRef() {
		return this.ref + 'people/';
	}

	track(body: MixpanelEvent) {
		return this.httpClient.post(this.ref + 'track', body).subscribe();
	}

	set(body: MixpanelActionBase) {
		const action = MixpanelPeopleAction.SET;
		this.basicPostAction(action, body);
	}

	append(body: MixpanelActionBase) {
		const action = MixpanelPeopleAction.APPEND;
		this.basicPostAction(action, body);
	}

	increment(body: MixpanelIncrement) {
		const action = MixpanelPeopleAction.INCREMENT;
		this.basicPostAction(action, body);
	}

	setOnce(body: MixpanelActionBase) {
		const action = MixpanelPeopleAction.APPEND;
		this.basicPostAction(action, body);
	}

	remove(body: MixpanelRemove) {
		const action = MixpanelPeopleAction.APPEND;
		this.basicPostAction(action, body);
	}

	unset(body: MixpanelUnset) {
		const action = MixpanelPeopleAction.UNSET;
		this.basicPostAction(action, body);
	}

	union(body: MixpanelUnion) {
		const action = MixpanelPeopleAction.UNION;
		this.basicPostAction(action, body);
	}

	clearCharges(body: Pick<MixpanelActionBase, 'distinctId'>) {
		const action = MixpanelPeopleAction.CLEAR_CHANGES;
		this.basicPostAction(action, body);
	}

	deleteUser(body: Pick<MixpanelActionBase, 'distinctId'>) {
		const action = MixpanelPeopleAction.DELETE_USER;
		this.basicPostAction(action, body);
	}

	trackChange(body: MixpanelActionBase) {
		const action = MixpanelPeopleAction.TRACK_CHARGE;
		this.basicPostAction(action, body);
	}

	private basicPostAction(action: MixpanelPeopleAction, body: any) {
		return this.httpClient.post(this.peopleRef + `${action}`, body).subscribe();
	}
}
