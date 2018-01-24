import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButtonsPage } from './buttons';

@NgModule({
  declarations: [
    ButtonsPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonsPage),
  ],
  exports: [
    ButtonsPage,
  ]
})
export class ButtonsPageModule {}
