import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { roleguardGuard } from './roleguard.guard';

describe('roleguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => roleguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
