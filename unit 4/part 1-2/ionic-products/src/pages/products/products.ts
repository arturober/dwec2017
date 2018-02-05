import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ItemSliding } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import { IProduct } from '../../models/product';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  products: IProduct[] = [];
  title: string = "Products";
  mine: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public productsService: ProductsProvider, public events: Events) {
  }

  ionViewDidLoad() {
    if (this.navParams.get('showMine')) { // Show my products only
      this.title = "My products";
      this.mine = true;
    }

    let products$; // Variable for the observable
    if (this.mine) {
      products$ = this.productsService.getMyProducts();
    } else {
      products$ = this.productsService.getProducts();
    }

    products$.subscribe(
      (products) => this.products = products
    );

    this.events.subscribe('product:created', (prodData) => {
      let prod = <IProduct>prodData;
      this.products.unshift(prod);
    });

    this.events.subscribe('product:deleted', (idProd) => {
      let pos = this.products.findIndex((p) => p.id == idProd);
      if (pos > -1) this.products.splice(pos, 1);
    });
  }

  deleteProd(slidingItem: ItemSliding, id: number, index: number) {
    this.productsService.deleteProduct(id).subscribe(
      (ok) => {
        if (ok) this.events.publish('product:deleted', id);
      }
    );
  }

  goDetail(product: IProduct) {
    this.navCtrl.push('ProductDetailPage', product);
  }
}
