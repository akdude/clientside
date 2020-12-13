import { Component, OnInit } from '@angular/core';
import { PusherService } from '../pusher.service';
import { MessageService } from '../message.service';
import { AuthenticationService } from '../authentication.service';
import {MatDialog} from '@angular/material/dialog';


interface Message {
  name: string;
  message: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})


export class MessagesComponent implements OnInit {
  messages: Array<Message>;
  username : string;
  constructor(
    private pusherService: PusherService,
    private messageService: MessageService,
    private auth : AuthenticationService,
    public dialog: MatDialog,

    ) {
      this.messages = [];
    }

  ngOnInit() {
    this.username = this.auth.getUsername();
    this.pusherService.messagesChannel.bind('sent-message', (data) => {
      this.messages.push(data);
    });
    this.messageService.messagesStream
      .subscribe(this.newMessageEventHandler.bind(this));
    
      this.messages = [];
      let orders = JSON.parse(localStorage.getItem("allEntries"));
      if (orders) {
        for (let index = 0; index < orders.length; index++) {
          const element = orders[index];
          this.messageService.emitNewMessage(
            {text:element['name']+' have placed an order for a '+element['product']+' on '+this.time(element['time']),
             user: '', 
             time: ''});
        }
      }
      

  }
  time(timestamps) {
    let humanreadabletime = new Date(timestamps);
    return humanreadabletime.toLocaleString();
  }
  currentTime() {
    let date = new Date();
    return date.toLocaleTimeString();
  }
  private newMessageEventHandler(event: Message): void {
    this.messages.push(event);
  }
  sendMessage() {
    var messagevalue = (document.getElementById('message_val') as HTMLButtonElement).value;
    if (!messagevalue) {
      return;
    }
    this.messageService.send({text: messagevalue, user: this.username, time:this.currentTime()});
    (document.getElementById('message_val') as HTMLButtonElement). value = '';
  }
  leave() {
    this.dialog.closeAll();
  }
}