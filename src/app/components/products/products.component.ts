import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { products } from 'src/app/core/interfaces/products';
import { CartService } from 'src/app/core/services/cart.service';
import { EcommdateService } from 'src/app/core/services/ecommdate.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(private _EcommdateService:EcommdateService , private _CartService:CartService , private _ToastrService:ToastrService,
    private _WishlistService:WishlistService){}
  products:products[]=[];
  searchTerm:string='';
  ngOnInit(): void {
    this._EcommdateService.getProducts().subscribe({
      next:(response)=>{
        this.products=response.data;
        console.log(response)
      }
    });
  }
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

}
