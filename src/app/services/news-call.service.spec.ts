import { TestBed } from '@angular/core/testing';

import { NewsCallService } from './news-call.service';

describe('NewsCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsCallService = TestBed.get(NewsCallService);
    expect(service).toBeTruthy();
  });
});
