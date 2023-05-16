import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-cart-listing',
  templateUrl: './cart-listing.component.html',
  styleUrls: ['./cart-listing.component.css']
})
export class CartListingComponent {
  public cart       ?: Cart;
  public productList : Product[] = [];

  constructor(public appService : ApplicationService){}

  ngOnInit(){
    this.appService.shoppingCart.pipe(tap({
      next: (cart ?: Cart) => {
        if (cart) {
          this.cart = cart;
          this.productList = cart.productList || [];
        }
      }
    })).subscribe();
  }

  public removeItem(product : Product, index : number) : void {
    this.appService.deleteCartItem(product, {
      success: (cart : Cart) => {
        
        cart.productList?.sort((a, b) => a.title!.localeCompare(b.title!));

        this.appService.shoppingCart.next(cart);

        if (cart.productList) {
          this.appService.cartTotal.next(
            cart.productList.length == 0 
            ? 0.00
            : cart.productList.map(prod => prod.price).reduce( (prev, next) => prev! + next!, 0.00)!
          )  
        }        
      }
    })
  }
}
