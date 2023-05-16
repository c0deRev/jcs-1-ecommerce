import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LandingPageComponent } from './landing-page.component';
import { LoginFormComponent } from 'src/app/components/account/login-form/login-form.component';
import { RegisterFormComponent } from 'src/app/components/account/register-form/register-form.component';
import { FormSingleInputComponent } from 'src/app/components/form/form-single-input/form-single-input.component';
import { FormGroup, FormsModule } from '@angular/forms';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageComponent, LoginFormComponent, RegisterFormComponent, FormSingleInputComponent],
      imports: [HttpClientTestingModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    //component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('the login form should display by default', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#login-form-title').textContent).toContain('LOGIN');  });
});
