import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Detail1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail1',
  templateUrl: 'detail1.html',
})
export class Detail1Page {
  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.data.name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Detail1Page');
  }


  goBack() {
    this.navCtrl.pop();
  }

  goDetails2() {
    this.navCtrl.push('Detail2Page');
  }

}
