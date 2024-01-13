import { TestBed } from '@angular/core/testing';

import { SourcingRequestService } from './sourcing-request.service';

describe('TradebidService', () => {
	let service: SourcingRequestService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(SourcingRequestService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
