import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../../data/docs-config';
import { MenuItem } from 'src/app/shared/model';


@Component({
  selector: 'rw-sidenav-left',
  templateUrl: './sidenav-left.component.html',
  styleUrls: ['./sidenav-left.component.scss']
})
export class SidenavLeftComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = MENU_ITEMS;
  }

}
