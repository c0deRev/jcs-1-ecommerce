import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSingleInputComponent } from './form-single-input.component';
import { AppModule } from 'src/app/app.module';

describe('FormSingleInputComponent', () => {
  let component: FormSingleInputComponent;
  let fixture: ComponentFixture<FormSingleInputComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppModule],
      // other necessary configurations
    }).compileComponents();
    
    fixture = TestBed.createComponent(FormSingleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
