import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Vibration } from '@ionic-native/vibration';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DeviceMotion } from '@ionic-native/device-motion';
import { DeviceOrientation } from '@ionic-native/device-orientation';
import { Flashlight } from '@ionic-native/flashlight';
import { FormsModule } from '@angular/forms';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { SQLite } from '@ionic-native/sqlite';
import { GooglePlus } from '@ionic-native/google-plus';
import { Contacts } from '@ionic-native/contacts';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Vibration,
    Geolocation,
    Camera,
    BarcodeScanner,
    DeviceMotion,
    DeviceOrientation,
    Flashlight,
    LocalNotifications,
    SQLite,
    GooglePlus
  ]
})
export class AppModule {}
