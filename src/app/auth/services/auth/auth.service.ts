import { Injectable } from '@angular/core';
import {BehaviorSubject, firstValueFrom, Observable, of, shareReplay} from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { User } from '../../../core/models/user/user.model';
import { AuthQuery } from '../../state/auth/auth.query';
import { ApiService } from '../../../core/services/api/api.service';
import { AuthStore } from '../../state/auth/auth.store';
import { RegisterResponseInterface } from '../../../../../projects/shared/src/interfaces/auth-responses.interface';
import { B2bAuthRoleInterface } from '../../../../../projects/shared/src/interfaces/b2b-auth-role.interface';
import { MixpanelService } from '../../../core/services/mixpanel/mixpanel.service';
import { Router } from '@angular/router';
import { PlatformService } from '../../../client/services/platform/platform.service';
import { PublicCompanyInfoModel } from '../../../core/models/public-company-info.model';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	public isRegisteredByGoogle: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);
	public showSidenav = true;
	public userCredentials$ = new BehaviorSubject<any>(null);
	private isUserLoadingSource: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(true);
	public isUserLoading$: Observable<boolean> =
		this.isUserLoadingSource.asObservable();

	constructor(
		private readonly apiService: ApiService,
		private readonly authStore: AuthStore,
		private readonly authQuery: AuthQuery,
		private readonly mixpanelService: MixpanelService,
		private readonly platformService: PlatformService,
		private readonly router: Router
	) {
		setTimeout(() => {
			this.initUser();
		}, 0);
	}

	public get role(): B2bAuthRoleInterface | null {
		return this.authQuery.getValue().role;
	}

	public get user$(): Observable<User> {
		return this.authQuery.selectUser$;
	}

	public get user(): User {
		return this.authQuery.getValue().user;
	}

	public get company(): PublicCompanyInfoModel {
		return this.authQuery.getValue().company;
	}

	public initUser() {
		if (this.platformService.isServer) {
			return;
		}
		const token = this.getToken();
		this.updateToken(token || '');

		this.apiService
			.get<User>('user/')
			.pipe(take(1))
			.subscribe({
				next: (user) => {
					this.updateUser(<User>user);
					this.isUserLoadingSource.next(false);
					if (user.rootRole?.name === 'buyer' || 'supplier') {
						this.backToBlockedRoute();
					}
				},
				error: () => {
					this.updateUser(null);
					this.isUserLoadingSource.next(false);
				},
			});

		this.apiService
			.get<PublicCompanyInfoModel>('tradeBid/get-company-data')
			.pipe(take(1))
			.subscribe({
				next: (company) => {
					this.updateCompany(<PublicCompanyInfoModel>company);
				},
				error: () => {
					this.updateCompany(null);
				},
			});
	}

	public returnInitedUser(): Observable<User> {
		if (this.platformService.isServer) {
			return of(null);
		}
		return this.apiService
			.get<User>('user/')
			.pipe(tap((user) => this.updateUser(<User>user)));
	}

	public updateRole(role: B2bAuthRoleInterface) {
		this.authStore.update({ role });
	}

	public updateToken(token: string) {
		if (this.platformService.isServer) {
			return;
		}
		localStorage.setItem('token', token);
		this.authStore.update({ token });
	}

	public updateUser(user: User | null): void {
		this.authStore.update({
			user,
			role: user?.role,
			rootRole: user?.rootRole,
		});
	}

	public updateCompany(company: PublicCompanyInfoModel | null): void {
		this.authStore.update({
			company,
		});
	}

	public sendEmailAgain(email: any) {
		return this.apiService.post('auth/sendRegisterMail', { email });
	}

	public getUser() {
		return this.authQuery.selectUser$;
	}

	public getCompany$() {
		return this.authQuery.selectCompany$;
	}

	public getToken() {
		const tokenFromStore = this.authQuery.getValue().token;

		if (tokenFromStore) {
			return tokenFromStore;
		}

		const tokenFromLocalStorage = localStorage.getItem('token');

		if (tokenFromLocalStorage) {
			return tokenFromLocalStorage;
		}

		return '';
	}

	public async logOut() {
		if (this.platformService.isServer) {
			return;
		}
		localStorage.removeItem('token');
		this.mixpanelService.logout();
		this.authStore.update({
			user: null,
			token: null,
			company: null,
		});
	}

	public getRoles(): Observable<B2bAuthRoleInterface[]> {
		if (!this.authQuery.getValue().roles.length) {
			this.apiService
				.get('roles')
				.pipe(take(1), shareReplay())
				.subscribe((data: any) => {
					this.authStore.update({
						roles: data.roles,
						rootRoles: data.rootRoles,
					});
				});
		}

		return this.authQuery.selectRoles$;
	}

	public getRootRoles() {
		if (!this.authQuery.getValue().rootRoles.length) {
			this.apiService
				.get('roles')
				.pipe(take(1))
				.subscribe((data: any) => {
					this.authStore.update({
						roles: data.roles,
						rootRoles: data.rootRoles,
					});
				});
		}
		return this.authQuery.selectRootRoles$;
	}

	public logInWithGoogle(): void {}

	public logInWithForm(
		formGroupValue: any
	): Observable<RegisterResponseInterface> {
		return this.apiService
			.post<RegisterResponseInterface>('auth/login', formGroupValue)
			.pipe(
				tap((response: any) => {
					this.updateToken(response.token);
					this.initUser();
				})
			);
	}

	public registerWithGoogle(): void {}

	public getPreregisteredCompanyInformation(email: string): Observable<any> {
		return this.apiService.post('auth/check-company-in-ep-list', { email });
	}

	public checkEmailForExisting(email: string): Observable<any> {
		return this.apiService.get('user/checkAbsenceUserInDB', {
			params: { email },
		});
	}

	public registerWithForm(model: any): Observable<RegisterResponseInterface> {
		return this.apiService
			.post<RegisterResponseInterface>('auth/register', model)
			.pipe(
				tap((response: any) => {
					this.updateToken(response.token);
					this.initUser();
				})
			);
	}

	private backToBlockedRoute(): void {
		if (!localStorage.getItem('blocked-route')) {
			return;
		}

		this.router.navigate([localStorage.getItem('blocked-route')]);
	}
}
