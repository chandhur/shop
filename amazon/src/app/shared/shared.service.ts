import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService  implements OnInit{


  public values:any=[];

    va:any;

    va1:any=[];

  constructor() { }


   setMessage(data:any)
  {
    
   const isDuplicate = this.values.some((cartItem:any) => cartItem.id === data.id);

   if (!isDuplicate) {
    this.values.push(data);
  }

  console.log(this.values)

 }

  getMassage()
  {   
     return[... this.values]
  }

  isCartEmpty() {
    return this.values.length === 0;
  }

  ngOnInit(): void {
    
  }

}
