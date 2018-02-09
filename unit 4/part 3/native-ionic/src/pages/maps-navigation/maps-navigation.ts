import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

@IonicPage()
@Component({
  selector: 'page-maps-navigation',
  templateUrl: 'maps-navigation.html',
})
export class MapsNavigationPage {
  lat = 38.289257;
  lng = -0.558296;
  zoom = 17;
  info = "Come here please!";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public launchNavigator: LaunchNavigator) {
  }

  navigate() {
    let options: LaunchNavigatorOptions = {};

    this.launchNavigator.navigate([this.lat, this.lng], options)
      .then(ok => console.log("Navigation launched!"));
  }
}
