import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierAssitsComponent } from './supplier-assits.component';

describe('SupplierAssitsComponent', () => {
  let component: SupplierAssitsComponent;
  let fixture: ComponentFixture<SupplierAssitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierAssitsComponent]
    });
    fixture = TestBed.createComponent(SupplierAssitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
