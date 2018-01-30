import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import { IProduct } from '../../interfaces/i-product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products: IProduct[] = [];

  constructor(public navCtrl: NavController,
              public prodService: ProductsProvider) {
  }

  ionViewDidLoad() {
    this.prodService.getProducts().subscribe(
      products => this.products = products
    );
  }

  goDetails(prod) {
    this.navCtrl.push('ProductInfoPage', prod);
  }

}
