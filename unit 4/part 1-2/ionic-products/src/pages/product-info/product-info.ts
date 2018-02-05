import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import { IProduct } from '../../models/product';

/**
 * Generated class for the ProductInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-info',
  templateUrl: 'product-info.html',
})
export class ProductInfoPage {
  product: IProduct;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public productsService: ProductsProvider) {
    this.product = navParams.data;
  }

  ionViewDidLoad() {
    this.productsService.getProduct(this.product.id)
      .subscribe(
        product => this.product = product
      );
  }

  goBack() {
    this.navCtrl.parent.parent.pop();
  }

}
