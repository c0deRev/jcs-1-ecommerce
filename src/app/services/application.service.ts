import { Injectable } from '@angular/core';
import { LoginCredentials, LoginHandler, LoginService } from './account/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(
    private loginService  : LoginService,
    private routerService : Router
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
}
