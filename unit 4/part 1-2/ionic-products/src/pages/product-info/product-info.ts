import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

/**
 * Generated class for the ProductInfoPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-info',
  templateUrl: 'product-info.html'
})
export class ProductInfoPage {
  productDetailsRoot = 'ProductDetailsPage'
  productCommentsRoot = 'ProductCommentsPage'


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
  }

}
