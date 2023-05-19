import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { AppModule } from 'src/app/app.module';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppModule],
      // other necessary configurations
    }).compileComponents();
    
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
