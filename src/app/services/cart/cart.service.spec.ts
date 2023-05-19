import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { AppModule } from 'src/app/app.module';

describe('CartService', () => {
  let service: CartService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppModule],
      // other necessary configurations
    }).compileComponents();
    
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
