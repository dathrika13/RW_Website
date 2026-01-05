import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newseventcomponent } from './news.component';

describe('Newseventcomponent', () => {
  let component: Newseventcomponent;
  let fixture: ComponentFixture<Newseventcomponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Newseventcomponent]
    });
    fixture = TestBed.createComponent(Newseventcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
