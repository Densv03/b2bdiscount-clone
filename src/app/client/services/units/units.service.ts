import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ApiService } from '../../../core/services/api/api.service';
import { UnitsQuery } from '../../state/units/units.query';
import { UnitsStore } from '../../state/units/units.store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@UntilDestroy()
@Injectable({
	providedIn: 'root',
})
export class UnitsService {
	public readonly endpoint: string;

	constructor(
		private readonly _apiService: ApiService,
		private readonly _unitsStore: UnitsStore,
		private readonly _unitsQuery: UnitsQuery
	) {
		this.endpoint = 'units';
	}

	public getUnits(): Observable<any> {
		const { units } = this._unitsQuery.getValue();

		if (!units.length) {
			this._apiService
				.get(this.endpoint)
				.pipe(
					untilDestroyed(this),
					filter((data) => data instanceof Array && data.length > 0)
				)
				.subscribe((response) => {
					this._unitsStore.update({
						units: response,
					});
				});
		}

		return this._unitsQuery.selectUnits$;
	}
}
