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
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/switchMap';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ConfirmModalComponent } from '../../shared/confirm-modal/confirm-modal.component';

@Injectable()
export class ProductAddDeactivateGuard implements CanDeactivate<ProductAddComponent> {
    constructor(private productService: ProductService, private modalService: NgbModal) {}

    public canDeactivate(
        component: ProductAddComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): Observable<boolean> {
        if (!component.cancelled) {
            const modalRef = this.modalService.open(ConfirmModalComponent);
            modalRef.componentInstance.title = 'Save changes';
            modalRef.componentInstance.body = 'Do you want to save changes?';

            return Observable.fromPromise(modalRef.result)
                .switchMap(ok => {
                    if (ok) {
                        return this.productService.addProduct(component.newProd)
                        .catch(error => {
                            alert(error);
                            return Observable.of(false);
                        });
                    } else {
                        return Observable.of(true);
                    }
                })
                .catch(() => Observable.of(false));
        }

        return Observable.of(true);
    }
}
