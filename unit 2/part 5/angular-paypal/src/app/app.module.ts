import { environment } from '../environments/environment';
import { PaypalButtonModule } from './paypal-button/paypal-button.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PaypalButtonModule.forRoot({
      sandbox:
        'AYAgdWb3cgEm0oewo6Tt60GewhnFeFvqLd-rlaAdcw8PbSmYOu-gBmmFbubAsEk7AA1t4KfULpgUV8Zj',
      production: '',
      environment: 'sandbox'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
