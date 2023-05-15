import { Injectable } from '@angular/core';
import { LoginCredentials, LoginHandler, LoginService } from './account/login.service';
import { Router } from '@angular/router';
import { RegisterCredentials, RegisterHandler, RegisterService } from './account/register.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(
    private loginService    : LoginService,
    private registerService : RegisterService,
    private routerService   : Router
    ) { }

  public route(endpoint : string){
    this.routerService.navigate([endpoint]);
  }

  public login(username : string, password : string, loginHandler ?: LoginHandler) : void {

    let credentials : LoginCredentials = {
      username: username,
      password: password
    };

    this.loginService.login(credentials, loginHandler);
  }

    
  public register(email: string, username : string, password : string, registerHandler ?: RegisterHandler) : void {

    let credentials : RegisterCredentials = {
      username: username,
      password: password,
      email   : email
    };

    this.registerService.register(credentials, registerHandler);
  }
}
