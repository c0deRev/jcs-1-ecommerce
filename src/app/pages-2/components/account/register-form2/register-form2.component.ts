import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-register-form2',
  templateUrl: './register-form2.component.html',
  styleUrls: ['./register-form2.component.css']
})
export class RegisterForm2Component {

  public registerForm = new FormGroup({
    email   : new FormControl<string>('', [Validators.required]),
    username: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required])
  });

  constructor(private appService : ApplicationService){};

  public myError(controlName: string, errorName: string) : boolean {
    switch(controlName){
      case "username":
        return this.registerForm.controls.username.hasError(errorName);
      case "email":
        return this.registerForm.controls.email.hasError(errorName);
      case "password":
        return this.registerForm.controls.password.hasError(errorName);
    }
    return false;
  }

  public register() : void {
    this.appService.register(
      this.registerForm.value.email!,
      this.registerForm.value.username!,
      this.registerForm.value.password!
    ,{
        success: () => {
          this.appService.route("landing-page");
        },
        failure: () => {
        }
      }
    );
  }
}
