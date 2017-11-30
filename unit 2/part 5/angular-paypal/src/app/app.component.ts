import { Component } from '@angular/core';

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ap';
  amount = 2.95;
  payedMessage = '';

  getPayment(ok: boolean) {
    this.payedMessage = ok ? 'Payment correct!' : 'Payment cancelled';
    console.log(this.payedMessage);
  }
}
