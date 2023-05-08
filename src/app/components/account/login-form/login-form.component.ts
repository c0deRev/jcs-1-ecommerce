import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  loginForm = new FormGroup({
    'username': new FormControl(),
    'password': new FormControl()
  })

  public login() : void {
    // TODO: do login
  }
}
