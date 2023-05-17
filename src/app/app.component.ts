import { Component } from '@angular/core';
import { ApplicationService } from './services/application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private appService : ApplicationService) {
    this.appService.preAuthenticate({
      success: () => {
        this.appService.loggedIn.next(true);
      }
    })
  }
}
