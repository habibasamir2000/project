import { Component, OnInit } from '@angular/core';
import { EcommdateService } from 'src/app/core/services/ecommdate.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private _EcommdateService:EcommdateService){}
  categories:any[]=[];
  ngOnInit(): void {
    this._EcommdateService.getCategories().subscribe({
      next:(response)=>{
        this.categories=response.data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
    
  }

}
