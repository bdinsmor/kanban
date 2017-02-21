import { Component, OnInit } from '@angular/core';
import { routeAnimation } from "../../../route.animation";

@Component({
  selector: 'ms-level5',
  templateUrl: './level5.component.html',
  styleUrls: ['./level5.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [ routeAnimation ]
})
export class Level5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
