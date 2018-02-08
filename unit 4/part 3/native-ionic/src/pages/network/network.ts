import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Network } from '@ionic-native/network';

@IonicPage()
@Component({
  selector: 'page-network',
  templateUrl: 'network.html',
})
export class NetworkPage {
  connected = false;
  type = 'none';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public network: Network, public ngZone: NgZone) {
  }

  ionViewDidLoad() {
    this.getConnection();
    console.log("Get initial connection");
    this.network.onchange().subscribe(() => {
      console.log("Changed");
      this.getConnection();
    });
  }

  getConnection() {
    this.ngZone.run(() => {
      this.type = this.network.type;
      this.connected = this.type !== 'none';
    });
  }

}
