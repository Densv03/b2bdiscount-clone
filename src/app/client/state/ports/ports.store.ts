import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface PortsState {
	ports: any;
}

export function createInitialState(): PortsState {
	return {
		ports: [],
	};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ports' })
export class PortsStore extends Store<PortsState> {
	constructor() {
		super(createInitialState());
	}
}
