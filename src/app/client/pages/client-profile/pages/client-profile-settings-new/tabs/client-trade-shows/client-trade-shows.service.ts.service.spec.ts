import { TestBed } from '@angular/core/testing';

import { ClientTradeShowsService } from './client-trade-shows.service';

describe('ClientTradeShowsServiceTsService', () => {
  let service: ClientTradeShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientTradeShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});