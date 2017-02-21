import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../core/sidenav/sidenav.service';
import {DynamicMenuService} from './dynamic-menu.service';
import {SidenavItem} from '../../core/sidenav-item/sidenav-item.model';
import {routeAnimation} from '../../route.animation';

@Component({
  selector: 'ms-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [ routeAnimation ]
})
export class DynamicMenuComponent implements OnInit {

  item: SidenavItem;

  constructor(
    private sidenavService: SidenavService,
    private dynamicMenuService: DynamicMenuService
  ) { }

  ngOnInit() {
    this.item = this.dynamicMenuService.dynamicItem;
  }

  toggleMenuItem() {
    if (this.dynamicMenuService.dynamicItem) {
      this.sidenavService.removeItem(this.dynamicMenuService.dynamicItem);
      this.dynamicMenuService.dynamicItem = null;
      this.item = null;
    } else {
      this.dynamicMenuService.dynamicItem = this.sidenavService.addItem('Dynamic Menu Item', 'donut_large', '', 10);
      this.item = this.dynamicMenuService.dynamicItem;
    }
  }

}
