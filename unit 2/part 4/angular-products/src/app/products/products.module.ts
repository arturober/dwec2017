import { SharedModule } from '../shared/shared.module';
import { RatingModule } from '../rating/rating.module';
import { PRODUCT_ROUTES } from './products.routes';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsFilterPipe } from './pipes/products-filter.pipe';
import { ProductDetailResolveService } from './guards/product-detail-resolve.service';
import { ProductDetailGuard } from './guards/product-detail.guard';
import { ProductAddDeactivateGuard } from './guards/product-add-deactivate.guard';
import { ProductService } from './services/product.service';
import { ProductItemComponent } from './product-item/product-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(PRODUCT_ROUTES),
        RatingModule,
        SharedModule
    ],
    declarations: [
        ProductItemComponent,
        ProductsFilterPipe,
        ProductListComponent,
        ProductAddComponent,
        ProductDetailComponent
    ],
    providers: [
        ProductService,
        ProductAddDeactivateGuard,
        ProductDetailGuard,
        ProductDetailResolveService
    ]
})
export class ProductsModule {}
