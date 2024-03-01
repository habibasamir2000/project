import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavBarAuthComponent } from './components/nav-bar-auth/nav-bar-auth.component';
import { NavbarMainComponent } from './components/navbar-main/navbar-main.component';
import { DetialesComponent } from './components/detiales/detiales.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from'@angular/common/http';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TermtextPipe } from './core/pipes/termtext.pipe';
import { SearchPipe } from './core/pipes/search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CategorydetailsComponent } from './components/categorydetails/categorydetails.component';
import { BranddetailsComponent } from './components/branddetails/branddetails.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    CartComponent,
    BrandsComponent,
    NotfoundComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NavBarAuthComponent,
    NavbarMainComponent,
    DetialesComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    TermtextPipe,
    SearchPipe,
    CategorydetailsComponent,
    BranddetailsComponent,
    CheckoutComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
