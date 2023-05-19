import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { AppModule } from 'src/app/app.module';

describe('RegisterService', () => {
  let service: RegisterService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppModule],
      // other necessary configurations
    }).compileComponents();
    
    service = TestBed.inject(RegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
