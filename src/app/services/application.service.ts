import { Injectable } from '@angular/core';
import { LoginCredentials, LoginHandler, LoginService } from './account/login.service';
import { Router } from '@angular/router';
import { RegisterCredentials, RegisterHandler, RegisterService } from './account/register.service';
import { ProductListHandler, ProductListService } from './product/product-list.service';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  loggedIn     : boolean = false;
  
  shoppingCart : Product[] = [];

  cartTotal : number = 0.00;

  constructor(
    private loginService        : LoginService,
    private registerService     : RegisterService,
    private productListService  : ProductListService,
    private routerService       : Router
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

  public getProductList(productListHandler : ProductListHandler) : void {
    this.productListService.getAllProducts(productListHandler);
  }
}
