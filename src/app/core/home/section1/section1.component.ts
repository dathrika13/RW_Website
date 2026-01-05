import { ViewportScroller } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import {
  NgbModal,
  NgbCarouselModule,
  NgbModalConfig,
  NgbCarousel,
  NgbCarouselConfig,
} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { DEMOURL } from "src/app/shared/data/config";

@Component({
  selector: "rw-section1",
  templateUrl: "./section1.component.html",
  styleUrls: ["./section1.component.scss"],
  providers: [NgbModal, NgbModalConfig, FormsModule],
})
export class Section1Component {
  modalOpen = false;
  demoUrl: string = DEMOURL; // Define demoUrl here

  images = [
    { name: "assets/videos/9.jpg" },
    { name: "assets/videos/2.webp" },
    { name: "assets/videos/8.jpg" },
    { name: "assets/videos/4.webp" },
    { name: "assets/videos/7.png" },
  ];

  @ViewChild("whitepaperContent") whitepaperContent: any;
  @ViewChild("form") form: any;

  constructor(
    private scroller: ViewportScroller,
    private modalService: NgbModal
  ) {}

  gotoIcare() {
    this.scroller.scrollToAnchor("icareimagescroll");
  }

  openModal(content: any) {
    this.modalOpen = true;
    this.modalService.open(content, { centered: true, size: "lg" });
  }

  save(formData: any): void {
    console.log("Form Data:", formData);
  }

  DownloadPaper() {
    console.log("White paper download");
    window.gtag("event", "click", {
      app_name: "White paper download",
      screen_name: "From Home page",
    });
  }

  RequestDemo() {
    console.log("Request Demo clicked");
    window.gtag("event", "click", {
      app_name: "Request Demo",
      screen_name: "From Section 1",
    });
  }
}
