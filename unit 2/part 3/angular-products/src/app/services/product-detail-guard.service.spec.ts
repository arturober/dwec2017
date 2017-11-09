import { TestBed, inject } from '@angular/core/testing';

import { ProductDetailGuardService } from './product-detail-guard.service';

describe('ProductDetailGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailGuardService]
    });
  });

  it('should be created', inject([ProductDetailGuardService], (service: ProductDetailGuardService) => {
    expect(service).toBeTruthy();
  }));
});
