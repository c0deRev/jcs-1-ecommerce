import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductListingComponent } from './pages/product-listing/product-listing.component';
import { CartListingComponent } from './pages/cart-listing/cart-listing.component';

const routes: Routes = [
  {path: "cart-list", component: CartListingComponent},
  {path: "product-list", component: ProductListingComponent},
  {path: "**", component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
