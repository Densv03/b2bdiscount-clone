import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { AdminLogisticState, AdminLogisticStore } from './admin-logistic.store';

@Injectable({ providedIn: 'root' })
export class AdminLogisticQuery extends Query<AdminLogisticState> {
	public readonly selectedProfiles$: Observable<any[]>;

	constructor(protected override store: AdminLogisticStore) {
		super(store);

		this.selectedProfiles$ = this.select('companies');
	}
}
