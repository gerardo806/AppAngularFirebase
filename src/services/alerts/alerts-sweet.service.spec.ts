import { TestBed } from '@angular/core/testing';

import { AlertsSweetService } from './alerts-sweet.service';

describe('AlertsSweetService', () => {
  let service: AlertsSweetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertsSweetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
