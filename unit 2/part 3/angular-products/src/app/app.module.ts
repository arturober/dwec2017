import { APP_ROUTES } from './app.routes';
import { ProductDetailGuard } from './services/product-detail-guard.service';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsFilterPipe } from './pipes/products-filter.pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductItemComponent,
        ProductsFilterPipe,
        StarRatingComponent,
        ProductAddComponent,
        WelcomeComponent,
        ProductDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    providers: [
        ProductService,
        Title,
        ProductDetailGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
