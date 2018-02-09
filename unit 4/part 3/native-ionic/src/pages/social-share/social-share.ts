import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-social-share',
  templateUrl: 'social-share.html',
})
export class SocialSharePage {
  message: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
		  public socialSharing: SocialSharing) {}

  share() {
    this.socialSharing.shareViaWhatsApp(this.message, null, null);
  }
}
