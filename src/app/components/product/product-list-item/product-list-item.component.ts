import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent {
  @Input()
  public product ?: Product;

  constructor(
    private appService : ApplicationService
  ){}

  public addToCart() : void {

    this.appService.addToCart(this.product!, {
      success: (cart : Cart) => {

        if (!cart.productList) {
          throw new Error('No products were returned from add to cart operation!');
        }

        cart.productList?.sort((a, b) => a.title!.localeCompare(b.title!));

        this.appService.shoppingCart.next(cart);

        this.appService.cartTotal.next(
          cart.productList.map(prod => prod.price).reduce( (prev, next) => prev! + next!, 0.00)!
        )
        
        let length = cart.productList.length;
        console.log(length);

        this.appService.cartNumItems.next(length);

      },
      failure: (error: any) => {

      },
      complete: () => {}
    });
  }
}
