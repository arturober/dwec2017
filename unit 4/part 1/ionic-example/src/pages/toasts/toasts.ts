import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ToastsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toasts',
  templateUrl: 'toasts.html',
})
export class ToastsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastsPage');
  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: "I'm a toast message",
      duration: 2000, // 2 seconds
      position: 'middle'
    });
    toast.present();
  
  }
}
