import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlashPage } from './flash';

@NgModule({
  declarations: [
    FlashPage,
  ],
  imports: [
    IonicPageModule.forChild(FlashPage),
  ],
})
export class FlashPageModule {}
