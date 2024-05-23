import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';




describe('InMemoryDataService', () => {
  let service: InMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
