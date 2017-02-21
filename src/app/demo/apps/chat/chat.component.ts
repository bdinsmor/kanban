import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Chat} from "./chat.model";
import {chatDemoData} from "./chat.demo";
import * as _ from 'lodash';
import {PerfectScrollbarComponent} from "angular2-perfect-scrollbar";
import * as moment from 'moment';
import {fadeInAnimation} from "../../../route.animation";

@Component({
  selector: 'ms-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  host: {
    "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})
export class ChatComponent implements OnInit {

  chats: any[];
  activeChat: any;
  newMessage: string;

  @ViewChild('chatScroll') private chatScroll: PerfectScrollbarComponent;

  constructor() { }

  ngOnInit() {
    this.chats = _.sortBy(chatDemoData, 'lastMessageTime').reverse();
    this.activeChat = this.chats[0];
    setTimeout(() => {
      this.chatScroll.elementRef.nativeElement.scrollTop = this.chatScroll.elementRef.nativeElement.scrollHeight;
    }, 0);

  }

  setActiveChat(chat) {
    this.activeChat = chat;
  }

  send() {
    if (this.newMessage) {
      this.chats[0].messages.push({
        message: this.newMessage,
        when: moment(),
        who: 'me'
      });

      this.newMessage = '';
    }
  }

  clearMessages(activeChat) {
    activeChat.messages.length = 0;
  }
}
