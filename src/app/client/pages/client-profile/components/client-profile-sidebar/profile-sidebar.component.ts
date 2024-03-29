import { Component, OnInit } from '@angular/core';
import { SidebarOption } from './sidebar-option.model';
import { PlatformService } from '../../../../services/platform/platform.service';
import { SvgIconComponent } from 'angular-svg-icon';
import {
	NavigationEnd,
	Router,
	RouterLink,
	RouterLinkActive,
} from '@angular/router';
import { AuthService } from '../../../../../auth/services/auth/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { SidebarService, sideBarState } from './profile-sidebar.service';
import { AsyncPipe } from '@angular/common';
import { filter, first } from 'rxjs/operators';
import { OmitCallback } from '../../../../shared/models/omit-callback.model';

@Component({
	selector: 'b2b-profile-sidebar',
	standalone: true,
	imports: [SvgIconComponent, RouterLink, RouterLinkActive, AsyncPipe],
	templateUrl: './profile-sidebar.component.html',
	styleUrl: './profile-sidebar.component.scss',
})
export class ProfileSidebarComponent implements OnInit {
	public sidebarOptions: SidebarOption[] =
		this.sidebarService.getSidebarOptions();
	public subMenuOptions$: Observable<OmitCallback<SidebarOption>[]> =
		this.sidebarService.submenuOptions$;
	public sidebarState$: Observable<sideBarState> =
		this.sidebarService.sidebarState$;
	public isBrowser = this.platformService.isBrowser;
	public currentUrl$: Observable<string>;
	private currentUrlSource: BehaviorSubject<string> =
		new BehaviorSubject<string>(this.router.url);

	constructor(
		private readonly platformService: PlatformService,
		private readonly sidebarService: SidebarService,
		private readonly authService: AuthService,
		private readonly router: Router
	) {}
	ngOnInit() {
		this.currentUrl$ = this.currentUrlSource.asObservable();
		this.updateCurrentUrl();
	}

	private updateCurrentUrl(): void {
		this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe((event) => {
				const url = (event as NavigationEnd).url.split('?')[0];
				this.currentUrlSource.next(url);
			});
	}

	public toggleSidebarState(): void {
		this.sidebarState$.pipe(first()).subscribe((prevState) => {
			this.sidebarService.changeSidebarState(
				prevState === 'opened' ? 'closed' : 'opened'
			);
		});
	}
	public closeSubMenu(): void {
		this.sidebarService.changeSidebarState('opened');
	}

	public async logOut(): Promise<void> {
		this.authService.logOut();
		await this.router.navigate(['']);
	}
}
