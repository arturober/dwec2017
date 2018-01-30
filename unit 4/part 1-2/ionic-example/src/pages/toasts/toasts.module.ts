import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToastsPage } from './toasts';

@NgModule({
  declarations: [
    ToastsPage,
  ],
  imports: [
    IonicPageModule.forChild(ToastsPage),
  ],
  exports: [
    ToastsPage
  ]
})
export class ToastsPageModule {}
