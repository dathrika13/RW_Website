import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  BLOGSFIRSTCONTENT,
  DEMOURL,
  INDUSTRIES,
  NEWSEVENTS,
} from "src/app/shared/data/config";
import { IndustriesContent, BlogsContent } from "src/app/shared/model";
import { SharedService } from "src/app/shared/shared.service";

@Component({
  selector: "rw-section4",
  templateUrl: "./section4.component.html",
  styleUrls: ["./section4.component.scss"],
})
export class Section4Component {
  industriesContent: IndustriesContent[] = [];
  blogsContent: BlogsContent[] = [];
  demoUrl!: string;

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {
    console.log(this, "route.", route);
  }

  ngOnInit(): void {
    this.industriesContent = [
      ...INDUSTRIES,
    ];
    this.blogsContent = [...BLOGSFIRSTCONTENT];
    this.demoUrl = DEMOURL;
  }
}
