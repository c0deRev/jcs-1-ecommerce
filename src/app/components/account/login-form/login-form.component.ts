import { Component } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';

type LoginFormState = "username" | "password";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  constructor(
    private appService: ApplicationService
  ){}
  
  loginFormState : LoginFormState = "username";

  public login() : void {
    throw new Error("not implemented");
  }

  public submitUsername($event: any) : void {
    throw new Error("not implemented");
  }

  public submitPassword($event: any) : void {
    throw new Error("not implemented");
  }
}
