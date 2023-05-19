import { TestBed } from '@angular/core/testing';

import { ProductListService } from './product-list.service';
import { AppModule } from 'src/app/app.module';

describe('ProductListService', () => {
  let service: ProductListService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppModule],
      // other necessary configurations
    }).compileComponents();
    
    service = TestBed.inject(ProductListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
