import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
declare const Pusher: any;
@Injectable({
  providedIn: 'root'
})
export class PusherService {
  pusher: any;
  messagesChannel: any;

  constructor() {
    this.initializePusher();
  }
  // Initialising pusher service (A simple websocket service )
  initializePusher(): void {
    this.pusher = new Pusher(environment.pusher.key,{
      cluster: "ap2",
      authEndpoint: environment.serverUrl,
    });
    this.messagesChannel = this.pusher.subscribe('private-all-messages');
  }
}
