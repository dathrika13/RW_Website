import { AfterViewInit, Component } from '@angular/core';
import * as feather from 'feather-icons';
@Component({
  selector: 'rw-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements AfterViewInit {

  ngAfterViewInit() {
    feather.replace();
  }

}
