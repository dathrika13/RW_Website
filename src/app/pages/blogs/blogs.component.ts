import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DEMOURL, BLOGSFIRSTCONTENT, NEWSEVENTS} from 'src/app/shared/data/config';
import { BlogsContent } from 'src/app/shared/model';

@Component({
  selector: 'rw-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{
  demoUrl!: string;
  blogsContents: BlogsContent[] = [];
  blogs!: BlogsContent;
  constructor(private activatedRoute: ActivatedRoute) {
    this.blogsContents = [...BLOGSFIRSTCONTENT];
    // this.blogsContents = [...NEWSEVENTS];
    this.demoUrl = DEMOURL;
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const Id = paramMap.get('id');
      if (Id) {
        const data = this.blogsContents && this.blogsContents.filter(el => el.id == +Id);
        if (data && data.length > 0) {
          this.blogs = data[0];
        }
      }
    });
  }

  ngOnInit(): void {
    window.document.body.scrollIntoView({behavior:"smooth"})
  }
}
