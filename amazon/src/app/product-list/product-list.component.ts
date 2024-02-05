import { Component, OnInit } from '@angular/core';
import { UserDataService} from "../service/user-data.service"
import { Router} from '@angular/router';
import { SharedService}  from "../shared/shared.service"
import AOS from "aos";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  users:any;

  constructor(private userData:UserDataService, private router: Router,private shared:SharedService){

    userData.deatlis().subscribe((data)=> {
   
      this.users=data})

  }

 
  addCart(data:any)
  {
      this.router.navigate(["other"],{
        state :{data}

      });

   }

   cart(data:any)
   { 
    this.shared.setMessage(data)
   }

   ngOnInit(): void {

    AOS.init();
     
   }

}
