import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface AdminLogisticState {
	companies: any;
}

export function createInitialState(): AdminLogisticState {
	return {
		companies: [],
	};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'companies' })
export class AdminLogisticStore extends Store<AdminLogisticState> {
	constructor() {
		super(createInitialState());
	}
}
