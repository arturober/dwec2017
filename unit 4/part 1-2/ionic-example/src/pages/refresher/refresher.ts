import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';

/**
 * Generated class for the RefresherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-refresher',
  templateUrl: 'refresher.html',
})
export class RefresherPage {
  items: String[] = [
    "Star wars",
    "Lord of the rings",
    "Terminator",
    "Pulp fiction"
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RefresherPage');
  }

  refreshItems(refresh: Refresher) {
    setTimeout(() => {
      this.items.push("Truman show", "Avatar", "Matrix", "Reservoir dogs");
      this.items.sort();
      refresh.complete();
    }, 2000);

  }

}
