import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsTechnicleComponent } from './jobs-technicle.component';

describe('JobsTechnicleComponent', () => {
  let component: JobsTechnicleComponent;
  let fixture: ComponentFixture<JobsTechnicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobsTechnicleComponent]
    });
    fixture = TestBed.createComponent(JobsTechnicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
