import { ComponentFixture, TestBed } from '@angular/core/testing';

import {PrivacyAndPolicyComponent} from "./privacy-policy.component"
 
describe('PrivacyAndPolicyComponent', () => {
  let component: PrivacyAndPolicyComponent;
  let fixture: ComponentFixture<PrivacyAndPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyAndPolicyComponent]
    });
    fixture = TestBed.createComponent(PrivacyAndPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
