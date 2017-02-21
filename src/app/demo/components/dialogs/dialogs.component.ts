import { Component } from '@angular/core';
import { routeAnimation } from "../../../route.animation";
import * as _ from 'lodash';
import { MdDialogRef, MdDialog } from "@angular/material";

@Component({
  selector: 'ms-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [ routeAnimation ]
})
export class DialogsComponent {

  dialogRef: MdDialogRef<DemoDialog>;
  result: string;

  dialogHTML: string = `
  <button md-raised-button type="button" (click)="openDialog()" color="primary">Open Dialog</button>
  <p *ngIf="result">You chose: {{ result }}</p>
  `;

  constructor(public dialog: MdDialog) { }

  openDialog() {
    this.dialogRef = this.dialog.open(DemoDialog, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.result = result;
      this.dialogRef = null;
    });
  }

  getEscaped(text: string) {
    return _.escape(text);
  }

}

@Component({
  selector: 'ms-demo-dialog',
  template: `
  <h1>Would you like to order pizza?</h1>

  <md-dialog-actions align="end">
    <button md-button (click)="dialogRef.close('No!')">No</button>
    <button md-button color="primary" (click)="dialogRef.close('Yes!')">Yes</button>
  </md-dialog-actions>
  `
})
export class DemoDialog {
  constructor(public dialogRef: MdDialogRef<DemoDialog>) { }
}
