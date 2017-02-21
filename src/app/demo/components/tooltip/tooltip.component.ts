import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { routeAnimation } from "../../../route.animation";

@Component({
  selector: 'ms-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [ routeAnimation ]
})
export class TooltipComponent implements OnInit {

  tooltipHTML: string = `<button md-icon-button mdTooltip="Favorite this"><md-icon>favorite</md-icon></button>`;

  constructor() { }

  ngOnInit() {
  }

  getEscaped(text: string) {
    return _.escape(text);
  }

}
