import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

@NgModule({
    declarations: [AppComponent, ModalConfirmComponent],
    imports: [
        FlexLayoutModule,
        BrowserAnimationsModule,
        BrowserModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule
    ],
    entryComponents: [ModalConfirmComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
