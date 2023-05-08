import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApplicationService } from 'src/app/services/application.service';

type RegisterStatus = "username" | "password" | "email";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  constructor(
    private appService: ApplicationService
  ){};

  registerFormState : RegisterStatus = "username";

  registerForm = new FormGroup({
    'username': new FormControl(),
    'email'   : new FormControl(),
    'password': new FormControl()
  })

  public register() : void {
    // TODO: Register User
  }

}
