import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the LocalNotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local-notifications',
  templateUrl: 'local-notifications.html',
})
export class LocalNotificationsPage {
  message = '';
  triggered = false;
  scheduled = false

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public localNotifications: LocalNotifications) {
  }

  ionViewDidLoad() {
  }

  createNotification() {
    this.localNotifications.schedule({
      id: 1, // Unique id
      text: this.message,
      at: new Date(new Date().getTime() + 10000),
      led: '0000FF', // Blue led
      sound: null,
    });
    this.scheduled = true;
    this.triggered = false;

    this.localNotifications.on('trigger', e => {
      this.triggered = true;
      this.scheduled = false;
    });
  }

  cancelNotification() {
    this.localNotifications.cancel(1);
    this.scheduled = false;
  }

}
