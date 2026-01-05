import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAiComponent } from './products-ai.component';

describe('ProductsAiComponent', () => {
  let component: ProductsAiComponent;
  let fixture: ComponentFixture<ProductsAiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsAiComponent]
    });
    fixture = TestBed.createComponent(ProductsAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
