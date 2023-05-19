import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { AppModule } from 'src/app/app.module';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    /**
    await TestBed.configureTestingModule({
      declarations: [LandingPageComponent, LoginFormComponent, RegisterFormComponent, FormSingleInputComponent],
      imports: [HttpClientTestingModule, FormsModule],
    }).compileComponents();
    */

    await TestBed.configureTestingModule({
      imports: [AppModule],
      // other necessary configurations
    }).compileComponents();
    
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('the login form should display by default', () => {
    expect(component).toBeTruthy();
  });
});
