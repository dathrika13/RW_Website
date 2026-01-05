import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as feather from "feather-icons";
import { IndustriesContent, PlatformContent } from "../../model";
import { DEMOURL, INDUSTRIES, PLATFORM } from "../../data/config";

declare global {
  interface Window {
    gtag: any; // Define the global gtag function
  }
}
@Component({
  selector: "rw-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit, AfterViewInit {
  @Input() navClass?: string;
  @Input() ctaButtonClass: string = "";

  loggedInUser: boolean = false;
  demoUrl!: string;
  industriesContent: IndustriesContent[] = [];
  platformContent: PlatformContent[] = [];
  solutions: string[] = [];
  productItems: any[] = [];
  resourceItems: any[] = [];

  companyItems: any[] = [];

  currentContentId: string = "ai";

  constructor(private router: Router) {
    this.industriesContent = [...INDUSTRIES];
    this.platformContent = [...PLATFORM];
    // this.productsContent = [...PRODUCTS]
    this.demoUrl = DEMOURL;
    this.solutions = ["Enterprises", "Suppliers", "Investors", "NGOs"];
    this.productItems = [
      {
        name: "AI-Copilot ESG Enterprise Platform",
        id: "ai",
        link: "/page/products",
      },
      {
        name: "Supplier Sustainability Platform",
        id: "supplier-portal",
        link: "/page/supplier-portal",
      },
      {
        name: "Product Solutions",
        id: "product-solutions",
        link: "/page/product-solutions",
      },
      // { name: "Marketplace", id: "marketplace" },
      // { name: "Schedule a Demo", id: "demo" },
    ];
    this.resourceItems = [
      {
        name: "blog",
        id: "ai",
        link: "/page/blogs",
      },
    ];
    this.currentContentId = "ai";

    this.companyItems = [
      {
        name: "About",
        link: "/page/company",
      },
      {
        name: "Careers",
        link: "/page/careers",
      },
      {
        name: "Partners",
        link: "/page/partners",
      },
      // {
      //   name: "Partner Portal",
      //   link: "/page/partner-portal-login",
      // },
      {
        name: "Contact",
        link: "/page/contact",
      },
      {
        name: "Support",
        href: "https://redwoods.zohodesk.com/portal",
      },
    ];
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    feather.replace();
  }

  /**
   * checks if path is segment of url
   * @param {String} path path of menu
   */
  isActive(path: string): boolean {
    return this.router.isActive(path, {
      matrixParams: "ignored",
      queryParams: "ignored",
      paths: "subset",
      fragment: "ignored",
    });
  }

  onLeave(id: string) {
    this.currentContentId = "ai";
  }

  showContent(id: string, isClick?: boolean) {
    if (id === "demo" && isClick) {
      window.open(DEMOURL);
      return;
    }

    if (id === "demo") {
      return;
    }

    this.currentContentId = id;
  }

  onClickCompanyItem(item: any) {
    if (!item.link) {
      window.open(item.href, "_blank");
      return;
    }
  }
  RequestDemo(){
    window.gtag('event', 'click', {
      'app_name': 'Request Demo',
      'screen_name': 'Navbar'
    });
  }
}
