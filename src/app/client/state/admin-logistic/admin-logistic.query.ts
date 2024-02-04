import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { AdminLogisticState, AdminLogisticStore } from './admin-logistic.store';
import { PlatformService } from '../../services/platform/platform.service';

@Injectable({ providedIn: 'root' })
export class AdminLogisticQuery extends Query<AdminLogisticState> {
	public readonly selectedProfiles$: Observable<any[]>;

	constructor(
		protected override store: AdminLogisticStore,
		private platformService: PlatformService
	) {
		super(store);

		this.selectedProfiles$ = this.platformService.isServer
			? of(null)
			: this.select('companies');
	}
}
