import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll } from 'ionic-angular';

/**
 * Generated class for the InfitinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infitine',
  templateUrl: 'infitine.html',
})
export class InfitinePage {
  items: String[] = [];
  num = 1;
  finished = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = Array.from({length: 20}, (x,i) => `Item ${i + 1}`);
    this.num = 21;
  }

  loadMoreItems(infinite: InfiniteScroll) {
    setTimeout(() => {
      let newItems = Array.from({length: 20}, (x,i) => `Item ${i + this.num}`);
      this.num += 20;
      this.items.push(...newItems);
      infinite.complete();
      if(this.num > 100) this.finished = true;
    }, 200);
  }
}
