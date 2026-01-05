import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { Section1Component } from './home/section1/section1.component';
import { Section2Component } from './home/section2/section2.component';
import { Section3Component } from './home/section3/section3.component';
import { Section4Component } from './home/section4/section4.component';
import { Section5Component } from './home/section5/section5.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Section6Component } from './home/section6/section6.component';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    NgxTypedJsModule,
    NgbModule,
    
  ],
})
export class CoreModule { }
