import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalExamplePage } from './modal-example';

@NgModule({
  declarations: [
    ModalExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalExamplePage),
  ],
})
export class ModalExamplePageModule {}
