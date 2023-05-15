import { Component, EventEmitter, Output } from '@angular/core';
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

  registerFormState : RegisterStatus = "email";

  @Output()
  public onRegister : EventEmitter<boolean> = new EventEmitter();

  public error : boolean = false;

  private username?: string;
  private password?: string;
  private email   ?: string;


  public register() : void {
    this.appService.register(
      this.email!,
      this.username!, 
      this.password!,
      {
        success: () => {
          this.onRegister.emit(true)
        },
        failure: () => {
          this.onRegister.emit(false);
        }
      }
    );
  }

  public submitUsername($event: any) : void {
    this.username = $event.input;
    this.registerFormState = "password";
  }

  public submitPassword($event: any) : void {
    this.password = $event.input;
    this.register();
  }

  public submitEmail($event: any) : void {
    this.email = $event.input;
    this.registerFormState = "username";  
  }

}
