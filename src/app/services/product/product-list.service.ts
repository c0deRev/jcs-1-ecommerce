import { Injectable } from '@angular/core';
import { HttpCallback, HttpData, HttpService } from '../http/http.service';
import { Product } from 'src/app/models/product';

export interface ProductListHandler {
  success   ?: Function;
  failure   ?: Function;
  complete  ?: Function;
}

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(
    private httpService : HttpService
  ) { }

  public getAllProducts(productListHandler ?: ProductListHandler){
    let httpData = new HttpData();
    httpData.endpoint = "/product/all";

    let callback = new HttpCallback();
    
    callback.next = (prodList: Product[]) => {
      console.log("[Service] { PRODUCT-LIST } -> get products success!");

      productListHandler?.success && productListHandler.success(prodList);
    };

    callback.error = (error: any) => {
      console.log("[Service] { PRODUCT-LIST } -> get products failure!");

      productListHandler?.failure && productListHandler.failure(error);
    }

    callback.complete = () => {
      console.log("[Service] { PRODUCT-LIST } -> get products complete!");

      productListHandler?.complete && productListHandler.complete();
    } 

    this.httpService.get<Product[]>(httpData, callback);
  }
}
