import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';

@IonicPage()
@Component({
  selector: 'page-image-picker',
  templateUrl: 'image-picker.html',
})
export class ImagePickerPage {
  images = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public imagePicker: ImagePicker) {
  }

  pickImages() {
    let options: ImagePickerOptions = {
      maximumImagesCount: 10,
      width: 640, // Max width (aspect ratio is preserved)
      height: 640, // Max height
    }

    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
        this.images.push(results[i]);
      }
    }).catch(error => console.error(error));
  }

}
