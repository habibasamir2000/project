import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcommdateService } from 'src/app/core/services/ecommdate.service';

@Component({
  selector: 'app-branddetails',
  templateUrl: './branddetails.component.html',
  styleUrls: ['./branddetails.component.css']
})
export class BranddetailsComponent implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute , private _EcommdateService:EcommdateService){}
  brandId:string|null='';
  branddetails:any={}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
       this.brandId= params.get('id')

      },
      error:(err)=>{
        console.log(err)
      }
    })
    this._EcommdateService.getbrandssDetails(this.brandId).subscribe({
      next:(response)=>{
        this.branddetails=response.data;

      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
