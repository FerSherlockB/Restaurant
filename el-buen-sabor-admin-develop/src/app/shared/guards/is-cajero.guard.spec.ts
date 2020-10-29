import { TestBed } from '@angular/core/testing';

import { IsCajeroGuard } from './is-cajero.guard';

describe('IsCajeroGuard', () => {
  let guard: IsCajeroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsCajeroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
