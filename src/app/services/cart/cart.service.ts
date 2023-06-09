import { Injectable } from '@angular/core';
import { HttpCallback, HttpData, HttpService, PostData } from '../http/http.service';
import { Cart } from 'src/app/models/cart';

export interface CartHandler {
  success  ?: Function;
  failure  ?: Function
  complete ?: Function
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private httpService : HttpService
    ) { }

  public getCart(cartHandler : CartHandler) : void {
    let httpData = new HttpData();

    httpData.endpoint = '/cart';
    
    let callback = new HttpCallback();

    callback.next = (cart : Cart) => {
      cartHandler?.success && cartHandler.success(cart);
    }
    callback.error = (error : any) => {
      cartHandler?.failure && cartHandler.failure(error);
    }
    callback.complete = () => {
      cartHandler?.complete && cartHandler.complete();
    }

    this.httpService.jsonGet(httpData, callback);

  }

  public addItemToCart(itemId : number, cartHandler ?: CartHandler) : void {

    let postData = new PostData();

    postData.endpoint = `/cart/add/${itemId}`;


    let callback = new HttpCallback();
    
    callback.next = (cart: Cart) => {
      console.log("[Service] { CART } -> add to cart success!");

      cartHandler?.success && cartHandler.success(cart);
    }
    callback.error = (error: any) => {
      console.log("[Service] { CART } -> add to cart failure!");

      cartHandler?.failure && cartHandler.failure(error);

    }
    callback.complete = () => {
      console.log("[Service] { CART } -> add to cart complete!");

      cartHandler?.complete && cartHandler.complete();

    }

    this.httpService.jsonPost(postData, callback);
  } 

  public removeCartItem(itemId : number, cartHandler ?: CartHandler) : void {

    let postData = new PostData();

    postData.endpoint = `/cart/${itemId}`;


    let callback = new HttpCallback();
    
    callback.next = (cart: Cart) => {
      console.log("[Service] { CART } -> delete cart item success!");

      cartHandler?.success && cartHandler.success(cart);
    }
    callback.error = (error: any) => {
      console.log("[Service] { CART } -> delete cart item failure!");

      cartHandler?.failure && cartHandler.failure(error);

    }
    callback.complete = () => {
      console.log("[Service] { CART } -> delete cart item complete!");

      cartHandler?.complete && cartHandler.complete();

    }

    this.httpService.jsonDelete(postData, callback);
  }

  public checkout(cartHandler ?: CartHandler) : void {

    let httpData = new HttpData();

    httpData.endpoint = `/checkout`;


    let callback = new HttpCallback();
    
    callback.next = (cart: Cart) => {
      console.log("[Service] { CART } -> delete cart item success!");

      cartHandler?.success && cartHandler.success(cart);
    }
    callback.error = (error: any) => {
      console.log("[Service] { CART } -> delete cart item failure!");

      cartHandler?.failure && cartHandler.failure(error);

    }
    callback.complete = () => {
      console.log("[Service] { CART } -> delete cart item complete!");

      cartHandler?.complete && cartHandler.complete();

    }

    this.httpService.jsonGet(httpData, callback);
  }
}
