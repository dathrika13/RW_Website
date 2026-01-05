import { Component, Input } from '@angular/core';

@Component({
  selector: 'rw-blog-post-one',
  templateUrl: './blog-post-one.component.html',
  styleUrls: ['./blog-post-one.component.scss']
})
export class BlogPostOneComponent {
  @Input() blogImg: string = "";
  @Input() badgeText: string = "";
  @Input() badgeVariant: string = "";
  @Input() blogTitle: string = "";
  @Input() description: string = "";
  @Input() blogFooter?: boolean = true;
  @Input() authorName?: string;
  @Input() postDate?: string;
}
