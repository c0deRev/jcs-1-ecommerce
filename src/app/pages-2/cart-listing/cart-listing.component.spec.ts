import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListingComponent } from './cart-listing.component';
import { AppModule } from 'src/app/app.module';

describe('CartListingComponent', () => {
  let component: CartListingComponent;
  let fixture: ComponentFixture<CartListingComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppModule],
      // other necessary configurations
    }).compileComponents();
    
    
    fixture = TestBed.createComponent(CartListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
