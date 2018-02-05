import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IComment } from '../../models/comment';
import { ProductsProvider } from '../../providers/products/products';

/**
 * Generated class for the ProductCommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-comments',
  templateUrl: 'product-comments.html',
})
export class ProductCommentsPage {
  comments: IComment[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public productsService: ProductsProvider) {
  }

  ionViewDidLoad() {
    this.productsService.getComments(this.navParams.data.id)
      .subscribe(
        comments => this.comments = comments
      );
  }

}
