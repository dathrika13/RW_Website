import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  Component,
  AfterViewInit,
  ViewChild,
  TemplateRef,
} from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import * as feather from "feather-icons";
@Component({
  selector: "rw-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild("unsubscribeModal") unsubscribeModal!: TemplateRef<any>; // Reference to the modal template
  key: string | null = null;
  email: string = "";
  errorMessage:string=""
  constructor(
    private route: ActivatedRoute,
    public modalService: NgbModal,
    private http: HttpClient,
    private snackBar: MatSnackBar,
   private router: Router
  ) {
    this.errorMessage=""
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.key = params.get("key");
      console.log("Query Parameter:", this.key);
    });
  }

  ngAfterViewInit() {
    feather.replace();
    if (this.key === "unsubscribe") {
      this.openModal();
    }
  }

  openModal(): void {
    if (this.unsubscribeModal) {
      this.modalService.open(this.unsubscribeModal, {
        centered: true,
        windowClass: "custom-modal-class",
        backdrop: "static",
        keyboard: false,
      });
    }
  }
  unsubscribe(): void {
    if (this.email) {
      console.log("Unsubscribing with email:", this.email);

      const headers = new HttpHeaders({
        "Content-Type": "application/json", // Optional based on API requirements
      });

      this.http
        .post(
          `https://api.redwoods.life/components/api/tenant/unsubscribe?email=${encodeURIComponent(
            this.email
          )}`,
          null,
          {
            headers,
            responseType: "text",
          }
        )
        .subscribe(
          (response: string) => {
            console.log("Unsubscribe successful:", response);
            this.snackBar.open('You have been successfully unsubscribed!', 'Close', {
              duration: 3000, 
              verticalPosition: 'top', 
            });
            this.errorMessage=""
            this.modalService.dismissAll();
            this.router.navigate([], {
              queryParams: { key: null },
              queryParamsHandling: 'merge',
            });
          },
          (error) => {
            console.error("Error unsubscribing:", error?.error);
            if(error?.status===409 && error?.error==="Email is already unsubscribed."){
              this.errorMessage = "This email is already unsubscribed."
              this.snackBar.open('This email is already unsubscribed..', 'Close', {
                duration: 3000,
                verticalPosition: 'top',
              });
            }
            
            
          }
        );
    } else {
      console.error("Email is required");
    }
  }
}
