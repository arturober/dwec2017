import { ProductDetailResolveService } from './products/guards/product-detail-resolve.service';
import { ProductAddDeactivateGuard } from './products/guards/product-add-deactivate.guard';
import { ProductDetailGuard } from './products/guards/product-detail.guard';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'products', loadChildren: './products/products.module#ProductsModule'},
    // Default route (empty) -> Redirect to welcome page
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    // Doesn't match any of the above
    { path: '**', redirectTo: '/welcome'}
];
