import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

/**
 * Generated class for the ModalLauncherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-launcher',
  templateUrl: 'modal-launcher.html',
})
export class ModalLauncherPage {
  name = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalLauncherPage');
  }

  openModal() {
    const modal = this.modalCtrl.create('ModalExamplePage', { name: this.name });
    modal.present();
    modal.onDidDismiss(data => {
      const toast = this.toastCtrl.create({duration: 3000, message: data.hello});
      toast.present();
    });
  }
}
