import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {defaultTab, tabs} from './client-profile-settings-tabs.constant';
import {NgClass} from '@angular/common';
import _ from 'lodash';
import {ClientProfileSettingsTabsService} from "./client-profile-settings-tabs.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {debounceTime, first, tap} from "rxjs/operators";
import {PageTab} from "../../client-profile-settings.type";
import {ActivatedRoute} from "@angular/router";

@UntilDestroy()
@Component({
	selector: 'b2b-client-profile-settings-tabs',
	standalone: true,
	imports: [MatTabsModule, NgClass],
	styleUrl: './client-profile-settings-tabs.component.scss',
	templateUrl: './client-profile-settings-tabs.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileSettingsTabsComponent implements OnInit {
	@Input() disabled: boolean = false;
	@Input() defaultTab = _.cloneDeep(defaultTab);
	@Output() activeTab = new EventEmitter<typeof defaultTab>();

	public tabs = _.cloneDeep(tabs);

	constructor(private clientProfileSettingsTabsService: ClientProfileSettingsTabsService<any>,
							private cdr: ChangeDetectorRef) {
	}

	ngOnInit() {
		this.initTab();
	}

	async activateTab(i: number) {
		// If data is equal than we can change tab
		const isPossible = await this.clientProfileSettingsTabsService.isActivationPossible();
		if (isPossible) {
			this.changeTab(i)
			return;
		}
		// If data no equal than we need to ask user about save confirmation
		this.clientProfileSettingsTabsService
			.openTabChangeModal()
			.afterClosed()
			.pipe(untilDestroyed(this), first(), debounceTime(100),
				tap(async (initSave) => {
					if (initSave) {
						await this.clientProfileSettingsTabsService.initSaveModal(this.clientProfileSettingsTabsService.activeTab);
					} else {
						await this.clientProfileSettingsTabsService.initSaveModal(null);
					}
				}))
			.subscribe(() => {
				this.changeTab(i)
				this.clientProfileSettingsTabsService.data$.next({first: null, second: null});
			})
	}

	private changeTab(i: number) {
		this.tabs.map((x) => (x.active = false));
		if (!this.disabled) {
			this.tabs[i].active = !this.tabs[i].active;
		}
		this.activeTab.emit(this.tabs[i]);
		this.clientProfileSettingsTabsService.currentTab.next(this.tabs[i]);
		this.clientProfileSettingsTabsService.activeTab = this.tabs[i];
		this.cdr.detectChanges();
	}

	private initTab() {
		const index = this.tabs.findIndex((x) => x.label === this.defaultTab.label);
		this.clientProfileSettingsTabsService.activeTab = this.tabs[index];
		this.clientProfileSettingsTabsService.currentTab.next(this.tabs[index]);
		this.changeTab(index);
	}
}
