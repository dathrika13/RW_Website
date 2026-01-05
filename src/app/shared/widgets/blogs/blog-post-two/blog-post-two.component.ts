import { Component, Input } from '@angular/core';

@Component({
  selector: 'rw-blog-post-two',
  templateUrl: './blog-post-two.component.html',
  styleUrls: ['./blog-post-two.component.scss']
})
export class BlogPostTwoComponent {
  @Input() blogImg: string = "";
  @Input() badgeText: string = "";
  @Input() badgeVariant: string = "";
  @Input() blogTitle: string = "";
  @Input() description: string = "";
  @Input() authorName: string = "";
  @Input() autherAvatar: string = "";
  @Input() blogFooter?: boolean = true;
  @Input() postDate?: string;
  @Input() hashtag?: string;
}
