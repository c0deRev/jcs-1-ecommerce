import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  showLogin : boolean = true;
  public swap(){
    this.showLogin = !this.showLogin;
  }

  registerHandler(status: boolean){
    if ( status ) {
      this.showLogin = true;
    } else {
      // simple for now, this will reset the forms and place it back on the register form
      this.showLogin = true;
      this.showLogin = false;
    }
  }
}
