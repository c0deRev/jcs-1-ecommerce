import { Injectable } from '@angular/core';
import { HttpCallback, HttpService, PostData } from '../http/http.service';
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

    let callback = new HttpCallback;
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
}