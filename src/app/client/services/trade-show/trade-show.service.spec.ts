import { TestBed } from '@angular/core/testing';

import { TradeShowService } from './trade-show.service';

describe('ClientTradeShowsService', () => {
  let service: TradeShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
