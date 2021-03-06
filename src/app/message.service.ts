import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';
import { PusherService } from './pusher.service';

export interface Message {
  text: string;
  user: string;
  time: string;
}

@Injectable()
export class MessageService {
  messagesStream = new ReplaySubject<Message>(1);

  constructor(
    private pusherService: PusherService
  ) {
    this.initialize();
  }

  //Messages are automatically pushed into messageStream when received
  initialize() { 
    this.pusherService.messagesChannel.bind('client-new-message', (message) => {
      this.emitNewMessage(message);
    });
  }
  
  // sending message 
  send(message: Message) {
    this.pusherService.messagesChannel.trigger('client-new-message', message);
    this.emitNewMessage(message);
  }

  emitNewMessage(message: Message) {
    this.messagesStream.next(message);
  }

}
