import { ProductService } from '../services/product.service';
import { ProductAddComponent } from '../product-add/product-add.component';
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanDeactivate,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductAddDeactivateGuard implements CanDeactivate<ProductAddComponent> {
    constructor(private productService: ProductService) {}

    public canDeactivate(
        component: ProductAddComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): Observable<boolean> {
        if (!component.cancelled && confirm('Do you want to save changes?')) {
            return this.productService.addProduct(component.newProd)
                .catch(error => {
                    alert(error);
                    return Observable.of(false);
                });
        }

        return Observable.of(true);
    }
}
