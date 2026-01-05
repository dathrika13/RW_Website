import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges{
  @Input() hideSearch: boolean = true;
  @Input() fixedWidth: boolean = false;
  @Input() sticky: boolean = false;
  @Input() navClass: string = '';
  @Input() ctaButtonClass: string = '';
  @Input() hideMenu: boolean = false;

  showMobileMenu: boolean = false;
  showSubMenu = false;
  constructor (private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.hideMenu = true;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
   }

  toggle() {
    this.hideMenu = !this.hideMenu;
  }
}
