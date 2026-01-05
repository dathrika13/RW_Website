import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSolutionsComponent } from './product-solutions.component';

describe('ProductSolutionsComponent', () => {
  let component: ProductSolutionsComponent;
  let fixture: ComponentFixture<ProductSolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSolutionsComponent]
    });
    fixture = TestBed.createComponent(ProductSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
