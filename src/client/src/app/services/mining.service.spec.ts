import { TestBed, inject } from '@angular/core/testing';

import { MiningsService } from './minings.service';

describe('MiningsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiningsService]
    });
  });

  it('should be created', inject([MiningsService], (service: MiningsService) => {
    expect(service).toBeTruthy();
  }));
});
