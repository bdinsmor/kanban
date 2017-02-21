import {Component, OnInit, AfterViewInit} from '@angular/core';
import {
  kanbanData
} from '../data/widgetDemoData.data';
import {fadeInAnimation} from '../../route.animation';

@Component({
  selector: 'ms-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class KanbanComponent implements OnInit, AfterViewInit {
  kanbanSampleData;

  constructor() { }

  ngOnInit() {
    this.kanbanSampleData = kanbanData;
    console.log("inside ngOnInit");
  }

  ngAfterViewInit() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1000);
  }

}
