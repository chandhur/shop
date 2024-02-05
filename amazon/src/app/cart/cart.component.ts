import { Component, OnInit } from '@angular/core';
import { SharedService }  from "../shared/shared.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit  {


   cartItems:any;

   value:any;

   store:number=0;
    
  

  constructor(public shared:SharedService, public router:Router)
  {
  
    this.cartItems=this.shared.getMassage()

   }

  remove(i:any)
  {
      this.cartItems.splice(i,1)
  }

  isCartEmpty() {
    return this.shared.isCartEmpty();
  }


  addValue(){
    let sum=0;

     for(let i of this.cartItems)
    {
       sum+=i.price
    }

     return 70*sum;

  }

  payment(data:any){

    this.router.navigate(["payment"],{
      state: data

    })
}

increment(data:any)
{
   data++
   console.log("increment"+data)
}

decrement(data:any)
{
  if (data >0)
  {
    data--
  }

  console.log("decrement"+ data)
}
  

  ngOnInit(): void {


   
}

}
