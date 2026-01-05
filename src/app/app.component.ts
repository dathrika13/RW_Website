import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';
import { distinctUntilChanged, filter } from 'rxjs';
declare global {
  interface Window {
    gtag: any; // Define the global gtag function
  }
}
@Component({
  selector: 'rw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(private router: Router) {
  //   this.router.events.subscribe(event => {
  //    if (event instanceof NavigationEnd) {
  //     gtag('config', 'G-FQGCPFHNQ6', {
  //       page_path: event.urlAfterRedirects,
  //       page_title: event.urlAfterRedirects
  //     });
  //     // console.log({page_path: event.urlAfterRedirects},document.title, gtag)
  //    }
  //  });
 }
 ngOnInit() {
  this.router.events.pipe(
    filter((event: any) => event instanceof NavigationEnd),
    distinctUntilChanged((previous: NavigationEnd, current: NavigationEnd) => {
      return previous.urlAfterRedirects === current.urlAfterRedirects;
    })
  ).subscribe((event: NavigationEnd) => {
    const numberOfEntries = history;
    console.log("history", numberOfEntries)
    if (typeof window.gtag === 'function') {
      const page_path= event.urlAfterRedirects;
      const page_title = event.urlAfterRedirects
      console.log("page_path", page_path)
      window.gtag('config', 'G-FQGCPFHNQ6', {
        'send_page_view': false,
        'page_referrer': event.url,
        'page_location': page_path,
        'update': true,
         page_title: page_path
     });
       window.gtag('event', 'page_view',{
        page_path:page_path,
        page_title:page_path,
        page_location: page_path,
       });
     
    } else {
      console.error('gtag function is not defined');
    }
  });
}

  ngAfterViewInit(): void {
    AOS.init();
  }
}
