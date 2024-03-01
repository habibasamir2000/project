import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.css']
})
export class NavbarMainComponent {
  constructor(private _AuthService:AuthService){}
  logOutUser():void{
    this._AuthService.logout();
  }
}
