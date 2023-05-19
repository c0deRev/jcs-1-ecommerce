import { TestBed } from '@angular/core/testing';

import { ApplicationService } from './application.service';
import { AppModule } from '../app.module';

describe('ApplicationService', () => {
  let service: ApplicationService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppModule],
      // other necessary configurations
    }).compileComponents();
    
    service = TestBed.inject(ApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
