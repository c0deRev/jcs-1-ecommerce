import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductListingComponent } from './pages/product-listing/product-listing.component';
import { CartListingComponent } from './pages/cart-listing/cart-listing.component';
import { LandingPage2Component } from './pages-2/landing-page2/landing-page2.component';

const routes: Routes = [
  {path: "cart-list", component: CartListingComponent},
  {path: "product-list", component: ProductListingComponent},
  {path: "landing-page", component: LandingPage2Component},
  {path: "**", component: LandingPage2Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  { useHash: false }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
