import { AfterViewInit, Component } from '@angular/core';
import { PRICING } from 'src/app/shared/data/config';
import { Pricing } from 'src/app/shared/model';
import * as feather from 'feather-icons';
import { DEMOURL } from "src/app/shared/data/config";

@Component({
  selector: 'rw-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements AfterViewInit {
  pricing: Pricing[] = [];
  demoUrl: string = ''; 

  constructor() {
    this.pricing = [...PRICING];
    this.demoUrl=DEMOURL
  }

  ngAfterViewInit() {
    feather.replace();
  }

  RequestDemo() {
    console.log("Request Demo clicked");
    window.gtag("event", "click", {
      app_name: "Request Demo",
      screen_name: "From Pricing Section",
    });
  }
}
