import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/core/interfaces/products';
import { EcommdateService } from 'src/app/core/services/ecommdate.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-detiales',
  templateUrl: './detiales.component.html',
  styleUrls: ['./detiales.component.css']
})
export class DetialesComponent implements OnInit {
 
  constructor(private _ActivatedRoute:ActivatedRoute , private _EcommdateService:EcommdateService ,private _CartService:CartService){}
  productDetails:products ={} as products;
  
  productSliderOptions: OwlOptions = {
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
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        let idProduct:any=params.get('id');
        this._EcommdateService.getProductsDetails(idProduct).subscribe({
          next:(response)=>{
            this.productDetails=response.data;
          }

        })
       
      }
    });
  }
  addCart(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    })

  }

}
