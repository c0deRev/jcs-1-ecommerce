import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListingComponent } from './cart-listing.component';

describe('CartListingComponent', () => {
  let component: CartListingComponent;
  let fixture: ComponentFixture<CartListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartListingComponent]
    });
    fixture = TestBed.createComponent(CartListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
