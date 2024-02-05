import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {


  @Input("show")
 show:boolean=false;

 @Output("close")
 onClose=new EventEmitter()



}
