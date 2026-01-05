import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  DEMOURL,
  BLOGSFIRSTCONTENT,
  NEWSEVENTS,
} from "src/app/shared/data/config";
import { NewseventContent } from "src/app/shared/model";

@Component({
  selector: "rw-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})

export class Newseventcomponent implements OnInit {
  demoUrl!: string;
  newseventContents: NewseventContent[] = [];
  news!: NewseventContent;

  currentFragment: string = "";

  constructor(private activatedRoute: ActivatedRoute) {
    // this.Newsevents = [...BLOGSFIRSTCONTENT];
    this.newseventContents = [...NEWSEVENTS];
    this.demoUrl = DEMOURL;
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const Id = paramMap.get('id');     
      if (Id) {
        this.currentFragment = Id
        const data = this.newseventContents && this.newseventContents.filter(el => el.id == +Id);
        if (data && data.length > 0) {
          this.news = data[0];
        }
      }
    });

  }

  ngOnInit(): void {
    window.document.body.scrollIntoView({ behavior: "smooth" });
  }
}
