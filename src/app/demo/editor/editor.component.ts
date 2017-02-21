import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../route.animation";

@Component({
  selector: 'ms-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  host: {
    "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})
export class EditorComponent implements OnInit {

  text: string;

  constructor() { }

  ngOnInit() {
  }

}
