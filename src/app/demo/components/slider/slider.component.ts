import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { routeAnimation } from "../../../route.animation";

@Component({
  selector: 'ms-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [ routeAnimation ]
})
export class SliderComponent implements OnInit {

  slider1HTML: string = `
  <md-slider min="1" max="10" thumbLabel tickInterval="1"></md-slider>
  `;

  slider2HTML: string = `<md-slider vertical min="1" max="10" thumbLabel tickInterval="1"></md-slider>`;

  slider3HTML: string = `<md-slider min="1" max="10"></md-slider>`;

  constructor() { }

  ngOnInit() {
  }

  getEscaped(text: string) {
    return _.escape(text);
  }

}
