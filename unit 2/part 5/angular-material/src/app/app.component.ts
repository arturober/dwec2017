import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'am-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'am';
  resp = '';

  constructor(private dialog: MatDialog) {}

  launchModal() {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      data: {
        title: 'Difficult question',
        body: 'Do you want to marry me?'
      }
    });

    dialogRef.afterClosed()
      .filter(r => r !== undefined)
      .subscribe(
        result => {
          console.log(`Response ${result}`);
          this.resp = result;
        }
      );
  }
}
