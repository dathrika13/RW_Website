import { Component, Input } from '@angular/core';
import { AvatarItem } from 'src/app/shared/model';

@Component({
  selector: 'rw-blog-post-three',
  templateUrl: './blog-post-three.component.html',
  styleUrls: ['./blog-post-three.component.scss']
})
export class BlogPostThreeComponent {
  @Input() blogImg: string = "";
  @Input() badgeText: string = "";
  @Input() badgeVariant: string = "";
  @Input() blogTitle: string = "";
  @Input() avatarGroup: AvatarItem[] = [];
  @Input() overlayClass?: string;
}
