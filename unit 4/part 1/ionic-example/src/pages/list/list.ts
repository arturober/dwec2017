import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [{
      name: "Hard drive disk",
      description: "This hard drive is very slow...",
      image: "assets/imgs/hdd.jpg"
    }, {
      name: "Sound card",
      description: "This sounds good!",
      image: "assets/imgs/sound.jpg"
    }, {
      name: "Ryzen processor",
      description: "Processor with no Meltdown",
      image: "assets/imgs/ryzen.jpg"
    }];
  }

}
