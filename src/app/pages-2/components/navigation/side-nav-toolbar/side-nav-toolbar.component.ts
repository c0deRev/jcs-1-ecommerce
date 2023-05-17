import { Component, Input, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-side-nav-toolbar',
  templateUrl: './side-nav-toolbar.component.html',
  styleUrls: ['./side-nav-toolbar.component.css']
})
export class SideNavToolbarComponent {
  constructor(public appService : ApplicationService){};

  @Input()
  hideSideBar : boolean = false;

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
  );


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

  public logout() : void {
    this.appService.logout({
      success: () => {
        this.appService.loggedIn.next(false);
        this.appService.shoppingCart.next(undefined);
        this.appService.cartTotal.next(0.00);
        this.appService.route("/");
      }
    });
  }
}
