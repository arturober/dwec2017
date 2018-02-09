import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'VibrationPage';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Vibration', component: 'VibrationPage' },
      { title: 'Geolocation', component: 'GeolocationPage' },
      { title: 'Camera', component: 'CameraPage' },
      { title: 'Barcode Scanner', component: 'BarcodePage' },
      { title: 'Device Motion', component: 'DeviceMotionPage' },
      { title: 'Flash Light', component: 'FlashPage' },
      { title: 'Local Notifications', component: 'LocalNotificationsPage' },
      { title: 'SQLite', component: 'SqlitePage' },
      { title: 'Google Plus', component: 'GooglePlusPage' },
      { title: 'Facebook', component: 'FacebookPage' },
      { title: 'Contacts', component: 'ContactsPage' },
      { title: 'Network Info', component: 'NetworkPage' },
      { title: 'Image picker', component: 'ImagePickerPage' },
      { title: 'Social Sharing', component: 'SocialSharePage' },
      { title: 'Maps & Navigation', component: 'MapsNavigationPage' },
    ].sort((p1,p2) => p1.title.localeCompare(p2.title));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
