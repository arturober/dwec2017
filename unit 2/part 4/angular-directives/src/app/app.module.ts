import { RepeatTimesDirective } from './directives/repeat-times.directive';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SetColorDirective } from './directives/set-color.directive';
import { ForFilterDirective } from './directives/for-filter.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetColorDirective,
    RepeatTimesDirective,
    ForFilterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
