import { Component } from '@angular/core';
import { DEMOURL } from "src/app/shared/data/config";
@Component({
  selector: 'rw-products-ai',
  templateUrl: './products-ai.component.html',
  styleUrls: ['./products-ai.component.scss']
})
export class ProductsAiComponent {
  demoUrl:string="";
  constructor(){
    this.demoUrl=DEMOURL;
  }
}
