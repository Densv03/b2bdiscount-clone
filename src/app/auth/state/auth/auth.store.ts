import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { B2bAuthRoleInterface } from '../../../../../projects/shared/src/interfaces/b2b-auth-role.interface';
import { B2bAuthRootRoleInterface } from '../../../../../projects/shared/src/interfaces/b2b-auth-root-role.interface';
import { PublicCompanyInfoModel } from '../../../core/models/public-company-info.model';

export interface AuthState {
	user: any;
	roles: B2bAuthRoleInterface[];
	role: B2bAuthRoleInterface | null;
	rootRoles: B2bAuthRootRoleInterface[];
	rootRole: B2bAuthRootRoleInterface | null;
	token: string;
	company: PublicCompanyInfoModel | null;
}

export function createInitialState(): AuthState {
	return {
		user: undefined,
		roles: [],
		role: null,
		rootRole: null,
		rootRoles: [],
		token: '',
		company: null,
	};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {
	constructor() {
		super(createInitialState());
	}
}
