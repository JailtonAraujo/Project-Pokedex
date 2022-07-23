import { TestBed } from '@angular/core/testing';

import { AuthValidGuard } from './auth-valid.guard';

describe('AuthValidGuard', () => {
  let guard: AuthValidGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthValidGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
