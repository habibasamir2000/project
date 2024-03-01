import { BranddetailsComponent } from './components/branddetails/branddetails.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './core/guards/auth.guard';
import { DetialesComponent } from './components/detiales/detiales.component';
import { CategorydetailsComponent } from './components/categorydetails/categorydetails.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',
  canActivate:[authGuard],
   component:BlankLayoutComponent,
  children:[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'details/:id' ,component:DetialesComponent , title:'Product Info'},
    {path:'home',component:HomeComponent , title:'Home'},
    {path:'checkout/:id',component:CheckoutComponent , title:'checkout'},
    {path:'cart',component:CartComponent, title:'Cart'},
    {path:'products',component:ProductsComponent,title:'Products'},
    {path:'categories',component:CategoriesComponent,title:'Categories'},
    {path:'categorydetails/:id',component:CategorydetailsComponent,title:'Category'},
    {path:'barnds',component:BrandsComponent ,title:'Brands'},
    {path:'wishlist',component:WishlistComponent ,title:'wishlist'},
    {path:'barnddetails/:id',component:BranddetailsComponent,title:'Brand'}
  ]
},
  {path:'', component:AuthLayoutComponent ,
  children:[
    {path:'login' ,component:LoginComponent ,title:'Login'},
    {path:'register' ,component:RegisterComponent, title:'Register'}
  ]
},
{path:'**' , component:NotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
