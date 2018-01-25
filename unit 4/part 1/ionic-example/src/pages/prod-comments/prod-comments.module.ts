import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdCommentsPage } from './prod-comments';

@NgModule({
  declarations: [
    ProdCommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdCommentsPage),
  ],
  exports: [
    ProdCommentsPage
  ]
})
export class ProdCommentsPageModule {}
