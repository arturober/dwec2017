import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-facebook',
  templateUrl: 'facebook.html',
})
export class FacebookPage {
  accessToken = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
		          public fb: Facebook) {}

  ionViewDidLoad() {
    this.fb.getLoginStatus()
    .then((resp: FacebookLoginResponse) => {
      if(resp.status === "connected")
        this.accessToken = resp.authResponse.accessToken;
    });
  }

  login() {
    this.fb.login(["public_profile", "email"])
    .then((resp: FacebookLoginResponse) => {
      if(resp.status === "connected")
        this.accessToken = resp.authResponse.accessToken;
    })
    .catch(e => console.error(e));
  }

  logout() {
    this.fb.logout().then(() => this.accessToken = "");
  }
}
