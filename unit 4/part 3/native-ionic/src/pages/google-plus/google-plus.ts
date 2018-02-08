import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

@IonicPage()
@Component({
  selector: 'page-google-plus',
  templateUrl: 'google-plus.html',
})
export class GooglePlusPage {
  isLogged = false;
  response = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public gplus: GooglePlus) {
  }

  ionViewDidLoad() {
    // Check if we are logged in.
    // webClientId is the web clientID from google developer console
    this.gplus.trySilentLogin({'webClientId': '857932202469-b2655f7p4gettk5ovv9e4v6qg3jiipqm.apps.googleusercontent.com'})
      .then(res => {
        this.response = res;
        this.isLogged = true;
      })
      .catch(err => console.error(err));
  }

  login() {
    this.gplus.login({'webClientId': '857932202469-b2655f7p4gettk5ovv9e4v6qg3jiipqm.apps.googleusercontent.com'})
      .then(res => {
        this.response = res;
        this.isLogged = true;
      })
      .catch(err => console.error(err));
  }

  logout() {
    this.gplus.logout()
      .then(res => this.isLogged = false)
      .catch(err => console.error(err));
  }

  disconnect() {
    this.gplus.disconnect()
      .then(res => this.isLogged = false)
      .catch(err => console.error(err));
  }
}
