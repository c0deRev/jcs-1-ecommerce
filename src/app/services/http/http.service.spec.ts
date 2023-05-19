import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { AppModule } from 'src/app/app.module';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppModule],
      // other necessary configurations
    }).compileComponents();
    
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
