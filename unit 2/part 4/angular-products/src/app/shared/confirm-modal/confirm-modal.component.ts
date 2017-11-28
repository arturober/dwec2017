import { Input, OnInit, Component } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ap-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {
    @Input() title: string;
    @Input() body: string;

  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }

}
