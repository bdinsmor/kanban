import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { routeAnimation } from "../../../route.animation";

@Component({
  selector: 'ms-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [ routeAnimation ]
})
export class GridListComponent implements OnInit {

  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  gridListHTML: string = `
  <md-grid-list cols="4" rowHeight="100px">
    <md-grid-tile *ngFor="let tile of tiles" [colspan]="tile.cols" [rowspan]="tile.rows"
                  [style.background]="tile.color">
      {{tile.text}}
    </md-grid-tile>
  </md-grid-list>
  `;

  constructor() { }

  ngOnInit() {
  }

  getEscaped(text: string) {
    return _.escape(text);
  }

}
