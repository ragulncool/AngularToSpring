import { TestBed } from '@angular/core/testing';

import { InterpolServiceService } from './interpol-service.service';

describe('InterpolServiceService', () => {
  let service: InterpolServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterpolServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
