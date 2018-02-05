import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Events } from 'ionic-angular';
import { IProduct } from '../../models/product';
import { ProductsProvider } from '../../providers/products/products';

/**
 * Generated class for the NewProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-product',
  templateUrl: 'new-product.html',
})
export class NewProductPage {
  product: IProduct = {
    description: "",
    price: 0
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toast: ToastController, public productsService: ProductsProvider,
    public events: Events) { }

  create() {
    this.productsService.createProduct(this.product)
      .subscribe(
      (prod) => {
        this.events.publish('product:created', prod);
        this.navCtrl.pop();
      },
      (error) => this.showToast(3000, error)
      );
  }

  cancel() {
    this.navCtrl.pop();
  }

  private showToast(duration: number, message: string) {
    let toast = this.toast.create({
      duration,
      message
    });
    toast.present();
  }
}
