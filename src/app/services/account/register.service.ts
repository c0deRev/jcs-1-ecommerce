import { Injectable } from '@angular/core';
import { HttpCallback, HttpService, PostData } from '../http/http.service';
import { User } from 'src/app/models/user';

export interface RegisterHandler {
  success  ?: Function;
  failure ?: Function;
}
export interface RegisterCredentials {
  username: string;
  password: string;
  email   : string;
}


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpService : HttpService) 
  { }

  public register(credentials : RegisterCredentials, registerHandler ?: RegisterHandler) : void {


    let postData = new PostData();
    postData.endpoint = "/register";

    postData.setData(credentials);

    let callback = new HttpCallback;
    callback.next = (response : any) => {
      console.log("[Service] { REGISTER } -> register success!");

      registerHandler?.success && registerHandler.success();
    }
    callback.error = (error: any) => {
      console.log("[Service] { REGISTER } -> register failure!");
      console.log(postData.params);

      registerHandler?.failure && registerHandler.failure(); 
    }
    callback.complete = (error: any) => {
      console.log("[Service] { REGISTER } -> register complete!");
    }

    this.httpService.jsonPost<User>(postData, callback);
  }
}
