import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalExamplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-example',
  templateUrl: 'modal-example.html',
})
export class ModalExamplePage {
  name = '';

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.name = this.navParams.data.name;
  }

  close() {
    this.viewCtrl.dismiss({hello: 'Modal has been closed!'});
  }

}
