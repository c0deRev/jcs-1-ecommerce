import { Component } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-app-root2',
  templateUrl: './app-root2.component.html',
  styleUrls: ['./app-root2.component.css']
})
export class AppRoot2Component {
  constructor(
    public appService : ApplicationService
  ){}

}
