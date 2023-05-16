import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { ApplicationService } from 'src/app/services/application.service';

type LoginFormState = "username" | "password";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {


  public error : boolean = false;

  public loginFormState : LoginFormState = "username";

  private username?: string;
  private password?: string;

  constructor(
    private appService: ApplicationService
  ){
  }
  

  private login() : void {
    this.appService.login(this.username!, this.password!, {
      success: () => {
        this.appService.loggedIn.next(true);

        // load user data
        this.appService.getCart({
          success: (cart : Cart) => {
            if (cart.productList) {
              this.appService.shoppingCart.next(cart);

              this.appService.cartTotal.next(
              cart.productList.map(prod => prod.price).reduce( (prev, next) => prev! + next!, 0.00)!
              )
              
              let length = cart.productList.length;
              console.log(length);
      
              this.appService.cartNumItems.next(length);
            }
          }
        });
        
        // re-route the user to the product list
        this.appService.route("product-list");
      },
      failure: () => {
        this.error = true;
      }
    });

  }

  public submitUsername($event: any) : void {
    this.username = $event.input;
    this.loginFormState = "password";
  }

  public submitPassword($event: any) : void {
    this.password = $event.input;

    this.login();
  }
}

