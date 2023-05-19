import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(
    public appService : ApplicationService
  ) {

    this.appService.cartTotal.pipe(tap({
      next: (value) => {
        console.log(`cart total = ${value}`);
      }
    })).subscribe();
  }

  public goToCart() : void {
    if (this.appService.loggedIn.value) {
      this.appService.route("/cart-list");
    }
  }

  public goToProducts() : void {
    if (this.appService.loggedIn.value) {
      this.appService.route("/product-list");
    }
  }
}
