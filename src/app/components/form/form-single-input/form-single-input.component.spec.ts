import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSingleInputComponent } from './form-single-input.component';

describe('FormSingleInputComponent', () => {
  let component: FormSingleInputComponent;
  let fixture: ComponentFixture<FormSingleInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSingleInputComponent]
    });
    fixture = TestBed.createComponent(FormSingleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
