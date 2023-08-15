import { TestBed } from '@angular/core/testing';

import { ApihceApService } from './hce-api.service';

describe('ApihceApService', () => {
  let service: ApihceApService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApihceApService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
