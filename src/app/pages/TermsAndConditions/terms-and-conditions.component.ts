import { Component } from '@angular/core';
import { OurTeam } from 'src/app/shared/model';

@Component({
  selector: 'rw-company',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent {
  ourTeam: OurTeam[] = [];
  constructor() {
  }
}
