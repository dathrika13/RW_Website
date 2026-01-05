import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "rw-solutions",
  templateUrl: "./solutions.component.html",
  styleUrls: ["./solutions.component.scss"],
})
export class SolutionsComponent {
  currentSection: string = "";

  constructor(private router: Router, route: ActivatedRoute) {
    // this.currentSection = route.snapshot.fragment ?? "enterprise";
    route.fragment.subscribe((fragment) => {
      this.currentSection = fragment ?? "enterprises";
    });
  }
}
