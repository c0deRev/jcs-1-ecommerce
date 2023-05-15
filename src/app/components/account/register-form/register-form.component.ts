import { Component } from '@angular/core';
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


  public register() : void {
    // TODO: Register User
  }

  public submitUsername($event: any) : void {
    throw new Error("not implemented");
  }

  public submitPassword($event: any) : void {
    throw new Error("not implemented");
  }

  public submitEmail($event: any) : void {
    throw new Error("not implemented");
  }

}
