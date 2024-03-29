import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SidebarOption } from './sidebar-option.model';
import { first } from 'rxjs/operators';
import { submenuOptions, submenuOptionsData } from './submenu-options-data';
import { OmitCallback } from '../../../../shared/models/omit-callback.model';
import {Router} from "@angular/router";

export type sideBarState = 'opened' | 'closed';

export type subMenuType = 'settings';

@Injectable({
	providedIn: 'root',
})
export class SidebarService {
	public sidebarState$: Observable<sideBarState>;
	public submenuOptions$: Observable<OmitCallback<SidebarOption>[]>;
	private sideBarStateSource: BehaviorSubject<sideBarState> =
		new BehaviorSubject<sideBarState>('opened');
	private submenuOptionsSource: BehaviorSubject<OmitCallback<SidebarOption>[]> =
		new BehaviorSubject<OmitCallback<SidebarOption>[]>(null);
	constructor(private readonly router: Router) {
		this.sidebarState$ = this.sideBarStateSource.asObservable();
		this.submenuOptions$ = this.submenuOptionsSource.asObservable();
	}

	public changeSidebarState(state: sideBarState): void {
		this.sideBarStateSource.next(state);
	}
	public toggleSidebarState(): void {
		this.sideBarStateSource.next(
			this.sideBarStateSource.getValue() === 'opened' ? 'closed' : 'opened'
		);
	}

	public setSubMenuOptions(type: subMenuType): void {
		this.submenuOptionsSource.next(submenuOptionsData[type]);
	}

	public getSidebarOptions(): SidebarOption[] {
		return [
			{
				label: 'My products',
				icon: '/assets/icons/sidebar/market.svg',
				path: '/profile/your-workspace/b2bmarket',
				callback: () => {
					this.changeSidebarState('opened');
				},
			},
			{
				label: 'Sourcing request',
				icon: '/assets/icons/sidebar/sourcing-request.svg',
				path: '/profile/your-workspace/sourcing-request',
				callback: () => {
					this.changeSidebarState('opened');
				},
			},
			{
				label: 'Unclaimed cargo',
				icon: '/assets/icons/sidebar/unclaimed-cargo.svg',
				path: '/profile/your-workspace/unclaimed-cargo',
				callback: () => {
					this.changeSidebarState('opened');
				},
			},
			{
				label: 'Settings',
				icon: '/assets/icons/sidebar/settings.svg',
				path: '/profile/your-account/settings',
				hasSubMenu: true,
				callback: () => {
					this.toggleSidebarState();
					this.setSubMenuOptions('settings');
					if (!this.router.url.includes('settings')) {
						this.router.navigate([submenuOptionsData['settings'][0].path])
					}
				},
			},
		];
	}
}
