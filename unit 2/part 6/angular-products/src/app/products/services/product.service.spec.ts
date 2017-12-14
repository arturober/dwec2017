import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductService],
            imports: [HttpClientTestingModule]
        });
    });

    it('should be created',
        inject([ProductService], (service: ProductService) => {
            expect(service).toBeTruthy();
    }));

    it('should get a product',
        inject([ProductService, HttpTestingController],
            (service: ProductService, backend: HttpTestingController) => {
                service.getProduct(1).subscribe(
                    prod => expect(prod).toBeTruthy() // Gets something
                );
                backend.expectOne({
                    // Expects a GET call to this URL
                    url: 'http://arturober.com/products-angular/products/1',
                    method: 'GET'
                }).flush({
                    // Returns (fake) data to the service (OK response)
                    product: { id: 1, name: 'Product', price: 12 }
                }, {
                    status: 200,
                    statusText: 'Ok'
                });
                backend.verify(); // Needs to be called at the end
            }
        )
    );
});
