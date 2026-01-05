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
  selector: "rw-section5",
  templateUrl: "./section5.component.html",
  styleUrls: ["./section5.component.scss"],
})
export class Section5Component {
  hires: any[] = [];
  demoUrl!: string;

  whitepapers: any[] = [];

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.hires = [
      {
        updatedAt: "Updated: November 22, 2024",
        id: 0,
        link: "/page/news",
        image: "assets/images/all/ai-news.png",
        title: "Redwoods AI Launches Agentic AI: Transforming Sustainability ",
      },
      {
        id: 1,
        title: "Redwoods' Revolutionary Supply Chain Sustainability Platform ",
        updatedAt: "Updated: August 08, 2024",
        link: "/page/news",
        image: "assets/images/all/ai/supplier.webp",
      },
      {
        updatedAt: "Updated: May 27, 2024",
        id: 2,
        link: "/page/conference",
        image: "assets/images/greenbiz.jpg",
        title: "Key Takeaways from GreenBiz Circularity24 Conference in Chicago",
      },
      
      // {
      //   updatedAt: "Updated: January 19, 2024",
      //   id: ,
      //   link: "/page/news",
      //   image: "assets/images/news1.webp",
      //   title:
      //     "Catherine Atkin Joins Redwoods.ai as Chief Sustainability Officer (CSO)",
      // },
      // {
      //   updatedAt: "Updated: October 26, 2023",

      //   id: 2,
      //   image: "assets/images/verge.png",
      //   link: "/page/news",
      //   title:
      //     "Unveiling Redwoods.ai Experience at Verge Conference: A Journey of Innovation and Inspiration ",
      // },
      // {
      //   updatedAt: "Updated: October 3, 2023",
      //   link: ".",
      //   image: "assets/images/redwoods-platform.webp",
      //   title:
      //     "Product Announcement: AI Copilot ESG SaaS Platform for Enterprises",
      // },
    ];
    console.log(this.hires);
    this.whitepapers = [
      {
        updatedAt: "Updated: January 10, 2023",
        id: 0,
        image: "assets/images/whitepaper.png",
        title: "Whitepaper: Redwoods.AI Enterprise Saas ESG Platform",
      },
    ];
    this.demoUrl = DEMOURL;
  }
}
