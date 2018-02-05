import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IProduct } from '../../models/product';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  productInfo = 'ProductInfoPage';
  productComments = 'ProductCommentsPage';
  product: IProduct;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }
}
