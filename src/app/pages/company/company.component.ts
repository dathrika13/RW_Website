import { Component } from "@angular/core";
import { OURTEAM } from "src/app/shared/data/config";
import { OurTeam } from "src/app/shared/model";

@Component({
  selector: "rw-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.scss"],
})
export class CompanyComponent {
  ourTeam: OurTeam[] = [];
  constructor() {
    this.ourTeam = [...OURTEAM];
  }

  openLinkedin(url: string) {
    window.open(url, "_blank");
  }
}
