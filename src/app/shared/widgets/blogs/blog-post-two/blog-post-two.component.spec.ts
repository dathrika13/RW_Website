import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostTwoComponent } from './blog-post-two.component';

describe('BlogPostTwoComponent', () => {
  let component: BlogPostTwoComponent;
  let fixture: ComponentFixture<BlogPostTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPostTwoComponent]
    });
    fixture = TestBed.createComponent(BlogPostTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
