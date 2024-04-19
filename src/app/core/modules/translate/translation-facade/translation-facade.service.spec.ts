import { TestBed } from '@angular/core/testing';

import { TranslationFacadeService } from './translation-facade.service';

describe('TranslationStoreService', () => {
  let service: TranslationFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
