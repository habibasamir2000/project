import { Observable } from 'rxjs';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
  headers:any={token:localStorage.getItem('etoken')};
  addToCart(productId:string):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart' , {
      "productId": productId},
      {headers:this.headers}
      )
  }
  getUserCart():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart' , {headers:this.headers})
  }
  removeItem(productId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {headers:this.headers})
  }
  UpdateCrat(productId:string , newCount:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {
      count:newCount
    },{
      headers:this.headers
    }

    )
  }
  checkOut(cartId:string|null , userData:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {
      shippingAddress:userData
     }  ,{
      headers:this.headers
     }
    
     )
  }
  clearCart():Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
    {headers:this.headers})
  }
}
