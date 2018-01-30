import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FabsPage } from './fabs';

@NgModule({
  declarations: [
    FabsPage,
  ],
  imports: [
    IonicPageModule.forChild(FabsPage),
  ],
  exports: [
    FabsPage
  ]
})
export class FabsPageModule {}
