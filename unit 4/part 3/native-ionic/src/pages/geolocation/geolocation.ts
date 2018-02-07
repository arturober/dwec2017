import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';

@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {
  lat: number;
  lng: number;
  lat2: number;
  lng2: number;
  geoSubscription: Subscription = null;
  isSubscribed = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  geolocate() {
    this.geolocation.getCurrentPosition().then((data) => {
        this.lat = data.coords.latitude;
        this.lng = data.coords.longitude;
     }).catch((error) => {
       console.error('Error getting location', error);
     });
  }

  startGeo() {
    this.geoSubscription = this.geolocation.watchPosition()
      .filter((data: any) => data.code === undefined)
      .subscribe(data => {
        this.lat2 = data.coords.latitude;
        this.lng2 = data.coords.longitude;
      });

    this.isSubscribed = true;
  }

  stopGeo() {
    if(this.geoSubscription) this.geoSubscription.unsubscribe();
    this.isSubscribed = false;
  }
}
