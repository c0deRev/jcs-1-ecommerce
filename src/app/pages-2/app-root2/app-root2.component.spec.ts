import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoot2Component } from './app-root2.component';
import { AppModule } from 'src/app/app.module';

describe('AppRoot2Component', () => {
  let component: AppRoot2Component;
  let fixture: ComponentFixture<AppRoot2Component>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppModule],
      // other necessary configurations
    }).compileComponents();
    
    
    fixture = TestBed.createComponent(AppRoot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
