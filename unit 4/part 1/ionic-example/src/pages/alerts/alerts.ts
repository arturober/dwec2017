import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage {
  hello: string = '';
  foods: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertsPage');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Alert example',
      subTitle: 'Alert subtitle',
      message: 'This is an alert example. See Ionic documentation for more',
      buttons: [
        'Close', 
        {
          text: 'Say hello', 
          handler: () => {
            this.hello = 'Hello everyone!';
            alert.dismiss();
            return false;
          }
        }
      ]
    });

    alert.present();
  }

  showCheckAlert() {
    const checkAlert = this.alertCtrl.create();
    checkAlert.setTitle('Pick your favourite foods');

    checkAlert.addInput({
      type: 'checkbox',
      label: 'Hamburguer',
      value: 'hamburguer'
    });

    checkAlert.addInput({
      type: 'checkbox',
      label: 'Pizza',
      value: 'pizza'
    });

    checkAlert.addInput({
      type: 'checkbox',
      label: 'Donuts',
      value: 'donuts'
    });

    checkAlert.addInput({
      type: 'checkbox',
      label: 'Tomato',
      value: 'tomato',
    });

    checkAlert.addButton('Cancel');
    checkAlert.addButton({
      text: 'Ok',
      handler: foods => this.foods = foods
    });

    checkAlert.present();
  }

}
