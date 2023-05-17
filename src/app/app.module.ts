import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/account/login-form/login-form.component';
import { RegisterFormComponent } from './components/account/register-form/register-form.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { TopBarComponent } from './components/top-bar/top-bar/top-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductListingComponent } from './pages/product-listing/product-listing.component';
import { FormSingleInputComponent } from './components/form/form-single-input/form-single-input.component';
import { ProductListItemComponent } from './components/product/product-list-item/product-list-item.component';
import { CartListingComponent } from './pages/cart-listing/cart-listing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    FooterComponent,
    TopBarComponent,
    LandingPageComponent,
    ProductListingComponent,
    FormSingleInputComponent,
    ProductListItemComponent,
    CartListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
