import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RefresherPage } from './refresher';

@NgModule({
  declarations: [
    RefresherPage,
  ],
  imports: [
    IonicPageModule.forChild(RefresherPage),
  ],
  exports: [
    RefresherPage
  ]
})
export class RefresherPageModule {}
