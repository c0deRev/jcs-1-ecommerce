import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoot2Component } from './app-root2.component';

describe('AppRoot2Component', () => {
  let component: AppRoot2Component;
  let fixture: ComponentFixture<AppRoot2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppRoot2Component]
    });
    fixture = TestBed.createComponent(AppRoot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
