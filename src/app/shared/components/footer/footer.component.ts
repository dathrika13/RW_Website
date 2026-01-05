import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { DEMOURL } from '../../data/config';

@Component({
  selector: 'rw-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  today: Date = new Date();
  demoUrl!: string;
  public userConsent: boolean | null = true;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    const cookieConsent = window.localStorage.getItem("COOKIE_CONSENT");
    if (!!cookieConsent) {
      this.userConsent = true;
      return;
    }
    this.userConsent = false;
    this.blockBody();
    this.demoUrl = DEMOURL;
  }

  blockBody() {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }

  unBlockBody() {
    document.body.style.overflow = "auto";
  }

  onAccept() {
    window.localStorage.setItem("COOKIE_CONSENT", "true");
    this.userConsent = true;
    this.unBlockBody();
  }

  onReject() {
    window.localStorage.setItem("COOKIE_CONSENT", "false");
    this.userConsent = true;
    this.unBlockBody();
  }
}
