import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToolbarPage } from './toolbar';

@NgModule({
  declarations: [
    ToolbarPage,
  ],
  imports: [
    IonicPageModule.forChild(ToolbarPage),
  ],
  exports: [
    ToolbarPage
  ]
})
export class ToolbarPageModule {}
