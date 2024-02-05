import { Component } from '@angular/core';
import { UserDataService } from '../service/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  userName:string="";
  password:string="";



  value:any={}
   constructor(private userService:UserDataService,private router:Router){}


   home()
   {

    const store=JSON.parse(localStorage.getItem("user") ||'[]')


    const show=store.find((U:any)=> U.name === this.userName && U.password  === this.password)
    
    if(show)
    {
       this.router.navigate(['/home'])
    }

   }

}



 

  // formData:any={}


//   click(event:any)
//   {
//     event.preventDefault();
//     console.log(this.formData)

    
//   }

// }

// userLogin(){
//     console.log(this.user)
//     this.userService.loginUser(this.user).subscribe(data =>{
//       alert("Login successfull")
//     },error => alert ("sorry"))