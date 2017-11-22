import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinDateDirective } from './validators/min-date.validator';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MinDateDirective
  ],
  exports: [
    MinDateDirective
  ]
})
export class SharedModule { }
