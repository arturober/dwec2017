import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VirtualScrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-virtual-scroll',
  templateUrl: 'virtual-scroll.html',
})
export class VirtualScrollPage {
  items: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    for (let i = 1; i <= 10000; i++) {
      this.items.push(`Item ${i}`);
    }
  }

  headerFn(record, recordIndex, records) {
    if (recordIndex % 20 === 0) {
      return `From ${recordIndex + 1} to ${recordIndex + 20}`;
    }
    return null;
  }

}
