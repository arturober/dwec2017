import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushNavPage } from './push-nav';

@NgModule({
  declarations: [
    PushNavPage,
  ],
  imports: [
    IonicPageModule.forChild(PushNavPage),
  ],
  exports: [
    PushNavPage
  ]
})
export class PushNavPageModule {}
