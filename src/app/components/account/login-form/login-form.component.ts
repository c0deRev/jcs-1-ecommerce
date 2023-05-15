import { Component } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';

type LoginFormState = "username" | "password";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {


  public error : boolean = false;

  public loginFormState : LoginFormState = "username";

  private username?: string;
  private password?: string;

  constructor(
    private appService: ApplicationService
  ){}
  

  private login() : void {
    this.appService.login(this.username!, this.password!, {
      success: () => {
        this.appService.route("product-list");
      },
      failure: () => {
        this.error = true;
      }
    });

  }

  public submitUsername($event: any) : void {
    this.username = $event.input;
    this.loginFormState = "password";
  }

  public submitPassword($event: any) : void {
    this.password = $event.input;

    this.login();
  }
}

