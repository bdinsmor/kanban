import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { routeAnimation } from "../../../route.animation";

@Component({
  selector: 'ms-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [ routeAnimation ]
})
export class MenuComponent implements OnInit {

  menuHTML: string = `
  <button md-icon-button [mdMenuTriggerFor]="menu">
    <md-icon>more_vert</md-icon>
  </button>

  <md-menu #menu="mdMenu">
    <button md-menu-item>
      <md-icon> dialpad </md-icon>
      <span> Redial </span>
    </button>
    <button md-menu-item disabled>
      <md-icon> voicemail </md-icon>
      <span> Check voicemail </span>
    </button>
    <button md-menu-item>
      <md-icon> notifications_off </md-icon>
      <span> Disable alerts </span>
    </button>
  </md-menu>
  `;

  menu2HTML: string = `
  <button md-icon-button [mdMenuTriggerFor]="menu2">
    <md-icon>grade</md-icon>
  </button>
  
  <md-menu #menu2="mdMenu">
    <button md-menu-item> Refresh </button>
    <button md-menu-item> Settings </button>
    <button md-menu-item> Help </button>
    <button md-menu-item disabled> Sign Out </button>
  </md-menu>
  `;

  constructor() { }

  ngOnInit() {
  }

  getEscaped(text: string) {
    return _.escape(text);
  }

}
