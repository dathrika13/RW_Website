import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/shared/model';


@Component({
  selector: 'rw-sidenav-right',
  templateUrl: './sidenav-right.component.html',
  styleUrls: ['./sidenav-right.component.scss']
})
export class SidenavRightComponent {
  @Input() menuItems: MenuItem[] = [];
}
