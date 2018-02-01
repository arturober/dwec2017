import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfitinePage } from './infitine';

@NgModule({
  declarations: [
    InfitinePage,
  ],
  imports: [
    IonicPageModule.forChild(InfitinePage),
  ],
  exports: [
    InfitinePage
  ]
})
export class InfitinePageModule {}
