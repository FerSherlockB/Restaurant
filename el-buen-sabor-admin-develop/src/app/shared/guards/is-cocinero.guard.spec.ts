import { TestBed } from '@angular/core/testing';

import { IsCocineroGuard } from './is-cocinero.guard';

describe('IsCocineroGuard', () => {
  let guard: IsCocineroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsCocineroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
