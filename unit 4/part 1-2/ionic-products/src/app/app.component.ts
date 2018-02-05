import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthProvider } from '../providers/auth/auth';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  constructor(public platform: Platform, public statusBar: StatusBar,
              public splashScreen: SplashScreen, public storage: Storage,
              public authService: AuthProvider) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.authService.isLogged()
        .subscribe(
          (ok) => this.rootPage = ok ? 'ProductsPage': 'LoginPage',
          (error) => this.rootPage = 'LoginPage',
          () => this.splashScreen.hide()
        );
      this.splashScreen.hide();
    });
  }

  goProfile() {
    this.nav.push('ProfilePage');
  }

  goMyProducts() {
    this.nav.push('ProductsPage', {showMine: true});
  }

  goNewProduct() {
    this.nav.push('NewProductPage');
  }

  logout() {
    this.storage.remove('id_token').then(
      () => this.nav.setRoot('LoginPage')
    );
  }
}
