import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import * as feather from 'feather-icons';

@Component({
  selector: 'rw-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {
  hideMenu: boolean = false;
  constructor() { }
  ngOnInit() {   
  }
  ngAfterViewInit() {
    feather.replace();
  }
}
