import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService , private _Router:Router){}
  errMsg:string='';
  isLoading:boolean=false;

  loginForm:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required ,Validators.email]),
    password:new FormControl('' ,[Validators.required ,Validators.pattern(/^\w{6,}$/)])
  }
  ,{Validators:[this.confirmPassword]} as FormControlOptions);

  confirmPassword(group:FormGroup):void{
    const password=group.get('password');
    const rePassword=group.get('rePassword');

    if(rePassword?.value==''){
      rePassword?.setErrors({required:true});
    }
    else if(password?.value!= rePassword?.value)
    rePassword?.setErrors({mismatch:true});
  }
  handelForm():void{
    const userDate=this.loginForm.value;
    this.isLoading=true;
    if(this.loginForm.valid==true){
      this._AuthService.login(userDate).subscribe({
        next:(response)=>{
        if(response.message == "success"){
          this.isLoading=false;
          localStorage.setItem('etoken',response.token)

          this._Router.navigate(['home'])

        }
        },
        error:(err)=>{
          this.errMsg=err.error.message;
          this.isLoading=false;
        }
      })

    }
  }
}
