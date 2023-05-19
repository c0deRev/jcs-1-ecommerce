import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavToolbarComponent } from './side-nav-toolbar.component';
import { AppModule } from 'src/app/app.module';

describe('SideNavToolbarComponent', () => {
  let component: SideNavToolbarComponent;
  let fixture: ComponentFixture<SideNavToolbarComponent>;


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppModule],
      // other necessary configurations
    }).compileComponents();
    
    fixture = TestBed.createComponent(SideNavToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
