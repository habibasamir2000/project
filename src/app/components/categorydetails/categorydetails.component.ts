import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcommdateService } from 'src/app/core/services/ecommdate.service';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute , private _EcommdateService:EcommdateService){}
  categoryId:string|null='';
  categorydetails:any={}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
       this.categoryId= params.get('id')

      },
      error:(err)=>{
        console.log(err)
      }
    })
    this._EcommdateService.getcategoriesDetails(this.categoryId).subscribe({
      next:(response)=>{
        this.categorydetails=response.data;

      },
      error:(err)=>{
        console.log(err);
      }
      

    })
  }


} 
