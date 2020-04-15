import { TestBed } from '@angular/core/testing';

import { BerryFirmnessesService } from './berry-firmnesses.service';

describe('BerryFirmnessesService', () => {
  let service: BerryFirmnessesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BerryFirmnessesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
