import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

export class HttpData {
  endpoint : string       = "/";
  headers  : HttpHeaders   = new HttpHeaders();
}

export class PostData extends HttpData {
  params   ?: HttpParams    = undefined;
  data     : Object        = {};

  public setParams(params : HttpParams){
    this.params = params;
  }

  public setData(data: {}){
    this.data = data;
  }
}

export class HttpCallback {
  next?     : Function;
  error?    : Function;
  complete? : Function
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { 
    
  }


  public get<Type>(httpData : HttpData, callback ?: HttpCallback) : void {
    let endpoint = httpData.endpoint;
    let headers  = httpData.headers;

    this.http.get<Type>(endpoint, { headers }).pipe(
      tap({
        next: (response) =>{          
          callback?.next && callback.next(response);
        },
        error: (error) => {
          callback?.error && callback.error(error);
        },
        complete: () => {
          callback?.complete && callback.complete();
        }
      })).subscribe();
  }

  public post<Type>(postData : PostData, callback ?: HttpCallback) : void {

    const headers   = postData.headers;
    const params    = postData.params ? postData.params : postData.data;
    const endpoint  = postData.endpoint;

    this.http.post<Type>(endpoint, params, { headers }).pipe(
      tap({
        next: (response) => {
          callback?.next && callback.next(response);
        },
        error: (error) => {
          callback?.error && callback.error(error);
        },
        complete: () => {
          callback?.complete && callback.complete();
        }
      })).subscribe();
  }

  public delete<Type>(httpData : HttpData, callback ?: HttpCallback) : void {
    let endpoint = httpData.endpoint;
    let headers  = httpData.headers;

    this.http.delete<Type>(endpoint, { headers }).pipe(
      tap({
        next: (response) =>{          
          callback?.next && callback.next(response);
        },
        error: (error) => {
          callback?.error && callback.error(error);
        },
        complete: () => {
          callback?.complete && callback.complete();
        }
      })).subscribe();
  }

  public formPost<Type>(postData : PostData, callback ?: HttpCallback ) : void {
    postData.headers.set('Content-Type', 'application/x-www-form-urlencoded');

    this.post<Type>(postData, callback);
  }

  public jsonPost<Type>(postData : PostData, callback ?: HttpCallback ) : void {
    postData.headers.set('Content-Type', 'application/json');

    this.post<Type>(postData, callback);
  }

  public jsonGet<Type>(httpData : HttpData, callback ?: HttpCallback) : void {
    httpData.headers.set('Content-Type', 'application/json');

    this.get(httpData, callback);
  }

  public jsonDelete<Type>(httpData : HttpData, callback ?: HttpCallback) : void {
    httpData.headers.set('Content-Type', 'application/json');

    this.delete(httpData, callback);
  }
}
