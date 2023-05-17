import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cart } from 'src/app/models/cart';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-login-form2',
  templateUrl: './login-form2.component.html',
  styleUrls: ['./login-form2.component.css']
})
export class LoginForm2Component {

  public loginForm = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required])
  });

  constructor(private appService : ApplicationService){};
  
  public myError(controlName: string, errorName: string) : boolean {
    switch(controlName){
      case "username":
        return this.loginForm.controls.username.hasError(errorName);
      case "password":
        return this.loginForm.controls.password.hasError(errorName);
    }
    return false;
  }

  public login() : void {
    this.appService.login(this.loginForm.value.username!, this.loginForm.value.password!, {
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
      }
    });

  }
}
