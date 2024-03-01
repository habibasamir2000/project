import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { products } from 'src/app/core/interfaces/products';
import { CartService } from 'src/app/core/services/cart.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  constructor(private _WishlistService:WishlistService ,private _ToastrService:ToastrService , private _CartService:CartService){}
  products:products[]=[];
  ngOnInit(): void {
    this._WishlistService.getWishList().subscribe({
      next:(response)=>{
        this.products=response.data
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  addCart(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response)
        this._ToastrService.success(response.message)
        this.products=response.data
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
        this.products=response.data
      },
      error(err){
        console.log(err)
      }
    })

  }
}
