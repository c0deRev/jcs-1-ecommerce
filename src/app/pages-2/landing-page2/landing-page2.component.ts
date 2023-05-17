import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-landing-page2',
  templateUrl: './landing-page2.component.html',
  styleUrls: ['./landing-page2.component.css']
})
export class LandingPage2Component {
  showLogin : boolean = true;

  constructor(private appService : ApplicationService){}
  
  registerHandler(status: boolean){
    if ( status ) {
      this.showLogin = true;
    } else {
      // simple for now, this will reset the forms and place it back on the register form
      this.showLogin = true;
      this.showLogin = false;
    }
  }

  ngOnInit(){
    // route user to product page if already logged in
    this.appService.loggedIn.pipe(tap({
      next: (isLoggedIn : boolean) => {
        if(isLoggedIn) {
          this.appService.route("product-list");
        }
      }
    })).subscribe();
  }
}