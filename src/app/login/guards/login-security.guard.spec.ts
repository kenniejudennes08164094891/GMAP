import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginSecurityGuard } from './login-security.guard';

describe('loginSecurityGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginSecurityGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
