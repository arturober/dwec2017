import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductCommentsPage } from './product-comments';

@NgModule({
  declarations: [
    ProductCommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductCommentsPage),
  ],
})
export class ProductCommentsPageModule {}
