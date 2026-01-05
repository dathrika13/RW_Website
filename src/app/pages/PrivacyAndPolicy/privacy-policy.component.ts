import { Component } from '@angular/core';
import { OurTeam } from 'src/app/shared/model';

@Component({
  selector: 'rw-company',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyAndPolicyComponent {
  ourTeam: OurTeam[] = [];
  constructor() {
  }
}
