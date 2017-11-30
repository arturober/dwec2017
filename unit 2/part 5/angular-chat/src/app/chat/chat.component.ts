import { IMessage } from '../interfaces/imessage';
import { Component, OnInit, Input } from '@angular/core';
import { SocketIoService } from '../services/socket-io.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'ac-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() user: string;
  messages: IMessage[] = [];
  newMsg = '';
  connected = false;

  constructor(private ioService: SocketIoService) { }

  ngOnInit() {
    this.ioService.connection$.subscribe(
      connected => this.connected = connected
    );
    this.ioService.messages$
      .filter(m => m.user !== this.user)
      .subscribe(m => {
        m.mine = false;
        this.messages.push(m);
      });
  }

  connect() {
    this.ioService.connect(5000);
  }

  disconnect() {
    this.ioService.disconnect();
  }

  send() {
    const msg: IMessage = {user: this.user, text: this.newMsg};
    this.ioService.sendMessage(msg);
    msg.mine = true;
    this.messages.push(msg);
    this.newMsg = '';
  }

}
