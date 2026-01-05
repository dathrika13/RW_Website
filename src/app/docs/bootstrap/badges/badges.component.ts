import { Component, Input, OnInit } from '@angular/core';

// types
import { Variant } from 'src/app/shared/model';

@Component({
  selector: 'app-bootstrap-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {


  @Input() variants: Variant[] = [];
  badgeVariants: Variant[] = [];

  constructor () { }

  ngOnInit(): void {
    this.badgeVariants = [...this.variants, 'light']
  }

}
