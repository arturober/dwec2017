import { Component } from '@angular/core';

@Component({
  selector: 'am-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'am';
  lat = 38.4039418;
  lng = -0.5288701;
  zoom = 17;

  changePosition(pos: google.maps.LatLng) {
    console.log(pos);
    this.lat = pos.lat();
    this.lng = pos.lng();
  }
}
