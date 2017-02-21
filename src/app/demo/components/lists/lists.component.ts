import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { routeAnimation } from "../../../route.animation";

@Component({
  selector: 'ms-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [
    routeAnimation
  ]
})
export class ListsComponent implements OnInit {

  twoLineListHTML: string = `
  <md-list class="demo-list md-elevation-z2">
    <md-list-item>
      <img md-list-avatar src="assets/img/avatars/John.png">
      <h3 md-line>John</h3>
      <p md-line>
        <span>Brunch?</span>
        <span class="subline">-- Did you want to go on Sunday? I was thinking</span>
      </p>
    </md-list-item>
    <md-list-item>
      <img md-list-avatar src="assets/img/avatars/Peter.png">
      <h3 md-line>Peter</h3>
      <p md-line>
        <span>Summer BBQ</span>
        <span class="subline">-- Wish I could come, but I have some special</span>
      </p>
    </md-list-item>
    <md-list-item>
      <img md-list-avatar src="assets/img/avatars/Nancy.png">
      <h3 md-line>Nancy</h3>
      <p md-line>
        <span>Oui oui</span>
        <span class="subline">-- Have you booked the Paris trip?</span>
      </p>
    </md-list-item>
  </md-list>
  `;

  threeLineListHTML: string = `
  <md-list class="demo-list md-elevation-z2">
    <md-list-item>
      <img md-list-avatar src="assets/img/avatars/John.png">
      <h3 md-line>John</h3>
      <p md-line>Brunch?</p>
      <p md-line class="subline">Did you want to go on Sunday? I was thinking</p>
    </md-list-item>
    <md-list-item>
      <img md-list-avatar src="assets/img/avatars/Peter.png">
      <h3 md-line>Peter</h3>
      <p md-line>Summer BBQ</p>
      <p md-line class="subline">Wish I could come, but I have some special</p>
    </md-list-item>
    <md-list-item>
      <img md-list-avatar src="assets/img/avatars/Nancy.png">
      <h3 md-line>Nancy</h3>
      <p md-line>Oui oui</p>
      <p md-line class="subline">Have you booked the Paris trip?</p>
    </md-list-item>
  </md-list>
  `;

  threeLineListWithoutAvatarsHTML: string = `
  <md-list class="demo-list md-elevation-z2">
    <md-list-item>
      <h3 md-line>John</h3>
      <p md-line>Brunch?</p>
      <p md-line class="subline">Did you want to go on Sunday? I was thinking</p>
    </md-list-item>
    <md-list-item>
      <h3 md-line>Peter</h3>
      <p md-line>Summer BBQ</p>
      <p md-line class="subline">Wish I could come, but I have some special</p>
    </md-list-item>
    <md-list-item>
      <h3 md-line>Nancy</h3>
      <p md-line>Oui oui</p>
      <p md-line class="subline">Have you booked the Paris trip?</p>
    </md-list-item>
  </md-list>
  `;

  oneLineList: string = `
  <md-list class="demo-list md-elevation-z2">
    <md-list-item>
      <h3 md-line>John</h3>
    </md-list-item>
    <md-list-item>
      <h3 md-line>Peter</h3>
    </md-list-item>
    <md-list-item>
      <h3 md-line>Nancy</h3>
    </md-list-item>
  </md-list>
  `;

  constructor() { }

  ngOnInit() {
  }

  getEscaped(text: string) {
    return _.escape(text);
  }
}
