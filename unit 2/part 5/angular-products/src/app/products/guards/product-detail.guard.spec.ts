import { TestBed, inject } from '@angular/core/testing';

import { ProductDetailGuard } from './product-detail.guard';

describe('ProductDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailGuard]
    });
  });

  it('should be created', inject([ProductDetailGuard], (service: ProductDetailGuard) => {
    expect(service).toBeTruthy();
  }));
});
