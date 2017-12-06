import { ProductDetailResolveService } from './guards/product-detail-resolve.service';
import { ProductDetailGuard } from './guards/product-detail.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductAddDeactivateGuard } from './guards/product-add-deactivate.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { Route } from '@angular/router';

export const PRODUCT_ROUTES: Route[] = [
    {
        path: '',
        component: ProductListComponent,
        data: {
            animation: 'productList'
        }
    },
    {
        path: 'add',
        component: ProductAddComponent
    },
    // :id is a parameter (product's id)
    {
        path: ':id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard],
        resolve: {
            product: ProductDetailResolveService
        },
        data: {
            animation: 'productDetail'
        }
    }
];
