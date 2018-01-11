import { Component, OnInit, NgZone } from '@angular/core';
import { ElectronService } from './services/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  img = '';
  images = [];
  constructor(private electron: ElectronService, private ngZone: NgZone) {}

  ngOnInit() {
    this.electron.listenCaptureScreenMenu().subscribe(
      () => this.ngZone.run(() => this.takeShot())
    );
  }

  takeShot() {
    this.electron
      .captureScreen()
      .then(buffer => this.electron.saveImage(buffer, `screen_${Date.now()}.jpg`))
      .then(path => (this.img = path))
      .catch(error => console.error(error));
  }

  getImages() {
    this.electron.getImages(true).then(images => this.images = images);
  }
}
