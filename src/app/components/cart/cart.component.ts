import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private _CartService:CartService){}
  cartDetails:any={};
  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next:(response)=>{
        this.cartDetails=response.data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  removeCartItem(id:string):void{
    this._CartService.removeItem(id).subscribe({
      next:(response)=>{
        this.cartDetails=response.data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  changeCount(id:string , count:number):void{
    if(count>0){
      this._CartService.UpdateCrat(id,count).subscribe({
        next:(response)=>{
          this.cartDetails=response.data
  
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }
  }
  clear():void{
    this._CartService.clearCart().subscribe({
      next:(response)=>{
        if(response.message =='success'){
          this.cartDetails=null;
        }}
    })
  }


}
