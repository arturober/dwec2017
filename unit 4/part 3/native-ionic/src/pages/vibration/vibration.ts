import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

@IonicPage()
@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public vibration: Vibration) {
  }

  vibrate() {
    this.vibration.vibrate(1000); // 1s vibrate
  }

  vibrate2() {
    // 0,5s vibrate, 0,5s pause, 1s vibrate
    this.vibration.vibrate([500,500,1000]);
  }
}
