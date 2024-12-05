import { TestBed } from '@angular/core/testing';

import { ReqFirebaseService } from './req-firebase.service';

describe('ReqFirebaseService', () => {
  let service: ReqFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
