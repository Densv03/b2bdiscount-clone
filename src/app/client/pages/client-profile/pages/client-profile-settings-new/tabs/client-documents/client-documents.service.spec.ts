import { TestBed } from '@angular/core/testing';

import { ClientDocumentsService } from './client-documents.service';

describe('ClientDocumentsService', () => {
	let service: ClientDocumentsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ClientDocumentsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
