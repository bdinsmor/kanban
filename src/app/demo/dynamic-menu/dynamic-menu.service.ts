import { Injectable } from '@angular/core';
import {SidenavItem} from "../../core/sidenav-item/sidenav-item.model";

@Injectable()
export class DynamicMenuService {

  dynamicItem: SidenavItem

  constructor() { }

}
