import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

/**
 * Generated class for the FlashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flash',
  templateUrl: 'flash.html',
})
export class FlashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public flash: Flashlight) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlashPage');
  }

  turnOn() {
    this.flash.switchOn();
  }

  turnOff() {
    this.flash.switchOff();
  }

}
