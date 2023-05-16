import { Injectable } from '@angular/core';
import { LoginCredentials, LoginHandler, LoginService } from './account/login.service';
import { Router } from '@angular/router';
import { RegisterCredentials, RegisterHandler, RegisterService } from './account/register.service';
import { ProductListHandler, ProductListService } from './product/product-list.service';
import { Product } from '../models/product';
import { CartHandler, CartService } from './cart/cart.service';
import { Cart } from '../models/cart';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  loggedIn     = new BehaviorSubject<boolean>(false);
  
  shoppingCart = new BehaviorSubject<Cart | undefined>(undefined);

  cartTotal    = new BehaviorSubject<number>(0.00);

  cartNumItems = new BehaviorSubject<number>(0);

  constructor(
    private loginService        : LoginService,
    private registerService     : RegisterService,
    private productListService  : ProductListService,
    private cartService         : CartService,
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

  public addToCart(product : Product, cartHandler : CartHandler) : void {
    this.cartService.addItemToCart(product.id!, cartHandler);
  }

  public getCart(cartHandler : CartHandler) : void  {
    this.cartService.getCart(cartHandler);
  }

  public deleteCartItem(product: Product, cartHandler : CartHandler) : void {
    this.cartService.removeCartItem(product.id!, cartHandler);
  }

  public checkout(cartHandler ?: CartHandler){

    this.cartService.checkout(cartHandler);
    
    this.shoppingCart.next(undefined);
    this.cartNumItems.next(0);
    this.cartTotal.next(0.00);
  }
}
