import { TestBed, async, inject } from '@angular/core/testing';

import { ProductAddDeactivateGuard } from './product-add-deactivate.guard';

describe('ProductAddDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductAddDeactivateGuard]
    });
  });

  it('should ...', inject([ProductAddDeactivateGuard], (guard: ProductAddDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
