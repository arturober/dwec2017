import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdInfoPage } from './prod-info';

@NgModule({
  declarations: [
    ProdInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdInfoPage),
  ],
  exports: [
    ProdInfoPage
  ]
})
export class ProdInfoPageModule {}
