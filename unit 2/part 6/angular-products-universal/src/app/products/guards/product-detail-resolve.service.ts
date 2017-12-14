import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { IProduct } from '../interfaces/i-product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductDetailResolveService implements Resolve<IProduct> {
    constructor(private productService: ProductService, private router: Router) {}

    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<IProduct> {
        return this.productService.getProduct(route.params.id)
        .catch(error => {
            this.router.navigate(['/products']);
            return Observable.of(null);
        });
    }
}
