import { TestBed } from '@angular/core/testing';

import { DetailuserService } from './detailuser.service';

describe('DetailuserService', () => {
  let service: DetailuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
