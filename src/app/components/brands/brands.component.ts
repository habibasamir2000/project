import { Component, OnInit } from '@angular/core';
import { EcommdateService } from 'src/app/core/services/ecommdate.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  constructor(private _EcommdateService:EcommdateService){}
  brandsData:any={};
  ngOnInit(): void {
    this._EcommdateService.getbrands().subscribe({
      next:(response)=>{
        this.brandsData=response.data;
      },
      error:(err)=>{
        console.log(err);

      }
    })
  }

}
