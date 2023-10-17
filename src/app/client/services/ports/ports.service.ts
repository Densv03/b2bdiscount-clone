import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api/api.service';
import { PortsStore } from '../../state/ports/ports.store';
import { PortsQuery } from '../../state/ports/ports.query';
import { Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { take, tap } from 'rxjs/operators';

@UntilDestroy()
@Injectable({
	providedIn: 'root',
})
export class PortsService {
	constructor(
		private readonly apiService: ApiService,
		private readonly portsStore: PortsStore,
		private readonly portsQuery: PortsQuery
	) {}

	public getPorts(countryCode: string): Observable<any> {
		const { ports } = this.portsQuery.getValue();

		if (!ports.length || ports[0].countryCode !== countryCode) {
			return this.apiService.get(`ports?country=${countryCode}`).pipe(
				tap((response) => {
					this.portsStore.update({
						ports: response,
					});
				})
			);
		} else {
			return this.portsQuery.selectPorts$;
		}
	}
}
