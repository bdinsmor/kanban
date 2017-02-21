import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from "@angular/material";
import * as _ from 'lodash';
import { routeAnimation } from "../../../route.animation";

@Component({
  selector: 'ms-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [ routeAnimation ]
})
export class SnackBarComponent implements OnInit {

  snackbarHTML: string = `<button md-button (click)="openSnackbar()">Trigger Snackbar</button>`;
  snackbarTS: string = `this.snackBar.open('I\'m a notification!', 'Close', {
  duration: 3000
});`;

  constructor(
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
  }

  openSnackbar() {
    this.snackBar.open('I\'m a notification!', 'Close', {
      duration: 3000
    });
  }

  getEscaped(text: string) {
    return _.escape(text);
  }

}
