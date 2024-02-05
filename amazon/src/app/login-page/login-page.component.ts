import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  user:any={}

  value:any=[]

  constructor(private router:Router){}

  onSubmit(){

   this.value.push(this.user)
   localStorage.setItem("user",JSON.stringify(this.value))
   this.router.navigate([""])

   }





  }


