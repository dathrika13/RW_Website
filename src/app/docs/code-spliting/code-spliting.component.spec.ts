import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSplitingComponent } from './code-spliting.component';

describe('CodeSplitingComponent', () => {
  let component: CodeSplitingComponent;
  let fixture: ComponentFixture<CodeSplitingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeSplitingComponent]
    });
    fixture = TestBed.createComponent(CodeSplitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
