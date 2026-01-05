import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsgTechnicleComponent } from './esg-technicle.component';

describe('EsgTechnicleComponent', () => {
  let component: EsgTechnicleComponent;
  let fixture: ComponentFixture<EsgTechnicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsgTechnicleComponent]
    });
    fixture = TestBed.createComponent(EsgTechnicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
