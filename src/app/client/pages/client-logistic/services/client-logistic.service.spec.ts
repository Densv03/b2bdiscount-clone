import { TestBed } from '@angular/core/testing';

import { ClientLogisticService } from './client-logistic.service';

describe('ClientLogisticService', () => {
	let service: ClientLogisticService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ClientLogisticService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
