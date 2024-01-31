import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'AngularProject';
 
  // parent to Children
  // massageData:string="value";

// children to parent

show:string="chandhuru"
 
Transform:string ="Angular-Js";

massageData:string="value";

receiveData(event:any)
{
  console.log(event)
}

canShowVideo=false;


updateValue(name:string)
{
       this.Transform=name;
}

  
}


