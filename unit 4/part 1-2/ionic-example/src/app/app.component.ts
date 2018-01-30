import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Buttons', component: 'ButtonsPage'},
      { title: 'Inputs', component: 'InputsPage'},
      { title: 'Cards', component: 'CardsPage'},
      { title: 'Check/Radio', component: 'CheckboxPage'},
      { title: 'Badges', component: 'BadgesPage'},
      { title: 'Toasts', component: 'ToastsPage'},
      { title: 'Alerts', component: 'AlertsPage'},
      { title: 'Navigation Push', component: 'PushNavPage'},
      { title: 'Tabs page', component: 'TabsPage'},
      { title: 'Action sheet', component: 'ActionSheetPage'},
      { title: 'Fabs', component: 'FabsPage'},
      { title: 'Grid', component: 'GridPage'},
      { title: 'Loading indicator', component: 'LoadingPage'},
      { title: 'Range', component: 'RangePage'},
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
