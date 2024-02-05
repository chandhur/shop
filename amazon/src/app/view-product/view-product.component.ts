import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{SharedService} from "../shared/shared.service"

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent{

  names:any=[];

  show:any;

  store:any[]=[];

  total=[1,2,3,4,5];

  constructor(private router:Router,private shared:SharedService){

    this.names= this.router.getCurrentNavigation()?.extras;
     
    this.show=this.names.state.data
   }

 

  addCart(data:string)
  {
      
      this.shared.setMessage(data);
    
  }


  payment(data:any){

    this.router.navigate(["payment"],{
      state: data

    }
    )

}


}
