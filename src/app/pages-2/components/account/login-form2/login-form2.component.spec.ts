import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForm2Component } from './login-form2.component';
import { AppModule } from 'src/app/app.module';

describe('LoginForm2Component', () => {
  let component: LoginForm2Component;
  let fixture: ComponentFixture<LoginForm2Component>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppModule],
      // other necessary configurations
    }).compileComponents();
    
    
    fixture = TestBed.createComponent(LoginForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
