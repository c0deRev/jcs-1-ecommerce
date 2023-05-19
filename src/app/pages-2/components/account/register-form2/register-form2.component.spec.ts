import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterForm2Component } from './register-form2.component';
import { AppModule } from 'src/app/app.module';

describe('RegisterForm2Component', () => {
  let component: RegisterForm2Component;
  let fixture: ComponentFixture<RegisterForm2Component>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppModule],
      // other necessary configurations
    }).compileComponents();
    
    
    fixture = TestBed.createComponent(RegisterForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
