import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPage2Component } from './landing-page2.component';
import { AppModule } from 'src/app/app.module';

describe('LandingPage2Component', () => {
  let component: LandingPage2Component;
  let fixture: ComponentFixture<LandingPage2Component>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppModule],
      // other necessary configurations
    }).compileComponents();
    
    
    fixture = TestBed.createComponent(LandingPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
