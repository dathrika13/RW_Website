import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from "@ng-bootstrap/ng-bootstrap";
import { MenuComponent } from "./components/menu/menu.component";
import { RouterModule } from "@angular/router";
import { StickyNavDirective } from "./directives/sticky-nav.directive";
import { ScrollToTopDirective } from "./directives/scroll-to-top.directive";
import { BlogPostOneComponent } from "./widgets/blogs/blog-post-one/blog-post-one.component";
import { BlogPostTwoComponent } from "./widgets/blogs/blog-post-two/blog-post-two.component";
import { BlogPostThreeComponent } from "./widgets/blogs/blog-post-three/blog-post-three.component";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    StickyNavDirective,
    ScrollToTopDirective,
    BlogPostOneComponent,
    BlogPostTwoComponent,
    BlogPostThreeComponent,
  ],
  imports: [CommonModule, NgbCollapseModule, NgbDropdownModule, RouterModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    StickyNavDirective,
    ScrollToTopDirective,
    BlogPostOneComponent,
    BlogPostTwoComponent,
    BlogPostThreeComponent,
  ],
})
export class SharedModule { }
