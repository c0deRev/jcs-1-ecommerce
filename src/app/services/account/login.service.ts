import { Injectable } from '@angular/core';
import { HttpCallback, HttpData, HttpService, PostData } from '../http/http.service';
import { HttpParams } from '@angular/common/http';

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginHandler {
  success ?: Function;
  failure ?: Function;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService : HttpService) { }

  public login(credentials : LoginCredentials, loginHandler ?: LoginHandler) : void {


    let postData = new PostData();
    postData.endpoint = "/login";

    postData.setParams(new HttpParams().set("username", credentials.username).set("password", credentials.password));

    let callback = new HttpCallback();
    callback.next = (response : any) => {
      console.log("[Service] { LOGIN } -> login success!");

      loginHandler?.success && loginHandler.success();
    }
    callback.error = (error: any) => {
      console.log("[Service] { LOGIN } -> login failure!");
      console.log(postData.params);

      loginHandler?.failure && loginHandler.failure(); 
    }
    callback.complete = (error: any) => {
      console.log("[Service] { LOGIN } -> login complete!");
    }

    this.httpService.formPost<void>(postData, callback);
  }

  public authenticate(loginHandler : LoginHandler){
    let httpData = new HttpData();
    httpData.endpoint = "/user";

    let callback = new HttpCallback();
    callback.next = (response : any) => {
      console.log("[Service] { LOGIN } -> pre-authenticate success!");

      loginHandler?.success && loginHandler.success();
    }
    callback.error = (error: any) => {
      console.log("[Service] { LOGIN } -> pre-authenticate failure!");

      loginHandler?.failure && loginHandler.failure(); 
    }
    
    callback.complete = (error: any) => {
      console.log("[Service] { LOGIN } -> pre-authenticate complete!");
    }


    this.httpService.jsonGet(httpData, callback)
  }

  public logout(loginHandler : LoginHandler){
    let httpData = new PostData();
    httpData.endpoint = "/logout";
    httpData.data = {};

    let callback = new HttpCallback();
    callback.next = (response : any) => {
      console.log("[Service] { LOGIN } -> logout success!");

      loginHandler?.success && loginHandler.success();
    }
    callback.error = (error: any) => {
      console.log("[Service] { LOGIN } -> logout failure!");

      loginHandler?.failure && loginHandler.failure(); 
    }
    
    callback.complete = (error: any) => {
      console.log("[Service] { LOGIN } -> logout complete!");
    }


    this.httpService.jsonPost(httpData, callback)
  }
}