import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalLauncherPage } from './modal-launcher';

@NgModule({
  declarations: [
    ModalLauncherPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalLauncherPage),
  ]
})
export class ModalLauncherPageModule {}
