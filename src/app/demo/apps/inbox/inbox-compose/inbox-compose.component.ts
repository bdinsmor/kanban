import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: './ms-inbox-compose',
  templateUrl: './inbox-compose.component.html'
})
export class InboxComposeComponent implements OnInit {

  constructor(
    private dialogRef: MdDialogRef<InboxComposeComponent>
  ) { }

  ngOnInit() {
  }

  send() {
    this.dialogRef.close('Your message has been send.');
  }

}
