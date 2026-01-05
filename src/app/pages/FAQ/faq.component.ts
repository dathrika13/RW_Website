import { Component } from '@angular/core';
import { OurTeam } from 'src/app/shared/model';

@Component({
  selector: 'rw-company',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent {
  ourTeam: OurTeam[] = [];
  constructor() {
  }
}
