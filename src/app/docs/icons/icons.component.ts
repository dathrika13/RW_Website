import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'rw-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit, AfterViewInit {
  iconSizes: string[] = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'];
  featherIcons: string[] = ['activity', 'shopping-bag', 'credit-card', 'message-square', 'map-pin', 'bell', 'calendar', 'map'];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    feather.replace();
  }
}
