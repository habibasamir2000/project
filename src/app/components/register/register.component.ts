import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){}
  errMsg:string='';
  isLoading:boolean=false;

  registerForm:FormGroup = new FormGroup({
    name:new FormControl('' ,[Validators.required ,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required ,Validators.email]),
    password:new FormControl('' ,[Validators.required ,Validators.pattern(/^\w{6,}$/)]),
    rePassword:new FormControl(''),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  },{validators:[this.confirmPassword]}as FormControlOptions
  
  );

  confirmPassword(group:FormGroup):void{
    let password=group.get('password');
    let rePassword=group.get('rePassword');
    if(rePassword?.value ==null){
      rePassword?.setErrors({required:true})
    }
    else if(password?.value != rePassword?.value){
      rePassword?.setErrors({mismatch:true})
    }
    
  }
  handelForm():void{
    const userDate=this.registerForm.value;
    this.isLoading=true;
    if(this.registerForm.valid==true){
      this._AuthService.register(userDate).subscribe({
        next:(response)=>{
        if(response.message == "success"){
          this.isLoading=false;

          this._Router.navigate(['login'])

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
