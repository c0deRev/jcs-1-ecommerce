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
import { SideNavToolbarComponent } from './pages-2/components/navigation/side-nav-toolbar/side-nav-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRootComponent } from './pages/app-root/app-root.component';
import { AppRoot2Component } from './pages-2/app-root2/app-root2.component';



import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field';

import { LandingPage2Component } from './pages-2/landing-page2/landing-page2.component';
import { LoginForm2Component } from './pages-2/components/account/login-form2/login-form2.component';
import { RegisterForm2Component } from './pages-2/components/account/register-form2/register-form2.component'; 

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
    CartListingComponent,
    SideNavToolbarComponent,
    AppRootComponent,
    AppRoot2Component,
    LandingPage2Component,
    LoginForm2Component,
    RegisterForm2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
