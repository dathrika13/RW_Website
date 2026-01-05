import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostOneComponent } from './blog-post-one.component';

describe('BlogPostOneComponent', () => {
  let component: BlogPostOneComponent;
  let fixture: ComponentFixture<BlogPostOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPostOneComponent]
    });
    fixture = TestBed.createComponent(BlogPostOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
