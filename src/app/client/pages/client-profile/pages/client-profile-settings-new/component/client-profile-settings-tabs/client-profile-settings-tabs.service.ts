import {Injectable} from "@angular/core";
import _ from "lodash";
import {MatDialog} from "@angular/material/dialog";
import {
	ClientProfileDefaultModalComponent
} from "../client-profile-default-modal/client-profile-default-modal.component";
import {DefaultModalData} from "../client-profile-default-modal/client-profile-default-modal.interface";
import {BehaviorSubject, firstValueFrom, Subject} from "rxjs";
import {TabOutputData} from "./client-profile-settings-tabs.interface";
import {PageTab} from "../../client-profile-settings.type";
import {defaultTab} from "./client-profile-settings-tabs.constant";

@Injectable({
	providedIn: 'root'
})
export class ClientProfileSettingsTabsService<T> {

	data$ = new BehaviorSubject<TabOutputData<T>>({
		first: null,
		second: null
	})
	initSubmit$ = new Subject<PageTab | null>()
	activeTab: PageTab = defaultTab;

	constructor(private matDialog: MatDialog) {
	}

	async isActivationPossible(): Promise<boolean> {
		const data = await firstValueFrom(this.data$);
		return this.isEqual<any>(data.first, data.second)
	}

	openTabChangeModal() {
		return this.matDialog.open(ClientProfileDefaultModalComponent, {
			data: {
				title: '',
				description: 'You are leaving the page without saving your changes. Save your changes or leave without them?',
				buttons: [
					{
						label: 'Discard changes',
						result: false,
					},
					{
						label: 'Apply changes',
						result: true
					}
				]
			} as DefaultModalData<boolean>
		})
	}

	isEqual<T>(first: T, second: T): boolean {
		return _.isEqual(first, second);
	}

	async initSaveModal(tab: PageTab) {
		this.initSubmit$.next(tab);
	}
}
