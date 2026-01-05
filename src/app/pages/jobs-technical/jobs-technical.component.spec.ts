import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsTechnicalComponent } from './jobs-technical.component';

describe('JobsTechnicalComponent', () => {
  let component: JobsTechnicalComponent;
  let fixture: ComponentFixture<JobsTechnicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobsTechnicalComponent]
    });
    fixture = TestBed.createComponent(JobsTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
