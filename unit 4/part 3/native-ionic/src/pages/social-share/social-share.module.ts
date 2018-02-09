import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialSharePage } from './social-share';

@NgModule({
  declarations: [
    SocialSharePage,
  ],
  imports: [
    IonicPageModule.forChild(SocialSharePage),
  ],
})
export class SocialSharePageModule {}
