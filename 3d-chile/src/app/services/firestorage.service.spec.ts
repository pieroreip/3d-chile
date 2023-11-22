import { TestBed } from '@angular/core/testing';

import { FirestorageService } from './firestorage.service';

describe('FirestorageService', () => {
  let service: FirestorageService;

  beforeEach(async() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
