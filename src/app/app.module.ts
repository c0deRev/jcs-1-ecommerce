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

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    FooterComponent,
    TopBarComponent,
    LandingPageComponent,
    ProductListingComponent,
    FormSingleInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
