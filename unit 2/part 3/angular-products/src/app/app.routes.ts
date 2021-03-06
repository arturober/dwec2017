import { ProductDetailResolveService } from './guards/product-detail-resolve.service';
import { ProductAddDeactivateGuard } from './guards/product-add-deactivate.guard';
import { ProductDetailGuard } from './guards/product-detail.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'products', component: ProductListComponent },
    {
        path: 'add-product',
        component: ProductAddComponent,
        canDeactivate: [ProductAddDeactivateGuard]
    },
    // :id is a parameter (product's id)
    {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard],
        resolve: {
            product: ProductDetailResolveService
        }
    },
    // Default route (empty) -> Redirect to welcome page
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    // Doesn't match any of the above
    { path: '**', redirectTo: '/welcome'}
];
