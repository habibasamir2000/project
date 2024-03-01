import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/core/interfaces/products';
import { EcommdateService } from 'src/app/core/services/ecommdate.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private _EcommdateService:EcommdateService , private _CartService:CartService ,private _ToastrService:ToastrService,
    private _WishlistService:WishlistService){}
  products:products[]=[];
  categories:any[]=[];
  searchTerm:string='';
  addCart(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response)
        this._ToastrService.success(response.message)
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }
  addToWishlist(productId:string):void{
    this._WishlistService.addWishList(productId).subscribe({
      next:(response)=>{
        console.log(response)
        this._ToastrService.success(response.message)

      },
      error:(err)=>{
        console.log(err)

      }
    })

  }
  removeWishlist(idProduct:string):void{
    this._WishlistService.removeWishlist(idProduct).subscribe({
      next:(response)=>{
        console.log(response)
        this._ToastrService.success(response.message)
      },
      error(err){
        console.log(err)
      }
    })

  }


  categoriesSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 7
      }
    },
    nav: false
  }
  mainSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    items:1,
    nav: false
  }
  ngOnInit(): void {

    //get all products
    this._EcommdateService.getProducts().subscribe({
      next:(response)=>{
        this.products=response.data;
      }
    });
    // get categories
    this._EcommdateService.getCategories().subscribe({
      next:(response)=>{
       this.categories= response.data;

      }

    })
  }
  
}
