import { Component } from '@angular/core';
import { DEMOURL } from "src/app/shared/data/config";

@Component({
  selector: 'rw-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component {
demoUrl:string="";
constructor(){
  this.demoUrl=DEMOURL;
}
}
