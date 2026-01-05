import { Component } from "@angular/core";

@Component({
  selector: "rw-careers",
  templateUrl: "./careers.component.html",
  styleUrls: ["./careers.component.scss"],
})
export class CareersComponent {
  roles: any[] = [];
  rolesESG: any[] = [];
  rolesJOBS: any[] = [];
  constructor() {
    this.rolesJOBS = [
      {
        id:0,
        title: "AI/ML Engineer",
      },
    ];
    this.rolesESG = [
      {
        id:0,
        title: "Sustainability Technical Manager",
      },
    ];
    this.roles = [
      {
        id: 0,
        title: "Full Stack Java Developer",
      },
      {
        id: 1,
        title: "Frontend Engineer",
      },
      {
        id: 2,
        title: "Sales & Marketing Manager",
      },
      {
        id: 3,
        title: "Senior Business Development Manager",
      },
      {
        id: 4,
        title: "Customer Success Lead",
      },
    ];
    console.log(this.roles, "roles?");
  }
}