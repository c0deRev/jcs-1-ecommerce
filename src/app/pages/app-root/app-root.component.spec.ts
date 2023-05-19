import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRootComponent } from './app-root.component';
import { AppModule } from 'src/app/app.module';

describe('AppRootComponent', () => {
  let component: AppRootComponent;
  let fixture: ComponentFixture<AppRootComponent>;
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppModule],
      // other necessary configurations
    }).compileComponents();
    
    fixture = TestBed.createComponent(AppRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
