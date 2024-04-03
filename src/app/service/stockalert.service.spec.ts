import { TestBed } from '@angular/core/testing';

import { StockalertService } from './stockalert.service';

describe('StockalertService', () => {
  let service: StockalertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockalertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
