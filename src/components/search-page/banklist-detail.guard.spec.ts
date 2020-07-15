import { TestBed } from '@angular/core/testing';

import { BanklistDetailGuard } from './banklist-detail.guard';

describe('BanklistDetailGuard', () => {
  let guard: BanklistDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BanklistDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
