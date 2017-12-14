import { RouterModule } from '@angular/router';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MenuTopComponent],
  exports: [MenuTopComponent]
})
export class MenuModule { }
