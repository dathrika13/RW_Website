import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DEMOURL, INDUSTRIES } from "src/app/shared/data/config";
import { IndustriesContent } from "src/app/shared/model";

@Component({
  selector: "rw-industries",
  templateUrl: "./industries.component.html",
  styleUrls: ["./industries.component.scss"],
})
export class IndustriesComponent implements OnInit {
  demoUrl!: string;
  industriesContents: IndustriesContent[] = [];
  industries!: IndustriesContent;
  constructor(private activatedRoute: ActivatedRoute) {
    this.industriesContents = [...INDUSTRIES, ];
    this.demoUrl = DEMOURL;
    // this.activatedRoute.fragment.subscribe((fragment) => {
    //   if (fragment) {
    //     this.industries = this.industriesContents[Number(fragment)];
    //   } else {
    //     this.industries = this.industriesContents[0];
    //   }
    // });
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const Id = paramMap.get('id');     
      if (Id) {
        const data = this.industriesContents && this.industriesContents.filter(el => el.id == +Id);
        if (data && data.length > 0) {
          this.industries = data[0];
        }
      }
    });
  }
  RequestDemo(){
    window.gtag('event', 'click', {
      'app_name': 'Request Demo',
      'screen_name': 'Industry'
    });
  }
  ngOnInit(): void {}
}
