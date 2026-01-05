import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouComponent  } from './thankyou.component';

describe('thankyouComponent', () => {
  let component: ThankYouComponent;
  let fixture: ComponentFixture<ThankYouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThankYouComponent]
    });
    fixture = TestBed.createComponent(ThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
