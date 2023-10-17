import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { PortsStore, PortsState } from './ports.store';

@Injectable({ providedIn: 'root' })
export class PortsQuery extends Query<PortsState> {
	public readonly selectPorts$: Observable<any[]>;

	constructor(protected override store: PortsStore) {
		super(store);

		this.selectPorts$ = this.select('ports');
	}
}
