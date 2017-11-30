import { IMessage } from '../interfaces/imessage';
import { Observable } from 'rxjs/Observable';
import { EventEmitter, Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketIoService {
  private socket;
  private connected = false;
  private connecting = false;
  public connection$: EventEmitter<boolean> = new EventEmitter<boolean>();
  public messages$: EventEmitter<IMessage> = new EventEmitter<IMessage>();

  constructor() { }

  connect(port) {
    if (!this.connected && !this.connecting) {
      this.connecting = true;
      this.socket = io(`http://localhost:${port}`);

      this.socket.on('connect', () => {
        this.connected = true;
        this.connecting = false;
        this.connection$.emit(true);
      });

      this.socket.on('disconnect', () => {
        this.connected = false;
        this.connection$.emit(false);
      });

      this.socket.on('message', msg => {
        this.messages$.emit(msg);
      });
    } else {
      this.connection$.emit(true); // Already connected
    }
  }

  sendMessage(msg: IMessage) {
    if (this.connected) {
      this.socket.emit('new-message', msg);
    }
  }

  disconnect() {
    if (this.connected) {
      this.socket.close();
    }
  }
}
