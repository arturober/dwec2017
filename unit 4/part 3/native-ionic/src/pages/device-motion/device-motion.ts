import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-device-motion',
  templateUrl: 'device-motion.html',
})
export class DeviceMotionPage {
  subscription: Subscription = null;
  subscription2: Subscription = null;
  isSubscribed = false;
  isSubscribed2 = false;
  accel: DeviceMotionAccelerationData = null;
  orient: DeviceOrientationCompassHeading = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public motion: DeviceMotion, public orientation: DeviceOrientation) {
  }

  startMotion() {
    this.subscription = this.motion.watchAcceleration({frequency: 1000})
      .subscribe((acceleration: DeviceMotionAccelerationData) => {
        this.accel = acceleration;
      });

    this.isSubscribed = true;
  }

  stopMotion() {
    if(this.subscription) this.subscription.unsubscribe();

    this.isSubscribed = false;
  }

  startOrientation() {
    this.subscription2 = this.orientation.watchHeading({frequency: 1000})
      .subscribe((orientation: DeviceOrientationCompassHeading) => {
        this.orient = orientation;
      });

    this.isSubscribed2 = true;
  }

  stopOrientation() {
    if(this.subscription2) this.subscription2.unsubscribe();

    this.isSubscribed2 = false;
  }
}
