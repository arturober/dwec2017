import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SegmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segments',
  templateUrl: 'segments.html',
})
export class SegmentsPage {
  type: string = "heroes";
  heroes: string[] = ["Batman", "Superman", "Spiderman", "Hulk", "Mazinger Z"];
  villains: string[] = ["Dr Eggman", "The Joker", "Darth Vader", "Hannibal Lecter"];
  weapons: string[] = ["Missile", "Laser gun", "Tank", "X Rays"];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

  ionViewDidLoad() {
      console.log('ionViewDidLoad SegmentsPage');
    }

}
