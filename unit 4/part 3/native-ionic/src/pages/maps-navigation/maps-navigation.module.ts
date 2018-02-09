import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsNavigationPage } from './maps-navigation';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MapsNavigationPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsNavigationPage),
    AgmCoreModule
  ],
})
export class MapsNavigationPageModule {}
