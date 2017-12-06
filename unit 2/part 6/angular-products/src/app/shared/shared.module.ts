import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinDateDirective } from './validators/min-date.validator';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [
    ConfirmModalComponent
  ],
  declarations: [
    MinDateDirective,
    ConfirmModalComponent
  ],
  exports: [
    MinDateDirective,
    ConfirmModalComponent
  ]
})
export class SharedModule { }
