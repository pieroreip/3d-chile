import { TestBed } from '@angular/core/testing';

import { DbSqlService } from './db-sql.service';

describe('DbSqlService', () => {
  let service: DbSqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbSqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
