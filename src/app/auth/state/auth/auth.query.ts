import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { User } from '../../../core/models/user/user.model';
import { B2bAuthRootRoleInterface } from '../../../../../projects/shared/src/interfaces/b2b-auth-root-role.interface';
import { AuthState, AuthStore } from './auth.store';
import { B2bAuthRoleInterface } from '../../../../../projects/shared/src/interfaces/b2b-auth-role.interface';
import { PublicCompanyInfoModel } from '../../../core/models/public-company-info.model';
import { PlatformService } from '../../../client/services/platform/platform.service';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {
	public readonly selectRoles$: Observable<B2bAuthRoleInterface[]>;
	public readonly selectRole$: Observable<B2bAuthRoleInterface | null>;
	public readonly selectRootRoles$: Observable<B2bAuthRootRoleInterface[]>;
	public readonly selectRootRole$: Observable<B2bAuthRootRoleInterface | null>;
	public readonly selectUser$: Observable<User>;
	public readonly selectToken$: Observable<any>;
	public readonly selectCompany$: Observable<PublicCompanyInfoModel | null>;

	constructor(
		protected override store: AuthStore,
		private readonly platformService: PlatformService
	) {
		super(store);
		this.selectRoles$ = this.getSelect('roles');
		this.selectRole$ = this.getSelect('role');
		this.selectRootRoles$ = this.getSelect('rootRoles');
		this.selectRootRole$ = this.getSelect('rootRole');
		this.selectUser$ = this.getSelect('user');
		this.selectToken$ = this.getSelect('token');
		this.selectCompany$ = this.getSelect('company');
	}

	getSelect(key: any) {
		if (this.platformService.isServer) {
			return of(null);
		}
		return this.select(key);
	}
}
